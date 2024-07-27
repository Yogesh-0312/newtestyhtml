//  OBJECT WE CREATED HERE AND THEN WE GAVE THE vALUES AND PRINT IT AFTER THAT  WE NEED TO UPDATE THE VALUES 
// ON THE SAME TIME AND PRINT IT. 


// let student = {name:'yogesh',age :25}
// console.log(student);
// console.log( "value of student name is" +student.name);
// console.log('student age is ' +student.age);


// // DIRECTLY WE ALSO UPDATE THE NEW VALUE INSIDE THE "OBJECTS"

// student.age=28;
// console.log(student.age);

// student.marks='98.45cgpa';
// console.log(student.marks);
// console.log(student);

// // DELETE METHOD IS USED TO DELETE THE PARTICULAR ENTITY USING THE (.) DOT 
// delete student.name;
// console.log(student);


// // in this we need to add the objects inside object and make to access the values inside it after that 
// let person = {
//               name : "amit",
//               role : "manager",
//               age:28, 
//               skills:["html","css","js"],
//               friends : [{name:"rahul",skills:["react","sql"]}
//                         ,{name:"mohan",skills:["jdbc","sql"]}
//                         ,{name:"sohan",skills:["python","sql"]}
//             ]
// }
// person.skills.splice(2,0,"java");
// console.log(person.skills);
// // console.log(person.skills);
// console.log(person.friends[2].skills[0]);
// console.log(person.friends[1].skills[0]);


// 1 normal function
// function greet()
// {
//      console.log("hiii");
// }
// greet()
// console.log(greet);

// 2.anonymous function

// function ()
// {
// console.log("anonymous function")
// }
// we will not getting the output bcz anonymous function will not calling directly

//3. function with expression 


// function x(){
//    let age=21;
//    function addage(){
//     return age;
//    }
//    return addage;
// }
// let add= x();
//  console.log(add());


// console.log(add());
// x()
// console.log(a);
// console.log(a);

// console.log(x());




// *THIS IS FOR OF AND FOR IN  METHOD

// let arr=[4,1,2,3]
// for(let value in arr){
//     console.log(value,"index");
// }

// for(let key of arr){
//     console.log(key,"key");
// }

// let newArr=arr.map((item)=>{
//     return (item*2)})
// console.log(newArr);


// console.log(this);


// let arr = [10,20,30,40,50,44,66,33,22]
//  let a2=arr.filter((ele)=>{
//    return ele<40;

// })
// console.log(a2);



// let f =function x(){
   // let a =210;
   // return a;
// }
// f()
// console.log(f);
 

//DEFAULT PARAMETER
// function x(name1="amit",name2 = "mohan"){
// console.log(name1,name2);
// }
// x("avi","tunga");


//* const arr = [10,20,30,40,50];
// const obj = {name:"mohan",name2:"amit",name3:"avinash",name4:"gyan"};

// for(const key in obj ){
// console.log(key);
// }

// let a = 1 ;
// let b = true;
// console.log(a===b);
// in the triple === it check the both datatype and as well as value
// and in the triple equall to type coercion will not possible here ;;


//*IIFE
// (function (){
//    console.log("hello");
//    return(a+b);
// })();
// (function(){
// console.log("hi")})()

//============================
// function x(){
//    let a=10;
//    let b=20;
//    // console.log(a+b);
// }
//    return x;
//    // function y(){
//    //    let c=30;
//    //    let d = 40;
//    //       console.log(c+d); 
//    // }

// console.log(x());


// (function (){
//    let a=10;
//    let b=20;
// console.log(a+b)
// })(4,5),
// (function (){
//    console.log("hello");
// })()
 
// console.log("----------------");
//---------------------------------------
//interview qestion 
// string ="my  name is yogesh "
// output=Ym Eman Si Hsegoy

// function rev(str){
//    return str.split(' ').map(ele=>ele.split('').reverse().join(''))
// }
// // let os="my name is yogesh"
// // let s = os.split(' ')
// let s1 =[]

// console.log(s1)
//  let os="my name is yogesh"
// let rev1 = rev(os);
// // let sts=rev1.join(' ');
// console.log(sts)
// for(let i=0;i<sts.length;i++)
//    {
//     s1.push((sts[i].charAt(0).toUpperCase())+((sts[i].slice(1))))
//    }

// console.log(s1.join(''));
//----------------------------------------

// function test(arg1,arg2,arg3){
   // console.log(this.val,arg1,arg2,arg3);
   // 
// }
// test.call({val:"hello",10,20,30}); // call 
// test.apply({val:"helo"},[10,20,30]);// apply
// let b = test.bind({val:"hello"},10,20,30);// bind
// b()

// console.log(a);
// let a = 10;




// function x(){
//    console.log(b);
//    let a =10;`  
//    var b =20;
//    const c =10;
//    console.log(a+b+c);
// }
// x()

// //* call/apply/bind

// function test(arg1,arg2){
//    console.log(this.val,arg1,arg2);
// }
// test.call({val:"hii"},10,20)
// test.apply({val:"hello"},[10,20]);
// let c = test.bind({val:"hey"},10,50)
// c();


// // ----------------------------------------------

// let a=[10,50,40,50,55]

// let arr2 = a.reduce((val1,val2)=>{
//    return val1+val2;
// })
// console.log(arr2);
// // ---------------------------
// console.log("-------------------");

// let arr = [10,20,30,40,50,60]
// arr.pop();
// console.log(arr);
// arr.push(22);
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(11);
// console.log(arr);

// let arr2=arr.includes(10);
// console.log(arr2);

// let arr3 = arr.indexOf(30)
// console.log(arr3);

// arr.splice(2,2,"hii")
// console.log(arr);         // this will start the counting from the index where first count will comms and this will delete count. 

// let arr3 = arr.slice(1,2)
// console.log(arr3);           // it will start the counting from the index for second element to be deleted.

// function test(arg1,arg2){
//    console.log(arg1,arg2);
// }
// test.call(14,15);
console.log("------------------------------");


 function test(a,...b){
   console.log(a);
   console.log(b);
 }
 test(10,20,30,40,50)

 let obj1={
   id:123,
   company:"google",
   
 }
 let obj2={
   name:"amkit",
   (...obj1)
 }
 console.log(obj2);