/*
Задача: є об'єкт з зарплатами по всіх відділах.
Написати функцію, яка повертає загальну суму, витрачену на зарплатню всіх відділів.
*/

const departmentSalary = {
  HR: 120000,
  development: 5500000,
  PR: 50000,
  marketing: 120000,
  asisstant: undefined,
  financials: null,
};

function sumOfSalary(obj) {
  sum = 0;
  for (let key in obj) {
    if (obj[key] !== undefined && obj[key] !== null) {
      sum += obj[key];
    }
  }
  return sum;
}

console.log(sumOfSalary(departmentSalary));
