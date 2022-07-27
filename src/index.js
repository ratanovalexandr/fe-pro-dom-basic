export const paintCards = () => {
  document.querySelectorAll('.item').forEach((item, index) => {
    if (index % 2 === 0) {
      item.style.backgroundColor = 'red';
    }
  });
};

export const findElement = () => {
  let item = document.querySelector('li');
  while (item) {
    if (item.classList.contains('likedItem')) {
      item.style.backgroundColor = 'blue';
      break;
    } else {
      item = item.nextElementSibling;
    }
  }
};
