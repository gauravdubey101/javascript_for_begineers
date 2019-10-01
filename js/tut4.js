
//   STRINGS    //

// console.log("learing strings");
// const name = 'gaurav';
// const greeting = 'good morning';
// console.log(greeting +" "+ name);
let name ='gaurav';
let html;
html = "<h1>this is gaurav"+
        "<p>this is para</p>";

//html = html.concat('this is','dubey');
    console.log(html);
    // console.log(html.length);
    // console.log(html.toLowerCase());
    // console.log(html.toUpperCase());

// console.log(html[3]);
// console.log(html.lastIndexOf('<'));
// console.log(html.indexOf('this'));
// console.log(html.charAt(3));
// console.log(html.endsWith('para'));
// console.log(html.includes('this'));
// console.log(html.substring(0,4));
// console.log(html.slice(1,4));
// console.log(html.split(' '));
// console.log(html.replace ('this','it'));
let fruit1 ='Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
                <h1> This is heading </h1>
                <p> you like ${fruit1} and ${fruit2}  `;

document.body.innerHTML = myHtml; 