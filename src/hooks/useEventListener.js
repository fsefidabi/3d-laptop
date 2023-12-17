import { useEffect } from "react"

export default function useEventListener(target, type, listener, ...options) {
    useEffect(
        () => {
            if (!target) return
            target.addEventListener(type, listener, ...options)
            return () => {
                target.removeEventListener(type, listener, ...options)
            }
        },
        [target, type, listener, options]
    )
};
