// Execute when HTML has loaded
(function() {
    // your page initialization code here
    // the DOM will be available here

    // Load the WebWorker
    LoadDate();
 })();

 
 // Version2: Use a web worker and display when recieved
 function LoadDate()
 {
     // Move Ajax call into the WebWorker
    if (window.Worker) {
        const myWorker = new Worker("delayedGratificationWebWorker.js");

        // Send a message to the web worker to get the date
        myWorker.postMessage("Request");
        console.log('Message posted to worker');

        // When the Web Worker responds display the data
        myWorker.onmessage = function(e) {
            DisplayDate(e.data);
            console.log('Message received from worker');
        }
    } else {

        console.log('Your browser doesn\'t support web workers.')
    }
 }

 function DisplayDate(DisplayText)
 {
    console.log(DisplayText);
    thediv = document.getElementById("LastAccess");
    thediv.innerText = DisplayText;
 }
