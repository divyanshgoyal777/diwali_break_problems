function getConnections(city, connections) {
  for (const c of connections) {
    if (c.city === city) return c.connections;
  }

  return [];
}

function hasPath(start, destination, connections, visited, path) {
  if (start === destination) {
    path.push(start);
    return true;
  }

  if (visited.includes(start)) return false;

  visited.push(start);
  path.push(start);

  const nextCities = getConnections(start, connections);

  for (const city of nextCities) {
    if (hasPath(city, destination, connections, visited, path)) {
      return true;
    }
  }

  path.pop();
  return false;
}

const connections = [
  {
    city: "Mumbai",
    connections: ["Bangalore", "New Delhi"],
  },
  {
    city: "New Delhi",
    connections: ["Bangalore", "Mumbai", "Kolkata"],
  },
  {
    city: "Bangalore",
    connections: ["Chennai", "Mumbai"],
  },
  {
    city: "Kolkata",
    connections: ["Shillong"],
  },
  {
    city: "Shillong",
    connections: ["Guwahati"],
  },
];

const path = [];

const found = hasPath("Mumbai", "Guwahati", connections, [], path);

console.log(found, path);
