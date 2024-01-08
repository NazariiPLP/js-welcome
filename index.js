const day = {
  Mon: "drive lesson",
  Tue: "dentist visit",
  Wed: "go to party",
  Thu: "hard work",
  Fri: "chill",
  Sat: "go to park",
  "favorite colot": "white",
  0: "value",
};

// operator in
// in - бінарний оператор
// 'key' in obj

console.log("Mon" in day);
console.log("favorite colot" in day);
console.log(0 in day);
console.log("name" in day); //false
