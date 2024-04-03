import Header from "./widgets/Header/Header.tsx";
import {TextInput} from "./shared/ui/TextInput/TextInput.tsx";

function App() {

  return (
    <div >
    <Header/>
        <div style={{background: '#1E1E1E', height: '600px'}}>
            <TextInput type={'secondary'}/>

        </div>

    </div>
  )
}

export default App
