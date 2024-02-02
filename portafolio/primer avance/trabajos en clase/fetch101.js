// var url = "http://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript"

// var respondData = fetch(url).then(response => response.json());

// respondData.then(({items, has_more, quota_max, quota_remaining}) => {
//     console.log("Quota Max: " + quota_max + "\n")
//     for (const{title,question_id,owner} of items) {
//         console.log(question_id + " title: " + title + " user: "
//             + owner.display_name)
//     }
// })

var url = "https://jsonplaceholder.typicode.com/users"

// fetch(url).then(response => response.json())
//     .then(response => {
//         response.forEach(element => {
//             console.log("user: " + element.username 
//             + " city: " + element.address.city)
//         })
//     })

// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content_type": "application/json"
//     },
//     body: JSON.stringify({
//         username: "Foo",
//         email: "foo@gmail.com"
//     })
// }).then(respose => respose.json())
//     .then(respose => console.log(respose))

fetch(url).then(respose => respose.json())
    .then(respose => {
        respose.forEach(element => {
            console.log("ID: " + element.id +
            " userId: " + element.userID + " post_title " 
                + element.title)
        });
    });

fetch(url, {
     method: "POST",
     headers: {
         "Content_type": "application/json"
     },
     body: JSON.stringify({
         userId: 2,
         email: "JUAN"
     })
}).then(respose => respose.json())
     .then(respose => console.log(respose))