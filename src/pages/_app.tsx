import '@/styles/globals.css'
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app'
import theme from '../theme/theme';
import createEmotionCache from '../utils/createEmotionCache';

const emotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </CacheProvider>
  );
}
