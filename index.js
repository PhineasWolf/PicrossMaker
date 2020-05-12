let puzzleMaker = (x) => {
    for(let i = 1; i <= x; i++){
        let div = document.createElement('div')
        div.setAttribute('class', 'tile')
        div.setAttribute('id', `tile-${i}`)
        div.setAttribute('onclick', `clicked(this.id, ${x})`)
        document.getElementById('board55').appendChild(div)

        document.getElementById(`tile-${i}`).style.background = 'lightgreen'

        if(x === 25){
            document.getElementById('board55').style.visibility = 'visible'
            if(i <= 5){
                document.getElementById(`tile-${i}`).style.marginTop = '0px'
            }else if(i <= 10){
                document.getElementById(`tile-${i}`).style.marginTop = '50px'
            }else if(i <= 15){
                document.getElementById(`tile-${i}`).style.marginTop = '100px'
            }else if(i <= 20){
                document.getElementById(`tile-${i}`).style.marginTop = '150px'
            }else if(i <= 25){
                document.getElementById(`tile-${i}`).style.marginTop = '200px'
            }

            if((i+4)%5 === 0){
                document.getElementById(`tile-${i}`).style.marginLeft = '0px'
            }else if((i+3)%5 === 0){
                document.getElementById(`tile-${i}`).style.marginLeft = '50px'
            }else if((i+2)%5 === 0){
                document.getElementById(`tile-${i}`).style.marginLeft = '100px'
            }else if((i+1)%5 === 0){
                document.getElementById(`tile-${i}`).style.marginLeft = '150px'
            }else if(i%5 === 0){
                document.getElementById(`tile-${i}`).style.marginLeft = '200px'
            }
        }
    }
}

let clicked = (tile, x) => {
    tile = document.getElementById(tile)
    if(tile.style.background === 'lightgreen'){
        tile.style.background = 'darkgreen'
        //tile.style.boxShadow = 'inset 0px 0px 0px 0.6px white'
    }else if(tile.style.background === 'darkgreen'){
        tile.style.background = 'lightgreen'
        //tile.style.boxShadow = 'inset 0px 0px 0px 0.6px black'
    }
    
}