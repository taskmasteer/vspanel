export interface Routes {
	route: string
	name: string
	heading: string
	access: Access[]
}

export enum Access {
	USER = 'user',
	ADMIN = 'admin',
	GROMPER = 'gromper',
}

const allRoles = Object.values(Access)

export const routes: Routes[] = [
	{
		route: '/',
		name: 'Главная',
		heading: 'Здесь будет отображаться ваша статистика по логам',
		access: allRoles,
	},
	{
		route: '/logs',
		name: 'Мои Логи',
		heading: 'Здесь вы можете посмотреть или скачать свои логи',
		access: allRoles,
	},
	{
		route: '/domains',
		name: 'Домены',
		heading: 'Здесь вы можете посмотреть список своих доменов',
		access: allRoles,
	},
	{
		route: '/templates',
		name: 'Шаблоны',
		heading:
			'Здесь вы можете выбрать шаблон из уже имеющихся или настроить его',
		access: allRoles,
	},
	{
		route: '/bots',
		name: 'Боты',
		heading: 'Здесь вы можете добавить и настроить своих ботов',
		access: allRoles,
	},
	{
		route: '/leaderboard',
		name: 'Топ',
		heading: 'Здесь отображается текущий топ пользователей по количеству логов',
		access: allRoles,
	},
	{
		route: '/settings',
		name: 'Настройки',
		heading: 'Глобальные настройки',
		access: allRoles,
	},
	{
		route: '/admin-settings',
		name: 'Админ',
		heading: 'Глобальные настройки администратора',
		access: [Access.ADMIN, Access.GROMPER],
	},
]
