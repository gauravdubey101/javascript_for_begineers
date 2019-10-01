console.log("this is all about about if else")

 const age =18;
// //const vari = 34;
// if(age !=19){
//     console.log("age is 19");
// }
// if(age !== 65){
//     console.log("age is 65")
// }
// else{
//     console.log("noting is present");
// }

// if(typeof vari !== 'undefined'){
//     console.log("vari is defind");
// }
// else{
//     console.log("vari is not  defind");
// }

//console.log(age == 45?'age is 45':'age is not 45' ); //ternary operator

switch (age) {
    case 18:
        console.log('age is 18');
        
        break;
    case 28:
        console.log('age is 28');
        break;
    case 38:
        console.log('age is 38');        

    default:
        console.log("you are 18");
        break;
}