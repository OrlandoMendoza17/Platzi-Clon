export const formatMoney = (money: number) => {
  const formattedCurrency = money.toLocaleString("en", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  })
  return formattedCurrency;
}