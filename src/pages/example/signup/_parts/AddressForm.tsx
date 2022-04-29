import { Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'

export const AddressForm: React.FC = () => {
	return (
		<>
			<Typography variant="h6" gutterBottom>
				Shipping address
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="firstName"
						name="firstName"
						label="성"
						fullWidth
						autoComplete="given-name"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="lastName"
						name="lastName"
						label="이름"
						fullWidth
						autoComplete="family-name"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						id="address1"
						name="address1"
						label="도로명 주소"
						fullWidth
						autoComplete="shipping address-line1"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="address2"
						name="address2"
						label="상세주소"
						fullWidth
						autoComplete="shipping address-line2"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
						label="다음 결제 시 이 주소를 사용하시겠습니까?"
					/>
				</Grid>
			</Grid>
		</>
	)
}
