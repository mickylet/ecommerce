let user;
    fetch("http://127.0.0.1:5000/show-sub/")
         .then((response) => response.json())
         .then((data) => {
             console.log(data.body);
             user = data.body;
         }) 
      
    function login() {
        let inputs=document.getElementById("inputs")
        
        let username = inputs.value;
        let password = inputs.value;

        let login = user.filter((user) => {
            return user.username == username && password == password;
            window.location.href = "../../html/index.html";
        });
    }
//         headers: {
//             "Content-Type": "application/json; charset=UTF-8",
//         },
//     })
//         .then((response) => response.json())
//         .then((json) => {
//             alert("YOU HAVE SUCCESSFULLY REGISTERED");
//             window.location.href =  "./index.html";
//             document.getElementById("login").reset();
//         });

// }


