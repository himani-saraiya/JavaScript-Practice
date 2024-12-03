// function a(a){
//     let v="abc";

//     console.log(a)
// }a(v)
// console.log(v)

// map

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(sum => sum * sum);
// console.log(squares); 

// reduce

// const numbers = [1, 2, 3, 4, 5,6,7];
// const sum = numbers.reduce((acc, current) => acc + current, 0);
// console.log(sum); 

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.reduce((acc, num) => {
//   acc.push(num * num);
//   return acc;
// }, []);

// console.log(squares);

const num=[1,3,4,6,7]
const squ=num.reduce((acc,ini)=>{
    acc.push(ini+2)
    return acc
},[]);
console.log(squ)


// foreach
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num * 2));

// filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenNumbers = numbers.filter(num => num % 2 ===0);
// console.log(evenNumbers); 