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


server kelar >> bikin frontend. tapi sebelumnya git init dahulu
buat file baru .gitignore untuk ignore node_modules biar tidak ikut dipush
git add all dan commit

create-react-app client (bikin cra masukin dalam folder client)

concurrently: single commend biar back front jalan. 

npm install concurrently
lalu, di rootfolder package.json edit script:
"client": "npm start --prefix client"
prefix agar npm startnya bukannya jalan di root tapi jalan di dalam folder client.

"dev" : "concurrently \"npm run server"\ \"npm run client"\"

npm run dev: maka jalan 2 localhost di browser.

dah.

hapus-hapusin file yang tidak diperlukan di client folder, ex. logo etc.

buka bootswatch.com ... pilih mau theme apa. copy urlnya.
public/index.html tambah 
<link rel="stylesheet" href="paste url bootswachnya disini:"https//bootswatch.com/4/cyborg/bootstrap.min.css"> taro diatas manifest.

import logo di app.js import logo from './logo.png';
taro logo di img:
style={{ width: 300, display: 'block', margin: 'auto' }}


apollographql.com
npm install apollo-boost react-apollo graphql


Kalo ada error cors dimana localhost 3000 minta akses ke localhost lain di 5000// type npm intall cors di server
taro app.use(cors()); di server.js

di client folder:
npm i classname moment react-moment untuk di LaunchItem.js
npm i react-router-dom


   
di package.json client edit script :  "build": "react-scripts build && mv build ../public",
artinya folder hasil build dari npm run build dipindah (folder public) masuk ke route server.

di client folder, run: npm run build

baru bisa lagi jalan appnyay di local machine

heroku login
heroku create
masuk ke heroku.com jadi linknya..
pilih deplloy
heroku git:remote -a xxxnamnya
git add .
git commit -m "comments apa aaja"
(semua uptodate)
git push heroku master

