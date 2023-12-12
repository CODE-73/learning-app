import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import AuthorizedLayout from 'layouts/authorized/AuthorizedLayout';
import { NextUIProvider } from '@nextui-org/react';
import { SupabaseProvider } from '@learning-app/supabase';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page) => <AuthorizedLayout>{page}</AuthorizedLayout>);

  return (
    <SupabaseProvider>
      <Head>
        <title>Welcome to audire-dashboard!</title>
      </Head>
      <NextUIProvider>
        <main className="app">{getLayout(<Component {...pageProps} />)}</main>
      </NextUIProvider>
    </SupabaseProvider>
  );
}

export default MyApp;
