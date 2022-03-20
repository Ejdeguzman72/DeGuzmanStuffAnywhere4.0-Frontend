import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const SocialMediaTabs = () => {
    return (
        <div>
            <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#social-media-feed" eventKey="first" id="tabs">Social Media</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default SocialMediaTabs;