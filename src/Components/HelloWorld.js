import React,{Component} from 'react'
import flower from './flower.jpeg'

export class HelloWorld extends Component{
    render(){
        return(
                <div>
                    <img src={flower}/>
                </div>
        )
    }
}
export default HelloWorld;



