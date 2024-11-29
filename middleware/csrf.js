const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

const csrfErrorHandler = (err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') {
    res.status(403).json({ error: 'Invalid CSRF token' });
  } else {
    next(err);
  }
};

module.exports = { csrfProtection, csrfErrorHandler };
