import React from "react"
import styles from "../../pages/Portfolio/animation.module.css"
export default class ItemTitle extends React.Component{
    constructor(props){
        super(props)
        this.titleRef = React.createRef()
    }
    componentDidMount(){
        console.log(toString(this.props.title).length)
        console.log(this.titleRef.current.innerHTML)
        if(this.titleRef.current.innerHTML){
            console.log("ee")
        }
    }

    

    render(){
        return (
            <div className="col" ref={this.titleRef}>    
                {this.props.title}
            </div>
        )
    }
}

// this.titleRef.current.innerHTML is good

// var i = 0;
// var txt = 'Lorem ipsum dummy text blabla.';
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }