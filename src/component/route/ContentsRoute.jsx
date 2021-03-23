import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'component/Home';
import Line from 'component/chart/line/Line';
import Bar from 'component/chart/bar/Bar';
import Chat from 'component/chat/Chat';
import UserListComponent from 'component/user/UserListComponent';
import AddUserComponent from 'component/user/AddUserComponent';
import EditUserComponent from 'component/user/EditUserComponent';

const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/line" component={Line} />
        <Route path="/bar" component={Bar} />
        <Route path="/chat" component={Chat} />
      </Switch>

      <Switch>
        <Route path="/users" component={UserListComponent} />
        <Route path="/add-user" component={AddUserComponent} />
        <Route path="/edit-user" component={EditUserComponent} />
        <Route path="/personal-information" component={EditUserComponent} />
      </Switch>
    </>
  );
};

export default AppRouter;
