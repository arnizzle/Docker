const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient( {
    host: 'redis',
    port: 6379
});

client.set('visits', 0)

app.get('/', (req, res) =>{
    
    client.get('visits', (err, visits) => {
        res.send('Number of visits: ' + visits);
        client.set('visits', parseInt(visits) + 1)
        if (parseInt(visits) > 10 ) {
            process.exit(0);
        }
    })

})

app.listen(8081, () =>{
    console.log('Listening on port 8081...')
})