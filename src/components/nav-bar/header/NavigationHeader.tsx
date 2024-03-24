import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const NavigationHeader = () => {

	// Должен быть запрос на имя пользователя и его команду, текущие значения являются заглушками.
	return (
		<header className='flex flex-col justify-center items-center'>
			<Avatar className='mb-2'>
				<AvatarFallback>UN</AvatarFallback>
			</Avatar>
			<h1>grompdestroyer</h1>
			<h2 className='text-gray-100'>Grompers</h2>
		</header>
	)
}

export default NavigationHeader
