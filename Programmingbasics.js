//Writeafunction that logs to the console numbers 1 to 100
const printNumbers = () => {
    for (let i = 1; i <= 100; i++)
        console.log(i);
    //Check divisible by 3 and 5
    if (i % 3 === 0)
    {
        console.log('This is divisible by 3')
    }
    else if (i % 5 === 0)
    {
        console.log('This is divisible by 5');
    }
    else if (i % 3 === 0 && i % 5 === 0)
    {
        console.log('Jackpot');
        }
}
printNumbers();


