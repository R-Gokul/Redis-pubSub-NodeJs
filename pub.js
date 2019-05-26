var redis = require("redis");
var publisher = redis.createClient();

publisher.publish("notification", "{\"message\":\"Hello world from Gkr!\"}", function(){
  // process.exit(0);
});
publisher.publish("log", "{\"message\":\"Log from Gkr!\"}", function(){
  process.exit(0);
});