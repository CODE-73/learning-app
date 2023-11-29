import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import PublicLayout from 'layouts/PublicLayout';
import LoginView from 'modules/login/LoginView';

const LoginPage: NextPageWithLayout = () => {
  return <LoginView />;
};

LoginPage.getLayout = (page: ReactElement) => (
  <PublicLayout>{page}</PublicLayout>
);

export default LoginPage;
