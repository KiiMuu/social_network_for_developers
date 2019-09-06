import React, { Fragment, useEffect } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

// components
import Navbar from './components/layout/navbar/Navbar';
import Landing from './components/layout/landing/Landing';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/layout/notfound/NotFound';
import PrivateRoute from './components/routing/PrivateRoute';

// redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {

	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return(
		<Provider store={store}>
			<Fragment>
				<Navbar />
				<Route exact path="/" component={Landing} />
				<Switch>
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/signin" component={SignIn} />
					<Route exact path="/profiles" component={Profiles} />
					<Route exact path="/profile/:id" component={Profile} />
					<PrivateRoute exact path="/dashboard" component={Dashboard} />
					<PrivateRoute exact path="/create-profile" component={CreateProfile} />
					<PrivateRoute exact path="/edit-profile" component={EditProfile} />
					<PrivateRoute exact path="/add-experience" component={AddExperience} />
					<PrivateRoute exact path="/add-education" component={AddEducation} />
					<PrivateRoute exact path="/posts" component={Posts} />
					<PrivateRoute exact path="/posts/:id" component={Post} />
					<Route component={NotFound} />
				</Switch>
			</Fragment>
		</Provider>
	);
}

export default App;
