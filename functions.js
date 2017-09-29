// TODO: add your solutions here!

//Question 1 Concatenation 
let conCat = (string1,string2) => string1 + string2;


console.log(conCat('dog','house'));

//Question 2 repeat phrase n times
let stringRepeat = (string,n) => {
	while(n>0){
		console.log(string);
		n--;
	}
}

function stringRepeat2(string,n){
	while(n>0){
		console.log(string);
		n--;
	}
}

stringRepeat("test",10);

// Question 3 create power function
let numPower = (n,pow) => n ** pow; 

console.log(numPower(4,5));

//Question 4 area of circle
let areaCircle = (r) => 3.1415926 * (r**2);

console.log(areaCircle(10));

//Question 5 pythagorean Theorem 
let pythTheorem = (a,b) => ((a**2) + (b**2))**(1/2);

console.log(pythTheorem(3,4));

//Question 6 remainder of 0
let numRemainder = (x,y) => x % y === 0 ? true : false;

console.log(numRemainder(8,3));

// Question 7 vowel count
let vowelCount = (string) => {
	for(var i = 0, count = 0; i < string.length; i++){
		if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" || string[i] === "y"){
			count++;
		}
	}
	return count;
}

console.log(vowelCount("testpass"));

// Question 8 find wdi
let findWdi = (arr) => {
	let hasWdi;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === 'wdi'){
			hasWdi = true;
		}
	}
	return hasWdi;
}

console.log(findWdi([9,'Bart Simpson', true, '']));

// Question 9 sentance analyzer
let wordSort = (sentence) => {
	let sentenceArr = sentence.split(' ');
	let longWord;
	for(var i = 0;  i < sentenceArr.length; i++){
		if(!longWord){
			longWord = sentenceArr[i];
		}else if(sentenceArr[i].length > longWord.length){
			longWord = sentenceArr[i];
		}

	}
	return longWord;
}

console.log(wordSort("This is sdkfjsldjkdvlldldkjf a test sentence"));

//Question 10 it's triangle time. 
let printTriangle = (height) => {
	for(let i = 0,row = ''; i < height; i++){
		console.log(`${row}*`);
		row += '*';
	}
}

printTriangle(5);

//Question 11 

//Question 12 IT'S CHRISTMAS TREE TIME
let makeTree = (height) => {
	for(let i = 0,row = '',indentNum = height/4; i < height; i++){
		let indent = " ";
		indent = indent.repeat(indentNum);

		console.log(`${indent}${row}*`);
		row += '*';
		indentNum--;
	}
}

console.log(makeTree(10));


