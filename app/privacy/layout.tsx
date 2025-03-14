import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - DeepSeek Toolbox',
  description: 'DeepSeek Toolbox privacy policy - Learn how we protect your data, enhance your AI experience securely, and respect your privacy while using our browser extension.',
  keywords: 'DeepSeek Toolbox, privacy policy, browser extension privacy, AI tools privacy, DeepSeek privacy, data protection, user privacy rights, content copying, AI assistant privacy, secure AI interaction',
  openGraph: {
    title: 'Privacy Policy - DeepSeek Toolbox',
    description: 'Learn how DeepSeek Toolbox protects your privacy while enhancing your AI experience',
    type: 'website',
    siteName: 'DeepSeek Toolbox',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy - DeepSeek Toolbox',
    description: 'Learn how DeepSeek Toolbox protects your privacy while enhancing your AI experience',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {children}
    </main>
  )
}
