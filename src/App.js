import { useState, lazy, Suspense } from 'react';
const Filter = lazy(() => import('./Filter/Filter'));
const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

function App() {
  const [filters, setFilters] = useState({
    launch_year: 2014,
    launch_success: true,
    landing_success: true
  });

  const renderLoader = () => <p>Loading</p>;

  return (
      <div className="container">
        <h3 className="py-3">SpaceX Launch Programme</h3>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
            <Suspense fallback={renderLoader()}>
              <Filter filters={filters} setFilters={setFilters} />
            </Suspense>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
            <Suspense fallback={renderLoader()}>
              <Dashboard filters={filters} />
            </Suspense>
          </div>
        </div>
        <div className="row mt-auto mb-10">
          <h5 className="mx-auto my-5">Developed By : Manav Kothari</h5>
        </div>
      </div>
  );
}

export default App;
