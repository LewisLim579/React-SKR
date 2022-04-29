import { ListSubheader, List, styled, darken, lighten } from '@mui/material'
import { useLocation, matchPath } from 'react-router-dom'
import SidebarMenuItem from './item'
import menuItems from './items'
import type { MenuItem } from './items'
import { omit } from 'lodash-es'
import React from 'react'

const MenuWrapper = styled(List)(
	({ theme }) => `
    margin-bottom: ${theme.spacing(1)};
    padding: 0;

    & > .MuiList-root {
      padding: 0 ${theme.spacing(2)} ${theme.spacing(2)};
    }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${darken('#6E759F', 0.3)};
      padding: ${theme.spacing(0.8, 2)};
      line-height: 1.4;
    }
`,
)

const SubMenuWrapper = styled(List)(
	({ theme }) => `
    &.MuiList-root {
      padding: 0;

      .MuiList-root .MuiList-root .MuiListItem-root .MuiButton-root {
        font-weight: normal !important;
      }

      .MuiListItem-root {
        padding: 2px ${theme.spacing(2)};
    
        .MuiButton-root {
          display: flex;
          color: #242E6F;
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          font-size: ${theme.typography.pxToRem(13)};
          padding-top: ${theme.spacing(0.8)};
          padding-bottom: ${theme.spacing(0.8)};
          position: relative;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(4)};

            .MuiBadge-standard {
              background: #5569ff;
              font-size: ${theme.typography.pxToRem(9)};
              font-weight: bold;
              text-transform: uppercase;
            }
          }
    
          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            font-size: ${theme.typography.pxToRem(26)};
            margin-right: ${theme.spacing(1.5)};
            color: ${lighten('#6E759F', 0.3)};
          }
          
          .MuiButton-endIcon {
            margin-left: auto;
            font-size: ${theme.typography.pxToRem(22)};
          }

          &.Mui-active,
          &:hover {
            background-color: #f2f5f9;
            color: #5569ff;

            .MuiButton-startIcon,
            .MuiButton-endIcon {
                color: #5569ff;
            }
          }
        }

        &.Mui-children {
          flex-direction: column;
          line-height: 1;
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px ${theme.spacing(0)};

            .MuiButton-root {
              font-size: ${theme.typography.pxToRem(13)};
              padding: ${theme.spacing(0.5, 2, 0.5, 6.5)};

              &.Mui-active,
              &:hover {
                background-color: transparent;
              }
            }
          }
        }
      }
    }
`,
)

const checkMatchPath = (link: string | undefined, path: string, partial: boolean) => {
	return link ? !!matchPath({ path: link, end: !partial }, path) : false
}

interface ReduceChildRoutes {
	(args: { menus: JSX.Element[]; path: string; item: MenuItem }): Array<JSX.Element>
}
const reduceChildRoutes: ReduceChildRoutes = ({ menus, path, item }) => {
	const key = item.name
	const exactMatch = checkMatchPath(item.link, path, false)
	const partialMatch = checkMatchPath(item.link, path, true)
	const items = [] as JSX.Element[]
	const props = {
		...omit(item, 'items'),
		key,
		active: item.items ? partialMatch : exactMatch,
		open: item.items ? partialMatch : false,
	}

	menus.push(
		<SidebarMenuItem {...props}>
			{item.items ? (
				<SubMenuWrapper>
					{item.items.reduce(
						(subMenus, subItem) =>
							reduceChildRoutes({ menus: subMenus, item: subItem, path }),
						items,
					)}
				</SubMenuWrapper>
			) : null}
		</SidebarMenuItem>,
	)

	return menus
}

export const SidebarMenu: React.FC = () => {
	const location = useLocation()
	return (
		<React.Fragment>
			{menuItems.map(({ heading, items }) => (
				<MenuWrapper
					key={heading}
					subheader={
						<ListSubheader component="div" disableSticky>
							{heading}
						</ListSubheader>
					}>
					<SubMenuWrapper>
						{items.reduce<JSX.Element[]>(
							(menus, item) =>
								reduceChildRoutes({ menus, item, path: location.pathname }),
							[],
						)}
					</SubMenuWrapper>
				</MenuWrapper>
			))}
		</React.Fragment>
	)
}
