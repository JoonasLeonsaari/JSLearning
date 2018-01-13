let userInputNumber;

do {
    userInputNumber=prompt("Give me a number greater than 100 :");
    if (userInputNumber == ""){
        alert("Cancelled");
    }else if (userInputNumber<100){
        alert("ting goes skrrrr")
    }
}while(userInputNumber>100);


let browser = prompt("gief ur browser name");
if (browser == "edge"){
    alert("You've got Edge!")
}else if (browser == "chrome"){
    alert("You've got chrome!")
}else if (browser == "firefox"){
    alert("You've got firefox!")
}else if (browser == "safari") {
    alert("You've got safari!")
}else if (browser == "opera") {
    alert("You've got opera!")
}else{
    alert("we hope this page looks ok!");
}

switch (a) {
    case "0":
        alert(0);
        break;
    case "1":
        alert(1);
        break;
    case "2":
    case "3":
        alert("2,3");
        break;
}