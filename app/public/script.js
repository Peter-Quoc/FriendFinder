$(document).ready(function () {

function compareScores(){
    console.log("this works")
}
    $("#submitSurveyBtn").on("click", function(event) {
        event.preventDefault();
        console.log("this works")
        // $(".question").each(function () {
        //     userSurveyChoice = [];
        //     var UserChoice = $(this).attr('value').val();
        //     userSurveyChoice.push(value);
        // });
        // console.log(userSurveyChoice);

    });
});