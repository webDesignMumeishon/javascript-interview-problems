const removeDuplicates1 = (arr) => {
    const ans = []
    const visited = {}

    arr.forEach(element => {
        if(!visited[element]){
            visited[element] = true
            ans.push(element)
        }
    });

    return ans
    

}

const removeDuplicates2 = (arr) => {
    obj = {}

    for(let i of arr){
        console.log(i);
        obj[i] = true
    }

    return Object.keys(obj)

}

const removeDuplicates3 = (arr) => {
    return [...new Set(arr)]
}

const arr = [1,2,3,1,3,6,8,99]
console.log(removeDuplicates3(arr));