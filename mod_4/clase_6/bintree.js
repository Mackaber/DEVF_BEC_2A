// Balanced Binary Tree
let tree = {
    root: {
        data: 5,
        left: {
            data: 3,
            left: {
                data: 1,
                left: null,
                right: null
            },
            right: {
                data: 4,
                left: null,
                right: null
            }
        },
        right: {
            data: 7,
            left: {
                data: 6,
                left: null,
                right: null
            },
            right: {
                data: 8,
                left: null,
                right: null
            }
        }
    }
}

function binarySearch(tree, value) {
    if(tree === null) {
        return false
    }

    if(tree.data === value) {
        return true
    }

    if(value < tree.data) {
        return binarySearch(tree.left, value)
    } else {
        return binarySearch(tree.right, value)
    }
}

let result = binarySearch(tree.root, 6)
console.log(result)