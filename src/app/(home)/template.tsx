'use client'

import Navigation from '@/components/nav-bar/Navigation'
import { Button } from '@/components/ui/button'
import HamburgerMenu from '@/components/ui/hamburger/Hamburger'
import { Access, routes } from '@/routes/routes'
import { usePathname, useRouter } from 'next/navigation'
export default function HeadingTemplate({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname = usePathname()
	const currentPath = routes.find(item => item.route === pathname)
	const role = 'user'
	const hasAccess = currentPath && currentPath.access.includes(role as Access)
	const router = useRouter()

	return (
		<div className='flex'>
			<Navigation currentPath={currentPath} />
			<div className='w-full'>
				<div className='flex w-full'>
					{hasAccess && (
						<header className='p-8 flex justify-between mmd2:border-b-2 mmd2:border-b-white w-full'>
							<div>
								<h1>{currentPath?.name}</h1>
								<h2 className='text-gray-100 mmd2:text-sm'>
									{currentPath?.heading}
								</h2>
							</div>
							<HamburgerMenu />
						</header>
					)}
				</div>
				<main className='p-8'>
					{hasAccess ? (
						children
					) : (
						<div className='flex justify-center items-center flex-col'>
							<h1>Что то пошло не так...</h1>
							<Button variant={'link'} onClick={() => router.back()}>
								Вернуться на прошлую страницу
							</Button>
						</div>
					)}
				</main>
			</div>
		</div>
	)
}
