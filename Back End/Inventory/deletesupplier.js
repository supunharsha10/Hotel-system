const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sayura-beach-hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected delete supplier');
});

module.exports = function (app){
    app.get('/deletesupplier', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        connection.query('DELETE FROM supplierdetails WHERE supNIC = "'+req.query.NIC+'"',(err,rows) =>{
        console.log('Done',err);
            
        });
   
    });
}