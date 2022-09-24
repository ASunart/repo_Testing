/**
 * Ejercicio 7
 * Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible
 * by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5
 */

function fizzBuzz(i: number) {
        if (i%15 == 0)   
        return ('FizzBuzz');
        else if ((i%3) == 0)
        return ('Fizz');               
        else if ((i%5) == 0)                   
           return('Buzz');               
        else     
            console.log(i + ' ');                
}


module.exports = fizzBuzz;