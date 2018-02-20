/*
https://projecteuler.net/problem=15

#16--Lattice paths

Starting in the top left corner of a 2×2 grid, and only being able to move to the
right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?

*/

function numPaths(gridLimit) {
  var STARTX = 0;
  var STARTY = 0;

  function mapGrid(x, y) {
    if ((x == gridLimit) && (y == -gridLimit)) {
      return 1;
    }
    else if (x == gridLimit) {
      return mapGrid(x, y-1);
    }
    else if (y == -gridLimit) {
      return mapGrid(x+1, y);
    }
    else {
      return mapGrid(x+1, y) + mapGrid(x, y-1);
    }
  }
  return mapGrid(STARTX, STARTY);
}

var GRIDLIMIT = 20;
console.log(numPaths(GRIDLIMIT));
// 137846528820 (takes ~1 hour to calculate)
