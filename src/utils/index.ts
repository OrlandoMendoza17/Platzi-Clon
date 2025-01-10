export const formatMoney = (money: number) => {
  const formattedCurrency = money.toLocaleString("en", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  })
  return formattedCurrency;
}

export const getIdFromTitle = (name: string | null) => {
  return name?.split(" ").join("") || ""
}