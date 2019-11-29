function aboutThis() {
  console.log(this);
}
aboutThis();

const Person = {
  name: "Shahan",
  showName: function() {
    console.log(this);
  }
};

Person.showName();
