function greeting(user) {
  return `Hello ${"name" in user ? user.name : "Anonym"}`;
}

const user = {
  name: "John",
  email: "john.doe@gmail.com",
};
