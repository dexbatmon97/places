
//creating and structuring the store
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; 
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if(!window.indexedDB){
    alert("not working");
}

var db;

//opening data base
//nombre y version
var request = window.indexedDB.open("places",1)

//generating handlers
request.onerror = function(event){
    console.log("error" + event.target.result)
}

request.onsuccess = function(event){
    db = request.result
    console.log("succes" +db)
}

// creating or updating the version of the database
request.onupgradeneeded = function(event){
    var db = event.target.result;
    var objectStore = db.createObjectStore("Places")

}