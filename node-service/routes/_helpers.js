const request = require('request-promise');

let ensureAuthenticated = (req, res, next) => {
  if (!(req.headers && req.headers.cookie)) {
    return next(new Error({ statusCode : '204', message: "Please log in"}));
  }

  return next();

  const options = {
    method: 'GET',
    uri: 'http://localhost:5010/auth/web/user/gundaja',
    json: true,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}`,
    },
  };
  return request(options)
      .then((response) => {
    return next();
  })
  .catch((err) => { console.log(err); return next(err); });
  };

if (process.env.NODE_ENV === 'test') {
  ensureAuthenticated = (req, res, next) => {
    req.user = 1;
    return next();
  };
}

module.exports = {
  ensureAuthenticated,
};