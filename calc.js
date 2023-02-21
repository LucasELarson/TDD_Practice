function calculate(x, y, z) {
   if (y === "+") {
      return x + z;
   } else if (y === "-") {
      return x - z;
   } else if (y === "*") {
      return x * z;
   } else if (y === "/") {
      return x / z;
   } else {
      return "Add an operator for 'y'";
   }
}

module.exports = calculate;
