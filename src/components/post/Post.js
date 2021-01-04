
import React from 'react'
import {connect} from 'react-redux'
import CommentList from "../comments/CommentList"
import PostComment from "../comments/PostComment"
import GmailLogin from '../login/GmailLogin'
import {getPost} from '../../redux/selectors/postsSelector'
import {getComments} from '../../redux/selectors/commentsSelector'
import {getAuthStatus} from '../../redux/selectors/authSelector'
import {loadPost,loadComments,postComment,signIn,signOut} from '../../redux/actions/'
import {dateFormat} from "../../helpers/dateHelper"


const getPostId = title => {
    return decodeURIComponent(title).split("-").pop();
}

class Post extends React.Component {      
    componentDidMount(){
        const postId = getPostId(this.props.match.params.title);
        this.props.loadPost(postId);
        this.props.loadComments(postId);
        console.log(this.props);
        
    }
    
    submitComment = (commentText,parentId) => {
        const postId = getPostId(this.props.match.params.title);
        const commentObj = {
            postId : postId,
            parent_id : parentId,
            user : this.props.auth.userName,
            date : new Date(),
            content : commentText
        }
        this.props.postComment(postId,commentObj)
    }
   
    render() {
        if(!this.props.post)
        return null;
        else
        return (
            <section className="section postComponent">
            <div className="columns is-flex is-flex-direction-column is-align-items-center">
                <div className="column is-6 ">
                <h1 className="title">{this.props.post.title}</h1>
             <h4 className="subtitle">{this.props.post.description}</h4>
        <h6 className="subtitle is-6">{this.props.post.author} - {dateFormat(this.props.post.publish_date)}</h6>
        <div className="content" dangerouslySetInnerHTML={{ __html: this.props.post.content }}>
        </div>
        

        { this.props.comments &&  
              <>
            
           {this.props.auth.isSignedIn? <><h4 className="title is-4">Comments</h4><PostComment  submitComment = {this.submitComment} /> </> : <p className="content">Please <GmailLogin /> to comment.</p>}  
            
            <CommentList   submitComment = {this.submitComment} comments={this.props.comments} isSignedIn={this.props.auth.isSignedIn}/> 
            </>
        }
                </div>
            </div>
             
            </section>          
        )
    }
    
}

const mapStateToProps = (state,ownProps) => {
    const id =getPostId(ownProps.match.params.title);
    return {
        auth : getAuthStatus(state),
        post : getPost(state,id),
        comments : getComments(state,id)
    }
}
export default connect(mapStateToProps,{loadPost,loadComments,postComment,signIn,signOut})(Post);