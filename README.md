# node-coinigy
Promise based Node wrapper for Coinigy's REST API

[Coinigy API Documentation](http://docs.coinigy.apiary.io/)

>userInfo is not authorized by default as it is a security risk.
>Coinigy API doesn't support `application/json` body for certain endpoints and requires `application/x-www-form-urlencoded`
>Known endpoints to fail - addOrder, cancelOrder. I support them still, but change it back to json in the future.

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
});
```

# Test

Test coverage is very small, so there are no guarantees that all endpoints work.

To run tests, create test-config.json using test-config-example.json.

```bash
npm test
```

# Contributing

I made this very quickly so if anyone would like to help, please feel free to make a PR

TODO:

1. Increase test coverage
2. Documentation
