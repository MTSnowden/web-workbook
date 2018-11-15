'use strict';

  window.onload = function(){
    let list = document.getElementsByTagName('ul');
    let message = "In yo buggie u got:" + list[0].children.length + "items.";
    alert(message);

    let newh2 = document.createElement('h2');
    newh2.innerHTML= "U got" + count[0].children.length + "items in yo buggie";
    document.getElementsByTagName('h1')[0].after(newh2);
  }
