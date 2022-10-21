import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import SignInView from 'views/Auth/Login/SignInView';
import UserListView from './views/User/UserList/UserListView';

import './App.css';

import { Context, ContextPersist } from "./store/context"
import { AuthService } from './services/AuthService';


function App() {
    const history = useHistory();

    const [user, setUser] = useState(null);

    useEffect(() => {
        AuthService.loadUser()
            .then(user => {
                setUser(user);
            }).catch(error => {
                console.log(error)
            });

        const currentUserObserver = AuthService.currentUser.subscribe(user_event => {
            if (user != null && user_event === null) {
                history.push('/login');
            }

            setUser(user_event);
        });

        return function cleanup() {
            currentUserObserver.unsubscribe();
        }
    }, []);


    return (
        <ContextPersist><Context>
            <main>
                <Switch>
                    <React.Fragment>
                        {!user &&
                            <div>
                                <Route exact path='/login' component={SignInView} />
                                <Route exact path="*">
                                    <Redirect to="/login" />
                                </Route>
                            </div>
                        }
                        {user &&
                            <div>
                                <Route path='/home' component={UserListView} />
                                <Route path="*">
                                    <Redirect to="/home" />
                                </Route>
                            </div>
                        }
                    </React.Fragment>
                </Switch>
            </main>
        </Context></ContextPersist >
    );
}

export default App;
