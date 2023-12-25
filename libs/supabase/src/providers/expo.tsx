// https://github.com/supabase/supabase/issues/8464
import 'react-native-url-polyfill/auto';
import { FC, ReactNode, useEffect, useState } from 'react';
import { SupabaseClient, Session, createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Database } from '../supabase_types';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

type ExpoSupabaseProviderProps = {
  children: ReactNode;
  initialSession?: Session | null;
  storageKey?: string;
  loading?: ReactNode;
};

export const ExpoSupabaseProvider: FC<ExpoSupabaseProviderProps> = (props) => {
  const [supabase, setSupabase] = useState<SupabaseClient<Database> | null>(
    null
  );

  useEffect(() => {
    const _supabase = createClient(
      process.env['EXPO_PUBLIC_SUPABASE_API_URL'] as string,
      process.env['EXPO_PUBLIC_SUPABASE_ANON_KEY'] as string,
      {
        auth: {
          storage: AsyncStorage,
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: false,
        },
      }
    );
    setSupabase(_supabase);
  }, []);

  if (!supabase) {
    return props.loading || null;
  }

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={props.initialSession}
    >
      {props.children}
    </SessionContextProvider>
  );
};
