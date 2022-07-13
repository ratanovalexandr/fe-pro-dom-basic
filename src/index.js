export const paintCards = () => {
  const paintCards = document.querySelectorAll('li');
  paintCards.forEach(function (item, index) {
    if (index % 2 === 0) item.style.backgroundColor = 'red';
  });
};

export const findElement = () => {
  const findElement = document.getElementsByClassName('item likedItem');

  findElement[0].style.background = 'blue';
};
