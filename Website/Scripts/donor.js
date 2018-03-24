var db= firebase.firestore();

function donateNow(){
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
function getTopDonors(){
    db.collection("donors").orderBy("amount").limit(2).get()
.then(function(donors){
    donors.forEach(function(donor){
        alert(donors.data().amount);
    });

})
.catch(function(error){
    alert("Error:"+error);
});

}
function documentReady(){
    alert("I am ready.");
    
}
$(documentReady);