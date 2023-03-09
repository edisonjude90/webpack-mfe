import React, {Suspense} from "react";
import ReactDOM from "react-dom";

const HeaderLazy = React.lazy(() => import("sharedComponents/Header"));
const FooterLazy = React.lazy(() => import("sharedComponents/Footer"));

const App = () => {
    return (
        <div>      
            <Suspense fallback={"loading..."}>
                <HeaderLazy />
            </Suspense>
            Web App is running !!

            <Suspense fallback={"loading..."}>
                <FooterLazy />
            </Suspense>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));