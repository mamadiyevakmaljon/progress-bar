let toDo = [];


let Done = [];

let selectedIndex = -1;

function addTask() {
    let task = document.getElementById("task").value;

    if(task.length>0){
        document.getElementById("alert").innerHTML = ``;
        toDo.push(task);
        console.log(toDo);
        document.getElementById("task").value = "";
        drawToDo();
    } else {

        document.getElementById("alert").innerHTML = `<div class="alert alert-danger mt-3">Xatolik ma'lumotni kiriting!!!</div>`
    }
    let newBoard = {
        toDo: toDo,
    };
}


function drawToDo(){
    let result = "";

    for(let i = 0; i<toDo.length; i++){
        result+=`
        <div  class="alert alert-primary mt-3 d-flex justify-content-between progress-bar-striped">
          <strong onclick="editProgress(${i})">${toDo[i]}</strong>
          <div class="buttons">
          <button class="btn btn-success" onclick="del(${i})">Del</button>
          <button class="btn btn-primary" onclick="checkToDo(${i})">✔</button>
          </div>
        </div>
      `
    }

    document.getElementById("todo").innerHTML = result;

    let result1 = "";

    for(let i = 0; i<Done.length; i++){
        result1+=`
        <div class="alert alert-danger mt-3 d-flex justify-content-between progress-bar-striped">
          <strong>${Done[i]}</strong>
          <div class="buttons">
          <button class="btn btn-danger" onclick="del1(${i})">Del</button>
          <button class="btn btn-warning" onclick="checkDone(${i})">❌</button>
        </div>
        </div>
      `
    }

    document.getElementById("done").innerHTML = result1;
}

function checkToDo (index) {
    Done.push(toDo[index]);
    toDo.splice(index,1);
    console.log(Done);
    drawToDo();
    progressBar();
}

function progressBar () {
    let progress = document.getElementById("progress");
    let percent = Done.length*100/ (toDo.length+Done.length);

    percent = Math.floor(percent);
    progress.style.width = percent+"%";
    progress.innerHTML = `<strong>${percent}%</strong>`
}

function editProgress(index) {
    let task = document.getElementById("task").value;
    document.getElementById("task").value = toDo[index];
    selectedIndex = index;
}

function checkDone (index) {
    toDo.push(Done[index]);
    Done.splice(index,1);
    console.log(toDo);
    drawToDo();
    progressBar();
}

function del(index) {
    toDo.splice(index,1);
    drawToDo();
}

function del1(index) {
    Done.splice(index,1);
    drawToDo();
    progressBar2();
}

function progressBar2 () {
    let progress = document.getElementById("progress");
    let percent = Done.length*100/(toDo.length+Done.length);

    percent = Math.floor(percent);
    progress.style.width = percent+"%";
    progress.innerHTML = `<strong>${percent}%</strong>`
}