import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { exampleScheme } from '@lib/validate/example'
import {
	Box,
	Button,
	CardContent,
	Checkbox,
	Container,
	Divider,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	TextField,
} from '@mui/material'
import { DatePicker } from '@mui/lab'
import { CheckboxGroup, RadioButtons, SelectBox } from '@components/form'
import { PageHeader, PageTitleWrapper } from '@components/common'
import { get } from 'lodash-es'

interface ExampleFormData {
	userId: string
	password: string
	term: boolean
	fruits: string[]
	animals: string
	alphabet: string
	date: string | null
}

const checkboxValues: FormItem[] = [
	{ label: '사과', value: 'apple' },
	{ label: '오렌지', value: 'orange' },
	{ label: '바나나', value: 'banana' },
	{ label: '딸기', value: 'strawberry' },
]
const selectOptions: FormItem[] = [
	{ value: 'lion', label: '사자' },
	{ value: 'rabbit', label: '토끼' },
	{ value: 'monkey', label: '원숭이' },
	{ value: 'cow', label: '젖소' },
	{ value: 'tiger', label: '호랑이' },
]
const radioGroup: FormItem[] = [
	{ label: 'a', value: 'a' },
	{ label: 'b', value: 'b' },
	{ label: 'c', value: 'c' },
	{ label: 'd', value: 'd' },
	{ label: 'e', value: 'e' },
]

const FormWithHookformPage: React.FC = () => {
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<ExampleFormData>({
		/** submit 하기전 유효성 검사를 실행하는 시점, default: 'onSubmit'  */
		mode: 'onTouched',
		/** submit 이후 오류가 있는 항목에 대해서 다시 휴효성 검사할 경우에 대한 시점, default: 'onChange' */
		reValidateMode: 'onChange',
		resolver: exampleScheme,
		defaultValues: {
			term: false,
			fruits: [],
			userId: '',
			password: '',
			animals: '',
			alphabet: '',
			date: '',
		},
	})

	const onSubmit: SubmitHandler<ExampleFormData> = React.useCallback((data) => {
		console.log('전송 정보 확인 : ', data)
	}, [])

	return (
		<>
			<Helmet>
				<title>Form example - Examples</title>
			</Helmet>
			<PageTitleWrapper>
				<PageHeader title="Form example" subtitle="This is the Form Example" />
			</PageTitleWrapper>
			<Container maxWidth="lg">
				<CardContent>
					<Box component="form" onSubmit={handleSubmit(onSubmit)}>
						<FormGroup>
							<Controller
								control={control}
								name="userId"
								render={({ field }) => (
									<TextField
										{...field}
										placeholder="이메일"
										error={!!errors.userId?.message}
										helperText={errors.userId?.message || ' '}
									/>
								)}
							/>
						</FormGroup>
						<FormGroup>
							<Controller
								control={control}
								name="password"
								render={({ field }) => (
									<TextField
										{...field}
										placeholder="비밀번호"
										type="password"
										error={!!errors.password?.message}
										helperText={errors.password?.message || ' '}
									/>
								)}
							/>
						</FormGroup>
						<Divider />
						<FormGroup>
							<Controller
								control={control}
								name="term"
								render={({ field }) => (
									<FormControlLabel
										label="저장여부"
										control={<Checkbox {...field} />}
									/>
								)}
							/>
							<FormHelperText error={!!errors.term?.message} filled variant="filled">
								{errors.term?.message || ''}
							</FormHelperText>
						</FormGroup>
						<FormGroup row>
							<Controller
								control={control}
								name="fruits"
								render={({ field }) => (
									<CheckboxGroup options={checkboxValues} {...field} />
								)}
							/>
							<FormHelperText
								error={!!get(errors.fruits, 'message', '')}
								filled
								variant="filled">
								{get(errors.fruits, 'message', '')}
							</FormHelperText>
						</FormGroup>
						<FormGroup>
							<Controller
								control={control}
								name="animals"
								render={({ field }) => (
									<SelectBox label="animals" options={selectOptions} {...field} />
								)}
							/>
							<FormHelperText
								error={!!errors.animals?.message}
								filled
								variant="filled">
								{errors.animals?.message || ''}
							</FormHelperText>
						</FormGroup>
						<FormGroup>
							<Controller
								control={control}
								name="alphabet"
								render={({ field }) => (
									<RadioButtons row options={radioGroup} {...field} />
								)}
							/>
							<FormHelperText
								error={!!errors.alphabet?.message}
								filled
								variant="filled">
								{errors.alphabet?.message || ''}
							</FormHelperText>
						</FormGroup>

						<FormGroup>
							<Controller
								control={control}
								name="date"
								render={({ field }) => (
									<DatePicker
										{...field}
										renderInput={(props) => <TextField {...props} />}
									/>
								)}
							/>
							<FormHelperText error={!!errors.date?.message} filled variant="filled">
								{errors.date?.message || ''}
							</FormHelperText>
						</FormGroup>

						<div style={{ marginTop: '50px' }}>
							<Button variant="contained" type="submit">
								submit
							</Button>
						</div>
					</Box>
				</CardContent>
				<DevTool control={control} />
			</Container>
		</>
	)
}

export default FormWithHookformPage
