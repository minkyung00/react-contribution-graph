export const getDiffDay = (date: string) => {
  return Math.floor((+new Date() - +new Date(date)) / 86400000);
};
