function findShortestPath(rows, data) {
  let pyramid = [];
  let start = 0;
  // start is the start index for the data array as it is separated into the pyramid nested array
  for (i = 1; i <= rows; i++) {
    pyramid.push(data.slice(start, start + i));

    start = start + i;
  }
  let cumulative = [];
  //initialise the cumultative array
  cumulative.push([pyramid[0][0]]);
  //subsequent layers are calculated by adding each
  console.log(cumulative);
  for (i = 0; i <= rows - 2; i++) {
    let cumulativeRow = [];
    cumulative[i][0][0]
      ? (cumulativeRow = cumulative.flat(2))
      : (cumulativeRow = [cumulative[i][0]]);

    cumulative.push(
      cumulativeRow.map((e, index) => [
        e + pyramid[i + 1][index - index / 2],
        e + pyramid[i + 1][index - index / 2 + 1],
      ])
    );

    // cumulative.map((e) => {
    //   cumulative.push(
    //     e.map((f, index) => [
    //       f + pyramid[i + 1][index],
    //       f + pyramid[i + 1][index + 1],
    //     ])
    //   );
    // });
  }

  console.log(cumulative);
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
