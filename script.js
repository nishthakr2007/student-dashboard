const btn = document.querySelector("#input");
btn.addEventListener("click", (event) => {
    event.preventDefault();
    
    let userInput = document.querySelector("#username");
    let username = userInput.value;
    localStorage.setItem("username", username);
    window.location.href = "dashboard.html";
    });



