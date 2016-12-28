import React, {Component} from 'react'
// import Timer from 'timer'
import injectTapEventPlugin from 'react-tap-event-plugin'
import DatePicker from 'material-ui/DatePicker'
import moment from 'moment'

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
  dayChange = (e, date) => {
    this.setState({
      day: date
    });
    console.log(moment.utc(new Date(date)).endOf('hour').fromNow())
    let sec_diff = 1000
    let m = (new Date(date) - new Date()) / sec_diff
    let time = parseInt(m.toFixed(0), 10)
    console.log(time);
  }
  render(){

    return(
      <div>
        <DatePicker
          hintText="Select Day"
          name="day.date_set"
          mode="landscape"
          onChange={this.dayChange}
        />
      </div>
    )
  }
}
