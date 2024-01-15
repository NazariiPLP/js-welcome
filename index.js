const dogArray = [{
  nickname: 'Tuzik',
  color: 'black', 
  weight: 2, 
  age: 3,
}, { 
  nickname: 'Dolly',
  color: 'white', 
  weight: 5, 
  age: 2,
}, { 
  nickname: 'Fagot',
  color: 'black', 
  weight: 9, 
  age: 5,
}, { 
  nickname: 'Stus',
  color: 'black', 
  weight: 15, 
  age: 1,
}]

// Задача: відсортувати собак за вагою на збільшення (у порядку зростання)

dogArray.sort((dog1, dog2) => {
  // if(dog1.weight < dog2.weight) {
  //   return -1;
  // } else { // dog1.weight > dog2.wight
  //   return 1;
  // }
  // return dog1.weight - dog2.wight; // у порядку зростання
  return dog2.weight - dog1.weight; // у порядку спадання
})

/* Задача 1
Відсортувати собак від найстаршого до наймолодшого
*/

dogArray.sort((dog1, dog2) => {
  return dog2.age - dog1.age // у порядку спадання
})

/* Задача 2
Відсіяти всіх собак окрім чорних
*/

function filterDogs(dog) {
    // if(dog.color !== 'white') {
    //   return true
    // } else {// dog.color === 'white'
    //   return false
    // }
    
    return dog.color !== 'white'
  }
  
  
  const blackDogsArray = dogArray.filter(filterDogs);
