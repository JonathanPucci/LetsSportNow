var promise = require("bluebird");

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require("pg-promise")(options);
var connectionString = "postgres://localhost:5432/puppies";
const cn = {
  host: process.env.POSTGRESQL_HOST || "localhost",
  port: process.env.POSTGRESQL_PORT || 5432,
  database: process.env.POSTGRESQL_DATABASE || "puppies",
  user: process.env.POSTGRESQL_USER || "postgres",
  password: process.env.POSTGRESQL_PASSWORD || "password"
};
var db = pgp(cn);

function createPuppy(id, name, breed, age, sex) {
  let puppy = {
    id: id,
    name: name,
    breed: breed,
    age: age,
    sex: sex
  };
  db
    .none(
      "insert into pups(id, name, breed, age, sex)" +
        "values(${id}, ${name}, ${breed}, ${age}, ${sex}) ON CONFLICT DO NOTHING",
      puppy
    )
    .then(function() {
      console.log("added puppy");
    })
    .catch(function(err) {
      console.log("error while adding puppy" + err);
    });
}

createPuppy("1", "Tyler", "Retrieved", 3, "M");
