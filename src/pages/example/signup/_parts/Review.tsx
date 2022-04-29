import React from 'react'
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material'

const products = [
	{
		name: 'Product 1',
		desc: 'A nice thing',
		price: '$9.99',
	},
	{
		name: 'Product 2',
		desc: 'Another thing',
		price: '$3.45',
	},
	{
		name: 'Product 3',
		desc: 'Something else',
		price: '$6.51',
	},
	{
		name: 'Product 4',
		desc: 'Best thing of all',
		price: '$14.11',
	},
	{ name: 'Shipping', desc: '', price: 'Free' },
]
const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA']
const payments = [
	{ name: '카드종류', detail: 'Visa' },
	{ name: '소유주', detail: 'Mr John Smith' },
	{ name: '카드번호', detail: 'xxxx-xxxx-xxxx-1234' },
	{ name: '유효기간', detail: '04/2024' },
]

export const Review: React.FC = () => (
	<>
		<Typography variant="h6" gutterBottom>
			주문정보
		</Typography>
		<List disablePadding>
			{products.map((product) => (
				<ListItem key={product.name} sx={{ py: 1, px: 0 }}>
					<ListItemText primary={product.name} secondary={product.desc} />
					<Typography variant="body2">{product.price}</Typography>
				</ListItem>
			))}
			<ListItem sx={{ py: 1, px: 0 }}>
				<ListItemText primary="Total" />
				<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
					$34.06
				</Typography>
			</ListItem>
		</List>
		<Grid container spacing={2}>
			<Grid item xs={12} sm={6}>
				<Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
					배송지 정보
				</Typography>
				<Typography gutterBottom>#배송받는 사람 이름#</Typography>
				<Typography gutterBottom>{addresses.join(', ')}</Typography>
			</Grid>
			<Grid item container direction="column" xs={12} sm={6}>
				<Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
					결제 정보
				</Typography>
				<Grid container>
					{payments.map((payment) => (
						<React.Fragment key={payment.name}>
							<Grid item xs={6}>
								<Typography gutterBottom>{payment.name}</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>{payment.detail}</Typography>
							</Grid>
						</React.Fragment>
					))}
				</Grid>
			</Grid>
		</Grid>
	</>
)
