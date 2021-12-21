export interface Inews {
    id: number,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    updatedAt: string,
    featured: boolean,
    launches: any[],
    events: any[]
}

export interface IpropsNewsList {
    news:Inews[]
}
export interface IpropsNewsItem {
    item:Inews
}