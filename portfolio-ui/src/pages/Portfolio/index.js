import React, { useEffect, useState } from "react"
import "./index.css"
import TypeWrite from "../../components/TypeWriter/index"
import Section from "../../components/Section/index"
import ItemTitle from "../../components/itemTitle/ItemTitle"
import ItemContext from "../../itemContext"
import ItemDesc from "../../components/itemDesc/itemDesc"
// import ImgSource from "../../components/imgSource/ImgSource"

export default function Portfolio(){

  const [portfolioItems, setPortfolioItems] = useState([])
  const [count, setCount] = useState(0)
  const [portfolioItem, setPortfolioItem] = useState({
      title: "",
      description: "",
      git: "",
      app: "",
      gifUrl: ""
  })
    const images = require.context("./images", true)

    var speed = 50
    let i = 0;
    let j = 0;
  
    const nextItem = () => {
        const newCount = count + 1
        console.log(count)
        console.log(newCount)
        if(count >= portfolioItems.length){
            setCount(0)
        }
        setCount(newCount)
        setPortfolioItem(portfolioItems[count]) 
        document.getElementById("title").innerHTML = ""
        document.getElementById("desc").innerHTML = ""
        handleAnimations()
        /////////////
    }

    const previousItem = () => {
        const newCount = count - 1
        if(count < 0){
            count = portfolioItems.length - 1
        }
        setCount(newCount)
        setPortfolioItem(portfolioItems[count])
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

    return(
        <ItemContext.Provider value={{portfolioItem, portfolioItems}}>
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
                                    <a target="_blank" className="appImg" href="https://socialcalendar-app.herokuapp.com/Login"> <i class="devicon-heroku-original"></i> </a>
                                    <a target="_blank" className="gitLink" for="gitImg" href={portfolioItem.git}><i id="gitImg" class="devicon-github-plain"></i></a>
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
                            <button className="col-6 btns" onClick={nextItem}>
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