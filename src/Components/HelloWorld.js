import React,{Component} from 'react'
import flower from './flower.jpeg'

export class HelloWorld extends Component{
    render(){
        return(
                
                <img style={{height:500,width:400,paddingTop:150}} src={flower}/>
            
        )
    }
}
export default HelloWorld;



