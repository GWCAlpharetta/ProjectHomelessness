var db= firebase.firestore();

function findJobs(){
    clearSearchResults();
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
    var tbody=$("#searchResults");
    jobs.forEach(function(job){
        //alert(job.data().businessName);
        var jobData=job.data();
        tbody.append("<tr><td>"+jobData.businessName+"</td><td>"+jobData.jobName+"</td><td>"+jobData.cityName+"</td><td>"+jobData.zipcode+"</td><td>"+jobData.hourlyRate+"</td><td>"+jobData.startDate+"</td><td>"+jobData.endDate+"</td></tr>")
        
    });

})
.catch(function(error){
    alert("Error:"+error);
});

}
function clearSearchResults(){
    var tbody=$("#searchResults");
    tbody.empty(); 
}
 function documentReady(){
    clearSearchResults();
}
$(documentReady);