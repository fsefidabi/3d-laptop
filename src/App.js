import { Canvas } from "@react-three/fiber"
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei"
import MacBook from "./components/MacBook"
import "./App.css"

function App() {
    return (
        <div className="App">
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
        </div>
    )
}

export default App
