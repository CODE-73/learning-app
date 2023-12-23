import { useGlobalSearchParams } from 'expo-router';
import CourseTopicView from '../../../modules/course-topic/CourseTopicView';
const TopicPage = () => {
  const { topic } = useGlobalSearchParams();
  return <CourseTopicView topicId={topic as string} />;
};

export default TopicPage;
