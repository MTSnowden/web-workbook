'use strict';
// onload alert
alert("Let's count our eggs before they hatch!");

// mouseover mouseout 
function bigImg(x) {
    x.style.height = "600px";
    x.style.width = "400px";
}

function normalImg(x) {
    x.style.height = "300px";
    x.style.width = "200px";
}


// counter
var chicken = document.getElementById("chicken"),
  count = 0;
chicken.onclick = function() {
  count += 1;
  currentTotal.innerHTML = "Egg count: " + count;
};


$(document).ready(function () {
    var num1 = 1;

    $('#counter-1').click(function () {
        num1++;
        $(this).text(num1);
    })
});

$(document).ready(function () {
    var num2 = 10;

    $('#counter-10').click(function () {
        num2 += 10;
        $(this).text(num2);
    })
});


$(document).ready(function () {

    var num3 = 100;
    $('#counter-100').click(function () {
        num3 += 100;
        $(this).text(num3);
    })
});




$('#counter-all').click(function () {

    $('#counter-1').trigger('click');
    $('#counter-10').trigger('click');
    $('#counter-100').trigger('click');
});



// var data = {
//     totalRevs:360, 
//     totalCurrent:0, 
//     totalRPS: 0
//   };

//   setInterval(goGo,1000);

//   function goGo() {
//     data.totalRevs += data.totalRPS;
//     data.totalCurrent += data.totalRPS;
//     $("#wheel").css({ 'transform': 'rotate(' + data.totalRevs + 'deg')});
//     updateReport();
//   }

//   function updateReport() {
//     $("#currentTotal").text(Math.floor(data.totalCurrent));
//     $("#rps").text((data.totalRPS/70.4).toFixed(3));
//   }


//   $("#wheel").click(function (){
//     data.totalRevs ++;
//     data.totalCurrent ++;
//     updateReport();
//   })

//   $(".button").click(function (){ 
//     var addVal = $(this).data( "cost" );
//     if ($(this).data( "cost" ) < data.totalCurrent ) {
//       data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
//       data.totalRPS += parseFloat($(this).data( "val" ));
//       $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15)); 
//       $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) ); 
//     }
//     updateReport();
//   })