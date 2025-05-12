const formatNumber = (number: number) => {
  const formattedNumber = number.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formattedNumber.replace(".", ",");
};
export default formatNumber;
