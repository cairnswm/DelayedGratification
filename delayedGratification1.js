// Execute when HTML has loaded
(function() {
    // your page initialization code here
    // the DOM will be available here

    // Load the WebWorker
   LoadDate();
 })();

 
 // Version1: Just read date and display when recieved
 function LoadDate()
 {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function()
    {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            DisplayDate(xmlHttp.responseText);
        }
    }
    xmlHttp.open("get", "delayedGratification.php"); 
    xmlHttp.send();
 }
 
  function DisplayDate(DisplayText)
 {
    console.log(DisplayText);
    thediv = document.getElementById("LastAccess");
    thediv.innerText = DisplayText;
 }