const inialState = []

export const reducer = (state=inialState, action) =>{
    if(action.type=='add'){
        return action.payload
    }
    return state
}