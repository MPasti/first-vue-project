export const productService = {
  getProducts: async () => {
    return fetch(`https://fakestoreapi.com/products`).then((res) => res.json())
  },
  getProductsById: async (productId: number) => {
    return fetch(`https://fakestoreapi.com/products/${productId}`).then((res) => res.json())
  }
}
