import "./infiniteLooper.css";




export default function InfiniteLooper(props) {
    const images = [];
    for (let i = 1; i < 20; i++) {
        images.push(
            <img src="./book.jpg" />
        );
    }
    return (
        <div className=" flex items-center justify-center">
            {/* 1. */}
            <div className="w-[200%] h-20 overflow-hidden relative">
                {/* 2. */}
                <div className={`w-[200%] mx-auto flex items-center h-20 gap-5 absolute left-0 animate`}
                    style={{ animationPlayState: props.onHover ? 'paused' : 'running' }}>
                    {/* 3 */}
                    {images.map((img, i) => {
                        return (
                            <div
                                onMouseOver={() => { props.getMemberName(i) }}
                                onMouseLeave={() => { props.getMemberName(null) }}
                                key={i}
                                className={`image flex justify-center items-start w-[5rem]
                                ${props.memberName === i ? "brightness-200 scale-x-110 transition ease-out delay-150" : "brightness-50 transition ease-out delay-150"}`}>
                                {img}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}