import React from 'react'

import {
	BallotTwoTone as BallotTwoToneIcon,
	BeachAccessTwoTone as BeachAccessTwoToneIcon,
	EmojiEventsTwoTone as EmojiEventsTwoToneIcon,
	FilterVintageTwoTone as FilterVintageTwoToneIcon,
	HowToVoteTwoTone as HowToVoteTwoToneIcon,
	LocalPharmacyTwoTone as LocalPharmacyTwoToneIcon,
	RedeemTwoTone as RedeemTwoToneIcon,
	SettingsTwoTone as SettingsTwoToneIcon,
	TrafficTwoTone as TrafficTwoToneIcon,
	VerifiedUserTwoTone as VerifiedUserTwoToneIcon,
} from '@mui/icons-material'

export interface MenuItem {
	link?: string
	icon?: React.ComponentType
	badge?: string
	items?: MenuItem[]
	name: string
}

export interface MenuItems {
	items: MenuItem[]
	heading: string
}

const menuItems: MenuItems[] = [
	{
		heading: 'Examples',
		items: [
			{
				name: 'Home',
				link: '/example/home',
			},
			{
				name: 'Login form',
				link: '/example/login',
			},
			{
				name: 'Counter',
				link: '/example/counter',
			},
			{
				name: 'Forms',
				link: '/example/formwithhookform',
			},
			{
				name: 'Sign Up',
				link: '/example/signup',
			},
			{
				name: 'Tabnavigation',
				link: '/example/tabnavigation',
			},
			{
				name: 'Notification',
				link: '/example/notification',
			},
			{
				name: 'LewisTestPage',
				link: '/example/lewistestpage',
			},
			{
				name: 'Board',
				link: '/example/board',
				items: [
					{
						name: 'Pagination',
						link: '/example/board/pagination',
					},
					{
						name: 'Infinite',
						link: '/example/board/infinite',
					},
				],
			},
		],
	},
	{
		heading: 'Components',
		items: [
			{
				name: 'Buttons',
				icon: BallotTwoToneIcon,
				link: '/components/buttons',
			},
			{
				name: 'Modals',
				icon: BeachAccessTwoToneIcon,
				link: '/components/modals',
			},
			{
				name: 'Accordions',
				icon: EmojiEventsTwoToneIcon,
				link: '/components/accordions',
			},
			{
				name: 'Tabs',
				icon: FilterVintageTwoToneIcon,
				link: '/components/tabs',
			},
			{
				name: 'Badges',
				icon: HowToVoteTwoToneIcon,
				link: '/components/badges',
			},
			{
				name: 'Tooltips',
				icon: LocalPharmacyTwoToneIcon,
				link: '/components/tooltips',
			},
			{
				name: 'Avatars',
				icon: RedeemTwoToneIcon,
				link: '/components/avatars',
			},
			{
				name: 'Cards',
				icon: SettingsTwoToneIcon,
				link: '/components/cards',
			},
			{
				name: 'Forms',
				icon: TrafficTwoToneIcon,
				link: '/components/forms',
			},
		],
	},
	{
		heading: 'Extra Pages',
		items: [
			{
				name: 'Status',
				icon: VerifiedUserTwoToneIcon,
				link: '/status',
				items: [
					{
						name: 'Error 404',
						link: '/status/404',
					},
					{
						name: 'Error 500',
						link: '/status/500',
					},
					{
						name: 'Maintenance',
						link: '/status/maintenance',
					},
				],
			},
		],
	},
]

export default menuItems
