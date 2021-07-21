import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import Dashboard from 'pages/Dashboard';
import TicketList from 'pages/TicketList';
import AddTicket from 'pages/AddTicket';
import Ticket from 'pages/Ticket';
import Entry from 'pages/Entry';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Entry />
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path='/add-ticket'>
            <AddTicket />
          </PrivateRoute>
          <PrivateRoute exact path='/tickets'>
            <TicketList />
          </PrivateRoute>
          <PrivateRoute exact path='/tickets/:tid'>
            <Ticket />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
