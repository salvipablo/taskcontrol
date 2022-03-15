/*
* Declaration of variables
*/

// Types
type tyTasks = import('./types').intTasks;

// General
const cmpCntPagination = document.getElementById("cntPagination");
const cmpCntPendingTasks: any = document.getElementById("tareasPendientes");
const cmpCntExecutionTasks: any = document.getElementById("tareasEjecucion");
const cmpCntCompletedTasks: any = document.getElementById("tareasFinalizadas");
const DISPLAYTASK = 5;
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
    {id: 5, taskTitle: "Tarea Pendiente 6.", description: "Descripcion p 6.", status: "running"}
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
                    <h3 class="titleTask"><span><img class="iconTask" src="images/pending.png"></span>${pendingTasks[nextToShow].taskTitle}</h3>
                    <p class="despcrTask">${pendingTasks[nextToShow].description}</p>
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
                    <h3 class="titleTask"><span><img class="iconTask" src="images/task.png"></span>${runningTasks[nextToShow].taskTitle}</h3>
                    <p class="despcrTask">${runningTasks[nextToShow].description}</p>
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
                    <h3 class="titleTask"><span><img class="iconTask" src="images/checked.png"></span>${completedTasks[nextToShow].taskTitle}</h3>
                    <p class="despcrTask">${completedTasks[nextToShow].description}</p>
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

/*
* Events
*/


/*
* Program
*/

showTasks();