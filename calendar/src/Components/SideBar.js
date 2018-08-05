import React from 'react';

class SideBar extends React.Component{
    constructor(){
        super(); 
        this.state = {

        }
    }

    render(){


        return(

            <div>
                <button>Clear Completed</button><button>Shift Marked</button>
                <br/>
                <input type="text" placeholder = "Search.."/>
            </div>
        );
    }

}

export default SideBar; 