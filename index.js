let puzzleMaker = (x, board, n) => {
    let boards = ['board5x5', 'board10x10']
    for(let i = 0; i < boards.length; i++){
        if(board === boards[i]){
            document.getElementById(boards[i]).style.visibility = 'visible'
        }else{
            document.getElementById(boards[i]).style.visibility = 'hidden'
        }
        
    }
    let doesExist = document.getElementById(`tile-${n}-1`)
    if(typeof(doesExist) === 'undefined' || doesExist === null){
        for(let i = 1; i <= x; i++){
            let div = document.createElement('div')
            div.setAttribute('class', 'tile')
            div.setAttribute('id', `tile-${n}-${i}`)
            div.setAttribute('onclick', `clicked(this.id, ${x})`)
            document.getElementById(board).appendChild(div)

            document.getElementById(`tile-${n}-${i}`).style.background = 'lightgreen'
            
            if(x === 25){
                if(i <= 5){
                    document.getElementById(`tile-5-${i}`).style.marginTop = '0px'
                }else if(i <= 10){
                    document.getElementById(`tile-5-${i}`).style.marginTop = '50px'
                }else if(i <= 15){
                    document.getElementById(`tile-5-${i}`).style.marginTop = '100px'
                }else if(i <= 20){
                    document.getElementById(`tile-5-${i}`).style.marginTop = '150px'
                }else if(i <= 25){
                    document.getElementById(`tile-5-${i}`).style.marginTop = '200px'
                }

                if((i+4)%5 === 0){
                    document.getElementById(`tile-5-${i}`).style.marginLeft = '0px'
                }else if((i+3)%5 === 0){
                    document.getElementById(`tile-5-${i}`).style.marginLeft = '50px'
                }else if((i+2)%5 === 0){
                    document.getElementById(`tile-5-${i}`).style.marginLeft = '100px'
                }else if((i+1)%5 === 0){
                    document.getElementById(`tile-5-${i}`).style.marginLeft = '150px'
                }else if(i%5 === 0){
                    document.getElementById(`tile-5-${i}`).style.marginLeft = '200px'
                }
            }
            if(x === 100){
                if(i <= 10){
                    document.getElementById(`tile-10-${i}`).style.marginTop = '0px'
                }else if(i <= 20){
                    document.getElementById(`tile-10-${i}`).style.marginTop = '50px'
                }else if(i <= 30){
                    document.getElementById(`tile-10-${i}`).style.marginTop = '100px'
                }else if(i <= 40){
                    document.getElementById(`tile-10-${i}`).style.marginTop = '150px'
                }else if(i <= 50){
                    document.getElementById(`tile-10-${i}`).style.marginTop = '200px'
                }else if(i <= 60){
                    document.getElementById(`tile-10-${i}`).style.marginTop = '250px'
                }else if(i <= 70){
                    document.getElementById(`tile-10-${i}`).style.marginTop = '300px'
                }else if(i <= 80){
                    document.getElementById(`tile-10-${i}`).style.marginTop = '350px'
                }else if(i <= 90){
                    document.getElementById(`tile-10-${i}`).style.marginTop = '400px'
                }else if(i <= 100){
                    document.getElementById(`tile-10-${i}`).style.marginTop = '450px'
                }

                if((i+9)%10 === 0){
                    document.getElementById(`tile-10-${i}`).style.marginLeft = '0px'
                }else if((i+8)%10 === 0){
                    document.getElementById(`tile-10-${i}`).style.marginLeft = '50px'
                }else if((i+7)%10 === 0){
                    document.getElementById(`tile-10-${i}`).style.marginLeft = '100px'
                }else if((i+6)%10 === 0){
                    document.getElementById(`tile-10-${i}`).style.marginLeft = '150px'
                }else if((i+5)%10 === 0){
                    document.getElementById(`tile-10-${i}`).style.marginLeft = '200px'
                }else if((i+4)%10 === 0){
                    document.getElementById(`tile-10-${i}`).style.marginLeft = '250px'
                }else if((i+3)%10 === 0){
                    document.getElementById(`tile-10-${i}`).style.marginLeft = '300px'
                }else if((i+2)%10 === 0){
                    document.getElementById(`tile-10-${i}`).style.marginLeft = '350px'
                }else if((i+1)%10 === 0){
                    document.getElementById(`tile-10-${i}`).style.marginLeft = '400px'
                }else if(i%10 === 0){
                    document.getElementById(`tile-10-${i}`).style.marginLeft = '450px'
                }
            }
        }
    }
}

let clicked = (tile, x) => {
    tile = document.getElementById(tile)
    if(tile.style.background === 'lightgreen'){
        tile.style.background = 'darkgreen'
    }else if(tile.style.background === 'darkgreen'){
        tile.style.background = 'lightgreen'
    }
    
}