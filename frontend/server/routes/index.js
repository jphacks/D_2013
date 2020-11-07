'use strict'
const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
require('dotenv').config();
const env = process.env;
const WebSocket = require('ws');
// const ws = new WebSocket('ws://desolate-ocean-79020.herokuapp.com', {
//   origin: 'https://desolate-ocean-79020.herokuapp.com'
// });
// const dews = new WebSocket('ws://localhost:4040', {
//   origin: 'http://localhost:4040'
// });

// console.log(env.PROJECT_ID);
admin.initializeApp({
  credential: admin.credential.cert({
    project_id: env.PROJECT_ID,
    client_email: env.CLIENT_EMAIL,
    private_key: env.PRIVATE_KEY.replace(/\\n/g, '\n')
  }),
  databaseURL: "https://jphack2.firebaseio.com"
});

let db = admin.firestore();

// ws.on('open', function open() {
//   console.log('connected');
// });

// ws.on('message', function incoming(data) {
//   console.log(data + "きた");
// });
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/setting_game', (req, res) => {
  // 1. expo clientから受け取る.
  // firestoreでゲーム振り分け
  const time_manegement = (time) => {
    let t = {
      hour: 0,
      minute: 0,
      second: 0,
    };
    t.hour = time.getHours();
    t.minute = time.getMinutes();
    t.second = time.getSeconds();
    return t;
  };

  const compare_time = (t, t2) => {
    let T = t.minute * 60 + t.second;
    let T2 = t2.minute * 60 + t2.second;
    let compare = Math.abs(T - T2);
    return compare;
  }

  let ID = req.query.uid;

  // ws.send(ID);
  // dews.send(ID);

  let eventsRef = db.collection('events');

  eventsRef.where('user_id', '==', ID).limit(1).get().then(snapshot => {
    if (snapshot.empty) {

      console.log('No matching documents.');
      return
    }
    snapshot.forEach((doc) => {
      // console.log(doc.data());
      let t = time_manegement(new Date(doc.data().get_up_time));

      let t2 = time_manegement(new Date(doc.data().getup_hope_time));

      let diff = compare_time(t, t2) / 60.0;

      if (diff <= 10.0) {
        // unityRendering
        // 3. unityWebGLページを返す
        console.log("sucess!" + diff);
        res.render('unity_build');

        // game中にする
        db.collection('users').doc(ID).update({
          on_game: true,
        })

      } else {
        // form
        console.log("failure" + diff);
        res.render('/');
      }


    })
  }).catch((err) => {
    console.log('Error getting documents', err);
  });
});


router.post('/unity_score', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  // unityHTTPRequestでうけとる
  // req.body.user_score = 1(clear) || 0(failure) 的な感じ
  console.log(req.body.user_id);
  console.log(req.body.user_score);

  // firestoreのユーザースコアと派閥スコア(oioi)に反映。
  if (req.body.user_score === 1) {
    db.collection('users').doc(req.body.user_id).update({
      score: FieldValue.increment(),
      on_game: false
    })
  } else {
    db.collection('users').doc(req.body.user_id).update({
      on_game: false
    })
  }
  // reactへ
});

// test unity build
router.get('/test_unity_build', (req, res) => {
  res.render('unity_build');
});


module.exports = router;