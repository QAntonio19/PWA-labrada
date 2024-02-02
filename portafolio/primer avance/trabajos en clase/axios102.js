const axios = require('axios');
const url = "https://jsonplaceholder.typicode.com/users"
// axios.get(url).then(response => {
//     response.data.forEach(element => {
//         console.log("ID: "+ element.id + " UserName: "
//             + element.username + " Email: " + element.email)
//     });
// })        

axios.post(url,{
    username: "Foo",
    email: "Foo@gmai.com"
}).then((response) => {
    console.log(response.data)
})