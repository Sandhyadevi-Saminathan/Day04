var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
For (var i= 0; i< result.length; i++) 
{
Console.log(result[i].flagname);
}
};
