var db= firebase.firestore();

function findJobs(){
var zipcode=$("#exampleInputZipcode1");
var city=$("#exampleInputCity1");
alert ("zip= "+zipcode.val()
+" city= " +city.val());
db.collection("jobs").get()   
.then(function(jobs){
    jobs.forEach(function(job){
        alert(job.data().businessName);
    });

})
.catch(function(error){
    alert("Error:"+error);
});

}