import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../i18n/routing';
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeepSeek Toolbox - Enhance Your AI Experience",
  description: "DeepSeek Toolbox offers powerful browser extensions for seamless interaction with DeepSeek AI. Features include one-click thought content copying and more tools to enhance your AI experience.",
  keywords: "DeepSeek, AI tools, browser extension, Chrome extension, Firefox addon, content copying, AI assistant, DeepSeek AI, productivity tools",
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "DeepSeek Toolbox - Enhance Your AI Experience",
    description: "Powerful browser extensions for seamless interaction with DeepSeek AI",
    type: "website",
    locale: "en_US",
    siteName: "DeepSeek Toolbox",
    images: [{
      url: '/og.png',
      width: 1200,
      height: 630,
      alt: 'DeepSeek Toolbox og image'
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeepSeek Toolbox - Enhance Your DeepSeek Experience",
    description: "Powerful browser extensions for seamless interaction with DeepSeek AI",
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#013DC4",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 启用静态渲染
  setRequestLocale(locale);
  return (
    <html lang={locale}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EDETYEFFH2" 
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EDETYEFFH2');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
