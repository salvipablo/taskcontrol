/*
* Declaration of variables
*/

// Types
type tyTasks = import('./types').intTasks;

// General
const cmpCntPagination: any = document.getElementById("cntPagination");
const cmpCntPendingTasks: any = document.getElementById("tareasPendientes");
const cmpCntExecutionTasks: any = document.getElementById("tareasEjecucion");
const cmpCntCompletedTasks: any = document.getElementById("tareasFinalizadas");
const DISPLAYTASK: number = 5;
const parameterValues = window.location.search;

const pendingTasks: tyTasks[] = [
    {id: 1, taskTitle: "Tarea 5.", description: "Descripcion 5.", status: "pending"},
    {id: 2, taskTitle: "Tarea 6.", description: "Descripcion 6.", status: "pending"},
    {id: 3, taskTitle: "Tarea 7.", description: "Descripcion 7.", status: "pending"},
    {id: 4, taskTitle: "Completar planilla de soportes.", description: "Terminar de cargar soportes del dia y agregar proximos.", status: "pending"},
    {id: 5, taskTitle: "Tarea 8.", description: "Descripcion 8.", status: "pending"},
    {id: 6, taskTitle: "Tarea 9.", description: "Descripcion 9.", status: "pending"},
    {id: 7, taskTitle: "Tarea 10.", description: "Descripcion 10.", status: "pending"},
    {id: 8, taskTitle: "Tarea 11.", description: "Descripcion 11.", status: "pending"},
    {id: 9, taskTitle: "Tarea 12.", description: "Descripcion 12.", status: "pending"},
    {id: 10, taskTitle: "Tarea 13.", description: "Descripcion 13.", status: "pending"},
    {id: 11, taskTitle: "Tarea 14.", description: "Descripcion 14.", status: "pending"},
    {id: 12, taskTitle: "Tarea 15.", description: "Descripcion 15.", status: "pending"},
    {id: 13, taskTitle: "Tarea 16.", description: "Descripcion 16.", status: "pending"}
];

const runningTasks: tyTasks[] = [
    {id: 1, taskTitle: "Tarea Pendiente 1.", description: "Descripcion p 1.", status: "running"},
    {id: 2, taskTitle: "Tarea Pendiente 2.", description: "Descripcion p 2.", status: "running"},
    {id: 3, taskTitle: "Tarea Pendiente 3.", description: "Descripcion p 3.", status: "running"},
    {id: 4, taskTitle: "Tarea Pendiente 4.", description: "Descripcion p 4.", status: "running"},
    {id: 5, taskTitle: "Tarea Pendiente 5.", description: "Descripcion p 5.", status: "running"},
    {id: 6, taskTitle: "Tarea Pendiente 6.", description: "Descripcion p 6.", status: "running"}
];

const completedTasks: tyTasks[] = [
    {id: 1, taskTitle: "Tarea Completada 1.", description: "Descripcion c 1.", status: "completed"},
    {id: 2, taskTitle: "Tarea Completada 2.", description: "Descripcion c 2.", status: "completed"},
    {id: 1, taskTitle: "Tarea Completada 3.", description: "Descripcion c 3.", status: "completed"},
    {id: 2, taskTitle: "Tarea Completada 4.", description: "Descripcion c 4.", status: "completed"},
    {id: 1, taskTitle: "Tarea Completada 5.", description: "Descripcion c 5.", status: "completed"},
    {id: 1, taskTitle: "Tarea Completada 6.", description: "Descripcion c 5.", status: "completed"}
];

/*
* Functions
*/

let idNextToShow = (initialId: number) => initialId == 1 ? 0 : initialId - 1;

function showTasksPending(initialId: number) {
    let html = "<h2>Tareas Pendientes.</h2>";

    let nextToShow = idNextToShow(initialId)

    for (let i = 0; i < DISPLAYTASK; i++) {
        if (pendingTasks[nextToShow] != undefined) {
            html += `
                <div class="tareasPendientes--task">
                    <div style="height: 50px; display: flex; align-items: center;">
                        <div class="tareasPendientes--task--title">
                            <img class="iconTask" src="images/pending.png">    
                            <h3 class="titleTask">${pendingTasks[nextToShow].taskTitle}</h3>
                        </div>
                        <div class="tareasPendientes--task--iconsEdit">
                            <img class="iconTask" src="images/edit.png">
                            <img class="iconTask" src="images/delete.png">
                        </div>
                    </div>
                    <div>
                        <p class="despcrTask">${pendingTasks[nextToShow].description}</p>
                    </div>
                </div>
            `;
        }
        nextToShow++;
    }
    cmpCntPendingTasks.innerHTML = html;
}

function showTasksRunning(initialId: number) {
    let html = "<h2>Tareas en ejecucion.</h2>";

    let nextToShow = idNextToShow(initialId)

    for (let i = 0; i < DISPLAYTASK; i++) {
        if (runningTasks[nextToShow] != undefined) {
            html += `
                <div class="tareasEjecucion--task">
                    <div style="height: 50px; display: flex; align-items: center;">
                        <div class="tareasEjecucion--task--title">
                            <img class="iconTask" src="images/pending.png">    
                            <h3 class="titleTask">${runningTasks[nextToShow].taskTitle}</h3>
                        </div>
                        <div class="tareasEjecucion--task--iconsEdit">
                            <img class="iconTask" src="images/edit.png">
                            <img class="iconTask" src="images/delete.png">
                        </div>
                    </div>
                    <div>
                        <p class="despcrTask">${runningTasks[nextToShow].description}</p>
                    </div>
                </div>
            `;
        }
        nextToShow++;
    }
    cmpCntExecutionTasks.innerHTML = html;
}

function showTasksCompleted(initialId: number) {
    let html = "<h2>Tareas Finalizadas.</h2>";

    let nextToShow = idNextToShow(initialId)

    for (let i = 0; i < DISPLAYTASK; i++) {
        if (completedTasks[nextToShow] != undefined) {
            html += `
                <div class="tareasFinalizadas--task">
                    <div style="height: 50px; display: flex; align-items: center;">
                        <div class="tareasFinalizadas--task--title">
                            <img class="iconTask" src="images/pending.png">    
                            <h3 class="titleTask">${runningTasks[nextToShow].taskTitle}</h3>
                        </div>
                        <div class="tareasFinalizadas--task--iconsEdit">
                            <img class="iconTask" src="images/edit.png">
                            <img class="iconTask" src="images/delete.png">
                        </div>
                    </div>
                    <div>
                        <p class="despcrTask">${runningTasks[nextToShow].description}</p>
                    </div>
                </div>

            `;
        }
        nextToShow++;
    }
    cmpCntCompletedTasks.innerHTML = html;
}

function showTasks() {
    let urlParams: any = new URLSearchParams(parameterValues);
    let pageNumber: number = 1;

    if ( urlParams.has('page') ) pageNumber = parseInt(urlParams.get('page'));

    let initialId: number = 1 + (DISPLAYTASK * (pageNumber-1));

    showTasksPending(initialId);
    showTasksRunning(initialId);
    showTasksCompleted(initialId);
}

function calculateNumberPages( numberPendingTasks: number, numberRunningTasks: number, numberCompletedTasks: number, numberTasksToDisplay: number ) {
    let numberPendingPagesInt: number = Math.floor(numberPendingTasks / numberTasksToDisplay);
    let numberRunningPagesInt: number = Math.floor(numberRunningTasks / numberTasksToDisplay);
    let numberFinishedPagesInt: number = Math.floor(numberCompletedTasks / numberTasksToDisplay);

    console.log(numberPendingPagesInt);
    console.log(numberRunningPagesInt);
    console.log(numberFinishedPagesInt);
    
    if ( ( numberPendingTasks/numberTasksToDisplay ) > numberPendingPagesInt ) numberPendingPagesInt +=1;
    if ( ( numberRunningTasks/numberTasksToDisplay ) > numberRunningPagesInt ) numberRunningPagesInt +=1;
    if ( ( numberCompletedTasks/numberTasksToDisplay ) > numberFinishedPagesInt ) numberFinishedPagesInt +=1;

    if ( numberPendingPagesInt >= numberRunningPagesInt && numberPendingPagesInt >= numberFinishedPagesInt ) return numberPendingPagesInt;
    if ( numberRunningPagesInt >= numberPendingPagesInt && numberRunningPagesInt >= numberFinishedPagesInt ) return numberRunningPagesInt;
    return numberFinishedPagesInt;
}

function pagination() {
    let pages = calculateNumberPages(pendingTasks.length, runningTasks.length, completedTasks.length, DISPLAYTASK);

    let html = "";

    for ( let i = 0; i < pages; i++ ) {
        html += `
            <a href="index.html?page=${i+1}">${i+1}</a>
        `;
    }

    cmpCntPagination.innerHTML = html;
}

function newTask(id: number, taskTitle: string, description: string, status: string) {
    return {"id": id, "taskTitle": taskTitle, "description": description, "status": status};
}

function createTask(taskTitle: string, description: string, status: string) {
    console.log("Create Task");
    let nextId: number = 0;
    if ( status == "pending") {
        nextId = pendingTasks[pendingTasks.length - 1].id + 1;
        pendingTasks.push(newTask(nextId, taskTitle, description, status))
        console.log(pendingTasks);
    }
    if ( status == "running") {
        nextId = runningTasks[runningTasks.length - 1].id + 1;
        runningTasks.push(newTask(nextId, taskTitle, description, status))
    }
    if ( status == "completed") {
        nextId = completedTasks[completedTasks.length - 1].id + 1;
        completedTasks.push(newTask(nextId, taskTitle, description, status))
    }
}

/*
* Program
*/

showTasks();

pagination();