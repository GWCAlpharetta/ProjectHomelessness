var db= firebase.firestore();

function listNow(){
    var shelterName=$("#shelterName").val();
    var jobName=$("#jobName").val();
    var address1=$("#address1").val();
    var address2=$("#address2").val();
    var cityName=$("#cityName").val();
    var zipcode=$("#zipcode").val();
    var description=$("#description").val();
    var timeDay=$("#timeDay").val();
    var email=$("#email").val();
    var phone=$("#phone").val();
   alert("Hello");
    db.collection("oppinfo").add({
       shelterName: shelterName,
        jobName: jobName,
        address1: address1,
        address2:address2,
        zipcode:zipcode,
        description:description,
        cityName:cityName,
        timeDay:timeDay,
        email:email,
        phone:phone

    })
    .then(function(docRef){
        alert("Your Opportunity Has Been Added.");

    })
    .catch(function(error){
        alert("Error:"+error);
    });
}
$(documentReady);