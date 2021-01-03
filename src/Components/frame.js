import React from 'react'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar'
import NewsBox from './NewsBox/newsBox'
class frame extends React.Component{

    constructor(props){
        super(props)
        console.log("hi")
    }

    render(){

        return <div><NavBar {...this.props}/>
            <div><Container maxWidth="md">
                <div>
                    <NewsBox {...this.props} />
                </div>
            </Container>
        </div>
        </div>
    }
}

export default frame