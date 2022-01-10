const express = require('express')
const app = express()
const port = 3000

// jsonを使えるように宣言
app.use(express.json())

app.post('/booklog', (req,res)=>{
  // requestのbodyをそのまま定数に入れている
  const booklog = req.body

  res.json({
      'ok': true,
      'booklog': booklog
    })
})

// node app.jsで起動
// listenとは外部からアクセスがあるとそれに対応する処理を行って表示を送り返す関数
app.listen(port, ()=>{console.log('listenできてるよ')})