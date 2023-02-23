const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/authentication', require('./routes/authentication'))

app.set('port', process.env.PORT || 1000)

app.listen(app.get('port'), () => console.log(`Server started on port ${app.get('port')}`));