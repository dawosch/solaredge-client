const DATE_FORMAT = /^(\d{4})-(\d{2})-(\d{2})$/;
const DATE_TIME_FORMAT = /^(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2})$/;

export const isDateValid = (date: string) => {
  const matches = date.match(DATE_FORMAT);

  // DateTime should have 3 matches (+1 for the full match) - YEAR-MONTH-DAY
  if (!matches || matches.length !== 4) return false;
  // Month can only between 1 and 12
  if (parseInt(matches[2], 10) < 1 || parseInt(matches[2], 10) > 12) return false;
  // Day can only between 1 and 31
  if (parseInt(matches[3], 10) < 1 || parseInt(matches[3], 10) > 31) return false;

  return true;
};

export const isDateTimeValid = (dateTime: string) => {
  const matches = dateTime.match(DATE_TIME_FORMAT);

  // DateTime should have 6 matches (+1 for the full match) - YEAR-MONTH-DAY HOURS:MINUTES:SECONDS
  if (!matches || matches.length !== 7) return false;
  // Month can only between 1 and 12
  if (parseInt(matches[2], 10) < 1 || parseInt(matches[2], 10) > 12) return false;
  // Day can only between 1 and 31
  if (parseInt(matches[3], 10) < 1 || parseInt(matches[3], 10) > 31) return false;
  // Hours can only between 0 and 23
  if (parseInt(matches[4], 10) < 0 || parseInt(matches[4], 10) > 23) return false;
  // Minutes can only between 0 and 60
  if (parseInt(matches[5], 10) < 0 || parseInt(matches[5], 10) > 60) return false;
  // Seconds can only between 0 and 60
  if (parseInt(matches[6], 10) < 0 || parseInt(matches[6], 10) > 60) return false;

  return true;
};
