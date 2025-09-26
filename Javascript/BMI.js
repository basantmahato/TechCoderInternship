const markWeight = 70 ;
const markHeight = 1.5    

const jhonWeight = 65;
const jhonHeight = 1.7;

// BMI = mass / height ** 2 = mass / (height * height).


const markBMI = markWeight / markHeight ** 2 / (markHeight * markHeight)
const jhonBMI = jhonWeight / jhonHeight ** 2 / (jhonHeight * jhonHeight)

console.log(markBMI);
console.log(jhonBMI);

markHigherBMI = markBMI - jhonBMI;

console.log("Mark has heigher BMI :", markHigherBMI , "than jhon;s BMI", jhonBMI);