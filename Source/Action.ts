

import { setFailed } from 'Actions'
import { parse } from 'Flags'
import { join } from 'Path'


const { args , env } = Deno;
const { log } = console;


const repository = env.get('GITHUB_WORKSPACE') as string;


const flags = parse(args);


const config = join(repository,flags.config);


log(`
    Repository : ${ repository }
    Config : ${ config }
`)


const { readTextFile } = Deno;

await readTextFile(config)
    .then(loadConfig)
    .catch(() => {

        setFailed(`
            The given config path cannot be found!
            Path : \`${ config }\`
        `)
    })

function loadConfig ( text : string ){

    log('Config',text);
}
