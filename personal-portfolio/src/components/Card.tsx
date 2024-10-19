
function Card(props: any) {
    const cardStyle = {
        zIndex: `${props.zIndex}`,
        transform: `
            translateX(${props.xOffset}rem)
            translateY(${props.yOffset}rem)
            rotate(${props.rotation}deg)
        `,
        //boxShadow: `0px 10px 30px rgba(0, 0, 0, 0.285)`,
        backgroundColor: "#d8c3ffdb",
        background: "rgba(184, 146, 255, 0.09)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
    };
    
    return (
        <div
            className="m-[10px] p-[10px] pb-[25px] lg:m-[20px] lg:p-[15px] h-full w-1/2 lg:pb-[60px]"
            style={cardStyle}
        >
            <img src={props.imageURL} height="30vh" width="auto" alt="Card Image"></img>
        </div>
    )
}

export default Card