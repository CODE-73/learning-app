import { useGlobalSearchParams } from 'expo-router';
import CourseStageView from '../../../modules/course-stage/CourseStageView';

const StagePage = () => {
  const { stage } = useGlobalSearchParams();
  return <CourseStageView stageId={stage as string} />;
};

export default StagePage;
