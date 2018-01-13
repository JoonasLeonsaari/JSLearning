"use strict";

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("joonas") );

function checkSpam(str) {
    let ModifiedStr = str.toUpperCase();
    return ModifiedStr.includes("VIAGRA") || ModifiedStr.includes("XXX");
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

function truncate(str, maxlength) {
    if (str.length > maxlength){
        return (str.slice(0, maxlength) + "...");
    }
}
alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate("LoremIpsum", 5));




function extractCurrencyValue(str) {
    return +str.slice(1);
}

alert( extractCurrencyValue("$500") );