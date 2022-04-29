import { Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'

export const PaymentForm: React.FC = () => {
	return (
		<>
			<Typography variant="h6" gutterBottom>
				Payment method
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardName"
						label="성명"
						fullWidth
						autoComplete="cc-name"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardNumber"
						label="카드번호"
						fullWidth
						autoComplete="cc-number"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={6} md={6}>
					<TextField
						required
						id="expDate"
						label="유효기간"
						fullWidth
						autoComplete="cc-exp"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={6} md={6}>
					<TextField
						required
						id="cvv"
						label="CVV(CVC)"
						helperText="카드 뒷면을 참고해주세요."
						fullWidth
						autoComplete="cc-csc"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox color="secondary" name="saveCard" value="yes" />}
						label="다음 결제시 이정보를 사용하시겠습니까?"
					/>
				</Grid>
			</Grid>
		</>
	)
}
