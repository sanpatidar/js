const accountId = 12312860
let accountEmail = "sanskar@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;

// accountId = 2 // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "2121"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use (var)
because of isuueu in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);