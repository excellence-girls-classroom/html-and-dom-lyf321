function test() {
    var result = 0;
    var judge = judgeIdentity();

    if(judge){
        var firstResult = getfirstResult();
        var secondResult = getSecondResult();
        var thirdResult = getThirdResult();
        var fourResult = getFourResult();
        var fiveResult = getFiveResult();
        result = firstResult+secondResult+thirdResult+fourResult+fiveResult;

        document.getElementById("result").value = result;
        alert("得分："+result);
    }

}

function judgeIdentity() {
    var name = elementId("name");
    var classes = elementId("class");
    var result = elementId("result");
    var student_id = elementId("student_id");

    if (classes.value === "") {
        alert("请输入班级!");
        return false;
    }
    else if (student_id.value === "") {
        alert("请输入学号!");
        return false;
    }
    else if (name.value === "") {
        alert("请输入姓名!");
        return false;
    }

    return true;
}

function elementId(id) {

    return document.getElementById(id);
}

function getfirstResult() {
    var result = 0;
    var first_1 = elementId("first_1").value;
    var first_2 = elementId("first_2").value;
    var first_3 = elementId("first_3").value;
    var first_4 = elementId("first_4").value;

    if(first_1 === "统一建模语言"){
        result += 5;
    }
    var firstAnswer = ["封装性","继承性","多态性"];
    var firstId = [first_2,first_3,first_4];

    for(var i = 0 ; i < firstAnswer.length ; i++){
        for(var j = 0 ; j < firstId.length ; j++){
            if(firstAnswer[i] === firstId[j]){
                result += 5;
            }
        }
    }

    return result;
}

function getSecondResult() {
    var result = 0;

    result += judgeRadiosClicked("choice_1","B");
    result += judgeRadiosClicked("choice_2","C");

    return result;
}

function judgeRadiosClicked(name,answer) {
    var radiosChecked = document.getElementsByName(name);
    var result = 0;

    for(var i = 0; i<radiosChecked.length ; i++){
        if(radiosChecked[i].checked ){
            if(radiosChecked[i].value === answer){
                result += 5;
            }
        }
    }

    return result;
}

function getThirdResult(result) {
    var result = 0;
    var answer_3 = "ABD";
    var answer_4 = "ABC";

    result += getCheckbox("choice_3",answer_3);
    result += getCheckbox("choice_4",answer_4);

    return result;
}

function getCheckbox(checkBox,answer){
    var checked = document.getElementsByName(checkBox);
    var result = 0;
    var string = "";

    if(checked[0].checked){
        string += "A";
    }
    if(checked[1].checked){
        string += "B";
    }
    if(checked[2].checked){
        string += "C";
    }
    if(checked[3].checked){
        string += "D";
    }
    if(string === answer){
        result = 5;
    }

    return result;
}
function getFourResult() {
    var result = 0;

    result += judgeRadiosClicked("judge_1","F");
    result += judgeRadiosClicked("judge_2","T");

    return result;
}

function getFiveResult() {
    var result = 0;
    var short_answer = elementId("short_answer");

    if(short_answer.value === "模型是对现实世界的简化和抽象，模型是对所研究的系统，过程，事物或概念的一种表达形式。"){
        result += 20;
    }

    return result;
}