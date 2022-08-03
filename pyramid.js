//createPyramid takes the data input and arranges it in an array of nested arrays, where the first array
//has one entry, the second two, and so on to represent the levels of the pyramid.
function createPyramid(layers, data) {
  let pyramid = [];
  let start = 0;
  // start is the start index for the data array as it is separated into the pyramid nested array
  for (i = 1; i <= layers; i++) {
    pyramid.push(data.slice(start, start + i));

    start = start + i;
  }
  return pyramid;
}
//createPossiblePaths returns an array containing all the possible paths through an array with N rows

function createPossiblePaths(layers) {
  const possiblePaths = [];
  let path = new Array(layers).fill(0);
  let activeIndex = layers - 1;
  possiblePaths.push([...path]);
  do {
    if (activeIndex === layers - 1 && path[activeIndex] === 0) {
      path[activeIndex]++;
      activeIndex--;
    } else {
      if (
        path[activeIndex] < path[activeIndex + 1] &&
        activeIndex > path[activeIndex]
      ) {
        path[activeIndex]++;
        activeIndex--;
      } else {
        activeIndex = layers - 1;
        if (path[activeIndex] - path[activeIndex - 1] < 1) {
          path[activeIndex]++;
          activeIndex--;
        } else {
          //   activeIndex--;
          //   path[activeIndex]++;
          //   console.log("stuff");
          break;
        }
      }
    }

    possiblePaths.push([...path]);
  } while (possiblePaths[possiblePaths.length] !== path);
  return possiblePaths;
}

//Finally findShortestPath appllies all the possible paths to the data array and evaluates which is shortest.
function findShortestPath(rows, numbers) {
  const pyramid = createPyramid(rows, numbers);
  const paths = createPossiblePaths(rows);
  const results = paths.map((e) => {
    return e.map((f, index) => {
      return pyramid[index][f];
    });
  });
  const sums = results.map((e) => e.reduce((a, b) => a + b, 0));
  const lowest = Math.min(...sums);
  console.log(paths, lowest);
  return lowest;
}
//should be 75+95+17+18+4+1+2+4+26+33+65+28+17+53+9
findShortestPath(
  15,
  [
    75, 95, 64, 17, 47, 82, 18, 35, 87, 10, 20, 4, 82, 47, 65, 19, 1, 23, 75, 3,
    34, 88, 2, 77, 73, 7, 63, 67, 99, 65, 4, 28, 6, 16, 70, 92, 41, 41, 26, 56,
    83, 40, 80, 70, 33, 41, 48, 72, 33, 47, 32, 37, 16, 94, 29, 53, 71, 44, 65,
    25, 43, 91, 52, 97, 51, 14, 70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57,
    91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48, 63, 66, 4, 68, 89, 53,
    67, 30, 73, 16, 69, 87, 40, 31, 4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38,
    53, 60, 4, 23,
  ]
);
