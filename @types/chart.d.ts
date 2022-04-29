import type { ChartProps } from 'react-chartjs-2'
import type { ChartOptions } from 'chart.js'

declare global {
	declare namespace ReactChartJS {
		declare namespace Props {
			type doughnut = ChartProps<'doughnut'>
			type line = ChartProps<'line'>
			type bar = ChartProps<'bar'>
			type bubble = ChartProps<'bubble'>
			type pie = ChartProps<'pie'>
			type polarArea = ChartProps<'polarArea'>
			type radar = ChartProps<'radar'>
			type scatter = ChartProps<'scatter'>
		}
		declare namespace Options {
			type doughnut = ChartOptions<'doughnut'>
			type line = ChartOptions<'line'>
			type bar = ChartOptions<'bar'>
			type bubble = ChartOptions<'bubble'>
			type pie = ChartOptions<'pie'>
			type polarArea = ChartOptions<'polarArea'>
			type radar = ChartOptions<'radar'>
			type scatter = ChartOptions<'scatter'>
		}
	}
}
