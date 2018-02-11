import './styles/styles.scss';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import Nav from './Nav'
import About from './About';

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            active: "about"
        };
        this.setActive = this.setActive.bind(this);
    }

    setActive(state) {
        this.setState({
            active: state
        });
    }

    render() {
        const { active } = this.state;
        return(
            <Grid>
                <Nav setActive={this.setActive} />
                <Row>
                    <Col xs={12} className="section">
                        <div className="section__topbar">
                            samdomesjö@sams-portfolio: {active}
                        </div>
                        { active === 'about' ?
                            <About />
                        :
                            null
                        }
                    </Col>
                </Row>
            </Grid>
        );
    }
}

render(<Portfolio />, document.getElementById('root'));