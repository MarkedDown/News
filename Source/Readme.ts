
import { compileNews } from './Content.ts'
import { Config } from './Config.ts'

const
    content = `[\\s\\S]+?` ,
    marker = `<!-{2,} *🗞 News *-{2,}>` ,
    pattern = `${ marker }(${ content })${ marker }` ;

const outdated =
    new RegExp(pattern,'im');


export async function insertNews ( readme : string , config : Config ){

    const news = await compileNews(config);

    return readme
        .replace(outdated,news);
}
