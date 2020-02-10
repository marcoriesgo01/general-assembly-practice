$(()=>{
    

    console.log("up and running")

    for (i=0;i<9;i++){
        $gameSquare = $("<div>").addClass("game-square").attr("id",i)
        $gameSquare.on("click",placePiece)
        $('.game-board').append($gameSquare)
    }



})
