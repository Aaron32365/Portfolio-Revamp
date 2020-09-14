import React, {useContext} from "react"
import TypeWrite from "../TypeWriter/index"
import Section from "../Section/index"
import ItemContext from "../../itemContext"


export default function ItemTitle(){
    const context = useContext(ItemContext)
    console.log(context)
    // console.log(props)
    return (
        <div>
            <Section>
                <TypeWrite delay={100}>
                    {context.portfolioItem.title}
                </TypeWrite>
            </Section>
        </div>
    )
}