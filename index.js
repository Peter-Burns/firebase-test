
var playersRef = firebase.database().ref("players/");

var amandaAgeRef = playersRef.child("-KzlDsvnelV8LlHzFQxi").child('age');

amandaAgeRef.transaction(function(currentAge) {
   return currentAge + 1;
});
var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   document.write(snapshot.val().players.Amanda.age);
}, function (error) {
   console.log("Error: " + error.code);
});