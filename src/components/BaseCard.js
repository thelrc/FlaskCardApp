import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CardPrompt from './CardPrompt';
import ControlBar from './ControlBar';
import AnswerOptions from './AnswerOptions';

class BaseCard extends Component {

  constructor(props) {
    super(props);
        
        this.state = 
        {
            correct: false,
            wrong: false,
            checker: 'No answer selected',
            baseState: false,
            a1: false,
            a2: false,
            a3: false,
            a4: false,
            
            cards: [
            {
                question: 'http://www.ikea.com/PIAimages/0448718_PE598345_S5.JPG',
                answer1: 'Table',
                answer2: 'Bed',
                answer3: 'Door',
                answer4: 'Chair',
                key: 'Bed'
            },
            {
                question: 'https://cdn.pixabay.com/photo/2013/07/12/14/11/workstation-147953_960_720.png',
                answer1: 'Fan',
                answer2: 'Calculator',
                answer3: 'Bracelet',
                answer4: 'Computer',
                key: 'Computer',
            },
            {
                question: 'https://fthmb.tqn.com/IGeUu5uA5QFjYrzQ_LRAZxUBdx0=/1000x819/filters:fill(auto,1)/about/dell-ultrasharp-u2412m-lcd-monitor-56a6f9cc3df78cf772913a70.jpg',
                answer1: 'Desk',
                answer2: 'Couch',
                answer3: 'Monitor',
                answer4: 'Lotion',
                key: 'Monitor',
            },
            {
              question: 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg',
                answer1: 'Cat',
                answer2: 'Apple',
                answer3: 'Mouse',
                answer4: 'Water',
                key: 'Cat',
            },
            {
              question: 'http://web.mit.edu/jpnet/ji/gifs/200x200/2748.gif',
                answer1: 'Rising Sun',
                answer2: 'Street',
                answer3: 'Fire',
                answer4: 'Older Sister',
                key: 'Older Sister',
            }

            ]
        };
    }

  setNeutral = () => {
    this.setState({ correct: false, wrong: false, checker: 'No answer selected', 
    a1: false, a2: false, a3: false, a4: false});
  }
  
  setCorrect = () => {
    this.setState({ correct: true, wrong: false, checker: 'CORRECT!' });
  }
  
  setWrong = () => {
    this.setState({ correct: false, wrong: true, checker: 'INCORRECT!' });
  }
   
  submitAnswer = () => {
    this.setState({ correct: false, wrong: false, checker: 'No answer selected'});
    this.setNeutral();
    
    for( var i = 0; i < this.state.cards.length - 1; i++)
    {
        let temp = this.state.cards[i]
        this.setState(this.state.cards[i] = this.state.cards[i + 1]);
        this.setState(this.state.cards[i + 1] = temp);
    }
}

  answerOne = (props) => {
    
    if(this.state.a1 == true)
    {
      this.setState({a1: false, a2: false, a3: false, a4: false});
      console.log('one');
      this.setNeutral();
    }
    else
    {
      this.setState({a1: true, a2: false, a3: false, a4: false});
      console.log('one');
      if(this.state.cards[0].answer1 == this.state.cards[0].key)
      {
        this.setCorrect();
      }
      else
      {
        this.setWrong();
      }
    }
  }
  
  answerTwo = (props) => {
    if(this.state.a2 == true)
    {
      this.setState({a1: false, a2: false, a3: false, a4: false});
      console.log('two');
      this.setNeutral();
    }
    else
    {
      this.setState({a1: false, a2: true, a3: false, a4: false});
      console.log('two');
      if(this.state.cards[0].answer2 == this.state.cards[0].key)
      {
        this.setCorrect();
      }
      else
      {
        this.setWrong();
      }
    }
  }
  
  answerThree = (props) => {
    if(this.state.a3 == true)
    {
      this.setState({a1: false, a2: false, a3: false, a4: false});
      console.log('three');
      this.setNeutral();
    }
    else
    {
      this.setState({a1: false, a2: false, a3: true, a4: false});
      console.log('three');
      if(this.state.cards[0].answer3 == this.state.cards[0].key)
      {
        this.setCorrect();
      }
      else
      {
        this.setWrong();
      }
    }
  }
  
  answerFour = (props) => {
    if(this.state.a4 == true)
    {
      this.setState({a1: false, a2: false, a3: false, a4: false});
      console.log('four');
      this.setNeutral();
    }
    else
    {
      this.setState({a1: false, a2: false, a3: false, a4: true});
      console.log('four');
      if(this.state.cards[0].answer4 == this.state.cards[0].key)
      {
        this.setCorrect();
      }
      else
      {
        this.setWrong();
      }
    }
  }

  render(props) {
    return (
      <ScrollView contentContainerStyle={styles.LayoutStyle}>
          <CardPrompt src={this.state.cards[0].question} /> 
          <ControlBar submit={this.submitAnswer} navToggle={this.props.navToggle}
                      correct={this.state.correct} wrong={this.state.wrong} 
                      checker={this.state.checker} />
          <AnswerOptions deck={this.state.cards} setNeutral={this.setNeutral}
                         setCorrect={this.setCorrect} setWrong={this.setWrong}
                         a1={this.state.a1} a2={this.state.a2}
                         a3={this.state.a3} a4={this.state.a4} 
                         answerOne={this.answerOne} answerTwo={this.answerTwo}
                         answerThree={this.answerThree} answerFour={this.answerFour} />
      </ScrollView>  
    );
  }
}

const styles = {
  LayoutStyle: {
    backgroundColor: '#355095',
    flex: 1
  }
};


export default BaseCard;
