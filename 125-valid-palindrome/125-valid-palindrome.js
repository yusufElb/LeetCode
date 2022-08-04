/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi,'');
    let leftIndex = 0;
    let rightIndex = s.length -1;
    while(leftIndex < rightIndex){
        if(s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()) return false;
        leftIndex++;
        rightIndex--;
    }
    return true
};