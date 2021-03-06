import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { faker } from '@faker-js/faker'
import { utils, writeFile } from 'xlsx'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import type { DataGridProps } from 'react-data-grid'

export async function exportToCSV<R, SR>(
	gridElement: React.ReactElement<DataGridProps<R, SR>>,
	fileName: string,
) {
	const { head, body, foot } = await getGridContent(gridElement)
	const content = [...head, ...body, ...foot]
		.map((cells) => cells.map(serialiseCellValue).join(','))
		.join('\n')

	downloadFile(fileName, new Blob([content], { type: 'text/csv;charset=utf-8;' }))
}

export function exportToXLSX<R, SR>(
	gridElement: React.ReactElement<DataGridProps<R, SR>>,
	fileName: string,
) {
	const { head, body, foot } = getGridContent(gridElement)
	const wb = utils.book_new()
	const ws = utils.aoa_to_sheet([...head, ...body, ...foot])
	utils.book_append_sheet(wb, ws, 'Sheet 1')
	writeFile(wb, fileName)
}

export async function exportToPDF<R, SR>(
	gridElement: React.ReactElement<DataGridProps<R, SR>>,
	fileName: string,
) {
	const { head, body, foot } = getGridContent(gridElement)
	const doc = new jsPDF({
		orientation: 'l',
		unit: 'px',
	})

	autoTable(doc, {
		head,
		body,
		foot,
		horizontalPageBreak: true,
		styles: { cellPadding: 1.5, fontSize: 8, cellWidth: 'wrap' },
		tableWidth: 'wrap',
	})
	doc.save(fileName)
}

function getGridContent<R, SR>(gridElement: React.ReactElement<DataGridProps<R, SR>>) {
	const grid = document.createElement('div')
	grid.innerHTML = renderToStaticMarkup(
		React.cloneElement(gridElement, {
			enableVirtualization: false,
		}),
	)

	return {
		head: getRows('.rdg-header-row'),
		body: getRows('.rdg-row:not(.rdg-summary-row)'),
		foot: getRows('.rdg-summary-row'),
	}

	function getRows(selector: string) {
		return Array.from(grid.querySelectorAll<HTMLDivElement>(selector)).map((gridRow) => {
			return Array.from(gridRow.querySelectorAll<HTMLDivElement>('.rdg-cell')).map(
				(gridCell) => gridCell.innerText,
			)
		})
	}
}

function serialiseCellValue(value: unknown) {
	if (typeof value === 'string') {
		const formattedValue = value.replace(/"/g, '""')
		return formattedValue.includes(',') ? `"${formattedValue}"` : formattedValue
	}
	return value
}

function downloadFile(fileName: string, data: Blob) {
	const downloadLink = document.createElement('a')
	downloadLink.download = fileName
	const url = URL.createObjectURL(data)
	downloadLink.href = url
	downloadLink.click()
	URL.revokeObjectURL(url)
}

export const dateFormatter = new Intl.DateTimeFormat(navigator.language)
export const currencyFormatter = new Intl.NumberFormat(navigator.language, {
	style: 'currency',
	currency: 'eur',
})

type Comparator = (a: Row, b: Row) => number
export function getComparator(sortColumn: string): Comparator {
	switch (sortColumn) {
		case 'assignee':
		case 'title':
		case 'client':
		case 'area':
		case 'country':
		case 'contact':
		case 'transaction':
		case 'account':
		case 'version':
			return (a, b) => {
				return a[sortColumn].localeCompare(b[sortColumn])
			}
		case 'available':
			return (a, b) => {
				return a[sortColumn] === b[sortColumn] ? 0 : a[sortColumn] ? 1 : -1
			}
		case 'id':
		case 'progress':
		case 'startTimestamp':
		case 'endTimestamp':
		case 'budget':
			return (a, b) => {
				return a[sortColumn] - b[sortColumn]
			}
		default:
			throw new Error(`unsupported sortColumn: "${sortColumn}"`)
	}
}

/**
 * @description
 * ?????? ????????? ???????????? ?????? ?????? ?????????.
 * ???????????? ????????? ?????????.
 */

export interface Row {
	id: number
	title: string
	client: string
	area: string
	country: string
	contact: string
	assignee: string
	progress: number
	startTimestamp: number
	endTimestamp: number
	budget: number
	transaction: string
	account: string
	version: string
	available: boolean
}

export function createRows(): readonly Row[] {
	const now = Date.now()
	const rows: Row[] = []

	for (let i = 0; i < 10000; i++) {
		rows.push({
			id: i,
			title: `Task #${i + 1}`,
			client: faker.company.companyName(),
			area: faker.name.jobArea(),
			country: faker.address.country(),
			contact: faker.internet.exampleEmail(),
			assignee: faker.name.findName(),
			progress: Math.random() * 100,
			startTimestamp: now - Math.round(Math.random() * 1e10),
			endTimestamp: now + Math.round(Math.random() * 1e10),
			budget: 500 + Math.random() * 10500,
			transaction: faker.finance.transactionType(),
			account: faker.finance.account(),
			version: faker.system.semver(),
			available: Math.random() > 0.5,
		})
	}

	return rows
}
