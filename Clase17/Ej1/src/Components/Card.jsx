import {Link} from 'react-router-dom'

export default function Card({infos}){

    return<>
        <ul>
            {infos.map((info)=>{
                return (
                    <Link to={`/posts/${info.id}`}  key={info.id}>
                        <li>
                        <h1>{info.title}</h1>
                        {/* <p>{info.body}</p> */}
                        </li>
                    </Link>
            )})}
        </ul>
    </>
}