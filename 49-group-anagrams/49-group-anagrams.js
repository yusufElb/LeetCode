/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const cache = {};
    
    for(let str of strs){
        
        let sortedKey = str.split('').sort().join(''); //now aet in first example
        
        (!cache[sortedKey]) ? cache[sortedKey] = [str] : cache[sortedKey].push(str);
        //if the key exists - push the string to it : if it doesn't exist, create an array with that string
    }
  
    return Object.values(cache);
    //returns the arrays of all elements in the key
};