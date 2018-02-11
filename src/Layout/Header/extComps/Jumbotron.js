import React, { Component } from 'react';
import { matchPath } from 'react-router-dom'
import { Jumbotron, Container, Row, Col } from 'reactstrap'
import PhoneModel from './phoneModel'
import PhoneModelBg from '../../../assets/bg-header-slider.png'
import FormSignUp from './FormSignup'

const styles = {
    titleJumbo: {
        color: 'white',
        fontWeight: '400'
    },
    descJumbo: {
        color: 'white'
    },
    rowJumbo: {
        marginTop: 20
    }
}
export default class TopUpperJumboTron extends Component {
    constructor(props) {
        super(props)
        this.state = {
            homeCounter: false,
            matchingPath: matchPath(props.location.pathname, {
                path: '/'
            }),
            winWidth: window.innerWidth
        }
        this.windowSync = this.windowSync.bind(this)
    }


    pageIsExact() {
        const { location } = this.props
        const { matchingPath } = this.state
        const MatchPath = matchingPath
        if (MatchPath.path === location.pathname) {
            require('./index.css')
            this.setState({
                homeCounter: !this.state.homeCounter
            })
        } else {
            require('./index.css')
        }
    }
    windowSync() {
        const { winWidth } = this.state
        this.setState({
            winWidth: window.innerWidth
        })
    }
    componentDidMount() {
        this.pageIsExact()
        window.addEventListener('resize', this.windowSync)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.windowSync)
    }

    render() {
        const { homeCounter, matchingPath, winWidth } = this.state
        const { location } = this.props
        return (
            <div>
                <Jumbotron className={homeCounter ? 'homeLayout' : 'signUpLayout'} fluid>
                    <Container fluid>
                        {
                            this.props.children
                        }
                        <Row style={styles.rowJumbo}>
                            <Col className="display-4 justify-content-end" sm='6' lg="6" md="auto" style={styles.titleJumbo}>Meet BestApp<br />
                                The new world for chat</Col>
                        </Row>
                        <Row style={styles.rowJumbo}>
                            <Col className="lead" sm='6' lg="6" md="6" style={styles.descJumbo}>Aenean ac libero et henderit vivamus facilisis velit nec nisi pretium blandit. Nunc consequat vehicula efficitur fusce nec lectus ac purus hendrerit faucibus augue in risus rutrum pellentesque</Col>
                            {
                                matchingPath.path === location.pathname ? (winWidth >= 726 ?

                                    <Row>
                                        <Col md={{ size: 8, order: -5, offset: 2 }} style={{
                                            maxWidth: '180px',
                                            maxHeight: '50px'
                                        }}>
                                            <img src={PhoneModelBg} />
                                        </Col>
                                        <Col md={{ size: 8, order: -2, offset: 3 }}>
                                            <PhoneModel />
                                        </Col>
                                    </Row> : null) :
                                    <Row>
                                    <Col md={{size:9, order:2, offset: 7}}>
                                        <FormSignUp />
                                    </Col>
                                    </Row>
                            }
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}