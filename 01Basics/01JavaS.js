
const callback = (a, b) => {
  console.log( a + b);
};

const func = (a) => {
    a(2, 4);
}

func(callback);



let student = {
    name : 'Nitin',
    $2 : 23,
    $2 : 'new value'
}
// student[2] = 'new value 2';
student.name = 'name new value';
console.log(student.name);

console.log(student[2]);

console.log(student.$2);