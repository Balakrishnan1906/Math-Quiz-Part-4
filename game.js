function login_user(){
    p1 = document.getElementById("player_1").value;
    p2 = document.getElementById("player_2").value;

    localStorage.setItem("player1" , p1);
    localStorage.setItem("player2" , p2);

    window.location = "multiply.html";
}

player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1_name + ":";
document.getElementById("player2").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    number1 = document.getElementById("t1").value;
    number2 = document.getElementById("t2").value;
    
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "×" + number2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_checkbox'>";
    check_button = "<br><br><button class='btn btn-warning' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("input_checkbox").innerHTML = "";
}  

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_checkbox").value;

    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    } 
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    } 
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}