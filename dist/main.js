const fetchData = function(){

    let input = $("#input").val()

    $.get(`recipe/ingridientID/${input}`, function(Data){
        $("body").append(`<div>${Data.Name}</div`)
    })
}