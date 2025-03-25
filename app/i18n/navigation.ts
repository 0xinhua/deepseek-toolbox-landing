import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// 封装Next.js导航API，考虑路由配置
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);