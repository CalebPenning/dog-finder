import { Route, Switch, Redirect } from "react-router"
import DogsList from "../DogsList/DogsList"
import Dog from "../Dog/Dog"

const Routes = ({ dogs }) => (
        <Switch>
            <Route exact path="/dogs"><DogsList dogs={dogs} /></Route>
            <Route path="/dogs/:name"><Dog /></Route>
            <Redirect to="/dogs" />
        </Switch>
)

export default Routes