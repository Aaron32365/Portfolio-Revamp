import React, { useEffect, useState } from "react"
import "./index.css"
import TypeWrite from "../../components/TypeWriter/index"
import Section from "../../components/Section/index"
import ItemTitle from "../../components/itemTitle/ItemTitle"
import ItemContext from "../../itemContext"
import ItemDesc from "../../components/itemDesc/itemDesc"

export default function Portfolio(){

  const [portfolioItems, setPortfolioItems] = useState([])
  const [count, setCount] = useState(0)
//   const [buttonState, setButtonState] = useState(true)
  const [portfolioItem, setPortfolioItem] = useState({
      title: "",
      description: "",
      git: "",
      app: "",
      gifUrl: ""
  })

    var speed = 18
    let i = 0;
    let j = 0;
  
    const nextItem = () => {
        let newCount = count + 1
        console.log(count)
        console.log(newCount)
        if(count > 2){
            newCount = 1
            setCount(newCount)
            setPortfolioItem(portfolioItems[count]) 
            document.getElementById("title").innerHTML = ""
            document.getElementById("desc").innerHTML = ""
            handleAnimations()
        }
        setCount(newCount)
        setPortfolioItem(portfolioItems[count]) 
        document.getElementById("title").innerHTML = ""
        document.getElementById("desc").innerHTML = ""
        handleAnimations()
        /////////////
    }

    const previousItem = () => {
        let newCount = count - 1
        if(count < 0){
            newCount = portfolioItems.length - 1
            setCount(newCount)
            setPortfolioItem(portfolioItems[count]) 
            document.getElementById("title").innerHTML = ""
            document.getElementById("desc").innerHTML = ""
            handleAnimations()
        }
        setCount(newCount)
        setPortfolioItem(portfolioItems[count]) 
        document.getElementById("title").innerHTML = ""
        document.getElementById("desc").innerHTML = ""
        handleAnimations()
    }

    const handleAnimations = () => {
        typeDesc()
        typeTitle()
    }

    const typeTitle = () => {
        if (i < portfolioItems[count].title.length) {
            document.getElementById("title").innerHTML += portfolioItems[count].title.charAt(i);
            i++;
            setTimeout(typeTitle, speed);
          }
    }

    const typeDesc = () => {
        if (j < portfolioItems[count].description.length) {
            document.getElementById("desc").innerHTML += portfolioItems[count].description.charAt(j);
            j++;
            setTimeout(typeDesc, speed);
          }
    }

    useEffect( ()=> {
        setCount(1)
        fetch('/api/portfolioItems')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setPortfolioItems(data)
            setPortfolioItem({title: data[count].title, description: data[count].description, git: data[count].git, gifUrl: data[count].gifUrl})
            // typeWriter()

        });
    },[])

    // const typeWrite = () => {
    //     if (i < txt.length) {
    //         document.getElementById("demo").innerHTML += txt.charAt(i);
    //         i++;
    //         setTimeout(typeWrite, speed);
    //       }
    // }

    if(count >= 3){
        setCount(0)
    }
    else if(count < 0){
        setCount(portfolioItems.length - 1)
    }

    return(
        <ItemContext.Provider value={{portfolioItem, portfolioItems, count}}>
            <div className="col container">
            <   div className="col-12 header" id="portfolioHeader">
                    <Section>
                        <TypeWrite delay={120}>
                            Portfolio
                        </TypeWrite>
                    </Section>
                </div>
                <div className="row justify-content-center">
                    <div className="col-11 itemContainer">
                        <div className="row justify-content-center itemTitle" id="title">
                            <Section>
                                <TypeWrite delay={100}>
                                    <ItemTitle/>
                                </TypeWrite>
                            </Section>
                        </div>
                        <div className="row">
                            <div className="col-6 itemDescContainer">
                                <div className="col itemDesc" id="desc">
                                    <Section>
                                        <TypeWrite delay={30}>
                                            <ItemDesc/>
                                        </TypeWrite>
                                    </Section>
                                </div>
                                <div className="row justify-content-center">
                                    <a target="_blank" className="appImg" href="https://socialcalendar-app.herokuapp.com/Login"> <i className="devicon-heroku-original"></i> </a>
                                    <a target="_blank" className="gitLink" htmlFor="gitImg" href={portfolioItem.git}><i id="gitImg" className="devicon-github-plain"></i></a>
                                </div>
                            </div>  
                            <div className="col-6">
                                <img className="gifs shadow" src={`${process.env.PUBLIC_URL}/images/${portfolioItem.gifUrl}.gif`} alt="self"/>
                            </div>
                        </div>


                    </div>
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <button className="col-6 btns" onClick={previousItem}>
                                Previous
                            </button>   
                            <button className="col-6 btns"  onClick={nextItem}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                {/* add in next and last buttons under the itemcontainer */}
            </div>
         </ItemContext.Provider>
    )
}