import React, {useContext} from "react"
import TypeWrite from "../TypeWriter/index"
import Section from "../Section/index"
import ItemContext from "../../itemContext"
import { useState } from "react"


export default function ItemTitle(){

    const [titleState, setTitleState] = useState() 
    const  { title, description, git, gifUrl } = useContext(ItemContext)

    function render(){
        setTitleState(title)
        console.log("eeee")
    }

    return (
        <div onLoad={console.log("E")}>
            e
        </div>
    )
}