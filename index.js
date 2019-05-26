var redis = require('redis');
var notificationSubscriber = redis.createClient();  // Config If need { host: '', port: ''}
var logSubscriber = redis.createClient();
var { sendWelcome } = require('./services/sendNotification');

notificationSubscriber.subscribe("notification");
logSubscriber.subscribe("log");

notificationSubscriber.on('message', function (channel, message) {
 console.log("Message: " + message + " on channel: " + channel + " is arrive!");
 sendWelcome(message)
});

logSubscriber.on('message', function (channel, message) {
 console.log("Message: " + message + " on channel: " + channel + " is arrive!");
 sendWelcome(message)
});
