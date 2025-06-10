import React, {Component} from "react";
import picture from "./rishanthRajendhran.jpg";
import locIcon from "./locIcon.png";
import homeIcon from "./homeIcon.png";
import emailIcon from "./emailIcon.png";
import linkedInIcon from "./linkedInIcon.png";
import githubIcon from "./githubIcon.png";

class SideCard extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      // const showEduHistory = this.props.eduHistory.map((item, index) => (
      //   <div className='uniLiDiv' key={index}>
      //     {item.name} 
      //   </div>
      // ));
  
      return (
        <div id="sideCard">
          <div>
            <div id="sideCardImg">
              <img src={picture} />
            </div>
            <div id="sideCardAuthor">
              {this.props.author}
            </div>
            <div id="sideCardAuthorInTamil">
              {this.props.authorInTamil}
            </div>
          </div>
          <div id="sideCardLocation">
            <div>
              <img src={locIcon} />
              {this.props.curLoc}
            </div>
            <div>
              <img src={homeIcon} />
              {this.props.hometown}
            </div>
          </div>
          <div id="sideCardSocials">
            <div>
              <a href={`mailto:${this.props.email}$`} target="_blank">
                <img src={emailIcon} />
              </a>
            </div>
            <div>
              <a href={this.props.linkedin} target="_blank">
                <img src={linkedInIcon} />
              </a>
            </div>
            <div>
              <a href={this.props.github} target="_blank">
                <img src={githubIcon} />
              </a>
            </div>
          </div>
        </div>
      )
    }
  }

  export default SideCard;