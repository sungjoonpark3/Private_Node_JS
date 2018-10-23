//https://stackoverrun.com/ko/q/12537447 ->참고주소
//http://html5around.com/wordpress/tutorials/ ->참고주소
//참고주소

const sql = require('mssql'); 
var dbConfig = { 
    server:'10.1.0.62', 
    database:'DSS2019', 
    user:'DSS2019', 
    password:'DSS2019', 
    port:1433 
}; 

sql.connect(dbConfig).then(pool => { 
    // Query  
    return pool.request().query('select * from tbMngAccount') 
}).then(result => { 
    console.log(result); 
}).catch(err => { 
    // ... error checks 
}) 


