import {
    CardWrapper,
    CardImage,
    CardTextWrapper,
    CardTextDate,
    CardTextTitle,
    CardTextBody,
    CardStatWrapper,
    CardStats,
    LinkText
} from "./New2CardStyles";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";


const New2CardTrack = ({ title, text, imgUrl }) => {
    return (
        <Tilt>
            <CardWrapper>
                <CardImage>
                    <img src={imgUrl} alt="" />
                </CardImage>
                <CardTextWrapper>
                    <CardTextTitle>{title}</CardTextTitle>
                    <CardTextBody>
                        {text}
                    </CardTextBody>
                </CardTextWrapper>
            </CardWrapper>
        </Tilt>
    );
};

export default New2CardTrack;
