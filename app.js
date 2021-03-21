//here I'm declaring function 1;
function sumProduct(numberOne, numberTwo) {
  var sumThenProduct = (numberOne + numberTwo) * 5;
  return sumThenProduct;
}

//and here I make the variable 'mAths' equal to 'function 1 with arguments 2, 5'
var mAths = sumProduct(2, 5);
console.log(mAths);
//here I list the value of the variable 'mAths' in the console

//testing with diff arguments
var moreMAths = sumProduct(10, 11);
console.log(moreMAths);

//testing with diff arguments
var evenMoreMAths = sumProduct(4, 6);
console.log(evenMoreMAths);

//here I declared fn 2 in which I can put the sting 'This string is so dang long' into ()
//The conditional statement counts the number of characters in the variable 'longString' (below)
//if there are more than 10 characters in longString, the function will return 'true'
//if there are less than or equal to 10, it will return 'false'
//if there's an error it will log 'check again'
function stringLength(longString) {
  if (longString.length > 10) {
    return true;
  } else if (longString.length <= 10) {
    return false;
  } else {
    console.log("OH NO");
  }
}

//here I declare the variable 'longAsString' equal to "fn 2 with argument 'longString' "
var longAsString = stringLength(`This string is so dang long`);
console.log(longAsString);
//here I list the outcome of the conditional statement in the function above, in the console

//testing with diff arguments
var tenString = stringLength(`Lil string`);
console.log(tenString);

//testing with diff arguments
var lessThanTenString = stringLength(`string`);
console.log(lessThanTenString);

//testing with diff arguments
var somethingsWrong = stringLength(10);
console.log(somethingsWrong);
//This one was just to check and it did what I expected - returned 'undefined' in and also showed the error
//message in the console

//fn3
//weow this took a lot of messin around but I found out that .startsWith only works with strings
//and not arrays which was v confusing so I had to create a function with a 'for' loop
//inside of it with a conditional statement inside of that, which went through the
//stringArray and only returned strings that started with the string `ph`. Since the function
//stops after it 'returns' an answer, I didn't have to tell it to only look for the first
//`ph`word.
function whereThePh(stringArray) {
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].toLowerCase().startsWith(`ph`)) {
      return stringArray[i];
    }
  }
}

// here I declare the variable 'enjoyableThings' as equal to the result of the function 'whereThePh' being called
//on the array of strings
var enjoyableThings = whereThePh([
  `dogs`,
  `yoga`,
  `PhoebeFromFriends`,
  `summer`,
  `pho`,
]);
console.log(enjoyableThings);
//and here I print to the console the result of the function 'whereThePh' being applied to the array argument
//I tried adding in capitals to ensure .toLowercase worked too

//testing with diff arguments
var varyingPH = whereThePh([
  `vinegar`,
  `phosphorus`,
  `detergent`,
  `Phytin`,
  `toothPaste`,
]);
console.log(varyingPH);

//testing with diff arguments
var thinkingOfWordsIsHard = whereThePh([
  `phobia`,
  `book`,
  `pewPew`,
  `coffee`,
  `phonetics`,
]);
console.log(thinkingOfWordsIsHard);

//not sure if you needed to see all 3 times that I tested each of them but I left them here anyways :)
