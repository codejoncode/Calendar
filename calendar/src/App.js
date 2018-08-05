import React, { Component } from 'react';

import styled from 'styled-components';
import moment from 'moment';
import Day from './Components/Day.js';
import MonthCarousel from './Components/MonthCarousel.js';
import Carousel from './Components/Carousel.js';
import photo1 from './images/photo1.jpeg';
import photo2 from './images/photo2.jpeg';
import photo3 from './images/photo3.jpeg';
import photo4 from './images/photo4.jpeg';
import photo5 from './images/photo5.jpeg'; 
import photo6 from './images/photo6.jpeg';
import photo7 from './images/photo7.jpeg';
import photo8 from './images/photo8.jpeg';
import photo9 from './images/photo9.jpeg';
import photo10 from './images/photo10.jpg';
import photo11 from './images/photo11.jpeg';
import photo12 from './images/photo12.jpeg';
import Task from './Components/Task.js';
import AddTaskForm from './Components/AddTaskForm.js';

const images= [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12]; 
const CalenderContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 100px);
  width: 800px;
  margin: 0 auto;
  grid-template-columns: repeat(7, 114.28571px);
  grid-gap: 0;
`;

const Container = styled.div `
  display: flex;
  width: 800px; 
  border: 1px; solid black;
  flex-direction: column;
  margin: 0 auto;

`;

const DaysOfTheWeek = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
`;


const Year = styled.div`
  font-size: 2vw;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

const DayText = styled.div`
  font-size: 1vw;
  width: 114.28571px; 
  text-align: center; 
  font-weight: bold; 
  margin-bottom: 10px;
`;

const BigDiv = styled.div`
  width: 2000px;
  max-width: 100%; 
  display: flex; 

`;

const LeftDisplay = styled.div`
  width: 400px;
  max-width: 100%;
  border: 1px solid blue; 
  margin-left: 10px;
`;

const RightDisplay = styled.div`
  width: 400px; 
  max-width: 100%;
  border: 1px solid blue;
  margin-right: 10px;
`;

const SearchSection = styled.div`
  margin-top: 30px;
  margin-left: 15px;
  input {
    width: 250px;
    height: 50px;
    max-width: 100%; 
  }
`;

class App extends Component {
  constructor(){
    super(); 
  
  this.state = {
    months: ["Januaray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    year: 2018,
    start: [[2018, 0, 1], [2018, 1, 1], [2018, 2,1], [2018, 3,1], [2018, 4, 1], [2018, 5,1], [2018, 6, 1], [2018, 7,1], [2018, 8,1], [2018, 9,1], [2018,10,1], [2018, 11,1]],
    end: [[2018, 0, 31], [2018, 1, 2018 % 4 === 0 ? 29: 28], [2018, 2,31], [2018, 3,30], [2018, 4, 31], [2018, 5,30], [2018, 6, 31], [2018, 7,31], [2018, 8,30], [2018, 9,31], [2018,10,30], [2018, 11,31]],
    searh: "",
    index: 0,
    images: [],
    display: [],
    currentlyDisplaying: "", 
    tasks: [
      {
        id: 1,
        date: [2018, 8, 1],
        task: 'hello',
        completed: false
      }
    ],
    UItasks: []
  };
}
  componentDidMount(){
    let indexDate = new Date(Date.now());;
    indexDate = indexDate.getMonth(); // we want to start off on the current month of the current time. 
    this.setState({images:images, index: indexDate});
  }

  leftClick = () => {
    let newIndex; 
    this.state.index === 0 ? newIndex = this.state.images.length-1 : newIndex = this.state.index -1;
    this.setState({index: newIndex});
  }
  rightClick = () => {
    let newIndex; 
    this.state.index === this.state.images.length-1 ? newIndex = 0 : newIndex = this.state.index + 1; 
    this.setState({index: newIndex});
  }

  selectedImage = () => {
    return <img alt ={this.state.months[this.state.index]} src={this.state.images[this.state.index]} style={{display: 'block'}} />
  }


  
  

  previousYear = () => {
    const year = this.state.year -1; 
    const start = this.state.start.slice(); 
    const end = this.state.end.slice();

    for (let i = 0; i<start.length; i++){
      start[i][0] = year;
      end[i][0] = year; 
    }

    this.setState({year: this.state.year -1, start: start, end:end}); 
  }

  nextYear = () => {
    const year = this.state.year + 1;  
    const start = this.state.start.slice(); 
    const end = this.state.end.slice();

    for (let i = 0; i<start.length; i++){
      start[i][0] = year;
      end[i][0] = year; 
    }

    this.setState({year: this.state.year + 1, start: start, end: end}); 
  }

  taskClick = (tasks, date) => {
    const display = [];
    display.push(tasks);
    this.setState({display:display, currentlyDisplaying: date});
  }
  
  
  render() {
    let days = [];
    let begin = this.state.start[this.state.index].slice();
    let end = this.state.end[this.state.index].slice();
      
    for (
      let i = moment(begin);
      i.isSameOrBefore(moment(end));// checking if the moment is at the largest date. 
      i.add(1, 'd')//adds one day to the i 
    ) {
      days.push({date:i.clone(), tasks: []});//have to clone to push. 
      
    }
    let len = Number(days[0].date.format('d'));
    for (let i = 0; i < len; i++) {
      days.unshift('');
    }
    
    return (
      <BigDiv>
        <LeftDisplay>
        <SearchSection>
          <input type="text" placeholder = "Search.." value = {this.state.search}/>
          <br/>
          <button>Shift Selected</button>
        </SearchSection>
        {this.state.display.map((task, i)=> <Task key = {i}  task = {task.task} weekDay = {task.date[1]} date={this.state.currentlyDisplaying} year = {this.state.year} month = {this.state.months[this.state.index]}></Task>)}
        </LeftDisplay>
      <Container>
        <MonthCarousel month = {this.state.months[this.state.index]}> </MonthCarousel>
        <Year>
         <button onClick = {this.previousYear}>Previous Year</button>    <h1>{this.state.year}    </h1><button onClick = {this.nextYear}>Next Year</button>
        </Year>
        <Carousel selectedImage = {this.selectedImage} leftClick = {this.leftClick} rightClick = {this.rightClick}> </Carousel>
        <DaysOfTheWeek>
          <DayText>Sunday</DayText>
          <DayText>Monday</DayText>
          <DayText>Tuesday</DayText>
          <DayText>Wednesday</DayText>
          <DayText>Thursday</DayText>
          <DayText>Friday</DayText>
          <DayText>Saturday</DayText>
        </DaysOfTheWeek>
        
        <CalenderContainer>
          {days.map((day, i ) => <Day onClick ={this.taskClick} key={i}  year={this.state.year} month = {this.state.months[this.state.index]}  date = {day !=="" ? day.date.format("MMM Do YY"): null} data = {day !== '' ? day.date.format('D') : null} >
          </Day>)}
        </CalenderContainer>
      </Container>
      <RightDisplay>
        <AddTaskForm>
        </AddTaskForm>
      </RightDisplay>
      </BigDiv>
    );
  }
}

export default App;