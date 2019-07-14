import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchLocation } from '../../redux/actions/location/locationActions';

const SearchLocation = (props) => { 
  
  console.log(props)
  const { location } = props;
  
  useEffect(()=>{
    if(location.isLocationDataLoaded){
      const country = location.locationData[0].Country.ID;
      const city= location.locationData[0].EnglishName;
      const key = location.locationData[0].Key;
      const url = "/forecast/" + country + "/" + city + "/"+ key;
      props.history.push(url);
    }    
  },[location.isLocationDataLoaded]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const q = e.target.children[0].value;
    props.searchLocation(q);  
  }
    
  return (        
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input id="search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  );
}

const mapStateToProps = (state) => {  
  return {
      location: state.location
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchLocation : (q) =>  {dispatch(searchLocation(q))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchLocation);