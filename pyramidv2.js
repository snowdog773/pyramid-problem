function findShortestPath(rows, data) {
  let pyramid = [];
  let start = 0;
  // start is the start index for the data array as it is separated into the pyramid nested array
  for (i = 1; i <= rows; i++) {
    pyramid.push(data.slice(start, start + i));

    start = start + i;
  }
  let cumulative = [];
  //initialise the first row of cumultative array
  cumulative.push([{ runningTotal: pyramid[0][0], lastNode: 0 }]);
  //subsequent rows are created by adding each
  for (i = 0; i <= rows - 2; i++) {
    let newRow = [];
    for (j = 0; j < cumulative[i].length; j++) {
      newRow.push({
        runningTotal:
          cumulative[i][j].runningTotal +
          pyramid[i + 1][cumulative[i][j].lastNode],
        lastNode: cumulative[i][j].lastNode,
      });
      newRow.push({
        runningTotal:
          cumulative[i][j].runningTotal +
          pyramid[i + 1][cumulative[i][j].lastNode + 1],
        lastNode: cumulative[i][j].lastNode + 1,
      });
    }

    cumulative.push(newRow);
  }
  const finalRow = cumulative[rows - 1].map((e) => e.runningTotal);
  const lowest = Math.min(...finalRow);
  console.log(cumulative, finalRow, lowest);
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

findShortestPath(4, [3, 7, 4, 2, 4, 6, 8, 5, 9, 3]);
// 3
// 7 4
// 2 4 6
// 8 5 9 3
