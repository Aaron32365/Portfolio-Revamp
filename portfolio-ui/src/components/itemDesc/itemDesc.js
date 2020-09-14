import React, {useContext} from "react"
import TypeWrite from "../TypeWriter/index"
import Section from "../Section/index"
import ItemContext from "../../itemContext"


export default function ItemDesc(){
    const context = useContext(ItemContext)

    return (
        <div>
            <Section>
                <TypeWrite delay={30}>
                    {context.portfolioItem.description}
                </TypeWrite>
            </Section>
        </div>
    )
}