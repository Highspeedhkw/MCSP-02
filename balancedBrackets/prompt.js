// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
//str: "(x + y) - (4)"           |   true
//str: "(x + y) - (4)"           |   true
//str: "(((10 ) ()) ((?)(:)))"   |   true
//str: "[{()}]"                  |   true
//str: "(50)("                   |   false
//str: "[{]}"                    |   false


const isBalanced = str => {
for (i=0; i=str.length; i++){
    let newString =["string"];
    //Here we check if the quotes are closed.If quotes closed return true
    if (str[0]===str[str.length]){
        return true;
    }
    //Here we need to make sure the number of open parenthesis is equal to number of closing parenthesis
    const a = "("; 
    const b = ")";
    const newArray=[];
    if (str[i]=== a || b){
        newArray.push(i);
    }
    
    for (i=0; i=newArray.length; i++){
        let newArrayA =[];
        let newArrayB =[];
        if (i===a){
        newArrayA.push[i]
        }
        if (i===b){
            newArrayB.push[i]
        }
    }

    if (newArray.length % 2 === 0 && newArrayA.length === newArrayB.length){
       return true;
    }

    }

    }

