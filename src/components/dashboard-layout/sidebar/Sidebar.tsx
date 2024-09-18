import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/color.constants'

import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export function Sidebar() {
	return (
		<aside className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-layout border-b border-b-border'
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={30}
					/>

					<span className='text-2xl font-bold relative'>RED Planner</span>
				</Link>

				<div className='p-3 relative'>
					<LogoutButton />
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>

			<footer className='text-xs opacity-40 font-normal text-center p-layout'>
				2024 &copy; With love from &nbsp;
				<a
					href='https://google.com'
					target='_blank'
					rel='norefer'
					className='hover:text-primary text-primary/80 transition-colors'
				>
					RED Group
				</a>
				<br /> All rights reserved.
			</footer>
		</aside>
	)
}