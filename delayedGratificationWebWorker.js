// Web Worker file, when this file is loaded as a web worker it does nothign until it recieves a message from the browser
onmessage = function(e) {
    // Log the start of the process
    console.log('Worker: Message received from main script'); 
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function()
    {
        // Manage Success
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            postMessage(xmlHttp.responseText);
        }
        // Manager Failre
        if(xmlHttp.readyState == 4 && xmlHttp.status != 200)
        {
            console.log("Error: ".xmlHttp.responseText)
            postMessage("Failed to get new date");
        }
    }
    // Call the service
    xmlHttp.open("get", "delayedGratification.php"); 
    xmlHttp.send();
 }