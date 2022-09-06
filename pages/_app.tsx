import { useEffect, useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import theme from '../styles/theme';
import '../styles/globals.css';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const cacheLtr = createCache({
  key: 'muiltr',
  stylisPlugins: [prefixer],
});

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [direction, setdDirection] = useState('rtl');
  const appCacheDirection = direction == 'rtl' ? cacheRtl : cacheLtr;
  const appTheme = theme(locale == 'fa' ? 'rtl' : 'ltr');

  console.log('locale', locale);

  useEffect(() => {
    let dir = locale == 'fa' ? 'rtl' : 'ltr';
    setdDirection(dir);
    document.dir = dir;
  }, [locale]);

  return (
    <CacheProvider value={appCacheDirection}>
      <ThemeProvider theme={appTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
