export function toggleClass(strWithClasses, addClass){
    var returnStr = strWithClasses.split(/\s/);
    
    return !strWithClasses.includes(addClass) ?
        strWithClasses.concat(" ", addClass) :
        returnStr.filter(str => str !== addClass).join(" ");
}