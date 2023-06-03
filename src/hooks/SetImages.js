import React, {useState} from 'react'
import clothing from '../Data/clothing'

const SetImages = () => {

    let [imageState, setImageState] = useState(clothing)
    console.log(clothing);


    const setCasual= () => {
        let casualArr = imageState.filter(element=> element.dressCode === 'casual')
        let topsArr = casualArr.filter(element=>element.type === 'top');
        let bottomArr = casualArr.filter(element=>element.type === 'bottom');
        let shoesArr = casualArr.filter(element=>element.type === 'shoes');
        let imageSize1 = document.querySelector('#imageSize1');
        let imageSize2 = document.querySelector('#imageSize2');
        let imageSize3 = document.querySelector('#imageSize3');
        imageSize1.src = topsArr[Math.floor(topsArr.length * Math.random())].imageUrl
        imageSize2.src = bottomArr[Math.floor(bottomArr.length * Math.random())].imageUrl
        imageSize3.src = shoesArr[Math.floor(shoesArr.length * Math.random())].imageUrl
    }
    
    const setSport= () => {
        let sportArr = imageState.filter(element=> element.dressCode === 'sport')
        let topsArr = sportArr.filter(element=>element.type === 'top');
        let bottomArr = sportArr.filter(element=>element.type === 'bottom');
        let shoesArr = sportArr.filter(element=>element.type === 'shoes');
        let imageSize1 = document.querySelector('#imageSize1');
        let imageSize2 = document.querySelector('#imageSize2');
        let imageSize3 = document.querySelector('#imageSize3');
        imageSize1.src = topsArr[Math.floor(topsArr.length * Math.random())].imageUrl
        imageSize2.src = bottomArr[Math.floor(bottomArr.length * Math.random())].imageUrl
        imageSize3.src = shoesArr[Math.floor(shoesArr.length * Math.random())].imageUrl
    }

    const setFormal= () => {
        let formalArr= imageState.filter(element=> element.dressCode === 'formal')
        let topsArr = formalArr.filter(element=>element.type === 'top');
        let bottomArr = formalArr.filter(element=>element.type === 'bottom');
        let shoesArr = formalArr.filter(element=>element.type === 'shoes');
        let imageSize1 = document.querySelector('#imageSize1');
        let imageSize2 = document.querySelector('#imageSize2');
        let imageSize3 = document.querySelector('#imageSize3');
        imageSize1.src = topsArr[Math.floor(topsArr.length * Math.random())].imageUrl
        imageSize2.src = bottomArr[Math.floor(bottomArr.length * Math.random())].imageUrl
        imageSize3.src = shoesArr[Math.floor(shoesArr.length * Math.random())].imageUrl
    }

    return{
        setCasual: setCasual,
        setSport: setSport,
        setFormal: setFormal
    }

}

export default SetImages
