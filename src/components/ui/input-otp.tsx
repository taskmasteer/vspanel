'use client'

import { DashIcon, DividerVerticalIcon } from '@radix-ui/react-icons'
import { OTPInput, OTPInputContext } from 'input-otp'
import * as React from 'react'

import { cn } from '@/lib/utils'

const InputOTP = React.forwardRef<
	React.ElementRef<typeof OTPInput>,
	React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
	<OTPInput
		ref={ref}
		containerClassName={cn(
			'flex items-center gap-2 has-[:disabled]:opacity-50',
			containerClassName
		)}
		className={cn('disabled:cursor-not-allowed', className)}
		{...props}
	/>
))
InputOTP.displayName = 'InputOTP'

const InputOTPGroup = React.forwardRef<
	React.ElementRef<'div'>,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('flex items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'

const InputOTPSlot = React.forwardRef<
	React.ElementRef<'div'>,
	React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
	const inputOTPContext = React.useContext(OTPInputContext)
	const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
	return (
		<div
			ref={ref}
			className={cn(
				'relative flex h-24 w-24 mmd:w-16 mmd:h-16 mmd2:w-20 mmd2:h-20 xss:w-16 xss:h-16 xss2:w-14 xss2:h-14 xsss:w-12 xsss:h-12 items-center justify-center border-y border-r border-gray-300 text-3xl shadow-sm transition-all first:rounded-l-xl first:border-l last:rounded-r-xl',
				isActive && 'z-10 ring-1 ring-ring',
				className
			)}
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
					<div className='h-4 w-px animate-caret-blink bg-foreground duration-1000' />
				</div>
			)}
		</div>
	)
})
InputOTPSlot.displayName = 'InputOTPSlot'

interface InputOTPSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
	isMobile?: boolean
}

const InputOTPSeparator = React.forwardRef<
	HTMLDivElement,
	InputOTPSeparatorProps
>(({ isMobile, ...props }, ref) => (
	<div ref={ref} role='separator' {...props}>
		{isMobile ? <DividerVerticalIcon /> : <DashIcon />}
	</div>
))
InputOTPSeparator.displayName = 'InputOTPSeparator'

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot }
