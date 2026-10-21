
let userName = localStorage.getItem("username"); // Fallback if name is empty
let msg = document.querySelector("#message_username");
if (msg) {
  msg.innerText = "Welcome " + userName + "!";
}

let btn = document.querySelectorAll(".btn");
let task = document.querySelectorAll(".addtask");
let userTask = document.querySelectorAll(".to-do-task");

//rendering of data after page refreshes
userTask.forEach((list,index) => {
  let savedString = sessionStorage.getItem("rawtask"+index); //data retrive 
  if (savedString){
    let taskArray = savedString.split("|");
    taskArray.forEach((taskText) =>{
      let li = document.createElement("li");
      li.innerText = taskText;
      list.appendChild(li);

    })
  }

});

btn.forEach((button,index) =>{
  button.addEventListener("click", ()=>{
    let liContent = task[index].value.trim();

    if(liContent === "") {
      return;
    }

    let li = document.createElement("li");
    li.innerText = liContent;

    let oldTask = sessionStorage.getItem("rawtask"+index);
    let updatedTask = oldTask? oldTask + "|" + liContent : liContent;
    sessionStorage.setItem("rawtask"+index, updatedTask);
    
    task[index].value = "";
    userTask[index].appendChild(li);

  })
})