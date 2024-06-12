export default async function productLoader() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
}
