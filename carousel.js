let carouselIndex= [0, 0]
showCarouselItems(0, carouselIndex[0])
showCarouselItems(1, carouselIndex[0])

function backAndForthCarouselItems(idx, n) {
  showCarouselItems(idx, carouselIndex[idx] += n);
}

function currentCarouselItem(idx, n) {
  showCarouselItems(idx, carouselIndex[idx] = n);
}

function showCarouselItems(idx, n) {
  let carousels = document.getElementsByClassName("carousel");
  let carouselItems = carousels[idx].getElementsByClassName("carousel-item");
  if (n >= carouselItems.length) {carouselIndex[idx] = 0}
  if (n < 0) {carouselIndex[idx] = carouselItems.length - 1}
  for (let i = 0; i < carouselItems.length; i++) {
      carouselItems[i].style.display = "none";
  }
  carouselItems[carouselIndex[idx]].style.display = "block";
}