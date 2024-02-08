import localFont from 'next/font/local'
import "./globals.css"
// Font files can be colocated inside of `pages`

const myFont = localFont({ src: '../../public/fonts/GeneralSans-Bold.ttf' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
