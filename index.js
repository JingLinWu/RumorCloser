var request = require("request");
var async = require("async");

shortURL = "NNNN"

let linebot = require('linebot'),
express = require('express');
util = require('util');


let bot = linebot({
        channelId: '1560813563',
        channelSecret: '5068a9f5ac916c3e210db3d779d3f9f9',
        channelAccessToken: '0FUqoUo1KbTeMxPKI0INKz2uBlHxDAQJmyvym/pojsgdCRqdtZM88X6EAZOiBN7xuJnkoJDRoNr5mrg4OqPihgY22zmx0IGBU2VLU9ZWOfxff+Y4bPK5vneLbPya6AZUlG0q4f6r1hoq19IpBkeOpgdB04t89/1O/w1cDnyilFU='
                });
const linebotParser = bot.parser(),
app = express();
bot.on('message', function(event) {
        // 把收到訊息的 event 印出來
        console.log(event);
        // 重複 client 輸入的內容
        if (event.message.type = 'text') {
                var msg = event.message.text.trim().replace(/ +/g, "+").replace(/\n|，|。|、|！|？|～|：|；|（|）|「|」|『|』|【|】|·/g,"+");
                // if the string length is less than 20 and it contain chinese, we think this is conversation 
                if (searchChinese(msg)){
                        // if the string contains Chinese, let the length be 20
                        var strLengthLimit = 20
                }else{
                        var strLengthLimit = 50
                }
                if (msg.length > strLengthLimit || msg.includes("https://") || msg.includes("http://") ) {
                        genTheGoogleSearchURL(msg,function(data) {    
                                                var responseForOldGuys = "點選連結確認消息真實性吧！\n\n" + data.toString()
                                                event.reply(responseForOldGuys).then(function(data) {
                                                // success
                                                console.log(responseForOldGuys);
                                                }).catch(function(error) {
                                                // error
                                                console.log('error');
                                                })
                                        }
                                )
                        
                        }
                }
            });





function searchChinese(Str){
  for(var i = 0;i<Str.length;i++){
    if(Str.charCodeAt(i)>=255){
      return true
    } else {
      return false      
    }	
  }
}


genTheGoogleSearchURL = function(msg,callback) {

        returnURL = "https://www.google.com.tw/search?q=假+" + msg.toString().substr(0, 31)
        console.log(returnURL)
        returnURL = encodeURI(returnURL)
        console.log(returnURL)
        var options = { method: 'POST',
        url: 'https://www.googleapis.com/urlshortener/v1/url',
        qs: { key: 'AIzaSyBNaXeTs7Yvo7mrJImD5bzoNbRmcmo5a-Q' },
        headers: 
        { 'cache-control': 'no-cache',
        'content-type': 'application/json' },
        body: { longUrl: returnURL },
        json: true };


        request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(body.id);
                callback(body.id)
                }
            )

};


app.post('/webhook', linebotParser);


// 在 localhost 走 8080 port
let server = app.listen(process.env.PORT || 8080, function() {
            let port = server.address().port;
                console.log("My Line bot App running on port", port);
                });
