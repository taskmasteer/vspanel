export interface Routes {
	route: string
	name: string
	heading: string
}

export const routes: Routes[] = [
	{
		route: '/',
		name: 'Главная',
		heading: 'Здесь будет отображаться ваша статистика по логам',
	},
	{
		route: '/logs',
		name: 'Мои Логи',
		heading: 'Здесь вы можете посмотреть или скачать свои логи',
	},
	{
		route: '/domains',
		name: 'Домены',
		heading: 'Здесь вы можете посмотреть список своих доменов',
	},
	{
		route: '/templates',
		name: 'Шаблоны',
		heading:
			'Здесь вы можете выбрать шаблон фишинга из уже имеющихся или настроить его',
	},
	{
		route: '/bots',
		name: 'Боты',
		heading: 'Здесь вы можете добавить и настроить своих ботов',
	},
	{
		route: '/leaderboard',
		name: 'Топ',
		heading: 'Здесь отображается текущий топ пользователей по количеству логов',
	},
	{
		route: '/settings',
		name: 'Настройки',
		heading: 'Глобальные настройки',
	},
]
