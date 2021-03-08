class Hexagon {
    constructor(resource, number) {
      this.resource = resource;
      this.number = number;
    }
}
function boardSetup(){
    num_hex = 19

    var resource_pieces = Array(num_hex).fill("wheat").fill("wood", 4).fill("sheep", 8).fill("stone",12).fill("brick",15).fill("dessert",18);
    var number_pieces = [2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12];

    var board = Array();


    for(let i=0; i<num_hex; i++){
        let r_ind = Math.floor(Math.random() * resource_pieces.length);
        let resource = resource_pieces.splice(r_ind, 1)[0];
        let number = 0
        if(resource == "dessert"){
            number = 0;
        } else{
            let n_ind = Math.floor(Math.random() * resource_pieces.length);
            number = number_pieces.splice(n_ind, 1)[0];
        }

        console.log(resource, number);
        board.push(new Hexagon(resource, number));

    }

    console.log(board);

    var tiles = document.getElementsByClassName("tile");

    for(let t=0; t<num_hex; t++){
        let hex = board[t];
        console.log(t, tiles[t]);
        tiles[t].innerHTML = hex.number;
        let color = "white"; // overwrite this
        switch(hex.resource) {
            case "wheat":
              color = "Yellow"
              break;
            case "wood":
              color  = "DarkGreen"
              break;
            case "sheep":
              color = "Chartreuse"
              break;
            case "stone":
              color = "Gray"
              break;
            case "brick":
              color = "Sienna"
              break;
          }
        tiles[t].style.backgroundColor = color;
    }

}

$(".generate").click(function(event){
    boardSetup();
  });

