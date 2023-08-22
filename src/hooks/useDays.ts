import { useEffect, useState } from 'react';
import { addWeeks, eachDayOfInterval } from 'date-fns';

type Days = {
  days: Array<Date>;
};

export const useDays = (): Days => {
  const [days, setDays] = useState<Array<Date>>([]);

  const currentDate = new Date();
  const eigthWeeksAfter = addWeeks(currentDate, 8);

  useEffect(() => {
    setDays(eachDayOfInterval({ start: currentDate, end: eigthWeeksAfter }));
  }, []);

  return {
    days,
  };
};
