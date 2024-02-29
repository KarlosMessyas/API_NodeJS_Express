const api = require('./api')

require('dotenv').config();

const PORT = process.env.PORT || 3333;

api.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
