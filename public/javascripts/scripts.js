document.getElementById("event1").addEventListener("click", myFunction1);
document.getElementById("event2").addEventListener("click", myFunction2);

function myFunction1() {
  if (document.getElementById("event1").style.backgroundColor == "red")
  document.getElementById("event1").style.backgroundColor = "blue"
  else document.getElementById("event1").style.backgroundColor = "red"
}

function myFunction2() {
  var mysql = require('mysql');

  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "shopping"
  });

  con.connect(function (err) {
      if (err) alert("opps");

      var sql = "INSERT INTO shopping_list (Item) VALUES ('puppies')";
      con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted, ID: " + result.insertId);
      });
  });
}