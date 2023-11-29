import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import PublicLayout from 'layouts/PublicLayout';

const LoginPage: NextPageWithLayout = () => {
  return <div>LoginView</div>;
};

LoginPage.getLayout = (page: ReactElement) => (
  <PublicLayout>{page}</PublicLayout>
);

export default LoginPage;
