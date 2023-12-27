import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useProfile } from '../swr';
import { ProfileExtended } from '../types';

type UserContextValue = {
  user: ProfileExtended;
};

type UserProviderProps = {
  onUnauthorized?: () => void;
  children: ReactNode;
  loading?: ReactNode;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

UserContext.displayName = 'UserContext';

export const UserProvider = ({ children, ...props }: UserProviderProps) => {
  const [profileId, setProfileId] = useState<string | null>(null);
  const supabase = useSupabaseClient();
  const { data: user } = useProfile({ id: profileId });

  /** Get profileId from session */
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        setProfileId(null);
        props.onUnauthorized?.();
      } else {
        setProfileId(session.user?.id);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [supabase]);

  if (!user) {
    return props.loading ?? null;
  }

  return (
    <UserContext.Provider
      value={{
        user: user ?? null,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useActiveUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useActiveUser was used outside of its Provider');
  }

  return context;
};

// export const useUserRole = () => {
//   const { user } = useActiveUser();

//   return user?.profile?.role ?? null;
// };
