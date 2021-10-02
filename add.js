const add = (num1, num2) => {
  return num1 + num2;
};

//bahar ki duniya me expose ni hoga yeh jb tk export ni karoge

const subtract = (num1, num2) => {
  return num1 - num2;
};
//agar do function hai to as a object wrap krke bhej do

module.exports = { add, subtract };
