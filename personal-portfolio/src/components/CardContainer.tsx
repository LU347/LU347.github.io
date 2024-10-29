//CardContainer

import Card from "./Card";

import { aboutCardData } from "../lib/projectData";

function CardContainer() {
    return (
        <div className="flex flex-row justify-center align-center m-2 p-2">
            {
                aboutCardData.map((data) => (
                    <Card
                    key={data.id}
                    rotation={data.rotation}
                    xOffset={data.xOffset}
                    yOffset={data.yOffset}
                    zIndex={data.zIndex}
                    imageURL={data.imageURL}
                    />
                ))
            }
        </div>
    )
}

export default CardContainer