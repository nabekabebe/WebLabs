//UI variables
const form = document.querySelector('#task-form'); //The form at the top
const taskInput = document.querySelector('#task'); //the task input text field

//read from q string
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));
//DB
var DB;

// Add Event Listener [on Load]
document.addEventListener('DOMContentLoaded', () => {
  // create the database
  let TasksDB = indexedDB.open('tasks', 1);

  // if there's an error
  TasksDB.onerror = function () {
    console.log('There was an error');
  };
  // if everything is fine, assign the result to the instance
  TasksDB.onsuccess = function () {
    // console.log('Database Ready');

    // save the result
    DB = TasksDB.result;

    // display the Task
    displayTask();
  };

  function displayTask() {
    var transaction = DB.transaction(['tasks']);
    var objectStore = transaction.objectStore('tasks');
    var request = objectStore.get(id);

    request.onsuccess = function (event) {
      if (request.result) {
        taskInput.value = request.result.taskname;
      } else {
        console.log('No data record');
      }
    };

    request.onerror = function (event) {
      console.log('Transaction failed');
    };
  }

  form.addEventListener('submit', updateTask);

  function updateTask(e) {
    e.preventDefault();
    // Check empty entry
    if (taskInput.value === '') {
      taskInput.style.borderColor = 'red';
      return;
    }
    var transaction = DB.transaction(['tasks'], 'readwrite');
    var objectStore = transaction.objectStore('tasks');

    objectStore.openCursor().onsuccess = function (event) {
      const cursor = event.target.result;
      if (cursor) {
        if (cursor.value.id === id) {
          const updateData = cursor.value;
          console.log('old value', cursor.value);
          updateData.taskname = taskInput.value;
          updateData.date = Date.now();
          const request = cursor.update(updateData);
          request.onsuccess = function () {
            console.log('new value', cursor.value);
          };
        }
        cursor.continue();
      } else {
        console.log('Entries displayed.');
      }
    };

    history.back();
  }
});
