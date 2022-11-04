let quotes = ['fjbsdjbdovdjvn', 'kjfbksdmbdjkbvjk', 'jfbsdbvjkdbv', 'vbdbvhdbvhdbv', 'bsdbvhsdbhvsdbh']

function generate(){
    let rand = Math.floor(Math.random() * quotes.length)
    document.getElementById('quotes').innerHTML = quotes[rand]
}