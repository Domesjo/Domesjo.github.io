import './styles/styles.scss';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import Nav from './Nav'
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            active: "contact"
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
                            <svg className="section__topbar__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M15.854 12.854L11 8l4.854-4.854a.503.503 0 0 0 0-.707L13.561.146a.499.499 0 0 0-.707 0L8 5 3.146.146a.5.5 0 0 0-.707 0L.146 2.439a.499.499 0 0 0 0 .707L5 8 .146 12.854a.5.5 0 0 0 0 .707l2.293 2.293a.499.499 0 0 0 .707 0L8 11l4.854 4.854a.5.5 0 0 0 .707 0l2.293-2.293a.499.499 0 0 0 0-.707z"/></svg>
                            <svg className="section__topbar__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M0 6.5v3a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5z"/></svg>
                            <svg className="section__topbar__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M16 0v6.5L13.5 4l-3 3L9 5.5l3-3L9.5 0zM7 10.5l-3 3L6.5 16H0V9.5L2.5 12l3-3z"/></svg>
                            samdomesjö@sams-portfolio:{ active }
                        </div>
                        { active === 'about' ?
                            <About />
                        :
                            null
                        }
                        { active === 'skills' ?
                            <Skills />
                        :
                            null

                        }
                        { active === "contact" ?
                            <Contact />
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