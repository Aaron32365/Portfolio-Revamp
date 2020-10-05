// import { reaction } from "mobx";
// // import React, { useEffect, useState } from "react"
// import "./index.css"
// import TypeWrite from "../../components/TypeWriter/index"
// import Section from "../../components/Section/index"
// import ItemTitle from "../../components/itemTitle/ItemTitle"
// import ItemContext from "../../itemContext"
// import ItemDesc from "../../components/itemDesc/itemDesc"

// export default function Portfolio(){

//   const [portfolioItems, setPortfolioItems] = useState([])
//   const [count, setCount] = useState(0)
//   const [portfolioItem, setPortfolioItem] = useState({
//       title: "",
//       description: "",
//       git: "",
//       app: "",
//       gifUrl: ""
//   })

//     var speed = 18
//     let i = 0;
//     let j = 0;
  
//     const nextItem = () => {
//         let newCount = count + 1
//         console.log(count)
//         console.log(newCount)
//         if(count > 2){
//             newCount = 1
//             setCount(newCount)
//             setPortfolioItem(portfolioItems[count]) 
//             document.getElementById("title").innerHTML = ""
//             document.getElementById("desc").innerHTML = ""
//             handleAnimations()
//         }
//         setCount(newCount)
//         setPortfolioItem(portfolioItems[count]) 
//         document.getElementById("title").innerHTML = ""
//         document.getElementById("desc").innerHTML = ""
//         handleAnimations()
//         /////////////
//     }

//     const previousItem = () => {
//         let newCount = count - 1
//         if(count < 0){
//             newCount = portfolioItems.length - 1
//             setCount(newCount)
//             setPortfolioItem(portfolioItems[count]) 
//             document.getElementById("title").innerHTML = ""
//             document.getElementById("desc").innerHTML = ""
//             handleAnimations()
//         }
//         setCount(newCount)
//         setPortfolioItem(portfolioItems[count]) 
//         document.getElementById("title").innerHTML = ""
//         document.getElementById("desc").innerHTML = ""
//         handleAnimations()
//     }

//     const handleAnimations = () => {
//         typeDesc()
//         typeTitle()
//     }

//     const typeTitle = () => {
//         if (i < portfolioItems[count].title.length) {
//             document.getElementById("title").innerHTML += portfolioItems[count].title.charAt(i);
//             i++;
//             setTimeout(typeTitle, speed);
//           }
//     }

//     const typeDesc = () => {
//         if (j < portfolioItems[count].description.length) {
//             document.getElementById("desc").innerHTML += portfolioItems[count].description.charAt(j);
//             j++;
//             setTimeout(typeDesc, speed);
//           }
//     }

//     useEffect( ()=> {
//         setCount(1)
//         fetch('/portfolioItems')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             setPortfolioItems(data)
//             setPortfolioItem({title: data[count].title, description: data[count].description, git: data[count].git, gifUrl: data[count].gifUrl})
//             // typeWriter()

//         });
//     },[])

//     if(count >= 3){
//         setCount(0)
//     }
//     else if(count < 0){
//         setCount(portfolioItems.length - 1)
//     }

//     return(
//         <ItemContext.Provider value={{portfolioItem, portfolioItems, count}}>
//             <div className="col container">
//             <div className="col-12 header" id="portfolioHeader">
//                     <Section>
//                         <TypeWrite delay={120}>
//                             Portfolio
//                         </TypeWrite>
//                     </Section>
//                 </div>
//                 <div className="row justify-content-center">
//                     <div className="col-11 itemContainer">
//                         <div className="row justify-content-center itemTitle" id="title">
//                             <Section>
//                                 <TypeWrite delay={100}>
//                                     <ItemTitle/>
//                                 </TypeWrite>
//                             </Section>
//                         </div>
//                         <div className="row">
//                             <div className="col-6 itemDescContainer">
//                                 <div className="col itemDesc" id="desc">
//                                     <Section>
//                                         <TypeWrite delay={30}>
//                                             <ItemDesc/>
//                                         </TypeWrite>
//                                     </Section>
//                                 </div>
//                                 <div className="row justify-content-center">
//                                     <a target="_blank" className="appImg" href="https://socialcalendar-app.herokuapp.com/Login"> <i className="devicon-heroku-original"></i> </a>
//                                     <a target="_blank" className="gitLink" htmlFor="gitImg" href={portfolioItem.git}><i id="gitImg" className="devicon-github-plain"></i></a>
//                                 </div>
//                             </div>  
//                             <div className="col-6">
//                                 <img className="gifs shadow" src={`${process.env.PUBLIC_URL}/images/${portfolioItem.gifUrl}.gif`} alt="self"/>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-12">
//                         <div className="row justify-content-center">
//                             <button className="col-6 btns" onClick={previousItem}>
//                                 Previous
//                             </button>   
//                             <button className="col-6 btns"  onClick={nextItem}>
//                                 Next
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 {/* add in next and last buttons under the itemcontainer */}
//             </div>
//          </ItemContext.Provider>
//     )
// }

import React from "react";
import API from "../../utils/api"
import "./index.css"
import animations from "../../pages/Portfolio/animation.module.css"

class Portfolio extends React.Component{
    constructor(){
        super()
        this.titleRef = React.createRef()
        this.descRef = React.createRef()
    }
    state = {
        results: [],
        count: 0,
        item: {},
        animationState: 1,
        i:0,
        j:0
    }
    
    componentDidMount(){
        this.searchPortfolio()
    }

     searchPortfolio = () => {
        API.Search()
        .then(res => {
            this.setState({count: 0},function(){
            })
            this.setState({results: res.data})
            this.setState({item: this.state.results[this.state.count]})
            console.log("after")
            this.titleWrite()
            this.descWrite()
            console.log(this.state.count)
            
        })
        .catch(err => console.log(err))
    }

     handleIncrement = () => {
        console.log(this.state.count)
        var newcount = this.state.count + 1
        if(newcount > 2){
            this.setState({count:0},function(){
                this.setState({item: this.state.results[this.state.count]})
                this.setState({i: 0}, function(){
                    this.setState({j:0}, function(){
                        this.descRef.current.innerHTML = ""
                        this.titleRef.current.innerHTML = ""
                        this.titleWrite()
                        this.descWrite()
                    })
                })    
            })
        }else{
            this.setState({count: this.state.count +=1},function(){
                this.setState({item: this.state.results[this.state.count]},function(){
                    this.setState({i: 0}, function(){
                        this.setState({j:0}, function(){
                            this.descRef.current.innerHTML = ""
                            this.titleRef.current.innerHTML = ""
                            this.titleWrite()
                            this.descWrite()
                        })
                    })
                })
            })
        }
    }
    handleDecrement = () => {
        var newcount = this.state.count - 1
            if(newcount < 0){
            this.setState({count: this.state.results.length - 1},function(){
                this.setState({item: this.state.results[this.state.count]})
                console.log(this.state.count)
                this.setState({i: 0}, function(){
                    this.setState({j:0}, function(){
                        this.descRef.current.innerHTML = ""
                        this.titleRef.current.innerHTML = ""
                        this.titleWrite()
                        this.descWrite()
                    })
                })    
            })
        }else{
            this.setState({count: this.state.count -=1},function(){
                this.setState({item: this.state.results[this.state.count]},function(){
                    this.setState({i: 0}, function(){
                        this.setState({j:0}, function(){
                            this.descRef.current.innerHTML = ""
                            this.titleRef.current.innerHTML = ""
                            this.titleWrite()
                            this.descWrite()
                        })
                    })
                })
            })
        }
    }

    titleWrite = () =>{
        if(this.state.i < this.state.item.title.length){
            this.titleRef.current.innerHTML += this.state.item.title.charAt(this.state.i)
            this.setState({i: this.state.i+=1})
            setTimeout(this.titleWrite, 50) 
        }
    }


    descWrite = () =>{
        if(this.state.j < this.state.item.description.length){
            this.descRef.current.innerHTML += this.state.item.description.charAt(this.state.j)
            this.setState({j: this.state.j+=1})
            setTimeout(this.descWrite, 16) 
        }
    }

    render(){
        return(
                <div className="col container">
                <div className="col-sm-5 col-md-4 header" id="portfolioHeader">
                    <div className="col-11">
                        <div className={animations.type}>
                            Portfolio
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-11 itemContainer">
                        <div className="row justify-content-center itemTitle" id="title">
                            <div ref={this.titleRef} >
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-6 itemDescContainer">
                                    <div className="col itemDesc" id="desc" ref={this.descRef}>
                                    </div>
                                    <div className="row justify-content-center">
                                        <a target="_blank" className="appImg" href={this.state.item.app}> <i className="devicon-heroku-original"></i> </a>
                                        <a target="_blank" className="gitLink" htmlFor="gitImg" href={this.state.item.git}><i id="gitImg" className="devicon-github-plain"></i></a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <img className="gifs shadow" src={`${process.env.PUBLIC_URL}/images/${this.state.item.gifUrl}.gif`} alt="gif of application"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <button className="col-5 btns" onClick={this.handleDecrement}>Previous</button>
                                <button className="col-5 btns" onClick={this.handleIncrement}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            // <div className="col container">
            //     <div className="col-sm-5 col-md-3 header" id="portfolioHeader">
            //         <div className="col-11">
            //             <div className={animation.type}>
            //                 Portfolio
            //             </div>
            //         </div>
            //     </div>
            //     <div className="row justify-content-center">
            //         <div className="col-11 itemContainer">
            //             <div className="row justify-content-center itemTitle" id="title">
            //                 <ItemTitle title={this.state.item.title} type={animation.type} animationState = {this.animationState} handleIncrement={this.handleIncrement}/>
                            
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default Portfolio;