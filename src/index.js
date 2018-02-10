import './styles/styles.scss';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import Nav from './Nav'
import About from './About';

class Portfolio extends Component {
    render() {
        return(
            <Grid>
                <Nav />
                <Row>
                    <Col xs={12} className="section">
                        <About />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

render(<Portfolio />, document.getElementById('root'));