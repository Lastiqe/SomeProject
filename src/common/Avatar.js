import React from 'react';
import cat from '../assets/images/cat.svg'
import dog from '../assets/images/dog.svg'
import fox from '../assets/images/fox.svg'
import koala from '../assets/images/koala.svg'
import lion from '../assets/images/lion.svg'
import owl from '../assets/images/owl.svg'
import penguin from '../assets/images/penguin.svg'
import pig from '../assets/images/pig.svg'
import raccoon from '../assets/images/raccoon.svg'
import react from '../assets/images/react.svg'
import sheep from '../assets/images/sheep.svg'

const Avatars = (props) => {

    const avatar = (img) => {
        switch (img) {
            case "cat": return cat
            case "dog": return dog
            case "fox": return fox
            case "koala": return koala
            case "lion": return lion
            case "owl": return owl
            case "penguin": return penguin
            case "pig": return pig
            case "raccoon": return raccoon
            case "react": return react
            case "sheep": return sheep
            default: return react
        }

    }

    return (
        <img src={avatar(props.img)} alt={props.img} className='avatar' />
    )

}

export default Avatars



// const Avatars = {
//     cat: cat,
//     dog: dog,
//     fox: fox,
//     koala: koala,
//     lion: lion,
//     owl: owl,
//     penguin: penguin,
//     pig: pig,
//     raccoon: raccoon,
//     react: react,
//     sheep: sheep
// }