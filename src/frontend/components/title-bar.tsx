import React, { JSX, useCallback } from "react"

const TitleBar = (): JSX.Element => {
    const closeFrame = useCallback(() => {
        electronFrame.close();
    }, []);

    return (
        <div className="title-bar frame-drag-zone">
            <div className="left-zone"></div>
            <div className="center-zone"></div>
            <div className="right-zone">
                <button className="btn btn-close" onClick={closeFrame}>close</button>
            </div>
        </div>
    )
}

export default TitleBar;