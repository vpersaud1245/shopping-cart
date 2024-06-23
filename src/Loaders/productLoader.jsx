export async function productsLoader() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
}

export async function productLoader({ params }) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.productID}`
  );
  const product = await response.json();
  return product;
}
