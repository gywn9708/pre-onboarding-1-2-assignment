const formatDate = date => {
  const dateValue = new Date(date).toLocaleDateString('ko', {
    year: 'numeric',
    day: 'numeric',
    month: 'long',
  });
  return dateValue;
};
export default formatDate;
