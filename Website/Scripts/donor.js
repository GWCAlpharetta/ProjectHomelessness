var db= firebase.firestore();

function donateNow(){
    var lastName=$("#donorLastName").val();
    var firstName=$("#donorFirstName").val();
    var amount=$("#donorAmount").val();
    var donorInMemoryOf=$("#donorInMemoryOf").val();
   alert("Hello");
    db.collection("donors").add({
        amount: amount,
        firstName: firstName,
        lastName:lastName,
        inMemoryOf:donorInMemoryOf
    })
    .then(function(docRef){
        alert("Thank you for your donation.");

    })
    .catch(function(error){
        alert("Error:"+error);
    });
}