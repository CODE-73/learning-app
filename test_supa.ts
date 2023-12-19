import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://rsvxphespiwhwtkinkpv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzdnhwaGVzcGl3aHd0a2lua3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NTg2ODcsImV4cCI6MjAxNzMzNDY4N30.XSvxMPKReO2YdD6NfIOKz9hv6Z51VgxvvYjhGTUpmqs'
);

async function main() {
  const r = await supabase.from('Topic').insert({
    title: 'More About Business',
    description: 'More about Topic',
    subjectId: '8336646f-c8eb-4453-a6b2-9f8a7d8d2af2',
    videoLink: 'sdfsdf',
    studyMaterial: 'dsfdsf',
  });

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
