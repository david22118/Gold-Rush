
Handlebars.registerHelper('iff', function(a, operator, b, opts) {
    var bool = false;
    switch(operator) {
       case '==':
           bool = a == b;
           break;
       case '>':
           bool = a > b;
           break;
       case '<':
           bool = a < b;
           break;
       default:
           throw "Unknown operator " + operator;
    }
    if (bool) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

let p1
$(".btn-small").on("click",function(){
const rows= $("#input1").val()
/* const colums =$("#input2").val() */

const player1= "tablet_mac"
const player2="android"
 p1 = new GoldRush(rows,rows, player1,player2 );
render.renderData(p1.matrix)
render.renderScore(p1.player1.score,p1.player2.score)
$("#top").css("display","none")
})

//player 2
$(document).keypress(function (e) {

    if (e.which == 119) {
          p1.movePlayer("android", "up")
    }
    render.renderData(p1.matrix)
    render.renderScore(p1.player1.score,p1.player2.score)
})

$(document).keypress(function (e) {

    if (e.which == 97) {
          p1.movePlayer("android", "left")
    }
    render.renderData(p1.matrix)
    render.renderScore(p1.player1.score,p1.player2.score)
})

$(document).keypress(function (e) {

    if (e.which == 100) {
          p1.movePlayer("android", "right")
    }
    render.renderData(p1.matrix)
    render.renderScore(p1.player1.score,p1.player2.score)
})

$(document).keypress(function (e) {

    if (e.which == 120) {
          p1.movePlayer("android", "down")
    }
    render.renderData(p1.matrix)
    render.renderScore(p1.player1.score,p1.player2.score)
})
//player 1
$(document).keypress(function (e) {

    if (e.which == 56) {
          p1.movePlayer("tablet_mac", "up")
    }
    render.renderData(p1.matrix)
    render.renderScore(p1.player1.score,p1.player2.score)
    console.log(p1.player1.score)
})

$(document).keypress(function (e) {

    if (e.which == 52) {
          p1.movePlayer("tablet_mac", "left")
    }
    render.renderData(p1.matrix)
    render.renderScore(p1.player1.score,p1.player2.score)
    console.log(p1.player1.score)
    
})

$(document).keypress(function (e) {

    if (e.which == 54) {
          p1.movePlayer("tablet_mac", "right")
    }
    render.renderData(p1.matrix)
    render.renderScore(p1.player1.score,p1.player2.score)
    console.log(p1.player1.score)
})

$(document).keypress(function (e) {

    if (e.which == 50) {
          p1.movePlayer("tablet_mac", "down")
    }
    render.renderData(p1.matrix)
    render.renderScore(p1.player1.score,p1.player2.score)
    console.log(p1.player1.score)
})
//if helper
