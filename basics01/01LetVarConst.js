const accountId = 144553
let accountEmail = "sanch@gmail.com"
var accountPassword = "12345"

// accountId = 2 // not allowed


accountEmail = 'sanc@gmail.com'
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])