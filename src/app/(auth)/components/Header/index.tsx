'use client';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { APP_ROUTES, APP_ROUTES_NAME } from '@/constants/routes';

import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === APP_ROUTES.SIGNIN) {
    return null;
  }

  return (
    <header className="relative flex items-center justify-center px-4 py-5 h-full max-h-16">
      <Button
        className="absolute left-2 p-2"
        intent="icon"
        onClick={router.back}
      >
        <Icon icon="CHEVRONS_LEFT" className="text-icon" />
      </Button>
      <h1 className="font-semibold text-xl text-title">
        {APP_ROUTES_NAME[pathname]}
      </h1>
    </header>
  );
};

export default Header;
