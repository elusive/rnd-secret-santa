import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const corsOptions = {
    origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse request for content-type application/json
app.use(bodyParser.json());

// parse request for content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
    res.json({ message: 'Secret Santa server side.' });
});

// set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Secret Santa Server is running on port ${PORT}`);
});
