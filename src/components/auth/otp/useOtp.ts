import { useAuthStore } from '@/store/authStorage'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function useOtp() {
	const MAX_LENGTH = 12
	const router = useRouter()
	const [isServerError, setServerError] = useState(false)
	const userStore = useAuthStore()

	interface IData {
		userId: number
		id: number
		title: string
		body: string
	}

	const FormSchema = z.object({
		code: z.string().min(MAX_LENGTH, {
			message: 'Код должен быть не менее 12 символов',
		}),
	})

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	})

	async function getData(): Promise<IData> {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts/100'
		)

		if (!response.ok) {
			throw new Error('Data failed!')
		}

		return response.json()
	}

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		const response = await getData()
		if ('skibidisigma' !== data.code) {
			setServerError(true)
		} else {
			router.push('/')
			userStore.isUser = true
			console.log(userStore)
		}
	}

	return { form, onSubmit, isServerError }
}
