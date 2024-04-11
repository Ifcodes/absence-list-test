export const getLastDay = (totalDays: number, startDate: Date | string) => {
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + totalDays);

  return endDate;
};

export const formatDateString = (date: Date | string) => {
  const dateString = new Date(date).toDateString();

  return dateString;
};

export default {
  getLastDay,
  formatDateString,
};
