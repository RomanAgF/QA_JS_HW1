// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number


let age_2 = 18; // Создать переменную “age_2” и присвоить ей значение 18
let age_3 = 60; // Создать переменную “age_3” и присвоить ей значение 60


function checkAge(age) {
  if (parseFloat(age) === "number" && age < age_2) {
    console.log(
      "You don’t have access cause your age is " +
        age +
        " It’s less then " +
        age_2
    );
  } else if (age >= age_2 && age < age_3) {
    console.log("Welcome !");
  } else if (age >= age_3) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");
  }
}

checkAge("12");
// checkAge(18)
// checkAge(61)
