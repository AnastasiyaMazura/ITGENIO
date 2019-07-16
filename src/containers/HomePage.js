import React, { Component } from 'react';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
} from 'reactstrap';
import itgenic from '../images/04.png';
import PropTypes from 'prop-types';


class HomePage extends Component {
    render() {

    return (
      <div>
        <Row>
          <Col xs="4">
            <img
              width="60%"
              src={itgenic}
              style={{ maxHeight: '450px' }}
              alt="Itgenic"
            />
          </Col>
          <Col>
            <Translate value="intro.text" />
          </Col>      
        </Row>
        <Row >
          <Col xs="4">
            <Button
                block
                tag={Link}
                size="lg"
                to="/html/basic-test"
                className="lead mt-3"
            >
                <Translate value="intro.startHTML"/>
            </Button>
          </Col>
          <Col xs="4">
            <Button
                block
                tag={Link}
                size="lg"
                to="/html/basic-test"
                className="lead mt-3"
            >
                <Translate value="intro.startCSS"/>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

HomePage.propTypes = {
  translations: PropTypes.object,
};

function mapStateToProps(state) {
  const { i18n } = state;
  return {
    translations: i18n.translations[i18n.locale],
  };
}

export default connect(mapStateToProps)(HomePage);
