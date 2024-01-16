import React from 'react'
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

function Mousetrail({ children }) {
    return (
        <>
            <MouseTrail strokeColor={"#F84611"} lineWidthStart={40} />
            <main>{children}</main>
        </>
    );
}

export default Mousetrail