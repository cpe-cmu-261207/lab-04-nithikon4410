const cout = console.log
if (localStorage.getItem('userData') == null) {
    const dataformat = {
        incompleteArr: {
            size: 0,
            data: []
        },
        completeArr: {
            size: 0,
            data: []
        }
    }
    localStorage.setItem('userData', JSON.stringify(dataformat))
}

const charCodeCheck = (ev) => {
    if ((ev.which || ev.keyCode) === 13) EnteringInput()
}

function emptyCheck(input) {
    if (input.length == 0 || input.indexOf(' ') == 0) {
        document.getElementById("TaskInput").value = ""
        alert("Task cannot be empty")
        return false
    }
    return true
}

const taskbxCons = (TaskCalled) => {
    const taskTe = document.createElement('p')
    const task1 = document.createElement('del')
    const taskBx = document.createElement('div')
    const taskActionBar = document.createElement('div')
    const taskDone = document.createElement('button')
    const taskDel = document.createElement('button')

    const DoneAction = () => {
        document.getElementById("CompletedBox").append(taskTe)
        taskTe.className = "taskTe"

        
        document.getElementById("CompletedBox").append(task1)
        task1.className = "taskTe"

        taskBx.append(task1)


    }

    const DeleteAction = () => {
        taskBx.remove()
    }
//done and deleteappear
    const ButtonAppear = () => {
        taskDone.style.visibility = "visible"
        taskDel.style.visibility = "visible"

         
    }
//done and delete disappear
    const ButtonGone = () => {
        taskDone.style.visibility = "hidden"
        taskDel.style.visibility = "hidden"
    }



    taskBx.className = "taskB"
    taskTe.className = "taskTe1"
    taskActionBar.className = "text-center space-x-2"


    taskDel.className = "delBt"
    taskDel.style.visibility = "hidden"
    taskDone.className = "doneBt"
    taskDone.style.visibility = "hidden"

    
    task1.innerHTML = TaskCalled
    taskTe.innerHTML = TaskCalled
    taskDone.innerHTML = "Done"
    taskDel.innerHTML = "Delete"


    taskBx.addEventListener('mouseenter', ButtonAppear)
    taskBx.addEventListener('mouseleave', ButtonGone)
    taskDone.addEventListener("click", DoneAction)
    taskDel.addEventListener("click", DeleteAction)

    if(taskDone){

    }
    

    taskActionBar.append(taskDone)
    taskActionBar.append(taskDel)
    taskBx.append(taskTe)
    taskBx.append(taskActionBar)

    

    document.getElementById("TaskBox").prepend(taskBx)

}



const EnteringInput = () => {
    cout("JS: you just add some thing")
    const taskIn = document.getElementById("TaskInput").value

    if (emptyCheck(taskIn)) {
        taskbxCons(taskIn)
        
        document.getElementById("TaskInput").value = ""
    }
}

const complTaskadding = (complTask) => {
    const taskTe = document.createElement('p')
    taskTe.innerHTML = complTask
    document.getElementById("CompletedBox").append(taskTe)
    taskTe.className = "taskTe"
}
