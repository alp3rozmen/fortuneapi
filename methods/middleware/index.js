import jwt from 'jsonwebtoken';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: err.message });
    }
    if (!user || user.username !== '') {
      if (req.originalUrl === '/api/getAllUserPayments' ||
          req.originalUrl === '/api/updatePaymentStatus' ||
          req.originalUrl === '/api/DeleteFalType' ||
          req.originalUrl === '/api/UpdateFalType' ||
          req.originalUrl === '/api/updateUserFalType' ||
          req.originalUrl === '/api/updateUserStatus') {
        if (user.user_role != 3) {
          return res.status(400).json({ error: 'Yetkisiz Erişim!' });
        }
      }
      next();
    } else {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  })
}

export default authenticateToken;