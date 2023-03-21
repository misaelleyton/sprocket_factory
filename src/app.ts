import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

import { factoriesRouter } from './routes/factories'
import { sprocketsRouter } from './routes/sprockets'
import { connect } from './db/db'
import FactoryModel from './models/factory';
import SprocketModel from './models/sprocket';

const app: Express = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api/factories', factoriesRouter)
app.use('/api/sprockets', sprocketsRouter);
function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function seeder() {
    const data = await FactoryModel.find({}).exec();
    if (data.length !== 0) {
        // Data exists, no need to seed.
        return;
    }
    for (let i = 0; i < 50; i++) {
        const factory = new FactoryModel();
        let startTime = randomInteger(1611194818, Math.floor(Date.now() / 1000));
        for (let j = 0; j < 100; j++) {
            let production = {
                sprocket_production_actual: randomInteger(1, 100),
                sprocket_production_goal: randomInteger(1, 100),
                time: startTime
            }
            startTime += 60;
            factory.chart_data.push(production);
        }
        await factory.save();
        let sprocketData = {
            teeth: randomInteger(6, 50),
            pitch_diameter: randomInteger(1, 20),
            outside_diameter: randomInteger(1, 20),
            pitch: randomInteger(1, 24) * 10
        }
        sprocketData.pitch_diameter = sprocketData.pitch / Math.sin(180 / sprocketData.teeth)
        sprocketData.outside_diameter = sprocketData.pitch_diameter + ((sprocketData.pitch_diameter * 0.05) * 0.65)
        const sprocket = new SprocketModel(sprocketData);
        sprocket.save();
    }
}

(async () => {
    try {
        await connect()
        await seeder()
        app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error starting server: ${error.message}`)
        } else {
            console.log('Unexpected error', error);
        }
        process.exit(1)
    }
})()
export { app }
