import axios from 'axios'
import {api_key} from '../constants'




 export function ajaxGetNewsForSearch(item){
    console.log("search value :", item)
    var request =axios.get("https://newsapi.org/v2/everything?q="+item+"&apiKey="+api_key)
    return(dispatch)=>{
        request.then(
            (response)=>{
                dispatch(storeNews(response))
    })

}
}
 export function ajaxGetNews(){

    //request is a (caller side) promise
    var request =axios.get("https://newsapi.org/v2/top-headlines?country=ca&apiKey="+api_key)
    return(dispatch)=>{
        request.then(
            (response)=>{
                dispatch(storeNews(response))
    })

}
}

//Action : has data fetched from ajax call
function storeNews(response){
    return { type:'Fetch-news',
        response:response.data
    }
}
