import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

