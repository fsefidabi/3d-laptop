import React from "react"

function Loading(props) {
    return (
        <div style={{ width: "100vw", height: "100vh", background: "#242323FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 style={{ margin: "auto", background: "#242323FF", display: "block", shapeRendering: "auto" }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="translate(0 -7.5)">
                    <circle cx="50" cy="41" r="10" fill="#fe718d">
                        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                        <animate attributeName="r" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" values="0;15;0" keySplines="0.2 0 0.8 1;0.2 0 0.8 1"></animate>
                    </circle>
                    <circle cx="50" cy="41" r="10" fill="#46dff0">
                        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="180 50 50;540 50 50"></animateTransform>
                        <animate attributeName="r" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" values="15;0;15" keySplines="0.2 0 0.8 1;0.2 0 0.8 1"></animate>
                    </circle>
                </g>
            </svg>
        </div>
    )
}

export default Loading
