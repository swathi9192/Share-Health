
import {Link} from 'react-router-dom'
import {dateFormat} from "../../helpers/dateHelper"
import "./Post.scss"

const PostList = (props) => {

    const posts = Object.keys(props.posts).map(key => props.posts[key]);
    const listItems = posts.sort((a,b)=>new Date(b.publish_date) -  new Date(a.publish_date)).
                      map(post => {
                          return (
                          <div key={post.id} className="column is-half is-narrow">
                              <div className="content">
                              <h3 className="title"><Link to={
                                `/${encodeURIComponent(post.title.split(" ").join("-").concat("-").concat(post.id))}`}
                                  >{post.title}</Link></h3>
                              <h6 className="subtitle has-text-grey mb-2">by {post.author} - {dateFormat(post.publish_date)}</h6>
                              <p>{post.description}</p>
                              </div>
                          </div>)
                      })

    return listItems;
}

export default PostList
