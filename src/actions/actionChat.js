
export const registroChat = (name, email,password) => {
    console.log("hola sientre")
    console.log(email)
    console.log(name)
    console.log(password)
    console.log("hola sientre")
    var axios = require('axios');
var data = {
    "username": email,
    "secret": password,
    "email": email,
    "first_name": name
   }

var config = {
    method: 'post',
    url: 'https://api.chatengine.io/users/',
    headers: {
        'PRIVATE-KEY': '{{9cd8488d-13cc-4d3a-8ecf-ee89a5690313}}'
    },
    data : data
};

axios(config)
.then(function (response) {
    console.log(JSON.stringify(response.data));
})
.catch(function (error) {
    console.log(error);
});

}



