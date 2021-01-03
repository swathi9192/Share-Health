

 const postsReducer = (state={}, action) => {
    switch (action.type) {
        case "FETCH_POSTS" :
            return action.payload.posts.reduce((obj,post)=>{obj[post.id] = post;return obj},{})
        case "FETCH_POST" :
            return {...state, [action.payload.post.id] :action.payload.post}
        default:
            return state

    }
}
export default postsReducer