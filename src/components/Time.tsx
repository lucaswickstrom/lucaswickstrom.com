import React from 'react';

const day = 1000 * 60 * 60 * 24;

const getMonth = (date: Date) =>
  date.toLocaleDateString('en-GB', {
    month: 'short',
  });

const getMonthAndYear = (date: Date) =>
  `${getMonth(date)} ${date.getFullYear()}`;

const isSameMonthAndYear = (date1: Date, date2: Date) =>
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();

const isPlural = (value: number) => value > 1;

const getMonthAndYearDiff = (date1: Date, date2: Date) => {
  const diff = new Date(Math.floor(date2.getTime() - date1.getTime()));

  let years = diff.getFullYear() - 1970;
  let months = diff.getMonth() + (diff.getDay() > 0 ? 1 : 0);

  if (months === 12) {
    years += 1;
    months = 0;
  }

  return (
    (years ? `${years} year${isPlural(years) ? 's' : ''} ` : '') +
    (months ? `${months} month${isPlural(months) ? 's' : ''}` : '')
  );
};

export const Time: React.FC<{ start: Date; stop?: Date }> = ({
  start,
  stop = new Date(),
}) => {
  return (
    <span>
      {getMonthAndYear(start)}
      {isSameMonthAndYear(start, stop)
        ? ''
        : ` - ${
            stop.getTime() > Date.now() - day
              ? 'Present'
              : getMonthAndYear(stop)
          }`}{' '}
      • {getMonthAndYearDiff(start, stop)}
    </span>
  );
};
