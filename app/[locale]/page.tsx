import { useTranslations } from 'next-intl';
import { Link } from '../i18n/navigation';
import { setRequestLocale } from 'next-intl/server';

import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "./../utils";
import { BrowserExtensions, FeatureGrid } from "../components/Features";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

// Client Component for rendering
function HomeContent({ locale }: { locale: string }) {
  const t = useTranslations('HomePage');

  return (
    <div className={cn(`h-screen bg-gradient-to-br from-white via-[#EEF1FF] to-[#E8F3FF] flex flex-col relative`, poppins.className)}>
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#013DC4]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[#013DC4]/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative flex items-center justify-between sm:px-8 px-4 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="bg-gradient-to-br bg-[#013DC4] rounded-xl p-1 shrink-0">
            <Image
              src="/logo.svg"
              alt="DeepSeek Toolbox Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
          </div>
          <span className="text-base sm:text-xl font-bold text-gray-800 truncate">{t('name')}</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <Link
            href="/privacy" 
            className="text-gray-700 sm:block hidden hover:text-gray-900 transition-colors text-sm whitespace-nowrap"
          >
            {t('privacyPolicy')}
          </Link>
          <Link
            href="/privacy" 
            className="text-gray-700 sm:hidden block hover:text-gray-900 transition-colors text-sm whitespace-nowrap"
          >
            {t('privacy')}
          </Link>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-8 text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-4">
         {t('title')}
        </h1>
        <p className="text-[22px] text-gray-600 mb-8 max-w-2xl mx-auto">
          {t('intro')}
        </p>

        {/* Browser Extensions */}
        <BrowserExtensions 
          chromeLink="https://chromewebstore.google.com/detail/deepseek-toolbox/eiccidaafienjjnpljcagalaoidhcdma"
          firefoxLink="https://addons.mozilla.org/en-US/firefox/addon/deepseek-toolbox"
          availableText={t('available')}
          chromeText={t('chromeExt')}
          firefoxText={t('firefoxExt')}
        />

        <FeatureGrid 
          feature1Title={t('feature1Title')}
          feature1Desc={t('feature1Desc')}
          feature2Title={t('feature2Title')}
          feature2Desc={t('feature2Desc')}
        />
      </main>

      {/* Footer */}
      <footer className="relative py-6 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-8">
          <p>{t.rich('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </div>
  );
}

// Server Component for data fetching
export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return <HomeContent locale={locale} />;
}
