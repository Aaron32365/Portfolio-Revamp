import React, { useEffect, useState } from "react"
import "./index.css"
import TypeWrite from "../../components/TypeWriter/index"
import Section from "../../components/Section/index"
import ItemTitle from "../../components/itemTitle/ItemTitle"
import ItemContext from "../../itemContext"

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

    const nextItem = () => {
        setCount(count + 1)
    }

    useEffect( ()=> {
        fetch('/api/portfolioItems')
        .then(response => response.json())
        .then(data => {
            console.log("Data: " + JSON.stringify(data))
            setPortfolioItems(data)
            // setPortfolioItem(JSON.stringify(data[count]))
            setPortfolioItem({title: data[count].title, description: data[count].description, git: data[count].git, gifUrl: data[count].gifUrl})
            console.log(data[count].title)
        });
    },[])

    return(
        <ItemContext.Provider value={portfolioItem}>
            <div className="col container">
                <Section>
                    <TypeWrite delay={120}>
                        <div className="col-12 header" id="portfolioHeader">
                            Portfolio
                        </div>
                    </TypeWrite>
                </Section>
                <div className="row justify-content-center">
                    <div className="col-11 itemContainer">
                        <div className="row justify-content-center itemTitle">
                            {/* {portfolioItem.title} */}
                            {/* <Section>
                                <TypeWrite delay={60}> */}
                                    <ItemTitle/>
                                {/* </TypeWrite>
                            </Section> */}
                            {/* <Section>
                                <TypeWrite delay={60}>
                                    Social Calendar
                                </TypeWrite>
                            </Section> */}
                        </div>
                        <div className="row">
                            <div className="col-6 itemDescContainer">
                                <div className="col itemDesc">
                                    <Section>
                                        <TypeWrite delay={30}>
                                            Create an account and add your upcoming events to your calendar, then add your friends and share each others schedules!
                                        </TypeWrite>
                                    </Section>
                                </div>
                                <div className="row justify-content-center">
                                    <a target="_blank" className="appImg" href="https://socialcalendar-app.herokuapp.com/Login"> <i class="devicon-heroku-original"></i> </a>
                                    <a target="_blank" className="gitLink" for="gitImg" href="https://github.com/wbrink/social-calendar"><i id="gitImg" class="devicon-github-plain"></i></a>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className="gifs shadow" src={require('./images/socialCalendar.gif')} alt="self"/>
                            </div>
                        </div>


                    </div>
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <button className="col-6 btns">
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