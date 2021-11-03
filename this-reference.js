var hero = {
    _name: "John Doe",
    getSecretidentity: function(){
        console.log(this);
        return this._name
    }
}

var stoleSecretIdentity = hero.getSecretidentity.bind(hero)

console.log(stoleSecretIdentity());
console.log(hero.getSecretidentity());