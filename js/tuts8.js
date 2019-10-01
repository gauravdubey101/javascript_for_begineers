console.log("this is about functions");

// const mygreet = function(name,thank ='thank you'){
//     console.log(` happy moring ${name} You have been blessed with yet another day. What a wonderful way of welcoming the blessing with such a beautiful morning! Good morning to you ${thank}!`);
//     return 4;
// }



// let name = 'SKILLF';
// let name2 = 'rahan';

// mygreet(name,'Thanks a lot');
// let val = mygreet(name,'thank you');
// console.log(val);

// const myobj ={
//     name:'gaurav',
//     game: function(){
//         return "GAT";
//     }
// }
// console.log(myobj.game);
// arr = ['fruit','vegitable','furniture'];
// arr.forEach(function(element,index){
//     console.log(element,index)
// });

//scops variavle in functions

//let i =234; //is use for block level scope
if(1){
    var i= 234;
    console.log(i);
}

console.log(i);
function ui(name){
     let i =9;
    console.log(i);
    return `this is a ${name} ui`;
}
console.log(ui("gaurav"),i);