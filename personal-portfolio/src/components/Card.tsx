
function Card(props: any) {
    const cardStyle = {
        zIndex: `${props.zIndex}`,
        transform: `
            translateX(${props.xOffset}rem)
            translateY(${props.yOffset}rem)
            rotate(${props.rotation}deg)
        `,
        boxShadow: `0px 10px 30px rgba(0, 0, 0, 0.285)`
    };
    
    return (
        <div
            className="bg-white m-4 p-4 h-full w-1/2 pb-12"
            style={cardStyle}
        >
            <img src={props.imageURL} height="30vh" width="auto" alt="Card Image"></img>
        </div>
    )
}

export default Card