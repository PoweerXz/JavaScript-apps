const num1 = 2;
const num2 = 6;
const num3 = 3;

if (num1 < num2 && num1 < num3) {
  console.log(num1, "é o menor numero");
  if (num1 < 0) {
    console.log("o valor é negativo");
    if (num1 % 2 !== 0) {
      console.log(num1, "é impar");
    }
  } else {
    console.log("o valor é positivo");
    if (num1 % 2 === 0) {
      console.log(num1, "é par");
    }
  }
} else if (num2 < num1 && num2 < num3) {
  console.log(num2, "é o menor numero");
  if (num2 < 0) {
    console.log(num2, "o valor é negativo");
    if (num2 % 2 !== 0) {
      console.log(num1, "é impar");
    }
  } else {
    console.log("o valor é positivo");
    if (num2 % 2 === 0) {
      console.log(num1, "é par");
    }
  }
} else if (num3 < num1 && num3 < num2) {
  console.log(num3, "é o menor numero");
  if (num3 < 0) {
    console.log("o valor é negativo");
    if (num3 % 2 !== 0) {
      console.log(num1, "é impar");
    }
  } else console.log("o valor é positivo");
  if (num3 % 2 === 0) {
    console.log("é par");
  }
}