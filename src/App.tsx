import { useClick } from "./components/customHoocs/forButtonFunc";
import { changeComponents } from "./components/functions/changeComponents";
import { Main } from "./components/Main";
import { MainTest } from "./components/MainTesxt";

function App () {
  const {changeVision, show} = useClick();
  return (
    <div>
      {changeComponents(<MainTest />, <Main func ={changeVision}/>, show)}
    </div>
  )
}
export default App
