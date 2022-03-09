const BlogList = ({ blogs }) => {

    return (
        <div className="blog-list">
             {blogs.map((blog) => (
                <a href={ blog.devLink }>
                    <div className="single" key={blog.id}>
                        <div className="thumbnail">
                            <img className="cover" src={ blog.image } alt="cover" />    
                        </div>
                        <div className="info">
                            <h2>{ blog.title }</h2>
                            <p>{ blog.description }...</p>  
                        </div>
                    </div>
                </a>
            ))}     
        </div>
    );
}
 
export default BlogList;