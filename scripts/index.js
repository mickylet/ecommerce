function addPeople() {
    const inputs = document.getElementsByTagName("input");
  
    fetch("https://guarded-bastion-38164.herokuapp.com/add-new/", {
      method: "POST",
      body: JSON.stringify({
        username: inputs[0].value,
        password: inputs[1].value,
        confirm_password: inputs[2].value,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        alert("YOU HAVE SUCCESSFULLY REGISTERED");
        window.location.href = "login.html";
        document.getElementById("sign-up").reset();
      });
  }