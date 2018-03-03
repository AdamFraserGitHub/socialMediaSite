var tiles = document.getElementsByClassName('tile');

var tileBottoms = [];
for(var i = 0; i < tiles.length - 1; i++) {
  tileBottoms[i] = tiles[i].getBoundingClientRect().bottom;
  console.log(tileBottoms[i]);
}

for(var i = 3; i < tiles.length; i++) {
  tiles[i].style.width = '27%';
  tiles[i].style.top = tileBottoms[i - 3] - 65 + 'px';
  if(i % 3 == 0) {
    tiles[i].style.left = tiles[i].getBoundingClientRect().left + 'px';
  } else {
    tiles[i].style.left = tiles[i - 1].getBoundingClientRect().right + 10 + 'px';
  }
  tiles[i].style.position = 'absolute';
}
