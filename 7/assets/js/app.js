// Define UI Variables
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation

let DB;
// DOM load event
document.addEventListener('DOMContentLoaded', (e) => {
  let TasksDB = indexedDB.open('tasks', 1);

  TasksDB.onerror = function (event) {
    console.log('There was an error');
  };

  TasksDB.onsuccess = function (event) {
    console.log('Database Ready');

    DB = TasksDB.result;
    displayTaskList();

    console.log(DB);
  };

  TasksDB.onupgradeneeded = function (e) {
    // the event will be the database
    let db = e.target.result;

    // create an object store,
    // keypath is going to be the Indexes
    let objectStore = db.createObjectStore('tasks', {
      keyPath: 'id',
      autoIncrement: true,
    });

    // createindex: 1) field name 2) keypath 3) options
    objectStore.createIndex('taskname', 'taskname', { unique: false });

    console.log('Database ready and fields created!');
  };

  form.addEventListener('submit', addNewTask);

  function addNewTask(e) {
    // create a new object with the form info
    e.preventDefault();
    let newTask = {
      taskname: taskInput.value,
    };
    // Insert the object into the database
    let transaction = DB.transaction(['tasks'], 'readwrite');
    let objectStore = transaction.objectStore('tasks');

    let request = objectStore.add(newTask);
    // on success
    request.onsuccess = () => {
      form.reset();
      console.log('form reseted!');
    };
    transaction.oncomplete = () => {
      console.log('New appointment added');
      displayTaskList();
    };
    transaction.onerror = () => {
      console.log('There was an error, try again!');
    };
  }

  function displayTaskList() {
    // clear the previous task list
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }

    // create the object store
    let objectStore = DB.transaction('tasks').objectStore('tasks');

    objectStore.openCursor().onsuccess = function (e) {
      // assign the current cursor
      let cursor = e.target.result;
      const li = document.createElement('li');
      // Adding a class
      li.className = 'collection-item'; // Create new element for the link
      const link = document.createElement('a');
      // Add class and the x marker for a
      link.className = 'delete-item secondary-content';
      li.appendChild(link);
      if (cursor) {
        link.innerHTML = `<i class="fa fa-remove"></i>  &nbsp; <a href="./edit.html?id=${cursor.value.id}"><i class="fa fa-edit"></i> </a> `;
        li.setAttribute('data-task-id', cursor.value.id);
        // Create text node and append it
        li.appendChild(document.createTextNode(cursor.value.taskname));
        taskList.append(li);
        cursor.continue();
      }
    };
  }

  clearBtn.addEventListener('click', clearAllTasks);
  //clear tasks
  function clearAllTasks() {
    //Create the transaction and object store
    let transaction = DB.transaction('tasks', 'readwrite');
    let tasks = transaction.objectStore('tasks');

    // clear the the table
    tasks.clear();
    //repaint the UI
    displayTaskList();

    console.log('Tasks Cleared !!!');
  }

  taskList.addEventListener('click', removeTask);

  function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
      if (confirm('Are You Sure about that ?')) {
        // get the task id
        let taskID = Number(
          e.target.parentElement.parentElement.getAttribute('data-task-id')
        );
        // use a transaction
        let transaction = DB.transaction(['tasks'], 'readwrite');
        let objectStore = transaction.objectStore('tasks');
        objectStore.delete(taskID);

        transaction.oncomplete = () => {
          e.target.parentElement.parentElement.remove();
        };
      }
    }
  }
});
