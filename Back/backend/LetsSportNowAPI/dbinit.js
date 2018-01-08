var db = require("./dbconnection").db;

function createPuppy(id, name, breed, age, sex) {
  // db.none(
  //   "CREATE TABLE IF NOT EXISTS pups (" +
  //     "  ID SERIAL PRIMARY KEY," +
  //     "  name VARCHAR," +
  //     "breed VARCHAR," +
  //     "  age INTEGER," +
  //     "  sex VARCHAR" +
  //     ");"
  // );
  let puppy = {
    id: id,
    name: name,
    breed: breed,
    age: age,
    sex: sex
  };
  return db
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

function createUser(id, name) {
  let user = {
    User_ID: id,
    User_Name: name
  };
  return db
    .none(
      'insert into "Users"("User_ID","User_Name")' +
        "values(${User_ID},${User_Name})",
      user
    )
    .then(function() {
      console.log("added user");
    })
    .catch(function(err) {
      console.log("error while adding user" + err);
    });
}

function createEvent(id, lla, llo, des, p, da, hid, spid, pmi, pma, pn, s) {
  let myevent = {
    Event_ID: id,
    Location_latitude: lla,
    Location_longitude: llo,
    Description: des,
    Photo: p,
    Date: da,
    Host_ID: hid,
    Spot_ID: spid,
    Participants_min: pmi,
    Participants_max: pma,
    Participants_number: pn,
    Sport: s
  };
  return db
    .none(
      'insert into "Events"("Event_ID","Location_latitude", "Location_longitude", "Description", "Photo", "Date", "Host_ID", "Spot_ID", "Participants_min", "Participants_max", "Participants_number","Sport")' +
        "values(${Event_ID},${Location_latitude}, ${Location_longitude}, ${ Description}, ${ Photo}, ${ Date}, ${ Host_ID}, ${ Spot_ID}, ${ Participants_min}, ${ Participants_max},${ Participants_number}, ${ Sport})",
      myevent
    )
    .then(function() {
      console.log("added event");
    })
    .catch(function(err) {
      console.log("error while adding event" + err);
    });
}

function createSpot(id, llo, lla, f) {
  let spot = {
    Spot_ID: id,
    Spot_longitude: llo,
    Spot_latitude: lla,
    Fields: f
  };

  return db
    .none(
      'insert into "Spots"("Spot_ID","Spot_longitude","Spot_latitude","Fields")' +
        "values(${Spot_ID},${Spot_longitude}, ${Spot_latitude}, ${Fields})",
      spot
    )
    .then(function() {
      console.log("added spot");
    })
    .catch(function(err) {
      console.log("error while adding spot" + err);
    });
}

db
  .none('TRUNCATE pups, "Users", "Events", "Spots"')
  .then(() => {
    createPuppy("1", "Tyler", "Retrieved", 3, "M").then(() => {
      createUser("1", "Guigui").then(() => {
        createSpot("1", "0", "0", "0").then(() => {
          createEvent(
            "1",
            "0",
            "0",
            "descr",
            "photo",
            "01/01/2018",
            "1",
            "1",
            "0",
            "10",
            "0",
            "Basketball"
          );
        });
      });
    });
  })
  .catch(function(err) {
    console.log("error while cleaning db" + err);
  });
