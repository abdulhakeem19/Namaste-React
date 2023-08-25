import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from './components/HeaderComponent'
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import '../index.css';

const AppLayout = () => {
    return (
        <>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);