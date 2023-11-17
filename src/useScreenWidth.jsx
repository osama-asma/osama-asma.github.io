import { useState, useEffect, useCallback } from 'react'

export default function useScreenWidth() {
    const [windowDimension, setWindowDimension] = useState({
        winWidth: window.innerWidth,
    })

    const detectSize = useCallback(() => {
        setWindowDimension({
            winWidth: window.innerWidth,
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension, detectSize])

    return windowDimension.winWidth
}
