$(document).ready(function() {

  $("form#confirm").submit(function(event) {


    $(".name").text($("input#name").val());
    $(".date").text($("input#date").val());
    $(".stime").text($("input#stime").val());
    $(".etime").text($("input#etime").val());

    event.preventDefault();
    $("#confirmation").show();
  }); //for the submit
}); //for the document
s
