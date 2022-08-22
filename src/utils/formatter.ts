export const dateFormatter = new Intl.DateTimeFormat('pt')

export const priceFormatter = new Intl.NumberFormat('pt', {
  style: 'currency',
  currency: 'EUR',
})
