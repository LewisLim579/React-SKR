import React from 'react'
import { Box, Button, Container, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { AddressForm } from '@pages/example/signup/_parts/AddressForm'
import { PaymentForm } from '@pages/example/signup/_parts/PaymentForm'
import { Review } from '@pages/example/signup/_parts/Review'

const steps = ['배송지 주소', '결제 정보', '주문정보 확인']

const SignUp: React.FC = () => {
	const [activeStep, setActiveStep] = React.useState(0)

	const handleNext = React.useCallback(() => {
		setActiveStep(activeStep + 1)
	}, [activeStep])

	const handleBack = React.useCallback(() => {
		setActiveStep(activeStep - 1)
	}, [activeStep])

	return (
		<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
			<Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
				<Typography component="h1" variant="h4" align="center">
					회원가입
				</Typography>
				<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<>
					{activeStep === steps.length ? (
						<>
							<Typography variant="h5" gutterBottom>
								주문해 주셔서 감사합니다!
							</Typography>
							<Typography variant="subtitle1">
								주문번호는 #2001539 입니다. <br />
								빠른 시일내에 배송해 드리겠습니다.
							</Typography>
						</>
					) : (
						<>
							{activeStep === 0 && <AddressForm />}
							{activeStep === 1 && <PaymentForm />}
							{activeStep === 2 && <Review />}
							<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
								{activeStep !== 0 && (
									<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
										뒤로가기
									</Button>
								)}

								<Button
									variant="contained"
									onClick={handleNext}
									sx={{ mt: 3, ml: 1 }}>
									{activeStep === steps.length - 1 ? '쇼핑 계속하기' : '다음'}
								</Button>
							</Box>
						</>
					)}
				</>
			</Paper>
		</Container>
	)
}

export default SignUp
