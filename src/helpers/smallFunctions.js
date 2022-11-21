// const coeffDifference = [0.2, 0.3, 0.4];

export function randomizer() {
  return (Math.random() * 0.04 + 0.01).toFixed(2);
}

export function statusColor(status) {
  switch (status) {
    case "pending":
      return "blue";
    case "win":
      return "green";
    case "loose":
      return "red";
    default:
      return "green";
  }
}
