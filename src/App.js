import "./App.css";
import { Route, Link, HashRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <HashRouter>
            <>
                <Route exact path="/" component={Homepage} />
            </>
        </HashRouter>
    );
}

export default App;
