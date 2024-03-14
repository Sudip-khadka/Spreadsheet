const nums=[8,2,3,4,5,1];
const sum=nums.reduce((acc,el)=>acc+el,0);
// console.log(sum);

const newNum=nums.slice().sort((a,b)=>a-b);
console.log(newNum);