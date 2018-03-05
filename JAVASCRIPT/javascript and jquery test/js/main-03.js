/*
  try it in console commands
  document
  document.getElementsByTagName('p')
  document.getElementsByTagName('h1')
  document.getElementsByTagName('h4')
  document.getElementsByTagName('p')[0]
  document.getElementsByTagName('p')[1]
  document.getElementsByClassName('done')
  document.getElementsByClassName('done')[0]
  document.getElementById('checklist')
  document.querySelector('.done')
  document.querySelector('#checklist')
  document.querySelectorAll('p')

  var firstTag = document.getElementsByTagName('p')[0]
  firstTag.innerHTML = "New paragraph"
  firstTag.innerHTML = "New <strong>paragraph</strong>"
  var li = document.querySelector('.done')
  li
  li.className
  li.className = ""
  li.className = "done"
  li.className = li.className + "special"
  li
  li.className = "done"
  li.className = li.className + " special" + " special2"
  li
  li.className = li.className.replace("special", "")
  li
  li.classList
  li.classList.add('new')
  li.classList
  li.classList.remove("new")
  li.classList
  li.parentElement
  li.parentElement.parentElement
  li.parentElement.children
  li.parentElement.children[0].innerHTML = "Frank"
  */

  var li = document.querySelector('.undone');
  var x = (prompt('Done something press number 1-4')-1);
  li.parentElement.children[x].className = "done";
  var x = (prompt('Done something press number 1-4')-1);
  li.parentElement.children[x].className = "done";

