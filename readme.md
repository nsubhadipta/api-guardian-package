# API Guardian Package

The ultimate VIP bouncer for your API. Only the right user agents and proper requests get in. Everyone else gets a 403.

```req.header('x-access-bypass')```

# Installation
Installing API Guardian Package

```npm install api-guardian-package```

# Basic Setup
```
const express = require('express');
const blockUserAgents = require('api-guardian-package');

const app = express();

app.use(blockUserAgents({
  bypassKey: 'your-bypass-key'  // Optional: Provide a bypass key for special cases
  token:"your-token" // Optional: For Block browser access
}));


app.get('/api/your-endpoint', (req, res) => {
  res.send('Welcome to the VIP section!');
});

app.listen(3000, () => {
  console.log('API running on http://localhost:3000');
});
```


# Conclusion
**API Guardian Package** provides top-notch security for your endpoints, ensuring that only VIP requests get through!