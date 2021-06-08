function LoadFunction(){
    var buttonClick = document.getElementById('button');
    buttonClick.addEventListener('click',buttonClickFunction);
}
function calculateFunction(grade){
    var letterGrade = grade;
    var numberGrade;
    switch(letterGrade){
        case 'A+':
            numberGrade = 25;
        break;
        case 'A':
            numberGrade = 23;
        break;
        case 'A-':
            numberGrade = 21;
        break;
        case 'B+':
            numberGrade = 20;
        break;
        case 'B':
            numberGrade = 19;
        break;
        case 'B-':
            numberGrade = 18;
        break;
        case 'C+':
            numberGrade = 17;
        break;
        case 'C':
            numberGrade = 16;
        break;
        case 'C-':
            numberGrade = 15;
        break;
        case 'D+':
            numberGrade = 14;
        break;
        case 'D':
            numberGrade = 13;
        break;
        case 'D-':
            numberGrade = 12;
        break;
        case 'F+':
            numberGrade = 11;
        break;
        case 'F':
            numberGrade = 8;
        break;
        case 'F-':
            numberGrade = 4;
        break;
        case 'G':
            numberGrade = 0;
        break;
    }
    return numberGrade;
}
function finalGrade(tempGrade){
    var finalLetterGrade = document.getElementById('resultdiv');
    if (tempGrade >= 24.0) {
		finalLetterGrade.firstChild.nodeValue = 'A+ ';
	} else if (tempGrade >= 22.0) {
		finalLetterGrade.firstChild.nodeValue = 'A  ';
	} else if (tempGrade >= 20.50) {
		finalLetterGrade.firstChild.nodeValue = 'A- ';
	}else if (tempGrade >= 19.50) {
		finalLetterGrade.firstChild.nodeValue = 'B+ ';
	}else if (tempGrade >= 18.50) {
		finalLetterGrade.firstChild.nodeValue = 'B  ';
	}else if (tempGrade >= 17.50) {
        finalLetterGrade.firstChild.nodeValue = 'B- ';
	}else if (tempGrade >= 16.50) {
		finalLetterGrade.firstChild.nodeValue = 'C+ ';
	}else if (tempGrade >= 15.50) {
		finalLetterGrade.firstChild.nodeValue = 'C  ';
	}else if (tempGrade >= 14.50) {
		finalLetterGrade.firstChild.nodeValue = 'C- ';
	}else if (tempGrade >= 13.50) {
		finalLetterGrade.firstChild.nodeValue = 'D+ ';
	}else if (tempGrade >= 12.50) {
		finalLetterGrade.firstChild.nodeValue = 'D  ';
	}else if (tempGrade >= 11.50) {
		finalLetterGrade.firstChild.nodeValue = 'D- ';
	}else if (tempGrade >= 9.50) {
		finalLetterGrade.firstChild.nodeValue = 'F+ ';
	}else if (tempGrade >= 6.00) {
		finalLetterGrade.firstChild.nodeValue = 'F  ';
	}else if (tempGrade >= 2.00) {
		finalLetterGrade.firstChild.nodeValue = 'F- ';
	}else {
		finalLetterGrade.firstChild.nodeValue = 'G  ';
	}
}
function buttonClickFunction(){
    var result1 = document.getElementById('firstgrade');
    var result2 = document.getElementById('secondgrade');
    var grade1 = calculateFunction(result1.value) /2;
    var grade2 = calculateFunction(result2.value) /2;
    console.log("Grade1: " + grade1);
    console.log("Grade2: " + grade2);
    
    var tempGrade = grade1 + grade2;
    console.log("calculated: " + tempGrade);
    finalGrade(tempGrade);
    //finalGrade(calculateFunction(document.getElementById('firstgrade').value)+calculateFunction(document.getElementById('secondgrade').value)/2);
}
document.addEventListener('DOMContentLoaded', LoadFunction);