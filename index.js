let puzzleMaker = (x) => {
    console.log('hello')
    for(let i = 1; i <= x; i++){
        let div = document.createElement('div')
        div.setAttribute('class', 'tile')
        div.setAttribute('id', `tile-${i}`)
        div.setAttribute('onclick', 'clicked(this.id)')
        document.getElementById('board55').appendChild(div)

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

let clicked = (tile) => {
    console.log(document.getElementById(tile).style.marginTop+' '+document.getElementById(tile).style.marginLeft)
}