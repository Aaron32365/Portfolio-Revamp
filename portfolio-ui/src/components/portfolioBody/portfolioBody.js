// import React, { useEffect } from "react"
// import animations from "../../pages/Portfolio/animation.module.css"
// import ItemTitle from "../itemTitle/ItemTitle"
// export default function PortfolioBody(props){
//     console.log(props)
//     // // const [count, setcount] = React.useState(props.count)
//     // const [typeWrite, setTypeWrite] = React.useState(1)

//     useEffect(()=>{
//     },[])

//     return (
//         <div className="col container">
//         <div className="col-sm-5 col-md-3 header" id="portfolioHeader">
//             <div className="col-11">
//                 <div className={animations.type} typeWrite={typeWrite}>
//                     Portfolio
//                 </div>
//             </div>
//         </div>
//         <div className="row justify-content-center">
//             <div className="col-11 itemContainer">
//                 <div className="row justify-content-center itemTitle" id="title">
//                     <div className="col col-md-3">
//                         <div className={animations.type} typeWrite={typeWrite}>
//                             {props.item.title}
//                         </div>
//                     </div>
//                     <button onClick={props.handleIncrement}>eeee</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }