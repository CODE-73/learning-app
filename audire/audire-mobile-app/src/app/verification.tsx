import VerificationView from '../modules/login/VerificationView';
import { useGlobalSearchParams } from 'expo-router';

const Verification = () => {
  const { mobile, fullName, isNewUser } = useGlobalSearchParams();
  const isNewUserBoolean = isNewUser === '1';
  return (
    <VerificationView
      mobile={mobile as string}
      fullName={fullName as string}
      isNewUser={isNewUserBoolean}
    />
  );
};

export default Verification;
