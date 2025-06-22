const inputTask= document.getElementById("input-task");
const taskList= document.getElementById("task-list");
const btn= document.getElementById("btn");
const New= document.getElementById("new");

/* const: متغير ثابت
let: متغير قابل للتغيير*/

//Add new task
function addTask(){ 

    let taskValue = inputTask.value; 
    
    if (!taskValue){
        alert("You must add a value");
    }
    else {
        let li = document.createElement("li"); 
        let span = document.createElement("span"); 

        li.innerHTML = taskValue;
        taskList.appendChild(li);

        span.innerHTML = "&times;"; 
        li.appendChild(span);
    }
    // clear input after adding
    inputTask.value="";
    setTask();
}
btn.addEventListener("click", addTask);

// اشغل زر الاد بالانتر
inputTask.addEventListener("keydown", function(event){
    if (event.key=== "Enter")
        addTask();
})

taskList.addEventListener("click",function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
         //toggleبمعنى يضيف او يشيل الكلاس اذا كان موجود
        // e بمعنى event
        // target اللي صار عليه الضغط 
         setTask();}
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        setTask();
    }
})
// save list data to local storge
function setTask(){
    localStorage.setItem("lists", taskList.innerHTML);
}// بعد ما اكتبها لازم استدعيها فوق 

//load the saved tasks from local storge
function loadTask(){
    taskList.innerHTML = localStorage.getItem("lists");
} 

New.addEventListener("click", function(e){
    taskList.innerHTML=""
    setTask();
})

loadTask();//اذا ما حطيتها ما بستفيد من function setTask

