// var start = '{"favColor":"green", "favSeason":"Harvest"}';
//
// var myObject = JSON.parse(start);
// console.log(myObject);
//
// var myString = JSON.stringify(myObject);
// console.log(myString);
//
// var myObject = JSON.parse(myString);
// console.log(myObject);

// var theData1 = '{"first":"Patrick", "last":"Logan", "city":"Salt Lake City"}';
// var myObj = JSON.parse(theData1);
//
//var Data3 = '{"food":"pizza", "dessert":"gelato"}'
//var myObj = JSON.parse(Data3);
//// console.log(myObj);
//
//document.getElementById('message').innerHTML = myObj.dessert;

// var theData2 = '{"Jane":{"age":"29", "degree":{"AAS":"VMI", "BA":"UVA"}}, "Jim":{"age":"49", "degree":"MA"}}';
// var myObj = JSON.parse(theData2);
//
////console.log(myObj)
//// document.getElementById('message').innerHTML = myObj.Jim.degree;
////
//var xhr = new XMLHttpRequest();
//
//xhr.open('GET', 'data.json', true);
//
//xhr.responstType = 'text';
//
//
////xhr.onreadystatechange = function() {
////    console.log(xhr.readyState);
////    console.log(xhr.status);
////    console.log(xhr.statusText);
////}
//
//xhr.onload = function() {
//    if (xhr.status === 200){
//        var myStuff = JSON.parse(xhr.responseText);
//        console.log(myStuff);
//    }
//}
//
//xhr.send();


var xhr = new XMLHttpRequest();
xhr.open('GET',"data.json", true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function() {
    if(xhr.status === 200) {
        var myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);
        
        for (i=0; i<myStuff.presidents.length; i++) {
            console.log(myStuff.presidents[i].first);
            console.log(myStuff.presidents[i].last);
            console.log(myStuff.presidents[i].served);
        
            console.log(myStuff.vicepresidents[i].first);
            console.log(myStuff.vicepresidents[i].last);
        }
        
        var myString = "";
        for (i=0; i<myStuff.presidents.length; i++) {
            var x = i+1;
            myString += "<br>President " +x+ " was ";
            myString += myStuff.presidents[i].first + " ";
            myString += myStuff.presidents[i].last + ".  ";
            
            myString += "He served from "+ myStuff.presidents[i].served +" with " + myStuff.vicepresidents[i].first + " " + myStuff.vicepresidents[i].last +".  ";
            
        }
        document.getElementById('message').innerHTML = myString;
    }
}
//    console.log(myStuff);
//    
//    console.log(myStuff[1]);
//    
//    console.log(myStuff[0].first)
//    
