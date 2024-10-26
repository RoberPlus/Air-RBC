'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { BookingWrapperProps } from '@/components/bookings/BookingWrapper';

const BookingWrapper = dynamic(() => import('@/components/bookings/BookingWrapper'), {
  ssr: false,
  loading: () => <Skeleton className="h-[200px] w-full" />,
});

const ClientBookingWrapper = ({ propertyId, price, bookings }: BookingWrapperProps) => {
  return <BookingWrapper propertyId={propertyId} price={price} bookings={bookings} />;
};

export default ClientBookingWrapper;
