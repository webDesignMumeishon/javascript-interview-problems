function secretVarible(){
    const private = "this is a private variable"
    return function(){
        return private
    }
}

const getPrivateVariable = secretVarible()
console.log(getPrivateVariable());