import React from 'react'
import { IpropsNewsList } from '../../interfaces';
import NewsItem from './NewsItem'

const  NewsList=(props: IpropsNewsList) =>{
    let {news} = props;
    const newsList = news.map(item => (
        <NewsItem item={item}/>
        
    ))
    return (
        <div className='news-list'>
            {newsList}
        </div>
    )
}

export default NewsList
