import { useState } from "react"

export default function CustomSwitch({ onChange }) {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => {
        const newState = !isOn
        setIsOn(newState)
        if (onChange) onChange(newState)
    }

    const outerStyle = {
        width: "160px",
        height: "80px",
        border: `4px solid ${isOn ? "white" : "black"}`,
        backgroundColor: isOn ? "black" : "white",
        position: "relative",
        cursor: "pointer",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
        boxSizing: "border-box",
    }

    const boxStyle = {
        width: "70px",
        height: "calc(100% - 8px)",
        backgroundColor: isOn ? "white" : "black",
        position: "absolute",
        top: "4px",
        left: isOn ? "calc(100% - 74px)" : "4px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "left 0.2s ease-in-out, background-color 0.3s ease",
    }

    const barStyle = {
        width: "40px",
        height: "6px",
        backgroundColor: isOn ? "black" : "white",
        margin: "6px 0",
        transition: "background-color 0.3s ease",
    }

    return (
        <div onClick={toggleSwitch} style={outerStyle}>
            <div style={boxStyle}>
                <div style={barStyle}></div>
                <div style={barStyle}></div>
                <div style={barStyle}></div>
            </div>
        </div>
    )
}
