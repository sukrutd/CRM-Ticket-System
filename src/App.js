import DefaultLayout from './layout/DefaultLayout';
import AddTicket from './pages/AddTicket';
//import Dashboard from './pages/Dashboard';
//import Entry from './pages/Entry';

function App() {
  return (
    <div className='app'>
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
