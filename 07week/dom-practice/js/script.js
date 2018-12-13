'use strict';

  window.onload = function(){
    let list = document.getElementsByTagName('ul');
    let message = "In your buggie you have: " + list[0].children.length + " items.";
    // alert(message);

    let newh2 = document.createElement('h2');
    newh2.innerHTML= "You have" + count[0].children.length + "items in your buggie";
    document.getElementsByTagName('h1')[0].after(newh2);
  }

  function itemCount(){
    let newh2 = document.createElement('h2');
    newh2.setAttribute("id", "title");
    document.getElementsByTagName('h1')[0].after(newh2);
    }

    function updateItemCount(){
      let update = updateListCountSentance();
      let string = document.getElementById('title');
      string.innerHTML = update; 
    }
    