// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');

//  table.appendChild(thead);
//  table.appendChild(tbody);

//  document.getElementById('body').appendChild(table);

// let row_1 = document.createElement('tr');
// let heading_1 = document.createElement('th');
// heading_1.innerHTML = "Sr. No.";
// let heading_2 = document.createElement('th');
// heading_2.innerHTML = "Name";
// let heading_3 = document.createElement('th');
// heading_3.innerHTML = "Company";

// row_1.appendChild(heading_1);
// row_1.appendChild(heading_2);
// row_1.appendChild(heading_3);
// thead.appendChild(row_1);

// // function ()

// // Creating and adding data to second row of the table
// let row_2 = document.createElement('tr');
// let row_2_data_1 = document.createElement('td');
// row_2_data_1.innerHTML = "1.";
// let row_2_data_2 = document.createElement('td');
// row_2_data_2.innerHTML = "James Clerk";
// let row_2_data_3 = document.createElement('td');
// row_2_data_3.innerHTML = "Netflix";

// row_2.appendChild(row_2_data_1);
// row_2.appendChild(row_2_data_2);
// row_2.appendChild(row_2_data_3);
// tbody.appendChild(row_2);


// Creating and adding data to third row of the table
// let row_3 = document.createElement('tr');
// let row_3_data_1 = document.createElement('td');
// row_3_data_1.innerHTML = "2.";
// let row_3_data_2 = document.createElement('td');
// row_3_data_2.innerHTML = "Adam White";
// let row_3_data_3 = document.createElement('td');
// row_3_data_3.innerHTML = "Microsoft";

// row_3.appendChild(row_3_data_1);
// row_3.appendChild(row_3_data_2);
// row_3.appendChild(row_3_data_3);
// tbody.appendChild(row_3);


// ======================================================================
let minut = 5;
let second = 60 ;

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  
  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    let t = getTimeRemaining(endtime);
 
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
let deadline = new Date(Date.parse(new Date()) + minut * second * 1000); // for endless timer
initializeClock('countdown', deadline);