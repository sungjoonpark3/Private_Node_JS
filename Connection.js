const sql = require('mssql'); 
var dbConfig = { 
    server:'서버아이피', 
    database:'디비명', 
    user:'유저명', 
    password:'비밀번호', 
    port:1433 
}; 

sql.connect(dbConfig).then(pool => { 
    // Query  
    return pool.request() 
    .query('select * from tbMngAccount') 
}).then(result => { 
    console.log(result); 
}).catch(err => { 
    // ... error checks 
}) 