import './dashboard.scss';
import { getLunchProgrammeData } from '../services/lunch-data';
import { useEffect, useState } from 'react';

const Dashboard = (props) => {
    const [data, setData] = useState([]);
    console.log(props.filters);
    useEffect(() => {
        getLunchProgrammeData(props.filters).then(data => {
            setData(data);
        })
    }, [props.filters])

    return (
        <div className="App">
            <div className="row">
                {data && data.length > 0 ? data.map(item => <div className="col-lg-3 my-2 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="py-3">
                            <img style={{ height: '140px', width: '100%' }} src={item.links && item.links.flickr_images[0]} />
                        </div>
                        <div>{item.mission_name}#{item.flight_number}</div>
                        <div>
                            <label>Mission Id&nbsp;:</label>
                            <ul>
                                {item.mission_id.map(id => <li>{id}</li>)}
                            </ul>
                        </div>
                        <div>
                            <label>Lunch Year&nbsp;:</label>
                            <label>
                                {item.launch_year}
                            </label>
                        </div>
                        <div>
                            <label>Successful Lunch&nbsp;:</label>
                            <label>
                                {item.launch_success ? 'Yes' : 'No'}
                            </label>
                        </div>
                        <div>
                            <label>Successful Landing&nbsp;:</label>
                            <label>
                                {item.launch_success ? 'Yes' : 'No'}
                            </label>
                        </div>
                    </div>
                </div>) : <h4>No Lunch Programs</h4>}
            </div>
        </div>
    );
}

export default Dashboard;
