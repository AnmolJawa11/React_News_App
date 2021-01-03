import React from 'react'
import NewsCardBox from '../NewsCardBox/NewsCardBox'
class NewsBox extends React.Component{

    constructor(props){
        super(props)
        this.state={
            response:{}
        }
    }

    cleanData(data){

    }
    componentDidMount(){
        this.props.ajaxGetNews()
        
    }
    
    render(){
        console.log("here in news channel : news is ", this.props)

        return <div>
                <NewsCardBox {...this.props}/>
        </div>
    }
}

export default  NewsBox