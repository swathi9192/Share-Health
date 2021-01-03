import axios from "axios"
import api from "../../api"


const addComment = (id,comment) => {
    return {
        type : "ADD_COMMENT",
        payload : {
            id,
            comment
        }
    }
}
const fetchComments = (id,comments) => {
    return {
        type : "FETCH_COMMENTS",
        payload : {
            id,
            comments
        }
    }
}
export const loadComments = (id) => async dispatch => {
    const res = await api.get(`posts/${id}/comments`);
    dispatch(fetchComments(id,res.data));
}
export const postComment = (id,comment) => async dispatch =>{

    const  commentsRes = await api.get(`comments`);
    const maxId = Math.max(...commentsRes.data.map(comment => comment.id));
    comment = {id: maxId+1,...comment}
    const res = await api.post(`posts/${id}/comments`,comment);
   
    dispatch(addComment(id,res.data));
    

}