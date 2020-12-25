import { getLaunchProgrammeData } from '../services/launch-data';
import { useEffect, useState } from 'react';

const Dashboard = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getLaunchProgrammeData(props.filters).then(data => {
            setData(data);
        })
    }, [props.filters])

    return (
        <div className="App">
            <div className="row">
                {data && data.length > 0 ? data.map((item,i) => <div key={i} className="col-xl-3 col-lg-4 mb-3 col-md-6 col-sm-12">
                    <div className="card fill px-3">
                        <div className="my-3 mx-auto" style={{ height: '190px'}}>
                            <img style={{ height: '190px', width:'190px' }} src={item.links && item.links.mission_patch} alt="rocket" />
                        </div>
                        <div>{item.mission_name}&nbsp;#&nbsp;{item.flight_number}</div>
                        <div>
                            <label className="font-weight-bold">Mission Id&nbsp;:</label>
                            <ul>
                                {item.mission_id.map(id => <li key={id}>{id}</li>)}
                            </ul>
                        </div>
                        <div>
                            <label className="font-weight-bold">Launch Year&nbsp;:</label>
                            <label>
                                {item.launch_year}
                            </label>
                        </div>
                        <div>
                            <label  className="font-weight-bold">Successful Launch&nbsp;:</label>
                            <label>
                                {item.launch_success ? 'Yes' : 'No'}
                            </label>
                        </div>
                        <div>
                            <label  className="font-weight-bold">Successful Landing&nbsp;:</label>
                            <label>
                                {props.filters.landing_success ? 'Yes' : 'No'}
                            </label>
                        </div>
                    </div>
                </div>) : <h4 className="ml-3 my-3">No Launch Programs</h4>}
            </div>
        </div>
    );
}

export default Dashboard;
