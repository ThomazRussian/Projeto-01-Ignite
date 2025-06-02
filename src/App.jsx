import './global.css'
import { Header } from './Components/Header.jsx'
import { NewTask } from './Components/NewTask.jsx'

export function App() {
    return (
        <div>
            <Header />
            <NewTask />
        </div>
    )
}