import { IpropsNewsList } from '../../interfaces'
import NewsList from './NewsList'
import './home.css'


const Home = (props:IpropsNewsList) => {
    let {news} = props;
    return(
        <>
            <NewsList news={news}/>
        </>
    )
}

export default Home