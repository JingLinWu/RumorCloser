let linebot = require('linebot'),
        express = require('express');
          util = require('util');
let bot = linebot({
            channelId: '1560813765',
                channelSecret: '051c5ff982433cf14dca5d1dac8c0eb4',
                    channelAccessToken: 'UJSxcJrcZMCESwDXeGiJ6rpdcf5OHAjvnbJMo2gjaCn5CVQ3uR6tJoCB1j/xYfG5p/Vd2F9IYCGuJ6MZE4ELvTLi7XgxToDNTBwXsFjN70FFa017pAhpQ8ooJphBLSqFpTsdtjy2ZCb49zy4m8wO1QdB04t89/1O/w1cDnyilFU='
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
