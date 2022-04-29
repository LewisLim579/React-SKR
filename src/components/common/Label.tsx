import React from 'react'
import { alpha, styled } from '@mui/material'

interface LabelProps {
	className?: string
	color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info'
}

const LabelWrapper = styled('span')(
	({ theme }) => `
      background-color: ${alpha('#223354', 0.02)};
      padding: ${theme.spacing(0.5, 1)};
      font-size: ${theme.typography.pxToRem(13)};
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-height: ${theme.spacing(3)};
      
      &.MuiLabel {
        &-primary {
          background-color: ${alpha('#5569ff', 0.1)};
          color: ${theme.palette.primary.main}
        }
        
        &-secondary {
          background-color: ${alpha('#6E759F', 0.1)};
          color: ${theme.palette.secondary.main}
        }
        
        &-success {
          background-color: ${alpha('#44D600', 0.1)};
          color: ${theme.palette.success.main}
        }
        
        &-warning {
          background-color: ${alpha('#FFA319', 0.1)};
          color: ${theme.palette.warning.main}
        }
              
        &-error {
          background-color: ${alpha('#FF1943', 0.1)};
          color: ${theme.palette.error.main}
        }
        
        &-info {
          background-color: ${alpha('#33C2FF', 0.1)};
          color: ${theme.palette.info.main}
        }
      }
`,
)

export const Label: React.FC<LabelProps> = ({
	className = '',
	color = 'secondary',
	children,
	...rest
}) => {
	return (
		<LabelWrapper className={'MuiLabel-' + color} {...rest}>
			{children}
		</LabelWrapper>
	)
}
