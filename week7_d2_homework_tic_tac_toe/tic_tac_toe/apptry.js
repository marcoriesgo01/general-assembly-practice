$(() => {
    const $board = $('#board');
    const $boxes = $('.box');
    const $reset = $('#reset');
    const turn = "x";
    const moves = 0;
    const changeTurn = () => {
        if (turn === "x") {
            turn = "o";
        } else {
            turn = "x";
        }
    };
    const resetBoard = () => {
        $boxes.text("");
        $boxes.removeClass("x").removeClass("o");
        turn = "x";
        moves = 0;
    };
    const allThree = (player, box1, box2, box3) => {
        return (box1.innerText === player) && (box2.innerText === player) && (box3.innerText === player);
    };
    const winsDiagonal = (player) => {
        return allThree(player, $boxes[0], $boxes[4], $boxes[8]) || allThree(player, $boxes[2], $boxes[4], $boxes[6]);
    };
    const winsColumn = (player) => {
        return allThree(player, $boxes[0], $boxes[3], $boxes[6]) || allThree(player, $boxes[1], $boxes[4], $boxes[7]) || allThree(player, $boxes[2], $boxes[5], $boxes[8]);
    };
    const winsRow = (player) => {
        return allThree(player, $boxes[0], $boxes[1], $boxes[2]) || allThree(player, $boxes[3], $boxes[4], $boxes[5]) || allThree(player, $boxes[6], $boxes[7], $boxes[8]);
    };
    const winnerIs = (player) => {
        return winsRow(player) || winsColumn(player) || winsDiagonal(player);
    };
    const getWinner = () => {
        if (winnerIs("x")) {
            return "x";
        } else if (winnerIs("o")) {
            return "O";
        } else {
            return null;
        }
    };
    $boxes.on('click', () => {
        if ($(this).test() === "") {
            $(this).text(turn);
            $(this).addClass(turn);
            moves += 1;
            if (moves >= 5) {
                const winner = getWinner();
                if (winner) {
                    alert("Player " + winner + " won.");
                    resetBoard();
                } else {
                    changeTurn();
                }
            } else {
                changeTurn();
            }
        }
    });
    $reset.on('click', () => {
        resetBoard();
    });

});