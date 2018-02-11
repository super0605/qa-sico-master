import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap'


const styles = {
    btnLM: {
        borderRadius: 20,
        backgroundColor: '#0277bd',
        fontWeight: 'bold',
        fontSize: '12px',
        color: 'white',
        cursor: 'pointer',
        margin: '12px 20px',
        padding: '9px 10px',
        width: '150px',
    },
    btnDownload: {
        borderRadius: 20,
        fontWeight: 'bold',
        fontSize: '12px',
        color: 'blue',
        cursor: 'pointer',
        margin: '12px 20px',
        padding: '9px 10px',
        borderColor: 'blue',
        width: '150px',
    }
}

export default class Home extends Component {
    render() {
        return (
            <Row>
                <Col md="4">
                    <Button outline style={styles.btnLM}>LEARN MORE</Button>
                    <Button outline style={styles.btnDownload}>DOWNLOAD APP</Button>
                </Col>
                <Col md="4">
                
                </Col>
            </Row>
        )
    }
}