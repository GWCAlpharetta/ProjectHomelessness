var db= firebase.firestore();
var currentOppId
function setCurrentOppId(oppId){
    currentOppId=oppId;
    //alert(oppId);
}
function getOpps(){
    db.collection("oppinfo").get()
    .then(function(opps){
        var tbody=$("#VolunteerOpp")
        opps.forEach(function(opp){
            var oppData=opp.data();
    
            tbody.append("<tr><td><button onClick=setCurrentOppId('"+opp.id+"') type='button' class='btn btn-link' data-toggle='modal' data-target='#oppDetailsModal'>"+oppData.shelterName+"</button></td><td>"+oppData.address1+"</td><td>"+oppData.timeDay+"</td><td>"+oppData.jobName+"</td><td>")
            
        });
    
    })
    .catch(function(error){
        alert("Error:"+error);
    });
    
    
    }
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
function getOppDetails(oppId){
    var docRef = db.collection("oppinfo").doc(oppId);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            var oppData=doc.data();
            //alert (JSON.stringify(oppData));
            $('#shelterNameDetail').text(oppData.shelterName);
            $('#hourlyRate').text(oppData.hourlyRate);
            $('#jobDescription').text(oppData.description);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
    
}
$('#oppDetailsModal').on('shown.bs.modal', function () {
    getOppDetails(currentOppId)
  })
function documentReady(){
    getOpps();
}
$(documentReady);