"use client"

import { useRouter, usePathname } from "../i18n/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LanguageSwitcherProps {
  currentLocale: string;
}

const languages = [
  { value: "en", label: "EN", fullLabel: "English" },
  { value: "zh", label: "中文", fullLabel: "简体中文" },
] as const;

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLocale }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const currentLanguage = languages.find(lang => lang.value === currentLocale);

  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[80px] sm:w-[110px] h-8 text-sm bg-transparent border-none cursor-pointer shadow-none focus:ring-0 focus:ring-offset-0 px-2 sm:px-3">
        <SelectValue>
          <span className="sm:hidden">{currentLanguage?.label}</span>
          <span className="hidden sm:inline">{currentLanguage?.fullLabel}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem 
            key={lang.value} 
            value={lang.value}
            className="text-sm cursor-pointer"
          >
            <span className="sm:hidden">{lang.label}</span>
            <span className="hidden sm:inline">{lang.fullLabel}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}; 