import { Switch, Route, useLocation} from 'react-router-dom';

import Home from './pages/Home';
import SingleAlbum from './pages/SingleAlbum';

export default () => {

    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/album" component={SingleAlbum}/>
        </Switch>
    );

}