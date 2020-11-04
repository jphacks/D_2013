// socket.ioの処理開始
const socket = io.connect();

// メッセージを入力する
function sendTest() {
  const message = prompt('メッセージを入力してください。\n' +
    'このメッセージはすべてのクライアントに送信されます。');

  // メッセージ入力イベント（sendTest）を送信する
  socket.emit('sendTest', message);
}

// メッセージ表示イベント（receiveTest）を受信する
socket.on('receiveTest', function (data) {
  // 画面上にメッセージを表示
  let t = document.getElementById('thread');
  let p = document.createElement("p");
  let text = document.createTextNode(data);
  p.appendChild(text);
  t.appendChild(p);
});
