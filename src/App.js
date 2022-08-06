import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes} from "react-router-dom";



const App = (props) => {
    return (

        <div className='AppWrapper'>
            <Sidebar/>
            <Header/>
            <Footer/>
            <div className='AppWrapper-profile'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs state={props.state.messagePage}/>}/>
                    <Route path='/profile' element={<Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                </Routes>
            </div>


        </div>

    )
}

export default App;
