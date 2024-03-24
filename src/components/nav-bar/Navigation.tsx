import { Routes } from '@/routes/routes'
import Nav from './Nav'
import NavigationFooter from './footer/NavigationFooter'
import NavigationHeader from './header/NavigationHeader'

const Navigation = ({ currentPath }: { currentPath: Routes | undefined }) => {
	return (
		<nav className='flex flex-col gap-8 items-center p-8 h-screen border-r-2 border-r-gray-300 relative mmd2:hidden'>
			<NavigationHeader />
			<Nav currentPath={currentPath} />
			<NavigationFooter />
		</nav>
	)
}

export default Navigation
