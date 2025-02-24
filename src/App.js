
import IndexRouter from "./router/IndexRouter";
import { Provider } from "react-redux";
import store from './redux/store';
import '/node_modules/react-grid-layout/css/styles.css';
import { useEffect } from "react";

function App() {
    
    useEffect(() => {
       
    })
    return (
        <Provider store={store}>
            <IndexRouter style={{ height: '100%' }}></IndexRouter>
        </Provider>
       
    );
}

export default App;
