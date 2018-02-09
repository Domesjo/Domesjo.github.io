import './styles/styles.scss';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid, Row } from 'react-bootstrap';

import Nav from './nav'

class Portfolio extends Component {
    render() {
        return(
            <Grid>
                <Nav />
                <Row>
                    Under construction
                </Row>
            </Grid>
        )
    }
}

render(<Portfolio />, document.getElementById('root'));