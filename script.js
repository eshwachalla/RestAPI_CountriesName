var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data);
    var countries = data.filter((ele)=>ele.region==="Asia");
    console.log(countries);
}