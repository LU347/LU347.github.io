//CardContainer

import Card from "./Card";

import BookStoreImage from "../assets/card-images/about-1.jpg";
import MonsieurMignon from "../assets/card-images/monsieurmignon.jpg";
import Philippines from "../assets/card-images/about-3.jpg";

function CardContainer() {
    return (
        <div className="flex flex-row justify-center align-center m-18">
            <Card rotation="-5" xOffset="5" yOffset="0" zIndex="2" imageURL={ BookStoreImage }/>
            <Card rotation="0" xOffset="0" yOffset="3.5" zIndex="1" imageURL={ Philippines }/>
            <Card rotation="5" xOffset="-5" yOffset="-0.5" zIndex="3" imageURL={ MonsieurMignon }/>
        </div>
    )
}

export default CardContainer