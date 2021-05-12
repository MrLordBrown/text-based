// Import stylesheets
import Papa from './pap.js';
import './style.css';


// Write Javascript code!
const appDiv = document.getElementById('app');
var data;
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function loadData() {
  var url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSr6wnGhqUtpW8nljXg06O7i0AeaxYEzLquJd3wPMjgovt1_JSdsFue0n38sK2RcIRJVsZY8waI9Fq7/pub?gid=0&single=true&output=csv";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status==200){
      data = Papa.parse(xmlhttp.responseText, {
      header: true,});
    }
  };
  xmlhttp.open("GET",url,true);
  xmlhttp.send(null);
}
loadData();

function update() {
  var count = Object.keys(data).length;
  console.log(count);
    var container = document.createElement('table');
    var head = document.createElement('tr');
    var post = document.createElement('th');
    var response = document.createElement('th');
    var text = document.createElement('th');
    container.appendChild(head);
    head.appendChild(post);       
    head.appendChild(response);
    head.appendChild(text);
  for (var i in count) {
    var idez = document.createAttribute('id');
    var classer  = document.createAttribute('class');
    var sty = document.createAttribute('style');
    container.setAttributeNode(sty)
    container.setAttributeNode(idez);
    container.setAttributeNode(classer);
    names.textContent = mine[i].Building;
    weeks.textContent = "Week: "+mine[i].week;
    idez.value = "week"+i;
    container.appendChild(names);
    container.appendChild(weeks);
    appDiv.appendChild(container);
    console.log(mine[i].Week);
    }
}
update();


