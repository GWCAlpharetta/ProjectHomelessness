var db= firebase.firestore();

function listNow(){
    var businessName=$("#businessName").val();
    var jobName=$("#jobName").val();
    var cityName=$("#cityName").val();
    var zipcode=$("#zipcode").val();
    var description=$("#description").val();
    var startDate=$("#startDate").val();
    var endDate=$("#endDate").val();
    var hourlyRate=$("#hourlyRate").val();
   alert("Hello");
    db.collection("jobs").add({
        businessName: businessName,
        jobName: jobName,
        cityName:cityName,
        zipcode:zipcode,
        description:description,
        startDate:startDate,
        endDate:endDate,
        hourlyRate:hourlyRate
    })
    .then(function(docRef){
        alert("Your Job Has Been Listed.");

    })
    .catch(function(error){
        alert("Error:"+error);
    });
}