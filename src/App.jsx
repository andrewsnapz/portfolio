import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
import {Switch, Route, useLocation} from 'react-router-dom';
// import {useTransition} from 'react-spring/renderprops';
import {animated, useTransition} from 'react-spring';

export default function App() {
    const usePageViews = () => {
        let location = useLocation();
        console.log(location);
    };

    return ( 
        <div>
            {usePageViews()}
              <Header/>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/contact'component={Contact}></Route>
                    <Route exact path='/projects' component={Projects}></Route>
                </Switch>
        </div>
    )
};

// export default function App() {
//     //returns the location object that represents the current URL
//     const location = useLocation();
//     const transitions = useTransition(location, location => location.pathname, {
//         from: {height: '0%', background:'white', top:'0%', bottom:'0'},
//         enter: {opacity: 1, transform: 'translate(0%,0,0)'},
//         leave: {opacity:0, transform: 'translate3d(-50%,0,0)'},
//     });
//     return transitions.map(({item, props, key}) => (
//         <animated.div key={key} style={props}>
//                 <Header/>
//                     <Switch location={item}>
//                         <Route path='/' component={Home} />
//                         <Route path='/contact' component={Contact} />
//                         <Route path='/projects' component={Projects} />
//                     </Switch>
//         </animated.div>
//     ))
// };


