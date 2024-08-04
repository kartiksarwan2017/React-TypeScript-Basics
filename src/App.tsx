import Box from "./components/Box";
import { useState } from "react";

function App() {

  const [val, setVal] = useState<string>("");

  return (
    <>
    <div>
      {/* <Box heading={"Hare Krishna"} count={24} func1={() => {alert("Hare Krishna!")}} /> */}
      {/* <Box children={<>lol</>} heading={"Hare Krishna"} count={24} func1={(a: string) => {alert(a)}} /> */}
      {/* <Box heading={"Hare Krishna"} count={24} >
        {"wow nice"}
        <br />
        <button>Click Me</button>
      </Box> */}

      <Box label="Search" value={val} setter={setVal} />
    </div>
    </>
  )
}

export default App
