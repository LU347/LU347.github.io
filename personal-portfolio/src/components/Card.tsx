//Card

function Card(props: any) {
    const cardStyle = {
        zIndex: `${props.zIndex}`,
        transform: `
            translateX(${props.xOffset}rem)
            translateY(${props.yOffset}rem)
            rotate(${props.rotation}deg)
        `,
        backgroundColor: "#d8c3ffdb",
        background: "rgba(184, 146, 255, 0.09)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        //cursor: "move"
    };
    
    return (
        <div
            key={props.id}
            className="m-[0.625rem] p-[0.625rem] pb-[1.563rem] lg:m-[1.25rem] lg:p-[0.938rem] h-full w-auto lg:pb-[3.75]"
            style={cardStyle}
        >
            <img className="pointer-events-none select-none" src={props.imageURL} loading="lazy" height="250px" width="250px" alt="Card Image"></img>
        </div>
    )
}

export default Card