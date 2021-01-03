import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './StoreManager/actions'
import App from './App'

//takes store data as input
function forPropData(store){
    return {
        data:store
    }
}

//binds dispatch with actions
function bindDispatch(dispatch){
 return bindActionCreators(actions,dispatch)
}

//Connect Main with data
var MainAppWithStore=connect(forPropData,bindDispatch)(App)
export default MainAppWithStore; 