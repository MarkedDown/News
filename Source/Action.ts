

import { parse } from 'Flags'
import { walk } from 'FileSystem'
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


for await ( const file of walk(repository,{ maxDepth : 1 }) )
    log(file.path);


log('Config',await Deno.readTextFile(config));
