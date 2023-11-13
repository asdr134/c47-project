class Game {
    constructor() {

    }

    start() {
        form = new Form();
        form.display();
        player = new Player()
        player.getCount()
        player1 = createSprite(200, 650, 20, 20)
        player1.addImage(player1_Img)
        player2 = createSprite(1550, 650, 20, 20)
        player2.addImage(player2_Img)

        players = [player1, player2]


    }

    getState() {
        //.ref() gives the path from where we have to read the data in the database.
        var gameStateRef = database.ref("gameState")
        // .on() is used to read the data continously from the database.
        gameStateRef.on("value", data => {
            gameState = data.val()
            console.log(data.val())
            //.val() is used to extact the data in a readable format.
        })
    }

    //write the gameState into the database
    update(state) {
        database.ref("/").update({
            gameState: state

        })
    }


    play() {
        drawSprites()
        Player.getPlayersInfo()

        if (allPlayers !== undefined) {
            var index = 0
            for (var plr in allPlayers) {
                index = index + 1

                var x = allPlayers[plr].positionX
                var y = height - allPlayers[plr].positionY

                players[index - 1].position.x = x
                players[index - 1].position.y = y

            }


            this.handlePlayerControls()

            
        }
    }

    handlePlayerControls(){
        if (keyIsDown(LEFT_ARROW)) {
            player.positionX -= 5
            player.update()
          }
          if (keyIsDown(RIGHT_ARROW)) {
            player.positionX += 5
            player.update()
          }
    }
    



}