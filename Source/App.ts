
import { insertNews } from './Readme.ts'

import configs from './Config.ts'


const
    { writeTextFile , readTextFile } = Deno ,
    { log } = console ;


log(`🗞 Inserting updated News`);


for ( const config of configs ){

    log(`
        Building Config
        Inject : ${ config.Inject }
        Input : ${ config.Input }
    `)

    const readme = await readTextFile(config.Inject);

    const updated = await insertNews(readme,config);

    await writeTextFile(config.Inject,updated);

}


log(`🗞 Finished news insertion`);

