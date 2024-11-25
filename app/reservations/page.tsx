import { fetchReservations } from "@/lib/actions";
import Link from "next/link";
import EmptyList from "@/components/home/EmptyList";
import CountryFlagAndName from "@/components/card/CountryFlagAndName";

import { formatDate, formatCurrency } from "@/lib/utils";
import Stats from "../../components/reservations/Stats";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Title from "@/components/properties/Title";

async function ReservationsPage() {
  const reservations = await fetchReservations();

  return (
    <div className="flex flex-col space-y-10">
      <Title text="Your Reservations" />
      {reservations.length === 0 ? (
        <EmptyList />
      ) : (
        <>
          <Stats />
          <div className="mt-16">
            <h4 className="mb-4 capitalize">
              total reservations : {reservations.length}
            </h4>
            <Table>
              <TableCaption>A list of your recent reservations.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Property Name</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Nights</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Check In</TableHead>
                  <TableHead>Check Out</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reservations.map((item) => {
                  const { id, orderTotal, totalNights, checkIn, checkOut } =
                    item;
                  const { id: propertyId, name, country } = item.property;
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
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
}
export default ReservationsPage;
