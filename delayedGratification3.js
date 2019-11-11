// Execute when HTML has loaded
(function() {
    // your page initialization code here
    // the DOM will be available here
    // Display the date using stored values
    DisplayDate();
    // Load the WebWorker
    LoadDate();
 })();

 // Version3: Use webworker to fetch and save date, but display last date while waiting
 // On first run only shows "Loading..."
 function LoadDate()
 {
    if (window.Worker) {
        const myWorker = new Worker("delayedGratificationWebWorker.js");

        // Send a message to the web worker to get the date
        myWorker.postMessage("Request");
        console.log('Message posted to worker');

        // When the Web Worker responds display the data
        myWorker.onmessage = function(e) {
            // Save the date locally so next time the page opens it can be displayed as historical data 
            // So does not appear to be hanging while fetching data
            localStorage.setItem("LastAccess", e.data);
            console.log('Message received from worker');
            DisplayDate();
        }
    } else {

        console.log('Your browser doesn\'t support web workers.')
    }
 }

 function DisplayDate()
 {
    // fetch data from LocalDB
    DisplayText  = localStorage.getItem("LastAccess");
    console.log(DisplayText);
    thediv = document.getElementById("LastAccess");
    thediv.innerText = DisplayText;
 }

 