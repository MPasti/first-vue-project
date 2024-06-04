export const addressService = {
  getAddressByCEP: async (zipCode: string) => {
    return fetch(`https://viacep.com.br/ws/${zipCode}/json`).then((res) => res.json())
  }
}
