import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://rsvxphespiwhwtkinkpv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzdnhwaGVzcGl3aHd0a2lua3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NTg2ODcsImV4cCI6MjAxNzMzNDY4N30.XSvxMPKReO2YdD6NfIOKz9hv6Z51VgxvvYjhGTUpmqs'
);

async function main() {
  const r = await supabase
    .from('Course')
    .update({ title: '+2' })
    .eq('id', '65c21334-34df-4bf6-9553-092cb6e6a018');
  console.info({ r });
}

main().then(() => console.info('Done ✅'));

// console.info({ supabase });

/* list subjects, get , upsert, delete */

/* list subject = useSubjects;
get subject = useSubject;
upsert subject = useSubjectUpsert;
delete subject = useSubjectDelete; */

// import useSWR from 'swr';

// function Profile() {
//   const { data, error, isLoading } = useSWR(
//     '/audire-dashboard/modules/course-subjects/SubjectForm.tsx',
//     fetcher
//   );

//   if (error) return <div>failed to load</div>;
//   if (isLoading) return <div>loading...</div>;
//   return <div>hello {data.subject}!</div>;
// }
