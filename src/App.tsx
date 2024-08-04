import Box from "./components/Box";

function App() {

  return (
    <>
    <div>
      {/* <Box heading={"Hare Krishna"} count={24} func1={() => {alert("Hare Krishna!")}} /> */}
      {/* <Box children={<>lol</>} heading={"Hare Krishna"} count={24} func1={(a: string) => {alert(a)}} /> */}
      <Box heading={"Hare Krishna"} count={24} >
        {"wow nice"}
        <br />
        <button>Click Me</button>
      </Box>
    </div>
    </>
  )
}

export default App
