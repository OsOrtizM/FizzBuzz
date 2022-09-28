let output;
const multiplos = [[3, "Fizz"], [5, "Buzz"], [7, "Woff"], [9, "Nine"]];

for (let i = 1; i <= 100; i++) {
    output = "";
    
    multiplos.forEach(element => {
        if (i % element[0] == 0) output += element[1]
    });
    
    if (output.length == 0) output = i.toString();
    
    console.log(output);  
}