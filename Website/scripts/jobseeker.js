var db= firebase.firestore();

function findJobs(){
var zipcode=$("#exampleInputZipcode1");
var city=$("#exampleInputCity1");
//alert ("zip= "+zipcode.val()
//+" city= " +city.val());
db.collection("jobs").where("zipcode", "==", zipcode.val()).get()
.then(function(jobs){
    var tbody=$("#searchResults")
    jobs.forEach(function(job){
        //alert(job.data().businessName);
        var jobData=job.data();
        tbody.append("<tr><td>"+jobData.businessName+"</td><td>"+jobData.cityName+"</td><td>"+jobData.description+"</td><td>"+jobData.hourlyRate+"</td><td>"+jobData.startDate+"</td><td>"+jobData.endDate+"</td><td>"+jobData.jobName+"</td></tr>")
        
    });

})
.catch(function(error){
    alert("Error:"+error);
});

}