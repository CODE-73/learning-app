import dynamic from 'next/dynamic';
import { FC, ReactNode, useEffect, useState } from 'react';

import { Session, SupabaseClient } from '@supabase/supabase-js';

import { Database } from '../supabase_types';

export type LearningAppSupabase = SupabaseClient<Database>;

const SessionContextProvider = dynamic(
  () =>
    import('@supabase/auth-helpers-react').then(
      (mod) => mod.SessionContextProvider
    ),
  { loading: () => <div>Loading...</div> }
);

interface SupabaseProviderProps {
  children: ReactNode;
  initialSession?: Session | null;
  storageKey?: string;
  loading?: ReactNode;
}

export const NextSupabaseProvider: FC<SupabaseProviderProps> = ({
  children,
  initialSession,
  ...props
}) => {
  // Supabase Client
  const [supabase, setSupabase] = useState<SupabaseClient<Database> | null>(
    null
  );
  useEffect(() => {
    import('@supabase/auth-helpers-nextjs')
      .then((mod) => mod.createPagesBrowserClient)
      .then((createPagesBrowserClient) => {
        const supabase = createPagesBrowserClient<Database>();
        setSupabase(supabase);
      });
  }, []);

  if (!supabase) {
    return props.loading ?? null;
  }

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={initialSession}
    >
      {children}
    </SessionContextProvider>
  );
};


