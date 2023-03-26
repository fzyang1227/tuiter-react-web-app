import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Explore from "./tuiter/explore-page";
import Tuiter from "./tuiter"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*"
                 element={<Labs/>}/>
          <Route path="/hello"
                 element={<HelloWorld/>}/>
          <Route path="/explore"
                 element={<Explore/>}/>
          <Route path="/tuiter"
                 element={<Tuiter/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
