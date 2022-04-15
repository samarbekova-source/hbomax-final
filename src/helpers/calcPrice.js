export function calcTotalPrice(movies) {
  let totalPrice = 0;
  movies.forEach((item) => {
    totalPrice += +item.subPrice;
  });
  return totalPrice;
}

export function calcSubPrice(product) {
  return +product.count * +product.item.price;
}
