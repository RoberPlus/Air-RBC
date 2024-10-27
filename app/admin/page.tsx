import StatsContainer from '@/components/admin/StatsContainer';
import { StatsLoadingContainer } from '@/components/admin/Loading';
import { Suspense } from 'react';

async function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
    </>
  );
}
export default AdminPage;
