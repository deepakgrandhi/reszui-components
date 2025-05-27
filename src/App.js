import CustomSwitch from "./CustomSwitch"

function App() {
  return (
    <div style={{ background: "#333", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <CustomSwitch onChange={(state) => console.log("Switch is", state ? "On" : "Off")} />
    </div>
  )
}

export default App
