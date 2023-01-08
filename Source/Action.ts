

const { log } = console;


log('Testing',import.meta.url);



const config = Deno.env.get('INPUT_CONFIG');

log('Config',config,Deno.env.toObject());

if(config)
    log(await Deno.readTextFile(Deno.env.get('GITHUB_ENV') as string));

