const myProfile = {
  name: "OfficerMello",
  age: 5,
  country: "United States",
  hobby: "to checkout fragrances"
};

function displayProfile(person) {
  console.log(`Hi, I'm ${person.name}, a ${person.age} year old from ${person.country}. My hobby is ${person.hobby}.`);
}

displayProfile(myProfile);
