

function t(func,...a) {
    console.log(...a, ' : ',func(...a));
}

function multiplyUntilInfinity(ar) {
    //multiply all numbers in the array until you reach Infinity
    //skip anything that is not a positive number
    //return the product (the result from multiplication)
    //(if you see Infinity, skip the rest of the array and return the product)
    let result = 1
    for (num of ar) {
        if (num == Infinity) {
            break
        }
        if (typeof num == "number" && num > 0 ) {
            result*=num
        }
    }
    return result
}

function replaceAllNegativeValueWith(ar, increment) {
    //change all negative numbers (except -Infinity) in the array 
    //by adding "increment" to them until they are positive
    //everything else remain the same
    //return the result but do not change the original array
    let result = [];
    for (num of ar) {
        if (num < 0) {
            result.push(num + increment)
            continue
        }
        result.push(num);
    }
    return result
}
 

t(multiplyUntilInfinity,[1,2,Infinity,3]);
t(replaceAllNegativeValueWith,[-1,-2,-Infinity],10);