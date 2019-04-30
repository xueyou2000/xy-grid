import React from "react";
import { Row, Col } from "../src";
import "../src/assets/index";
import "./index.scss";

export default function() {
    return (
        <div className="demo">
            <Row type="flex" justify="start">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
            </Row>

            <p>sub-element align center</p>
            <Row type="flex" justify="center">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
            </Row>

            <p>sub-element align right</p>
            <Row type="flex" justify="end">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
            </Row>

            <p>sub-element monospaced arrangement</p>
            <Row type="flex" justify="space-between">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
            </Row>

            <p>sub-element align full</p>
            <Row type="flex" justify="space-around">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
            </Row>
        </div>
    );
}
