import React, {Component} from "react";

class MainCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        paperInFocus: 1, 
        numPapers: 1,
      };
      this.handlePaperNaviClick = this.handlePaperNaviClick.bind(this);
    }

    componentDidMount() {
      let self = this;
      self.setState({
        numPapers: self.props.paperTakeaways.length
      })
      var mainCardPaperTakeawaysBoxes = document.getElementsByClassName("mainCardPaperTakeawaysBox");
      if(mainCardPaperTakeawaysBoxes) {
        mainCardPaperTakeawaysBoxes = [...mainCardPaperTakeawaysBoxes]
        mainCardPaperTakeawaysBoxes.forEach(function(box, ind) {
          if(ind != 0) {
            if(ind != self.state.paperInFocus) {
              box.style.display="none";
            } else {
              box.style.display="grid";
            }
          }
        })
      }
      var authors = document.getElementsByClassName("mainCardPublicationsBoxAuthorsInnerDiv");
      if(authors) {
        authors = [...authors]
        authors.forEach(function(box, ind) {
          if(box.textContent == self.props.author) {
            box.style.color = "orange";
            box.style.borderBottom = "1px solid orange";
          }
        })
      }
    }

    componentDidUpdate() {
      let self = this;
      var mainCardPaperTakeawaysBoxes = document.getElementsByClassName("mainCardPaperTakeawaysBox");
      if(mainCardPaperTakeawaysBoxes) {
        mainCardPaperTakeawaysBoxes = [...mainCardPaperTakeawaysBoxes]
        mainCardPaperTakeawaysBoxes.forEach(function(box, ind) {
          if(ind != 0) {
            if(ind != self.state.paperInFocus) {
              box.style.display="none";
            } else {
              box.style.display="grid";
            }
          }
        })
      }
    }

    handlePaperNaviClick = (dir) => {
      if(dir==-1) {
        if(this.state.paperInFocus > 1) {
          var oldPaperInFocus = this.state.paperInFocus
          this.setState({
            paperInFocus: oldPaperInFocus-1,
          })
        } else {
          var oldPaperInFocus = this.state.numPapers
          this.setState({
            paperInFocus: oldPaperInFocus,
          })
        }
      } else {
        if(this.state.paperInFocus != this.state.numPapers) {
          var oldPaperInFocus = this.state.paperInFocus
          this.setState({
            paperInFocus: oldPaperInFocus+1,
          })
        } else {
          this.setState({
            paperInFocus: 1,
          })
        }
      }
    }
  
    render() {
      const eduHistory = this.props.eduHistory.map((item, index) => (
        <div className="eduHistoryItem">
            <div>
                {item.name}
            </div>
            <div>
                {item.program}
            </div>
            <div>
                Advisor: {item.advisor}
            </div>
            <div>
                {item.start}-{item.end}
            </div>
        </div>
      ))

      const expHistory = this.props.experience.map((item, index) => (
        <div className="eduHistoryItem" key={index}>
            <div>
                {item.title}
            </div>
            <div>
                {item.desc}
            </div>
            <div>
                {item.org}
            </div>
            <div>
                {item.supervisor}
            </div>
            <div>
                {item.start}-{item.end}
            </div>
        </div>
      ))

      const githubRepos = this.props.githubRepos.map((item, index) => (
        <div className="mainCardGithubBox" key={index}>
            <div>
                <a href={item.link} target="_blank">
                    {item.title}
                </a>
            </div>
            <div>
                {item.desc}
            </div>
        </div>
      ))

      const publications = this.props.publications.map((item, index) => (
        <div className="mainCardPublicationsBox" key={index}>
            <div className="mainCardPublicationsBoxTitleDiv">
                <a href={item.link} target="_blank">
                    {item.title}
                </a>
            </div>
            <div className="mainCardPublicationsBoxAuthorsDiv">
                {item.authors.map((author, authInd) => (
                  <div className="mainCardPublicationsBoxAuthorsInnerDiv">
                    {author}
                  </div>
                ))}
            </div>
            <div className="mainCardPublicationsBoxConfDiv">
                {item.conf}
            </div>
            <div className="mainCardPublicationsBoxIDDiv">
                {item.id}
            </div>
        </div>
      ))

      const researchInterests = this.props.researchInterests.map((item, index) => (
        <div className="mainCardResearchInterestsBox" key={index}>
            <div className="mainCardResearchInterestsBoxDiv">
                {item.title}
            </div>
            <div className="mainCardResearchInterestsBoxDiv">
                {item.desc}
            </div>
        </div>
      ))

      const paperTakeaways = this.props.paperTakeaways.map((item, index) => { 
        return (
          <div className="mainCardPaperTakeawaysBox" key={index}>
              <div className="mainCardPaperTakeawaysBoxDiv">
                <div className="mainCardPaperTakeawaysBoxDivTopInnerNavBtn" id="mainCardPaperTakeawaysBoxDivTopInnerPREV" onClick={() => this.handlePaperNaviClick(-1)}>
                  &lt; PREV
                </div>
                <div className="mainCardPaperTakeawaysBoxDivTopInner">
                  <div className="mainCardPaperTakeawaysBoxDivTitle">
                    <a href={item.link} target="_blank">
                      {item.title}
                    </a>
                  </div>
                  <div className="mainCardPaperTakeawaysBoxDivAuthor">
                    {item.authors}
                  </div>
                </div>
                <div className="mainCardPaperTakeawaysBoxDivTopInnerNavBtn" id="mainCardPaperTakeawaysBoxDivTopInnerNEXT" onClick={() => this.handlePaperNaviClick(1)}> 
                  NEXT &gt;
                </div>
              </div>
              <div className="mainCardPaperTakeawaysBoxDiv">
                  {
                    item.desc.map((descItem, descInd) => {
                      return (
                        <div className="mainCardPaperTakeawaysBoxDivInner">
                          <div className="mainCardPaperTakeawaysBoxDivInnerDiv">
                            {descItem.heading}
                          </div>
                          <div className="mainCardPaperTakeawaysBoxDivInnerDiv">
                            <ul>
                              {
                                descItem.content.map((contItem, contInd) => {
                                  return(
                                    <li>
                                      {contItem}
                                    </li>
                                  );
                                })
                              }
                            </ul>
                          </div>
                        </div>
                      );
                    })
                  }
              </div>
          </div>
        );
      })

      return (
        <div id="mainCard">
          <div id="mainCardCredo">
            <div>
              {this.props.credo}/
            </div>
            <div>
              /{this.props.credoInTamil}
            </div>
          </div>
          <div id="mainCardDesc">
            {this.props.description}
          </div>
          <div id="mainCardPublications">
            <div className="mainCardPublication">
                <h4>
                    Publications
                </h4>
            </div>
            {publications}
          </div>
          <div id="mainCardGithub">
            <div className="mainCardGithubBox">
                <h4>
                    Some Github Repositories
                </h4>
            </div>
            {githubRepos}
          </div>
          <div id="mainCardResearchInterests">
            <div className="mainCardResearchInterestsBox">
                <h4>
                    Research Interests
                </h4>
            </div>
            {researchInterests}
          </div>
          <div id="mainCardPaperTakeaways">
            <div className="mainCardPaperTakeawaysBox">
                <h4>
                    What Have I Been Reading?
                </h4>
            </div>
            {paperTakeaways}
          </div>
          <div id="history">
            <div className="timeline">
                <h4>
                    Educational History
                </h4>
                {eduHistory}
            </div>
            <div className="timeline">
                <h4>
                    Experiences
                </h4>
                {expHistory}
            </div>
          </div>
        </div>
      )
    }
  }

  export default MainCard;