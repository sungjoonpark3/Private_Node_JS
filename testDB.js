var sql = require('mssql');
var result;
var express = require('express');
const db=
{
"user":"TESTDB",
"password":"TESTDB",
"server":"10.1.0.62",
port:1433, 
"database":"TESTDB",
encrypt: false,
 };

 module.exports=db;

 sql.connect(db,function(err){
     sql.close();
 });


 var request =new sql.Request();
 request.query("select * from UserList",function(err,result){
    console.log(result);
    
 });