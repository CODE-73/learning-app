import { useGlobalSearchParams } from 'expo-router';
import { useTopic } from '@learning-app/syllabus';
import McqExamPage from '../../../modules/mcq-exams/McqExamPage';

const TopicMCQTestPage = () => {
  const { topic } = useGlobalSearchParams();
  const { data } = useTopic({ topicId: topic as string });

  if (!data) {
    // TODO: Show Loading Spinner
    return null;
  }

  return <McqExamPage questions={data.mcqQuestions} />;
};

export default TopicMCQTestPage;
