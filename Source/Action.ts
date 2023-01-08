

import { setFailed } from 'Actions'
import { parse } from 'Flags'
import { walk } from 'FileSystem'
import { join } from 'Path'

const { args , env } = Deno;
const { log } = console;


const repository = env.get('GITHUB_WORKSPACE') as string;


const flags = parse(args);


const config = join(repository,flags.config);


const { readTextFile } = Deno;

await readTextFile(config)
    .then(loadConfig)
    .catch(() => {

        setFailed(`
            The given config path cannot be found!
            Path : \`${ config }\`
        `)

        Deno.exit(1);
    })

function loadConfig ( text : string ){

    log('Config',text);
}
