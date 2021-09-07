const {names, middleNames, surnames} = require("./config.js");
const format = [names, middleNames, surnames];

const create = () => {
    let output = [];
    format.forEach((list) => { 
        let word = list[Math.floor(Math.random() * list.length)];
        output.push(word);
    });
    return output.join(" ");
};

console.table({name: create()});

// 1. const {variables} = require ("./config.js")
//
//      a. the function here is a const. the variables are the variables
//          that will be rotated through in order to create a unique 
//          character, or in this case since we are using names, it will
//          create a uniqe name. Since we are calling the function from
//          the config file, we have to set an EQUAL SIGN (=) and 
//          require("./config.js") which means its in the same file directory, 
//          and points to the config file.
//
// 2. const create () => {}
//      a. let output [];
//          I. let output allows you to declare variables that are 
//              limited to the scope of a block statement
//          II. 
//
//      b. return output.join(" ");
//          I. output.join takes arrays and joins them together with a 
//             string
//          II. you want to seperate the strings in the array with a space
//
// 3. console.log(create());
//      a. the console.log function is used to print any kind of variables
//         defined before in it, or just print any message that needs
//         to be displayed to the user
//
// 4. execute
//      a. node index.js
//      b. we are expeting to return the output
//
// 5. format.forEach
//      a. each element will return a list 
//      b. format.forEach((list) => {});
//          I. let word = list[Math.floor(Math.random() * list.length)];
//              - new variable called word
//              - the list variable called word will display the variable
//                in question, but the magic happens inside the array
//                with the Math.floor and Math.random stuff
//
//                  aa. when you multiply the output of Math.floor and 
//                      Math.random, you will get a certain output, and 
//                      multiplying that output by list.length will
//                      randomize it even more
// 
// 6. ouput.push(word);
//      a. this function will push the outputted name so that the user can
//         see the names
// 
// 7. console.table({name: create()});
//      a. this will display the names in an easy to digest table 