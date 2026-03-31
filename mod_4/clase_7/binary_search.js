const binarySearch = (arr, target, low, high) => {
    if(low > high) {
        return -1 // "No se encontró el valor"
    }

    let mid = Math.floor((low + high) / 2)

    if(arr[mid] === target) {
        return mid
    } else if (arr[mid] > target) {
        let result = binarySearch(arr, target, low, mid - 1)
        console.log(result)
        return result
    } else {
        let result = binarySearch(arr, target, mid + 1, high)
        console.log(result)
        return result
    }
}


let myarr = [442, 478, 503, 511, 546, 620, 645, 715, 723]
//let result = binarySearch(myarr, 503, 0, myarr.length - 1)
//console.log(result)

let result = binarySearch(myarr, 503, 0, 3)
console.log(result)