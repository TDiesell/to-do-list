document.querySelector(".finished").addEventListener("click" , finished)
document.querySelector(".clearAll").addEventListener("click" , clearAll)



function toDoList(){
    var item = document.getElementById("toDoInput").value
    console.log(item)
    var newItem = document.createElement("li")
    var deleteButton= document.createElement("button")
    deleteButton.innerText= 'delete'
    
    newItem.appendChild(document.createTextNode(item))
    
    newItem.appendChild(deleteButton)
    document.getElementById("toDoList").appendChild(newItem)
    newItem.addEventListener("click", strike)
    deleteButton.addEventListener("click", deleteOne)
}

function strike(e){
    console.log("strike")
    e.target.classList.toggle("strike")
}

function finished(){
    document.querySelectorAll(".strike").forEach(task=>{
        task.remove()
    })

}


function clearAll(){
    document.querySelectorAll("li").forEach(task=>{
        task.remove()
    })

}

function deleteOne(e){
    e.target.parentNode.remove()
}
