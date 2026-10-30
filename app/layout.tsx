import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'OxAIMS — Oxford AI Makers Society', description: 'A new Oxford student society for trying AI tools and working on projects together.' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en-GB"><body style={{margin:0}}>{children}</body></html>;}
