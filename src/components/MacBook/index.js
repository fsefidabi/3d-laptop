import React, { useRef, useState } from "react"
import * as THREE from "three"
import { Float, Html, useAnimations, useGLTF } from "@react-three/drei"
import useEventListener from "../../hooks/useEventListener"
import MacBookScreenContent from "../MacBookScreenContent"
import GuideText from "../GuideText"

function MacBook() {
    const [macBookIsOpen, setMacBookIsOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const objectRef = useRef()

    const model = useGLTF("./models/macbook/scene.gltf")
    const { mixer } = useAnimations(model.animations, model.scene)
    const audioLoader = new THREE.AudioLoader()
    const audioListener = new THREE.AudioListener()

    useEventListener(window, "keydown", handleKeyDown)

    useEventListener(window, "keyup", handleKeyUp)

    function handleMacbookClicked() {
        if (macBookIsOpen) return
        setMacBookIsOpen(true)
        const openAnimationClip = THREE.AnimationUtils.subclip(model.animations[0], "OpenAnimation", 1, 120)
        const trimmedAnimationAction = mixer.clipAction(openAnimationClip)
        trimmedAnimationAction.setLoop(THREE.LoopOnce, 1)
        trimmedAnimationAction.clampWhenFinished = true
        trimmedAnimationAction.setDuration(2)
        setIsAnimating(true)
        trimmedAnimationAction.play()
        mixer.addEventListener("finished", () => setIsAnimating(false))
    }

    const audioSources = {}

    function handleKeyDown(e) {
        if (!macBookIsOpen) return
        setButtonPosition(e.code, -0.0153)
        playButtonPressSound(e.code)
    }

    function handleKeyUp(e) {
        if (!macBookIsOpen) return
        setButtonPosition(e.code, -0.014)
    }

    function setButtonPosition(keyCode, position) {
        let button
        if (keyCode === "ArrowUp" || keyCode === "ArrowDown") {
            button = model.scene.children.find(child => child.name === "ArrowUp_ArrowDown")
        } else {
            button = model.scene.children.find(child => child.name === keyCode)
        }

        if (!button) return
        button.position.y = position
    }

    function playButtonPressSound(key) {
        if (audioSources[key]) {
            audioSources[key].stop()
        }

        audioLoader.load("./sounds/macbook-button-press.mp3", (buffer) => {
            const audioSource = new THREE.PositionalAudio(audioListener)
            audioSource.setBuffer(buffer)
            audioSource.setVolume(10)
            audioSource.play()
            audioSources[key] = audioSource
        })
    }

    return (
        <>
            <GuideText show={macBookIsOpen}/>
            <Float rotationIntensity={0.4}>
                <primitive
                    ref={objectRef}
                    object={model.scene}
                    position={[0, -2.5, 0]}
                    scale={36}
                    onClick={handleMacbookClicked}
                    onPointerEnter={() => document.body.style.cursor = !macBookIsOpen ? "pointer" : "default"}
                    onPointerLeave={() => document.body.style.cursor = "default"}
                >
                    <Html
                        transform
                        wrapperClass={"html-screen"}
                        occlude
                        priority={-1}
                        style={{
                            transition: "all 0.5s",
                            opacity: isAnimating || !macBookIsOpen ? 0 : 1,
                            visibility: isAnimating || !macBookIsOpen ? "hidden" : "visible",
                            transformStyle: "preserve-3d",
                            willChange: "transform, opacity",
                            transform: "translateY(-44px) scale(10)"
                            // zIndex: "-1"
                        }}
                        position={[0, 0.1, -0.1385]}
                        rotation-x={-0.34}
                        scale={0.1}
                        distanceFactor={1}
                    >
                        <MacBookScreenContent/>
                    </Html>
                </primitive>
            </Float>
        </>
    )
}

export default MacBook
