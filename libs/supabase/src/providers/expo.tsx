// https://github.com/supabase/supabase/issues/8464
import 'react-native-url-polyfill/auto';
import { FC, ReactNode, useEffect, useState } from 'react';
import { SupabaseClient, Session, createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Database } from '../supabase_types';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import Constants from 'expo-constants';

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
    let SUPABASE_URL, SUPABASE_ANON_KEY;
    const expoConfig = Constants.expoConfig;
    if (expoConfig) {
      SUPABASE_URL = expoConfig.extra?.['EXPO_PUBLIC_SUPABASE_API_URL'];
      SUPABASE_ANON_KEY = expoConfig.extra?.['EXPO_PUBLIC_SUPABASE_ANON_KEY'];
    }

    if (!SUPABASE_URL) {
      // @ts-expect-error inlining as per expo docs
      SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_API_URL;
      // @ts-expect-error inlining as per expo docs
      SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
    }

    const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
    });
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
