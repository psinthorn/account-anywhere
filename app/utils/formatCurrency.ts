export function formatCurrency(amount: number, currencyCode: string) {
  var code: string
  switch (currencyCode) {
    case "THB":
      code = "th-TH"
      break;
    case "USD":
      code = "en-US"
      break;
    case "EUR":
      code = "en-EU"
      break;
    default:
      code = "th-TH"
      break;
  }
  return new Intl.NumberFormat(code, {
    style: "currency",
    currency: currencyCode,
  }).format(amount)
}