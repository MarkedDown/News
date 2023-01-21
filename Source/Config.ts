
import { parse as parseYAML } from 'YAML'
import { setFailed } from 'Actions'
import { parse } from 'Flags'
import { join } from 'Path'


export interface Config {
    Inject : string
    Input : string
}

const { readTextFile , args , env } = Deno;


const repository = env
    .get('GITHUB_WORKSPACE') as string;


const flags = parse(args);

const config = join(repository,flags.config);



const yaml = await readTextFile(config)
    .catch(fail) as string


const configs = <Config []>
    parseYAML(yaml)


export default configs



function fail (){

    setFailed(`
        The given config path cannot be found!
        Path : \`${ config }\`
    `)

    Deno.exit(1);
}
