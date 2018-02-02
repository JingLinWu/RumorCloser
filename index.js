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
                        var msg = event.message.text;
                                event.reply(msg).then(function(data) {
                                                    // success
                                                    console.log(msg);
                                                            }).catch(function(error) {
                                                                            // error
                                                                            console.log('error');
                                                                                    });
                                    }

            });
app.post('/webhook', linebotParser);
// 在 localhost 走 8080 port
let server = app.listen(process.env.PORT || 8080, function() {
            let port = server.address().port;
                console.log("My Line bot App running on port", port);
                });
