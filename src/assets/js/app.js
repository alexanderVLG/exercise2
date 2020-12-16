"use strict"

let data1 = prompt("Введите число");
let data2 = prompt("Введите число");
let data3 = "";

function checkInputs(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Ошибка");
  } else {
    data3 = prompt("Напишите слово Ответ");
  }

  let firstNum = Number(num1);
  let secondNum = Number(num2);

  let sum = firstNum + secondNum;
  let div = firstNum / secondNum;

  console.log(data3, sum, div);
}

checkInputs(data1, data2);