import { Link } from 'react-router-dom'
import { Box, Hidden, Tooltip, styled } from '@mui/material'

const LogoWrapper = styled(Link)(
	({ theme }) => `
        color: #223354;
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`,
)

const LogoSignWrapper = styled(Box)(
	() => `
        width: 52px;
        height: 38px;
        margin-top: 4px;
        transform: scale(.8);

        img {
            width: 52px;   
        }
`,
)

const LogoTextWrapper = styled(Box)(
	({ theme }) => `
        padding-left: ${theme.spacing(1)};
`,
)

const VersionBadge = styled(Box)(
	({ theme }) => `
        background: ${theme.palette.success.main};
        color: ${theme.palette.success.contrastText};
        padding: ${theme.spacing(0.4, 1)};
        border-radius: 4px;
        text-align: center;
        display: inline-block;
        line-height: 1;
        font-size: ${theme.typography.pxToRem(11)};
`,
)

const LogoText = styled(Box)(
	({ theme }) => `
        font-size: ${theme.typography.pxToRem(15)};
        font-weight: ${theme.typography.fontWeightBold};
`,
)

export const Logo: React.FC = () => {
	return (
		<LogoWrapper to="/overview">
			<LogoSignWrapper>
				<img src="/static/images/logo/SK_logo.svg" alt="SK" />
			</LogoSignWrapper>
			<Hidden smDown>
				<LogoTextWrapper>
					<Tooltip title="Version 1.0.0" arrow placement="right">
						<VersionBadge>1.0</VersionBadge>
					</Tooltip>
					<LogoText>SK Rent-a-car</LogoText>
				</LogoTextWrapper>
			</Hidden>
		</LogoWrapper>
	)
}
