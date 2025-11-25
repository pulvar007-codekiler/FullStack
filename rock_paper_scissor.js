function play(user) {
    let choice = ["Rock", "Paper", "Scissors"];
    let com = choice[Math.floor(Math.random() * 3)];
    let txt = "You : " + user + " | Computer : " + com + "<br>";

    if (user == com)
        txt += "Draw";
    else if (
        (user == "Rock" && com == "Scissors") ||
        (user == "Scissors" && com == "Paper") ||
        (user == "Paper" && com == "Rock")
    )
        txt += "You Win";
    else
        txt += "You Lose";

    document.getElementById("res").innerHTML = txt;
}
