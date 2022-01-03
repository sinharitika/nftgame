import 'bootstrap/dist/css/bootstrap.min.css';
 import {Switch,useHistory , Route,BrowserRouter as Router,Redirect } from 'react-router-dom';
import Landing from './Components/Landing';



function App() {
  const history = useHistory();
  return (
    <>  
  <Router basename={"/"} history= {history}>
      {/* <Router basename={"/millionaire-tiger"} history= {history}> */}
        <Switch>
          <Route exact path="/"
            render={() => {
              return (
                <Redirect to="/home" />
              )
          }}/>
          <Route exact path='/home' component={Landing}/>

        </Switch>
      </Router>
    </>
  );
}
export default App;