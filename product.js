const url = "https://kea-alt-del.dk/t7/api/products/2801";

//fetch the data
//populate the page

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".info .brand").textContent = product.brandname;
  document.querySelector(".info .productname").textContent =
    product.productdisplayname;

  document.querySelector(
    ".image img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector(".image img").alt = product.productdisplayname;
}
