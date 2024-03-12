//1

const yearInput1 = 2000;
const yearInput2 = 2018;

const leapYears = (year1, year2) => {
    let arrayYears= [];
    for (i = year1; i <= year2; i++){
        if (i % 4 === 0){
            arrayYears.push(i)
        }
    }
    console.log(arrayYears)
}

leapYears(yearInput1, yearInput2)



//2

array1 = [37, 23, 43, 34, 55];
array2 = [40, 533, 601];

const addition = (arr1, arr2) => {
    let finalArray = [];
    if (arr1.length > arr2.length){
        for (i = 0; i < arr2.length; i++){
            finalArray.push(arr1[i] + arr2[i]);
        }
        for (i = 0; i < arr2.length; i++){
            arr1.shift();
        }
        for (i = 0; i < arr1.length; i++){
            finalArray.push(arr1[i]);
        }
    } else {
        for (i = 0; i < arr1.length; i++){
            finalArray.push(arr1[i] + arr2[i]);
        }
        for (i = 0; i < arr1.length; i++){
            arr2.shift();
        }
        for (i = 0; i < arr2.length; i++){
            finalArray.push(arr2[i]);
        }
    }
    console.log(finalArray)
}

addition(array1, array2)



//3

string = 'I need to write a massive text containing more than fifty symbols so that my function works correctly';

const newString = (str) => {
    let strSplit = str.split('');
    for (i = 50; i < str.length; i++){
        strSplit.pop();
    }
    strSplit.push('...');
    strSplit = strSplit.join('')
    console.log(strSplit)
}

newString(string)



//4

string = "this is a sentence"
capitalLetters = (str) => {
    firstLetters = [];
    finalArray = [];
    for (i = 0; i < str.length; i++){
        if (i === 0){
            firstLetters.push(str[i]); 
            firstLetters.push(' ')
        } else if (str[i] === ' '){
            firstLetters.push(str[i + 1]);
        } else {
            firstLetters.push(' ')
        }
    }
    firstLetters.pop()

    let capitals = firstLetters.join('');
    capitals = capitals.toUpperCase();

    for (i = 0; i < str.length; i++){
        if (i === 0){
            finalArray[0] = capitals[0]
        } else if (capitals[i] === ' '){
            finalArray[i] = str[i]
        } else {
            finalArray[i] = capitals[i]
        }
    }
    finalLetters = finalArray.join('')
    console.log(finalLetters)

}

capitalLetters(string)


