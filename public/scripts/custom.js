const miniSliderItem = document.querySelectorAll('.miniSliderItem');
const miniCover = document.querySelectorAll('.miniSliderItem > img');
const bgImage = document.getElementById('bgImage');
const dataPict = document.querySelectorAll('.dataPict');
const mainSquare = document.getElementById('mainSquare');

miniSliderItem.forEach((e, i) => {
    e.addEventListener('click', () => {
        bgImage.src = e.dataset.image;
        mainSquare.src = miniCover[i].src;
    })
  });
  