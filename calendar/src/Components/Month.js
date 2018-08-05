import React from 'react'; 
import styled from 'styled-components';
import DaysOfWeek from './DaysOfWeek.js';


const MonthTitle = styled.h1 `
    font-size: 10vw;
    font-sze:10vh;
    width: 800px;
    max-width: 100%;
    text-align: center;
    border: 1px solid black;
`;

const Calendar = styled.div `
    width: 800px;
    max-width:100%;
    display:flex;
    justify-content: space-between;
    
`;

const DayOfWeek = styled.div `
    font-weight: bold; 
    border: 1px solid black;
    width: 114px;
    text-align:center;

`;

class Month extends React.Component{
    constructor(){
        super(); 
        this.state = {};
    }


    render() {

        return (
            <div>
                <MonthTitle>August</MonthTitle>
                {/* Carousel would go here */}
                <Calendar>
                <DayOfWeek>Monday</DayOfWeek><DayOfWeek>Tuesday</DayOfWeek><DayOfWeek>Wednesday</DayOfWeek><DayOfWeek>Thursday</DayOfWeek><DayOfWeek>Friday</DayOfWeek><DayOfWeek>Saturday</DayOfWeek><DayOfWeek>Sunday</DayOfWeek>
                </Calendar>
                
                <DaysOfWeek />
                
            </div>
        
            

        );
    }
}

export default Month; 
