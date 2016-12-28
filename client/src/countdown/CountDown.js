import React, {Component} from 'react'
// import Timer from 'timer'
import injectTapEventPlugin from 'react-tap-event-plugin'
import DatePicker from 'material-ui/DatePicker'

export default class CountDown extends Component{
  // setting event plugin
  componentWillMount(){
    injectTapEventPlugin()
  }
  // defining component state
  constructor(props){
    super(props)
    this.state = {
      day: null
    }
  }
  handleChange = (event, date) => {
   this.setState({
     day: date
   });
 }
  render(){
    console.log(new Date(this.state.day)- new Date());
    return(
      <div>
        <DatePicker
          hintText="Select Day"
          name="day.date_set"
          mode="landscape"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
