import React from 'react';
import August from '../AugustData.js'
import styled from 'styled-components';
import Monday from './Monday.js';
import Tuesday from './Tuesday.js';
import Wednesday from './Wednesday.js';
import Thursday from './Thursday.js';
import Friday from './Friday.js';
import Saturday from './Saturday.js';
import Sunday from './Sunday.js';
console.log(August);



const Calendar = styled.div `
    width: 800px;
    max-width:100%;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;


class DaysOfWeek extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }


    render() {
        let tenaryPlaceHolder; 
        return (
            
            <Calendar>
            {August.map((period, i) => {
                if (period.day !== 'Monday' && i === 0) {
                     return <Monday date = {period.date}/>;
                }
                if (period.day !== 'Tuesday' && i === 0){
                    return <Tuesday date = {period.date}/>;
                }
                if (period.day === 'Monday') { 
                    return <Monday date = {period.date} day={period.day}/>;
                } else if (period.day === 'Tuesday') {
                    return <Tuesday date = {period.date} day={period.day}/>;
                } else if (period.day === 'Wednesday'){
                    return <Wednesday date = {period.date} day={period.day}/>;
                } else if (period.day === 'Thursday') {
                    return <Thursday date = {period.date} day={period.day}/>;
                } else if (period.day === 'Friday') {
                    <Friday date = {period.date} day={period.day}/>; 
                } else if (period.day === 'Saturday'){
                    <Saturday date = {period.date} day={period.day}/>;
                } else if (period.day === 'Sunday') {
                    <Sunday date = {period.date} day={period.day}/>;
                }


                //the above is to have blank sections.
            //    if (period.day !== 'Monday' && i === 0) { <Monday/> : tenaryPlaceHolder = false;}

                // (period.day !== 'Tuesday' && i === 0) ? <Tuesday /> : tenaryPlaceHolder = false;
                    
                
                //the above is to have blank sections. 
                // (period.day === 'Monday') ? <Monday date = {period.date} day={period.day}/> : tenaryPlaceHolder = false;
                    
                // (period.day === 'Tuesday') ? <Tuesday date = {period.date} day={period.day}/> : tenaryPlaceHolder = false;
                    
                // (period.day === 'Wednesday') ? <Wednesday date = {period.date} day={period.day}/> : tenaryPlaceHolder = false; 
                    
                // (period.day === 'Thursday') ? <Thursday date = {period.date} day={period.day}/> : tenaryPlaceHolder = false; 
                    
                // (period.day === 'Friday') ? <Friday date = {period.date} day={period.day}/> : tenaryPlaceHolder = false; 
                    
                // (period.day === 'Saturday') ? <Saturday date = {period.date} day={period.day}/> : tenaryPlaceHolder = false; 
                    
                // (period.day === 'Sunday') ? <Sunday date = {period.date} day={period.day}/> : tenaryPlaceHolder = false; 
                    
                
                 

            })}

            </Calendar>

        ); 
    }
}

export default DaysOfWeek;