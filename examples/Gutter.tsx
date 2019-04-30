import React from "react";
import { Row, Col } from "../src";
import "../src/assets/index";
import "./index.scss";

export default function() {
    return (
        <div className="demo2">
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
            </Row>
        </div>
    );
}
