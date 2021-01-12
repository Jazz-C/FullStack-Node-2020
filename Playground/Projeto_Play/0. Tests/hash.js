const bcrypt = require('bcrypt');

let hash = bcrypt.hashSync('1234',10);