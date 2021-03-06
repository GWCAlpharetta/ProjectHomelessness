var db= firebase.firestore();

function donateNow(){
    var lastName=$("#donorLastName").val();
    var firstName=$("#donorFirstName").val();
    var amount=$("#donorAmount").val();
    var intAmount=parseInt(amount);
    var donorInMemoryOf=$("#donorInMemoryOf").val();
    db.collection("donors").add({
        amount: intAmount,
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
    db.collection("donors").orderBy("amount", "desc").limit(5).get()
    .then(function(donors){
        var tbody=$("#topDonors");
        donors.forEach(function(donor){
            var donorData=donor.data();
            tbody.append("<tr><td>"+donorData.amount+"</td><td>"+donorData.lastName+", " + donorData.firstName+"</td><td>"+donorData.description+"</td></tr>")
        });
    })
    .catch(function(error){
        alert("Error:"+error);
    });
}

function documentReady(){
    getTopDonors();
}
$(documentReady);