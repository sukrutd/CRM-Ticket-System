import DefaultLayout from 'layout/DefaultLayout';
import Ticket from 'pages/Ticket';
// import TicketList from 'pages/TicketList';
// import AddTicket from 'pages/AddTicket';
// import Dashboard from 'pages/Dashboard';
// import Entry from 'pages/Entry';

function App() {
  return (
    <div className='app'>
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketList /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
