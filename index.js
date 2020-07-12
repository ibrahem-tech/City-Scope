if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = require('./src/app');

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Server is ready for connections on port ${PORT}`);
});