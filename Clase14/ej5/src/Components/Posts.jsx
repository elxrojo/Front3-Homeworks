export default function Posts({ infoPosts }) {
    return <>
        <ul>
        {
            infoPosts.map((post)=>{
                return <li key={post.id}> 
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            })
        }
        </ul>
    </>
}