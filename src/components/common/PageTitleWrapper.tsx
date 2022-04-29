import React from 'react'
import { Box, Container, styled } from '@mui/material'

const StyledWrapper = styled(Box)(
	({ theme }) => `
        padding: ${theme.spacing(4, 0)};
`,
)

// interface PageTitleWrapperProps {
// 	/** nothing */
// }

export const PageTitleWrapper: React.FC = ({ children }) => {
	return (
		<>
			<StyledWrapper>
				<Container maxWidth="lg">{children}</Container>
			</StyledWrapper>
		</>
	)
}
