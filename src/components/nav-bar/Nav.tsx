import { cn } from '@/lib/utils'
import { Routes, routes } from '@/routes/routes'
import Link from 'next/link'
import styles from './Nav.module.scss'
const Nav = ({ currentPath }: { currentPath: Routes | undefined }) => {
	return (
		<>
			<ul className='grid gap-4'>
				{routes.map(item => (
					<li key={item.route}>
						<Link
							href={item.route}
							className={cn(
								currentPath?.route === item.route
									? styles.linkActive
									: styles.link
							)}
						>
							{item.name}
						</Link>
					</li>
				))}
				<footer>{/* Сссылки */}</footer>
			</ul>
		</>
	)
}

export default Nav
