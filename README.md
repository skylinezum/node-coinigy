# node-coinigy
Promised based Node wrapper for Coinigy's REST API

[Coinigy API Documentation](http://docs.coinigy.apiary.io/)

>userInfo may not work. I believe it may not be a public endpoint.

# Install
```bash
npm install node-coinigy --save
```

# Use
```
var Coinigy = require('node-coinigy');
var coinigy = new Coinigy('your-api-key', 'your-api-secret');

coinigy.activity()
.then(function (body) {
  console.log(body.data);
  console.log(body.notifications);
})
.catch(function (err) {
  console.log(err);
})
```
