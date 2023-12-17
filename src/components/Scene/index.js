import React from "react"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import MacBook from "../MacBook"

function Scene() {
    return (
        <Canvas
            shadows
            gl={{ antialias: true }}
            camera={{ position: [5, 10, 15], fov: 55 }}
        >
            <Environment background preset="dawn" blur={0.8}/>
            <ContactShadows position={[0, -9, 0]} opacity={0.7} scale={40} blur={1}/>
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 8}
                maxPolarAngle={Math.PI / 2.2}
            />
            <MacBook/>
        </Canvas>
    )
}

export default Scene
