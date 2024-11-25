"use client";

import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { DateRange } from "react-day-picker";
import { useProperty } from "@/lib/store";

import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from "@/lib/calendar";

function BookingCalendar() {
  const currentDate = new Date();

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  useEffect(() => {
    useProperty.setState({ range });
  }, [range]);

  const bookings = useProperty((state) => state.bookings);
  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });

  const { toast } = useToast();
  const unavailableDates = generateDisabledDates(blockedPeriods);

  useEffect(() => {
    const selectedRange = generateDateRange(range);
    selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected);
        toast({
          description: "Some dates are booked. Please select again.",
        });
        return true;
      }
      return false;
    });
    useProperty.setState({ range });
  }, [range]);

  return (
    <Calendar
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className="mb-4 w-full p-0"
      // add disabled
      disabled={blockedPeriods}
    />
  );
}
export default BookingCalendar;
