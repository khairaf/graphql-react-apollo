Graphql: way to query your data = restAPI. bisa ask specific things. judul aja misal. query seperti json. tidak spesifik untuk js saja.
This is Read only app.

SPACExAPI : isinya data.

bootstrap
react router

npm i graphql express-graphql express axios
npm i -D nodemon

const schema = require('./schema'); artinya berada di direktori yang sama, disini isinya berkaitan dengan qraphql stuff.

cara query amnil data/baca data di localhost:5000/qraphql
{
  launches{
    flight_number,
    mission_name,
    launch_success,
    rocket {
      rocket_id
    }
  }
}

atau ambil data roket tertentu saja

{
  launch(flight_number: 3){
    mission_name,
    launch_year,
    rocket {
      rocket_id
    }
  }
}