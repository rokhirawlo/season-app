import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {

  summer: {
    text: 'Lets hit the Beach!',
    iconName : 'sun'
  },
  winter : {
    text: 'Burr it is cold!',
    iconName: ' snowFlake '

  }
};


  const getSeason =  (lat, month) => {

      if(month > 2 && month < 9 ){
         return lat > 0 ?'summer'  : 'winter';      
      }else{
         return lat > 0 ? 'winter' : 'summer';
      }
  };


 const  SeasonDisplay  = (props) => {
 
  const season = getSeason(props.lat, new Date().getMonth());
     
  const {text, iconName} =    seasonConfig[season]     // { text , iconName }

   

 return (

 <div className = {`season-display  ${season}`}>
   <i className = {` icon-left massive ${iconName} icon`}/>
   <h1>
   {season === 'winter' ? 'Burr, it is chilly ': 'Lets hit the beach'}
  </h1> 
  <i className = {`icoon-right massive ${iconName} icon`}/>
 </div>
 );
};


export default SeasonDisplay;
