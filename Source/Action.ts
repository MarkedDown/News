

import { walk } from 'FileSystem'
import { parse } from 'Flags'

const { log } = console;


log('Testing',import.meta.url);


const flags = parse(Deno.args);
log('Flags',flags);

const config = Deno.env.get('INPUT_CONFIG');

log('Config',config,Deno.env.toObject());

// if(config)

log('env',await Deno.readTextFile(Deno.env.get('GITHUB_ENV') as string));

for await ( const file of walk(Deno.env.get('GITHUB_WORKSPACE') as string,{
    maxDepth : 1
})) log(file.path);

