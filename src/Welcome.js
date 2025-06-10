import React, {Component} from "react";

class Welcome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        greeting: "Vanakkam!",
        greetingInTamil: "வணக்கம்!",
        welcomeMess: "Welcome to my personal webpage",
        welcomeMessInTamil: "எனது தனிப்பட்ட வலைப்பக்கத்திற்கு தங்களை வரவேற்கின்றேன்",
      }
    }
  
    render() {
      return (
        <div id='welcomeDiv'>
          <div id="greetingDiv">
            <div>
              {this.state.greeting}
            </div>
            <div>
              {this.state.greetingInTamil}
            </div>
          </div>
          <div id="welcomeDivInner">
            <div id="welcomeMessDiv">
              <div>
                {this.state.welcomeMess}
              </div>
              <div>
                {this.state.welcomeMessInTamil}
              </div>
            </div>
            <div id="authorDiv">
              <div>
                {this.props.author}
              </div>
              <div>
                {this.props.authorInTamil}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default Welcome;