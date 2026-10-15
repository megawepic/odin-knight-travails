class node {
  constructor(position, previousnode = null) {
    this.position = position;
    this.previousnode = previousnode;
  }
}

function knightMoves(start, end) {
  start.forEach((num) => {
    if (num < 0 || num > 7) {
      throw new RangeError("Out of range");
    }
  });

  end.forEach((num) => {
    if (num < 0 || num > 7) {
      throw new RangeError("Out of range");
    }
  });

  if (start[0] === end[0] && start[1] === end[1]) {
    console.log("You made it in 0 steps. Here is your path:");
    console.log(start);
    return;
  }

  let root = new node(start);
  const visited = new Set();
  visited.add(start.toString());
  const queue = [root];

  const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];
  let current = null;

  while (queue.length > 0) {
    current = queue.shift();

    if (current.position[0] === end[0] && current.position[1] === end[1]) {
      break;
    }

    for (const [dx, dy] of directions) {
      const newX = current.position[0] + dx;
      const newY = current.position[1] + dy;

      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        let newposition = [newX, newY];
        const newnode = new node(newposition, current);

        if (!visited.has(newnode.position.toString())) {
          queue.push(newnode);
          visited.add(newnode.position.toString());
        }
      }
    }
  }
  let path = [];
  while (current != null) {
    path.push(current.position);
    current = current.previousnode;
  }
  const pathlength = path.length - 1;

  console.log(
    "Your knight took " +
      pathlength.toString() +
      " steps. Following the traversal:",
  );

  while (path.length > 0) {
    console.log(path.pop());
  }
}

knightMoves([3, 3], [7, 7]);
