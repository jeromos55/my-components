document.addEventListener('click', function (event) {

  if (event.target.dataset.counter != undefined) { // if the attribute exists...
    event.target.value++;
  }

});