'use client'

import Navigation from '@/components/nav-bar/Navigation'
import HamburgerMenu from '@/components/ui/hamburger/Hamburger'
import { routes } from '@/routes/routes'
import { usePathname } from 'next/navigation'
export default function HeadingTemplate({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname = usePathname()
	const currentPath = routes.find(item => item.route === pathname)
	return (
		<div className='flex'>
			<Navigation currentPath={currentPath} />
			<div className='w-full'>
				<div className='flex w-full'>
					<header className='p-8 flex justify-between mmd2:border-b-2 mmd2:border-b-white w-full'>
						<div>
							<h1>{currentPath?.name}</h1>
							<h2 className='text-gray-100 mmd2:text-sm'>
								{currentPath?.heading}
							</h2>
						</div>
						<HamburgerMenu />
					</header>
				</div>
				<main>{children}</main>
			</div>
		</div>
	)
}
