const arr = [
  { id: 1, name: "Jani ah", status: false },
  { id: 2, name: "Have something", status: false },
  { id: 3, name: "There is something", status: true },
  {
    id: 4,
    name: "You don't know JS",
    status: true
  }
];

const newArr = arr.filter(item => !item.status);

console.log(newArr);
