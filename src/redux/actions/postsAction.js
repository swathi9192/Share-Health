import api from '../../api'

const fetchPosts = (posts) => {
  return {type : "FETCH_POSTS",
          payload : {posts}
}
}

const fetchPost = (post) => {
    return {
        type : "FETCH_POST",
        payload : {
            post
        }
    }
}





// const loadPostsFailure = (error) => {
//     return {
//         type: "LOAD_POSTS_FAILURE",
//         payload : {
//             error
//         }
//     }
// }

export const loadPosts =  () => async dispatch => {   
        const res =  await api.get(`posts`);
        dispatch(fetchPosts(res.data));
}

export const loadPost = (id) => async dispatch => {
    
     // const response = await Promise.all([api.get(`posts/${id}`),api.get(`posts/${id}/comments`)])
      const res = await api.get(`posts/${id}`);
      dispatch(fetchPost(res.data));
    //   Promise.resolve(dispatch(fetchPost(postsRes.data))).then(  
    //   () =>  dispatch(fetchComments(id,response[1].data)));
}