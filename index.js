const useragent = require('express-useragent');


// Middleware function for dynamic access key and token validation
const blockUserAgents = (options = {}) => {
  const { bypassKey, token } = options;

  return (req, res, next) => {

    const ua = req.useragent;

    // Blocked User-Agents
    const blockedUserAgents = [
      'PostmanRuntime',
      'Thunder Client',
      'curl',
      'Wget',
      'Python-Requests',
      'Insomnia',
      'Googlebot',
      'facebookexternalhit',
      'Slackbot-LinkExpanding',
    ];

    if (req.header('x-access-bypass') !== bypassKey) {
      if (blockedUserAgents.some(uaString => ua.source.includes(uaString))) {
        return res.status(403).json({
          message: 'Access forbidden: Invalid User-Agent',
        });
      }
    }

    if (token) {
      const isValidToken = req.header('x-access-token') === token; 
      if (!req.header('x-access-token') && !isValidToken) {
        return res.status(403).json({
          message: 'Access denied: Invalid Token',
        });
      }
    }

    // Proceed if all checks pass #Subhadipta Nayak#
    next();
  };
};

module.exports = blockUserAgents;
