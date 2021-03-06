var db= firebase.firestore();
var currentJobId='';

function findJobs(){
var zipcode=$("#exampleInputZipcode1");
var city=$("#exampleInputCity1");
var condition='';
var value='';
if(city.val() != ''){
    condition='cityName';
    value=city.val();
}
else if(zipcode.val() != ''){
    condition='zipcode';
    value=zipcode.val();
}
//alert ("zip= "+zipcode.val()
//+" city= " +city.val());
db.collection("jobs").where(condition, "==", value).get()
.then(function(jobs){
    var tbody=$("#searchResults")
    jobs.forEach(function(job){
        //alert(job.data().businessName);
        var jobData=job.data();

        tbody.append("<tr><td><button onClick=setCurrentJobId('"+job.id+"') type='button' class='btn btn-link' data-toggle='modal' data-target='#jobDetailsModal'>"+jobData.businessName+"</button></td><td>"+jobData.jobName+"</td><td>"+jobData.cityName+"</td><td>"+jobData.zipcode+"</td><td>"+jobData.hourlyRate+"</td><td>"+jobData.startDate+"</td><td>"+jobData.startTime+"</td><td>"+jobData.endDate+"</td><td>"+jobData.endTime+"</td></tr>")
        
    });

})
.catch(function(error){
    alert("Error:"+error);
});


}
function setCurrentJobId(jobId){
    currentJobId=jobId;
    //alert(jobId);
}
function clearSearchResults(){
    var tbody=$("#searchResults");
    tbody.empty(); 
}
 function documentReady(){
    clearSearchResults();
    clearForm();
}
function clearForm(){
    var zipcode=$("#exampleInputZipcode1");
    var city=$("#exampleInputCity1");
    zipcode.val('');
    city.val('');
}
function getJobDetails(jobId){
    var docRef = db.collection("jobs").doc(jobId);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            var jobData=doc.data();
    
            $('#jobName').text(jobData.jobName);
            $('#hourlyRate').text(jobData.hourlyRate);
            $('#jobDescription').text(jobData.description);
            $('#emailAddress').text(jobData.emailAddress);
            $('#addressName').text(jobData.addressName);
            $('#phoneNumber').text(jobData.phoneNumber);
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
    
}
$('#jobDetailsModal').on('shown.bs.modal', function () {
    getJobDetails(currentJobId)
  })
$(documentReady);



