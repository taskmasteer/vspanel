'use client'

import NavMobile from '@/components/nav-bar/NavMobile'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

const HamburgerMenu = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className='mmd2m:hidden'>
			<Hamburger toggled={isOpen} toggle={setOpen} />
			{isOpen && (
				<div className='absolute w-full h-full bg-background flex justify-end  overflow-hidden left-0 top-0 p-8'>
					<div className='flex w-full h-full relative'>
						<div className='w-full h-full absolute flex justify-center pt-16'>
							<NavMobile />
						</div>
						<div className='absolute top-0 right-0'>
							<Hamburger toggled={isOpen} toggle={setOpen} />
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default HamburgerMenu
