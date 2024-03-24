import { routes } from '@/routes/routes'
import Link from 'next/link'
import NavigationFooter from './footer/NavigationFooter'

const NavMobile = () => {
	return (
		<ul className='flex flex-col gap-4'>
			{routes.map(item => (
				<li key={item.route}>
					<Link href={item.route} className='text-2xl'>{item.name}</Link>
				</li>
			))}
			<NavigationFooter />
		</ul>
	)
}

export default NavMobile
