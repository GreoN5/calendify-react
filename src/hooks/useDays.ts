import { useEffect, useState } from 'react';
import {
  addWeeks,
  eachDayOfInterval,
  endOfWeek,
  format,
  startOfDay,
  startOfWeek,
  subDays,
} from 'date-fns';

type Days = {
  days: Array<Date>;
};

export const useDays = (): Days => {
  const [days, setDays] = useState<Array<Date>>([]);

  const currentStartOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  // ignore last monday of the week we get from addWeeks func
  const eightWeeksAfter = startOfDay(subDays(addWeeks(currentStartOfWeek, 10), 1));

  useEffect(() => {
    setDays(eachDayOfInterval({ start: currentStartOfWeek, end: eightWeeksAfter }));
  }, []);

  return {
    days,
  };
};

type WeekDays = {
  weekdays: Array<string>;
};

export const useWeekdays = (): WeekDays => {
  const daysOfWeek = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });

  const weekdays = daysOfWeek.map((day) => format(day, 'EEEE'));

  return {
    weekdays,
  };
};
