import { useGlobalSearchParams } from 'expo-router';
import PDFView from '../../../modules/common/PDFView';

const PDFViewerPage = () => {
  const { url } = useGlobalSearchParams();
  return <PDFView pdfUri={url as string} />;
};

export default PDFViewerPage;
