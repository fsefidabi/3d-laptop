import React from "react"
import { Float, Text } from "@react-three/drei"
import { animated, useSpring, easings } from "@react-spring/three"

function GuideText({ show }) {
    const { scale } = useSpring({
        scale: show ? 0 : 1,
        config: { duration: 1000, easing: easings.easeInQuint }
    })

    return (
        <Float speed={1} position={[0, 2, -2]}>
            <animated.mesh scale={scale}>
                <Text
                    font="RubikDoodleShadow-Regular.ttf"
                    color="black"
                    anchorX="center"
                    anchorY="middle"
                >
                    Click on laptop!
                </Text>
            </animated.mesh>
        </Float>
    )
}

export default GuideText
