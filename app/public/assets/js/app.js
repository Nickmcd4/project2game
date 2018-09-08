var currentUserId = $("#userId").attr("data-value");

console.log(currentUserId);

console.log("hello");


$(".characterSubmit").on("submit", function (event) {
    event.preventDefault();

    var newCharacter = {
        characterType: $("characterType").val().trim(),
        characterName: $("characterName").val().trim(),
        hp: $("hp").val().trim(),
        attack: $("attack").val().trim(),
        defense: $("defense").val().trim()
    };

    $.post("/dashboard", {
        data: newCharacter
    }).then(function (data) {
        console.log("Created new character");
        console.log(data);
    
    });





});