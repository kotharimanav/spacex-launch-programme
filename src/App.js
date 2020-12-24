import './App.scss';
import Filter from './Filter/Filter';
import Dashboard from './Dashboard/Dashboard';
import { useState } from 'react';

function App() {
  const [filters,setFilters] = useState({
    launch_year:2006,
    launch_success:true,
    landing_success:false
  });
  return (
    <div className="container">
      <h3>SpaceX Launch Programme</h3>
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
          <Filter filters={filters} setFilters={setFilters}  />
        </div>
        <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12">
          <Dashboard filters={filters}/>
        </div>
      </div>
      <div  class="row mt-auto mb-10">
        <h5 className="m-auto">Developed By : Manav Kothari</h5>
      </div>
    </div>
  );
}

export default App;
