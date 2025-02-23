'use client';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { CLIENT_APP_ROUTES, CLIENT_APP_ROUTES_NAME } from '@/constants/routes';

import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === CLIENT_APP_ROUTES.SIGNIN) {
    return null;
  }

  const getClientAppRouteName = () => {
    if (
      pathname.startsWith(CLIENT_APP_ROUTES.REPORT) &&
      pathname !== CLIENT_APP_ROUTES.REPORT_DONE
    ) {
      return CLIENT_APP_ROUTES_NAME[CLIENT_APP_ROUTES.REPORT];
    }

    return CLIENT_APP_ROUTES_NAME[pathname];
  };

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
        {getClientAppRouteName()}
      </h1>
    </header>
  );
};

export default Header;
