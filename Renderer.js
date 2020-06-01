class Render {
    constructor(){

    }
    renderData(goldRush){
    const source = $('#matrix-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template({goldRush:goldRush})
    $('#results').empty()
    $('#results').append(newHTML)
  
}

renderScore(player1,player2){
    const players={player1:player1,player2:player2} 
    console.log(players)
    const source = $('#score-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template({players:players})
    $('#start').empty() 
    $('#start').append(newHTML)

}
}

const render= new Render