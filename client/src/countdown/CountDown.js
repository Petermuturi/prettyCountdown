import React, {Component} from 'react'
// import Timer from 'timer'
import injectTapEventPlugin from 'react-tap-event-plugin'
import DatePicker from 'material-ui/DatePicker'
import moment from 'moment'
import './count.css'

export default class CountDown extends Component{
  // setting event plugin
  componentWillMount(){
    injectTapEventPlugin()
  }
  // defining component state
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      day: "00",
      hour: "00",
      minute: "00",
      second: "00"
    }
  }
  dayChange = (e, date) => {

    console.log(moment.utc(new Date(date)).endOf('hour').fromNow())
    let value = new Date(date) - new Date()
    value = value <= 0? 0 : value
    let sec_diff = 1000
    let m = (value) / sec_diff
    let time = parseInt(m.toFixed(0), 10)
    let countdown = time, days, hours, minutes, seconds

    console.log(countdown);
    setInterval( ()=> {
      days = parseInt((countdown / 60 / 60/ 24) % 365, 10)
      hours = parseInt((countdown / 60 / 60) % 24, 10)
      minutes = parseInt((countdown / 60) % 60, 10)
      seconds = parseInt(countdown % 60, 10);

      days = days < 10 ? "0" + days : days.toString();
      hours = hours < 10 ? "0" + hours : hours.toString();
      minutes = minutes < 10 ? "0" + minutes : minutes.toString();
      seconds = seconds < 10 ? "0" + seconds : seconds.toString();

      this.setState({
        count: time,
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
    let active = this.state.count >= 0 ? true : false
    return(
      <div>
        <div className="counter">
          {
            active ?
              <div>
                <p className="sec">{this.state.second} Seconds</p>
                <p className="min">{this.state.minute} Minutes</p>
                <p className="hr">{this.state.hour} Minutes</p>
                <p className="dy">{this.state.day} Days</p>
              </div>
            :
              <div>

              </div>
          }
        </div>
        <DatePicker
          hintText="Select Day"
          mode="landscape"
          onChange={this.dayChange}
        />
      </div>
    )
  }
}
