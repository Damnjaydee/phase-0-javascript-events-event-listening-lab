// index.js

function addingEventListener() {
    const input = document.getElementById('button');
  
    function clickAlert() {
      alert('I was clicked!');
    }
  
    input.addEventListener('click', clickAlert);
  }
  
  // Call the outer function to execute addingEventListener() and activate the event listener
  addingEventListener();
  