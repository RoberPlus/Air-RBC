import StatsCards from '@/components/admin/StatsCard';
import { fetchReservationStats } from '@/lib/actions';
import { formatCurrency } from '@/lib/utils';

async function Stats() {
  const stats = await fetchReservationStats();

  return (
    <div className="mt-8 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      <StatsCards title="properties" value={stats.properties} />
      <StatsCards title="nights" value={stats.nights} />
      <StatsCards title="total" value={formatCurrency(stats.amount)} />
    </div>
  );
}

export default Stats;
