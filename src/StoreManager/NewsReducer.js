
export default function gReducer(state=[],actions){
    switch(actions.type){
        case 'Fetch-news':
            state=[];
            state.push(actions)

        return actions.response;
        default : return state
        
    }
 
}