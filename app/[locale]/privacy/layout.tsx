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
    <div className="min-h-screen bg-gradient-to-br from-white via-[#EEF1FF] to-[#E8F3FF]">
      {/* Background Accent */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#013DC4]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[#013DC4]/5 rounded-full blur-3xl" />
      </div>
      <main className="relative">
        {children}
      </main>
    </div>
  )
}
