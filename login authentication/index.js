
let UserArr = [
    {
      username: "krishna",
      password: "12345678",
    },
    {
      username: "bittu",
      password: "56789123",
    },
    {
      username: "janhvi",
      password: "11112222",
    },
  ];
  
  function check() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    for (let i = 0; i < UserArr.length; i++) {
      if (username === UserArr[i].username && password === UserArr[i].password) {
        
        window.location.href = "secure.html"; 
        return;
      }
    }
    alert("Invalid username or password");
  }
  
  function reg() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
  
    for (let i = 0; i < UserArr.length; i++) {
      if (username === UserArr[i].username) {
        alert("Username already exists");
        return;
      }
    }
  
    UserArr.push({ username: username, password: password });
    alert("Registration successful");
  }