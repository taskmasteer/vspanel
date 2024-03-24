'use client'

import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import { onlyLangAndNumsPattern } from '@/patterns/authPattern'
import styles from './otp.module.scss'
import useOtp from './useOtp'

export function Auth() {
	const { form, onSubmit, isServerError } = useOtp()

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
				<FormField
					control={form.control}
					name='code'
					render={({ field }) => (
						<FormItem>
							<FormLabel
								className='text-3xl xss:text-xl'
								isServerError={isServerError}
							>
								Введите одноразовый код, отправленный телеграм-ботом
							</FormLabel>
							<InputOTP
								maxLength={12}
								containerClassName='flex-col'
								pattern={onlyLangAndNumsPattern}
								{...field}
							>
								<InputOTPGroup className='mt-8'>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
									<InputOTPSlot index={4} />
									<InputOTPSlot index={5} />
								</InputOTPGroup>
								<InputOTPSeparator isMobile />
								<InputOTPGroup className='mb-4'>
									<InputOTPSlot index={6} />
									<InputOTPSlot index={7} />
									<InputOTPSlot index={8} />
									<InputOTPSlot index={9} />
									<InputOTPSlot index={10} />
									<InputOTPSlot index={11} />
								</InputOTPGroup>
							</InputOTP>
							{isServerError && (
								<h1 className='text-lg font-medium text-errorColor animate-fade'>
									Не верный код!
								</h1>
							)}
							<FormMessage />
						</FormItem>
					)}
				/>
				<input type='submit' hidden />
			</form>
		</Form>
	)
}
