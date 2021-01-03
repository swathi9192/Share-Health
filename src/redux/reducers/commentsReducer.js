
const commentsReducer = (state={},action) => {
    switch(action.type){
        case "FETCH_COMMENTS" :
            return {
                ...state, [action.payload.id] : action.payload.comments
            }
        case "ADD_COMMENT" : 
            
            return {
                ...state, [action.payload.id] : [...state[action.payload.id],action.payload.comment]
            }
        default :
            return state

    }
}
export default commentsReducer