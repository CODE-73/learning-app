import StudentsView from './batch/Students';
import DashboardView from 'modules/home/DashboardView';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div>
      <DashboardView />
      <StudentsView />;
    </div>
  );
}

export default Index;
