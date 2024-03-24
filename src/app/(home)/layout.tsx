import { ThemeProvider } from '@/provider/theme-provider'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import '/src/app/globals.scss'

const inter = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'SVPanel',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
