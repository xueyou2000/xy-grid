import React from "react";
import { Row, Col } from "../src";
import "./index.scss";

export default function() {
    return (
        <div className="demo">
            <Row>
                <Col span={8}>col-8</Col>
                <Col span={8} offset={8}>
                    col-8
                </Col>
            </Row>
            <Row>
                <Col span={6} offset={6}>
                    col-6 col-offset-6
                </Col>
                <Col span={6} offset={6}>
                    col-6 col-offset-6
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    col-12 col-offset-6
                </Col>
            </Row>
        </div>
    );
}
