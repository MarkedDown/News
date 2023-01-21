
import { Config } from './Config.ts'
import { parse } from 'YAML'

const { readTextFile } = Deno;


export interface News {

    title : News

    lines : string

    links ?: {
        [ alias : string ] : string
    }
}


export async function loadNews ( config : Config ){

    const yaml = await readTextFile(config.Input);

    return <News[]>
        parse(yaml) ?? []
}
