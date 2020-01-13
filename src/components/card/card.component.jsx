import React from 'react';
import './card.styles.scss';
// import Particles from 'react-particles-js';

// const particleOptions = {
//     particles: {
//         number: {
//             value: 70,
//             density: {
//                 enable: true,
//                 value_area: 800
//             }
//         },
//         color: {
//             value: "#1f0ebd"
//         },
//         line_linked: {
//             color: "#ffffff"
//         }
//     }
// }

const Card = (props) => (
    <article className="shadow-5">
    <div className="card-container" >
        {props.display}
    </div>
    </article>
)

export default Card;