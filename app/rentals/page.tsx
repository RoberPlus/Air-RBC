import EmptyList from "@/components/home/EmptyList";
import { fetchRentals, deleteRentalAction } from "@/lib/actions";
import Link from "next/link";

import { formatCurrency } from "@/lib/utils";
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
import Title from "@/components/properties/Title";

async function RentalsPage() {
  const rentals = await fetchRentals();

  return (
    <div className="flex flex-col space-y-10">
      <Title text="Your Rentals" />
      {rentals.length === 0 ? (
        <EmptyList
          heading="No rentals to display."
          message="Don't hesitate to create a rental."
        />
      ) : (
        <>
          <h4 className="mb-4 capitalize">
            Active Properties : {rentals.length}
          </h4>
          <Table>
            <TableCaption>A list of all your properties.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Property Name</TableHead>
                <TableHead>Nightly Rate </TableHead>
                <TableHead>Nights Booked</TableHead>
                <TableHead>Total Income</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rentals.map((rental) => {
                const { id: propertyId, name, price } = rental;
                const { totalNightsSum, orderTotalSum } = rental;
                return (
                  <TableRow key={propertyId}>
                    <TableCell>
                      <Link
                        href={`/properties/${propertyId}`}
                        className="tracking-wide text-muted-foreground underline"
                      >
                        {name}
                      </Link>
                    </TableCell>
                    <TableCell>{formatCurrency(price)}</TableCell>
                    <TableCell>{totalNightsSum || 0}</TableCell>
                    <TableCell>{formatCurrency(orderTotalSum)}</TableCell>

                    <TableCell className="flex items-center gap-x-2">
                      <Link href={`/rentals/${propertyId}/edit`}>
                        <IconButton actionType="edit"></IconButton>
                      </Link>
                      <DeleteRental propertyId={propertyId} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </>
      )}
    </div>
  );
}

function DeleteRental({ propertyId }: { propertyId: string }) {
  const deleteRental = deleteRentalAction.bind(null, { propertyId });
  return (
    <FormContainer action={deleteRental}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}

export default RentalsPage;
