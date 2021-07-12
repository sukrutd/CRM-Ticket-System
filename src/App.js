import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/Dashboard';
//import Entry from './pages/Entry';

function App() {
  return (
    <div className='app'>
      {/* <Entry /> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
