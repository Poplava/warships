import express from 'express';
import routes from './routes';

let app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

routes(app);

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
