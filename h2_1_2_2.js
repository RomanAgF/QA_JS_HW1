// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

let age_2 = 18; // Создать переменную “age_2” и присвоить ей значение 18
let age_3 = 60; // Создать переменную “age_3” и присвоить ей значение 60

function checkAge(age) {
  if (typeof age === "number") {
    if (age < age_2) {
      console.log(
        "You don't have access cause your age is " +
          age +
          " It's less then " +
          age_2
      );
    } else if (age >= age_2 && age == age_3) {
      console.log("Welcome  !");
    } else if (age >= age_3) {
      console.log("Keep calm and look Culture channel");
    } else {
      console.log("Technical work");
    }
  } else {
    console.log("Неверный тип данных!");
  }
}

checkAge("12");
// checkAge(18)
// checkAge(61)
