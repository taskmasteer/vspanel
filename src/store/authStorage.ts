import { create } from 'zustand'

interface UserState {
	isUser: boolean
}

export const useAuthStore = create<UserState>()(set => ({
	isUser: false,
}))
