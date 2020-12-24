import { useState } from 'react';
import './filter.scss';

const Filter = (props) => {

  const years= [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];

  return (
    <div className="filter card">
      <h4>Filter</h4>
      <h5>Launch Year</h5>
      <div className="">
        {years.map(year=><button className={props.filters.launch_year === year ?'btn btn_hover col-5 mx-1':"btn col-5 mx-1"} onClick={() => { props.setFilters({ ...props.filters, launch_year: year }) }}>{year}</button>)}
      </div>
      <h5>Successful Launch</h5>
      <div>
        <button className={props.filters.launch_success === true ?'btn btn_hover col-5 mx-1':"btn col-5 mx-1"} onClick={() => { props.setFilters({ ...props.filters, launch_success: true }) }}>True</button>
        <button  className={props.filters.launch_success === false ?'btn btn_hover col-5 mx-1':"btn col-5 mx-1"} onClick={() => { props.setFilters({...props.filters, launch_success: false }) }}>False</button>
      </div>
      <h5>Successful Landing</h5>
      <div>
        <button className={props.filters.landing_success === true ?'btn btn_hover col-5 mx-1':"btn col-5 mx-1"} onClick={() => { props.setFilters({...props.filters, landing_success: true }) }}>True</button>
        <button className={props.filters.landing_success === false ?'btn btn_hover col-5 mx-1':"btn col-5 mx-1"} onClick={() => { props.setFilters({...props.filters, landing_success: false }) }}>False</button>
      </div>
    </div>
  );
}

export default Filter;
