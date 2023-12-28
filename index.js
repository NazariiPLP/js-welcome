/*
Розробити адгоритм, який буде відображати режим нашого дня

Потрібно розробити функцію, яка приймає певну пору дня (ранок, обід, вечір) і виконує ті чи інші дії, які ми виконуємо у вказану пору дня
*/

function todo(timeOfDay) { // HOF
  // morning - список справ на ранок
  // lunch - список справ на обід
  // evening - список справ на вечір

  switch (timeOfDay) {
    case "morning": {
      washingFace();
      brushingTeeth();
      skincare();
      havingBreakfast();
      break;
    }
    case "lunch": {
      goToOffice();
      coding();
      havingLunch();
      coding();
      break;
    }
    case "evening": {
      education();
      coding();
      goToHome();
      shower();
      washingFace();
      brushingTeeth();
      skincare();
      sleep();
      break;
    }
    default: {
      console.log("Помилка! Такої пори дня не передбачено");
    }
  }
}

// todo("morning");
// todo("lunch");
todo("evening");

function washingFace() {
  console.log("Washing face");
}

function brushingTeeth() {
  console.log("Brushing teeth");
}

function skincare() {
  console.log("Skincare");
}

function havingBreakfast() {
  console.log("Having breakfast");
}

function goToOffice() {
  console.log("Go to office");
}

function coding() {
  console.log("Coding");
}

function havingLunch() {
  console.log("Having lunch");
}

function education() {
  console.log("Education");
}

function goToHome() {
  console.log("Go to home");
}

function shower() {
  console.log("Go to shower");
}

function sleep() {
  console.log("Go to sleep");
}
