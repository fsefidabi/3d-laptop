import { useEffect, useState, Suspense } from "react"
import { useGLTF } from "@react-three/drei"
import Scene from "./components/Scene"
import Loading from "./components/Loading"
import "./App.css"

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Promise.all([
            useGLTF.preload("./models/macbook/scene.gltf")
        ]).then(() => {
            setLoading(false)
        })
    }, [])

    return (
        <>
            {loading ? <Loading/> : <Suspense fallback={<Loading/>}>
                <Scene/>
            </Suspense>}
        </>
    )
}

export default App
