'use strict';
var d = new Date();
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
document.getElementById('date').innerText = `${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
function AllPlane(note)
{
  this.note=note;
}
AllPlane.prototype.addToDo = function(x){
  this.note.push(x);
};
AllPlane.prototype.savetoLocalStorage = function(){
  localStorage.allPlane = JSON.stringify(this.note);
};
AllPlane.prototype.removeEl = function(order){
  this.note.splice(order,1);
};

function ToDo(whatToDo,when){
  this.whatToDo = whatToDo;
  this.when = when;
  allPlane.addToDo(this);
}
var allPlane = new AllPlane([]);
var formEl = document.getElementById('formId');
formEl.addEventListener('submit',function(){
  event.preventDefault();
  var WhatInput = formEl.elements.whatToDo.value;
  var whenInput = formEl.elements.start.value;
  new ToDo(WhatInput,whenInput);
  displayWhatToDo();
  allPlane.savetoLocalStorage();
});
function loadData(){
  if(JSON.parse(localStorage.allPlane) !== null ){
    allPlane = new AllPlane(JSON.parse(localStorage.allPlane));
    displayWhatToDo();
  }
}
loadData ();
function displayWhatToDo(){
  var ulEl = document.getElementById('taskol');
  if (allPlane.note.length >= 1){
    ulEl.innerHTML='';
    for (let index = 0; index < allPlane.note.length; index++) {
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      var pEl =document.createElement('p');
      pEl.innerText = allPlane.note[index].whatToDo;
      var p2El = document.createElement('p');
      p2El.className = 'removeP';
      p2El.id = index;
      p2El.innerText = 'X';
      var p3El = document.createElement('p');
      p3El.className = 'date';
      p3El.innerText = allPlane.note[index].when;
      liEl.appendChild(pEl);
      liEl.appendChild(p2El);
      liEl.appendChild(p3El);
      allPlane.savetoLocalStorage();
    }
  }else{
    ulEl.innerHTML='';
  }
}
function removeElement(){
  var ulEl = document.getElementById('taskol');
  ulEl.addEventListener('click',function(){
    if (event.target.className === 'removeP'){
      allPlane.removeEl(Number(event.target.id));
      displayWhatToDo();
    }
  });
}
removeElement();
