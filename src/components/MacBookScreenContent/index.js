import React, { useEffect, useRef, useState } from "react"

function MacBookScreenContent() {
    const [textareaValue, setTextareaValue] = useState("")

    const textareaRef = useRef()

    useEffect(() => {
        if (!textareaRef.current) return
        setTimeout(() => {
            textareaRef.current.focus()
        }, 2600)
    }, [textareaRef.current])

    return (
        <div className={"wrapper"} onPointerDown={e => e.stopPropagation()}>
            <p>Hi there! 👋 Type and enjoy 😎</p>

            <textarea
                ref={textareaRef}
                value={textareaValue}
                className={"content"}
                placeholder={"Type..."}
                autoFocus
                onChange={e => setTextareaValue(e.target.value)}
            />
        </div>
    )
}

export default MacBookScreenContent
