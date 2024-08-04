import Box from "./components/Box";

function App() {

  return (
    <>
    <div>
      {/* <Box heading={"Hare Krishna"} count={24} func1={() => {alert("Hare Krishna!")}} /> */}
      <Box heading={"Hare Krishna"} count={24} func1={(a: string) => {alert(a)}} />
    </div>
    </>
  )
}

export default App
