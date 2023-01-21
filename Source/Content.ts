
import { loadNews , News } from './News.ts'
import { Config } from './Config.ts'
import { chunk } from 'Chunk'


const { log } = console;


const Fill = '-'.repeat(34);

const Mark = `<!${ Fill } 🗞 News ${ Fill }>`;


const Space = ' ';


const indent = ( line : string ) =>
    `${ Space.repeat(3) }${ line }`

const trim = ( line : string ) =>
    line.trim();


const link = /(\[[\S\s]+?\])/g




function toPanel ( news : News ){

    const { links = {} } = news;

    const insertLinks = ( line : string ) =>
        line.replaceAll(link,( text ) => {

            const name = text
                .slice(1,-1);

            const url = links[name] ?? '#';

            return `<a href = '${ url }'>${ name }</a>`
        })


    const { title , lines } = news;

    const rows = lines
        .split('\n')
        .map(trim);

        rows.unshift(`<b>${ title }</b>`,'');

    const text = rows
        .map(indent)
        .map(insertLinks)
        .join('<br>');

    return [
        `<kbd align = left>${ Space }<br>` ,
        text ,
        `<br>${ Space.repeat(80) }</kbd>`
    ].join('')
}


export async function compileNews ( config : Config ){

    const articles = await loadNews(config);

    log(`🗞 Found ${ articles.length } news articles`)

    const panels = articles
        .map(toPanel);

    const news = chunk(panels,2)
        .map(( pair ) => pair.join(Space.repeat(5)))
        .join('<br><br>');

    const items = [
        Mark ,
        '<pre align = center>' ,
        news ,
        '</pre>' ,
        Mark
    ]

    return items
        .join('\n \n')
}
