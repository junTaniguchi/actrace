import React, {FC} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TopBar    from "../components/topPage/topBar";
import TopMain   from "../components/topPage/topMain";
import SearchBar from "../components/common/searchBar";

const TopPage: FC = () => {
    return(
      <Router>
        <Switch>
          <Route exact path="/">
            <TopBar />
            <TopMain />
          </Route>
          <Route path="/search/:keyword" exact>
            <SearchBar />
            
          </Route>
          <Route path="/download/:keyword" exact>
            <SearchBar />

          </Route>
        </Switch>
      </Router>
    );
}

export default TopPage;