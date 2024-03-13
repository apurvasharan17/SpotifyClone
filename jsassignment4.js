//ques1
// let arr=[1,2,3,4,5,6,2,3];
// let num=prompt("enter the number");
// num=parseInt(num);
// for(x of arr){
//     if (x==num){
//         arr.splice(arr.indexOf(x),1);
//     }
// }
// console.log(arr);




//ques2
// let n=prompt("ENter the number");
// n=parseInt(n);
// let count=0;
// while(n>0){
//  n=Math.floor(n/10);
//  count++;
// }
// console.log(`the number of digits is ${count}`)



//ques3
// let n=prompt("enter the number");
// n=parseInt(n);
// sum=0;
// while(n>0){
//     let r=n%10;
//     sum=sum+r;
//     n=Math.floor(n/10);
// }
// console.log(`the sum is ${sum}`);



//ques5
// let arr=[10,53,64,72,62]
// let i=0;
// let max=arr[i];
// for (i=0;i<arr.length;i++){
//     if (arr[i]>=max){
//         max=arr[i];
//     }
// }
// console.log(`max element is ${max}`);



//ques4
// let n=prompt("enter a number");
// n=parseInt(n);
// num=1;
// for(i=n;i>0;i--){
//     num=num*i;
// }
// console.log("the factorial is",num);



let arr = [1, 2, 2, 4, 5, 6, 2, 3];
let num = 2;
for(let i=0; i<arr.length; i++) {
if(arr[i] == num) {
arr.splice(i, 1);
}
}
console.log(arr);
