function send(){
    player_1_score=0;
    player_2_score=0;
    player_1_name=localStorage.getItem("Player_1");
    player_2_name=localStorage.getItem("Player_2");
    document.getElementById("player_1_name").value=player_1_name;
    document.getElementById("player_2_name").value=player_2_name;
    number_1=document.getElementById("number_1").value;
    number_2=document.getElementById("number_2").value;
    actual_answer=parseInt(number_1)*parseInt(number_2);
    question_number="<h4>"+number_1+"X"+number_2+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";
}
question_turn="player_1";
answer_turn="player_2"
function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer){
        if(answer_turn="player_1"){
            player_1_score=player_1_score+1;
            document.getElementById("player_1_score").innerHTML=player_1_score;
        }
        else{
            player_2_score=player_2_score+1;
            document.getElementById("player_2_score").innerHTML=player_2_score;
        }
    }
    if(question_turn=="player_1"){
        question_turn="player_2";
        document.getElementById("question-turn").innerHTML="Question turn-"+player_2_name;
    }
    else{
        question_turn="player_1";
        document.getElementById("question-turn").innerHTML="Question turn-"+player_1_name;
    }
    if(answer_turn=="player_2"){
        answer_turn="player_1";
        document.getElementById("answer-turn").innerHTML="Answer turn-"+player_1_name;
    }
    else{
        answer_turn="player_2";
        document.getElementById("answer-turn").innerHTML="Answer turn-"+player_2_name;
    }
    document.getElementById("output").innerHTML="";
}
