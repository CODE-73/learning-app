import { useGlobalSearchParams } from 'expo-router';
import CourseSubjectView from '../../../modules/course-subject/CourseSubjectView';

const SubjectPage = () => {
  const { subject } = useGlobalSearchParams();
  return <CourseSubjectView subjectId={subject as string} />;
};
export default SubjectPage;
