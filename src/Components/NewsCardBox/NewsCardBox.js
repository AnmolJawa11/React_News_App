import React from 'react'
import NewsCard from './NewsCard'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as classCSS from './News.css'
 export default class NewsCardBox extends React.Component{


    constructor(props){
        super(props)

    }
    render(){
        let cards= this.props.data.news.length==0? null : this.props.data.news.articles.map((data,key)=>{
           return  <NewsCard description={data.description} author={data.author} content={data.content}
           title={data.title} url={data.url} urlToImage={data.urlToImage} publishedAt={data.publishedAt} key={key} />
        })
        console.log("received : ",this.props)
        return<div className="Box">
                  <Grid container spacing={3}>
                    {cards}
                      </Grid >
                </div>
    }
}