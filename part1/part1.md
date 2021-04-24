## Part 1a

1. values added:  20
2. final result:  20
3. values added:  20
4. error: result is declared with let in if block, so result does not exist outside if block
5. error: constants cannot be reassigned
6. error: even if the constant is not reassigned, since result is declared in if block it will not exist outside if block

## Part 1b

1. Console prints out 3 because i iterates 3 times in the for loop and i was declared with var
2. Console prints out 150 because the last value in prices is 300 and the discount is 0.5, so 300 * (1 - 0.5) is 150 and discountedPrice was declared with var
3. Console prints out 150 because discountedPrice is 150, 150 * 100 rounded is 15000, 15000 / 100 is 150 and finalPrice was declared in the same block
4. The function returns an array of numbers with the discounted prices of the prices array passed in as a parameter using the discount value from the parameter.
5. error: i is declared in a for loop, so it only exists within the for loop.
6. error: discountedPrice is declared in a for loop, so it only exists within the for loop.
7. Console prints out 150 because discountedPrice is 150, 150 * 100 rounded is 15000, 15000 / 100 is 150 and finalPrice was declared in the same block
8. The function returns an array of numbers with the discounted prices of the prices array passed in as a parameter using the discount value from the parameter.
9. error: i is declared in a for loop, so it only exists within the for loop.
10. Console prints of 3 because the length of the prices array passed into the parameter is 3 and length was declared in the same block
11. The function returns an array of numbers with the discounted prices of the prices array passed in as a parameter using the discount value from the parameter. There is no error because in each loop, it declares a new discountedPrice which is valid. Also, since discounted is being pushed rather than assigning it a new value, there are no errors.
12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. A. '32', since '3' is a string, the '+' operator acts as concatenate so 2 is also converted to a string
    B. 1, since '-' is a mathematical function, '3' is converted into a number and is subtracted by 2
    C. 3, '+' is acting as a mathematical function, so null is converted to 0
    D. '3null', since '3' is a string, the '+' operator acts as concatenate so null becomes 'null'
    E. 4, since '+' is acting as a mathematical function, true is converted to 1
    F. 0, since '+' is acting as a mathematical function, false and null are both converted to 0 
    G. '3undefined', since '3' is a string, the '+' operator acts as concatenate so undefined becomes 'undefined'
    H. NaN, since '-' is a mathematical function, '3' is converted into a number and undefined is converted to NaN
14. A. true, '2' is converted to 2
    B. false, first char '2' is greater than first char '1'
    C. true, '2' is converted to 2
    D. false, '2' and 2 are different types
    E. false, true becomes 1 
    F. true, Boolean(2) is equal to true
15. '==' checks with type conversion while '===' checks without type conversion
16. see part1b-question16.js
17. This function returns an array with values that are 2x the values in the original array that was passed in. The function 'doSomething' that was passed into the array multiplies the number passed into it by 2. The function 'modifyArray' iterates through each value of the original array, passes it through 'doSomething', then pushes it to a new array which is then returned.
18. see part1b-question18.js
19. The output is 
    1
    4
    3
    2

    since 2 is delayed by a second and 3 is executed immediately after the stack is finished.