const express = require("express");
const app = express();

app.listen(8080, console.log("Listening to 8080"));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
})

app.get("/api/getCustomers", function(request,response){

    const { Pool, Client } = require('pg')

    const pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'kt',
      password: 'password',
      port: 5432,
    })

    pool.query('select * from customers', (err, res) => {
      response.send(res.rows);
      pool.end()
    })

})


