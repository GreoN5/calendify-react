import { addDays, addWeeks, eachDayOfInterval, startOfDay, subDays } from 'date-fns';

export const loadMoreWeeks = (lastDate: Date): Array<Date> => {
  const additionalStartDate = startOfDay(addDays(lastDate, 1));
  const additionalEndDate = startOfDay(subDays(addWeeks(additionalStartDate, 5), 1));

  return eachDayOfInterval({
    start: additionalStartDate,
    end: additionalEndDate,
  });
};
