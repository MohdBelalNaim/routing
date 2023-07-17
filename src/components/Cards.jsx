import React from 'react'


//Life cycle methods
//Mounting, Updation, Unmounting

//compnentDidMount --> store
//componentDidUpdate --> change
//componentDidUnmount --> delete


// class Cards extends React.Component{
//     render(){
//         <div className="col-lg-4">
//             <div className="border shadow py-3 px-3 text-center mt-4 h3">
//                 <div><img src={props.image} alt="Image tag" /></div>
//                 <div>{props.title}</div>
//                 <div>₹{props.price}</div>
//             </div>
//         </div>
//     }
// }




function Cards(props) {
    return (

    <div className="col-lg-4">
        <div className="border shadow py-3 px-3 text-center mt-4 h3">
            <div><img src={props.image} alt="Image tag" /></div>
            <div>{props.title}</div>
            <div>₹{props.price}</div>
        </div>
    </div>

    )
}

export default Cards