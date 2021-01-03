import React from 'react'
import {BrowserRouter as Router,
Switch,
Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './home/index'
import Post from './post/Post'
import {signIn,signOut} from '../redux/actions/'
import "./App.scss"
import GmailLogin from './login/GmailLogin'
import NavBar from './navBar'
class App extends React.Component{
    
    render(){
        return (
           
            <Router>
                <div className="container-fluid ">
          <div className="mainContainer">
                 <NavBar />
                <Switch>
                    <Route path="/" exact component={Home}>
                        
                    </Route>
                    <Route path="/login" exact component={GmailLogin} />
                    <Route path="/:title"  component={Post} >
                        
                    </Route>
                    
                </Switch>
                </div>
                </div>
            </Router>
            
            
        )
    }
   
}
const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn,
      }; 
}
export default connect(mapStateToProps,{signIn,signOut})(App);