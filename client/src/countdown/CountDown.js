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
      day: null,
      hour: null,
      minute: null,
      second: null
    }
  }
  dayChange = (e, date) => {

    console.log(moment.utc(new Date(date)).endOf('hour').fromNow())
    let sec_diff = 1000
    let m = (new Date(date) - new Date()) / sec_diff
    let time = parseInt(m.toFixed(0), 10)
    console.log(time);
    let countdown = time, days, hours, minutes, seconds

    setInterval( ()=> {
      days = parseInt((countdown / 60 / 60/ 24) % 365, 10)
      hours = parseInt((countdown / 60 / 60) % 24, 10)
      minutes = parseInt((countdown / 60) % 60, 10)
      seconds = parseInt(countdown % 60, 10);

      days = days < 10 ? "0" + days : days;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      this.setState({
        day: days,
        hour: hours,
        minute: minutes,
        second: seconds
      })

      if (--countdown < 0) {
        countdown = time;
      }
    }, 1000)


  }
  render(){
 console.log(this.state);
    return(
      <div>
        <DatePicker
          hintText="Select Day"
          mode="landscape"
          onChange={this.dayChange}
        />
      </div>
    )
  }
}
