import React, { FC } from 'react';
import AuthorizationLayout from './AuthorizationLayout';
import VerificationForm from './VerificationForm';

type VerificationViewFormProps = {
  mobile: string;
  fullName: string;
  isNewUser: boolean;
};

const VerificationView: FC<VerificationViewFormProps> = ({
  mobile,
  fullName,
  isNewUser,
}) => {
  return (
    <AuthorizationLayout>
      <VerificationForm
        mobile={mobile}
        fullName={fullName}
        isNewUser={isNewUser}
      />
    </AuthorizationLayout>
  );
};

export default VerificationView;
