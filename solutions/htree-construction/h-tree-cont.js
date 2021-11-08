const drawLine = (x1, y1, x2, y2) => {
  console.log(x1, x2, y1, y2);
};

const drawHTree = (x, y, length, depth) => {
  if (depth === 0) return depth;
  let x0 = x - length / 2;
  let x1 = x + length / 2;
  let y0 = y - length / 2;
  let y1 = y + length / 2;
  drawLine(x0, y0, x0, y1); //left line segment
  drawLine(x1, y0, x1, y1); // right line segment
  drawLine(x0, y, x1, y); // connecting middle line segment

  const newLength = length / Math.sqrt(2);

  drawHTree(x0, y0, newLength, depth - 1);
  drawHTree(x0, y1, newLength, depth - 1);
  drawHTree(x1, y0, newLength, depth - 1);
  drawHTree(x1, y1, newLength, depth - 1);
};

drawHTree(5, 6, 9, 2);
