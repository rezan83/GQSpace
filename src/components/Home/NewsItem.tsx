import React from 'react'
import {Link} from 'react-router-dom'
import { IpropsNewsItem } from '../../interfaces'

const NewsItem = (props:IpropsNewsItem) => {
    let {item} = props
    return (
        <div className='news-item'>
            <img src={item.imageUrl} alt="" />
            
            <Link 
                to='/article'
                state= {{item}}  
            >
                <h3>{item.title}</h3>
            </Link>
        </div>
    )
}

export default NewsItem
