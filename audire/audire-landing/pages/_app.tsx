import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { NextSupabaseProvider } from '@learning-app/supabase';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <NextSupabaseProvider>
      <Head>
        <title>Welcome to Audire Learning!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </NextSupabaseProvider>
  );
}

export default CustomApp;
