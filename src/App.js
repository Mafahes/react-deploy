import React, {Component} from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import NotFonud from "./components/not-found/not-fonud";
import MapContainer from "./components/container-components/mapContainer";
import HeaderContainer from './components/container-components/headerContainer'
import ProfileContainer from './components/container-components/profileContainer'
import LoginContainer from './components/container-components/loginContainer'
import firebase from "firebase";
import {config} from "./API/firebase/firebase-api";
import Book from "./components/container-components/studentbookContainer";
import HomePage from "./components/home-page/home-page";
import AboutUs from "./components/about-us/about-us";
import Timetable from "./components/container-components/timetableContainer";
import Registration from "./components/container-components/registerContainer";


export default class App extends Component {

    componentWillReceiveProps(nextProps, prevProps) {
        console.log(nextProps.history.location.pathname)
    }

    render() {
        firebase.initializeApp(config); // important
        return (
            <>
                <HeaderContainer/>
                <div className='main-content'>
                    <Switch>
                        <Route exact path={'/react-deploy'}>
                            <HomePage welcomeScreen={true}/>
                        </Route>
                        <Route exact path={'/react-deploy/map'}>
                            <MapContainer width='100%' height='100vh' welcomeScreen={false}/>
                        </Route>
                        <Route path={'/react-deploy/student-book'}>
                            <Book/>
                        </Route>
                        <Route path={'/react-deploy/timetable'}>
                            <Timetable/>
                        </Route>
                        <Route path={'/react-deploy/login'}>
                            <LoginContainer/>
                        </Route>
                        <Route path={'/react-deploy/profile'}>
                            <ProfileContainer/>
                        </Route>
                        <Route path={'/react-deploy/reg'} render={({ history }) => <Registration history={history} />}/>
                        <Route path={'/react-deploy/about-us'}>
                            <AboutUs/>
                        </Route>
                        <Route>
                            {/* Возвращает компонент если нету роута */}
                            <NotFonud/>
                        </Route>
                    </Switch>
                </div>
            </>
        );
    }
}
