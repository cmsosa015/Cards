function changenumber() {
    let arr1 = [1,2,3,4,5,6,7,8,9,'K','Q','J']
    let random = Math.floor(Math.random() * arr1.length);
    document.querySelector(".number").innerHTML = arr1[random]
    suit()
}


function suit() {
    let random= Math.floor(Math.random() * 4 + 1);
    let suit;
    switch(random){

        case 1:
            suit= "♦"
            break;
         case 2:
            suit= "♥"
            break;
         case 3:
            suit= "♠"
            break;
        case 4:
            suit= "♣"
            break;
            
    }

    let randomColor= Math.floor(Math.random() * 2 + 1);
    let color;
    switch(randomColor){
        case 1:
            color= "#FF0000"
            break;
        case 2:
            color= "black"
            break;
    }

        document.querySelector(".top").innerHTML = suit;
        document.querySelector(".bottom").innerHTML = suit;
        document.querySelector('.bottom').style.color = color;
        document.querySelector('.top').style.color = color;
}



            

