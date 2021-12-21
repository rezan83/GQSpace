import  {Link, useLocation} from 'react-router-dom'
import { Inews } from '../../interfaces';
import './article.css'

interface LocationState{
    item:Inews
}
     

const Article = () => {
    let location = useLocation();
    let {item} = location.state as LocationState
    console.log(item)
    let d = new Date(item.publishedAt)
    let publishedAt = d.toDateString()
 
    
    return (
        <div className='article'>
            <img src={item.imageUrl} alt="" />
            <h4>{item.title}</h4>
            <p>{item.summary}</p>
            <time>{publishedAt}</time>
            <Link to='/' > back </Link>
        </div>
    )
}

export default Article