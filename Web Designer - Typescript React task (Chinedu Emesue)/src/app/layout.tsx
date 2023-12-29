import { Open_Sans } from 'next/font/google';
import { Providers } from "./providers";


const openSans = Open_Sans({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
