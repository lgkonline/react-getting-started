import React from "react";
import {render} from "react-dom";

import FirstComponent from "./FirstComponent.jsx";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <FirstComponent/>
            </div>
        );
    }
}

render(<App/>, document.getElementById("app"));