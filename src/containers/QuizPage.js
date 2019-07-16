import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row, Button } from 'reactstrap';
import { I18n } from 'react-redux-i18n';
import Quiz from 'react-quiz-component';
import { quizGenerator } from '../helpers/quizGenerator';

class QuizPage extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <Row>
          <Col xs='2'>
            <a rel="noopener noreferrer" style={{textDecoration: 'none', color: 'white'}} href='https://drive.google.com/drive/folders/1t3hz_GJvLm8PJ347kEiG6Tjb44FvWY22' target="_blank">
              <Button
                  block                
                  size="lg"                
                  className="lead mt-3"
              >
                {I18n.t('common.theory')}
              </Button>
            </a>
          </Col>
        </Row>
        <Row style={{display: "flex", justifyContent: 'center'}}>          
            <Quiz quiz={quizGenerator(match.path)} shuffle={true} />          
        </Row>          
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { i18n } = state;
  return {
    translations: i18n.translations[i18n.locale],
  };
}

QuizPage.propTypes = {
  translations: PropTypes.object,
};

export default connect(mapStateToProps)(QuizPage);