import EmptyList from "@/components/home/EmptyList";
import CountryFlagAndName from "@/components/card/CountryFlagAndName";
import Link from "next/link";

import { formatDate, formatCurrency } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";
import { fetchBookings, deleteBookingAction } from "@/lib/actions";
import Title from "@/components/properties/Title";

async function BookingsPage() {
  const bookings = await fetchBookings();

  if (bookings.length === 0) {
    return <EmptyList />;
  }

  return (
    <div className="flex flex-col space-y-10">
      <Title text="Your Bookings" />
      {bookings.length === 0 ? (
        <EmptyList />
      ) : (
        <div>
          <h4 className="mb-4 capitalize">
            total bookings : {bookings.length}
          </h4>
          <Table>
            <TableCaption>A list of your recent bookings.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Property Name</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Nights</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => {
                const { id, orderTotal, totalNights, checkIn, checkOut } =
                  booking;
                const { id: propertyId, name, country } = booking.property;
                const startDate = formatDate(checkIn);
                const endDate = formatDate(checkOut);
                return (
                  <TableRow key={id}>
                    <TableCell>
                      <Link
                        href={`/properties/${propertyId}`}
                        className="tracking-wide text-muted-foreground underline"
                      >
                        {name}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <CountryFlagAndName countryCode={country} />
                    </TableCell>
                    <TableCell>{totalNights}</TableCell>
                    <TableCell>{formatCurrency(orderTotal)}</TableCell>
                    <TableCell>{startDate}</TableCell>
                    <TableCell>{endDate}</TableCell>
                    <TableCell>
                      <DeleteBooking bookingId={id} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

function DeleteBooking({ bookingId }: { bookingId: string }) {
  const deleteBooking = deleteBookingAction.bind(null, { bookingId });
  return (
    <FormContainer action={deleteBooking}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}

export default BookingsPage;
