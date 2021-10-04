
let lowerCaseWords = (mixedArray) => {
    headache =  [];
    let checkArray = new Promise(function (resolve, reject) {
        if(Array.isArray(mixedArray) && mixedArray.length > 1){   
            mixedArray.filter(str => {
                if(typeof str == "string"){
                   headache.push(str.toLowerCase())
                }
            resolve (headache)
        })} 
        else {
            let error={'error':'input array incorrect!'};
            reject(error)
        }
    });
    return checkArray;
}
 
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']


lowerCaseWords(mixedArray).then(result=>console.log(result))
                            .catch((error) => console.log(error))

