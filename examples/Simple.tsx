import React from "react";
import { Row, Col } from "../src";
import "./index.scss";

export default function() {
    return (
        <div>
            <h1>24栅格</h1>
            <div className="demo">
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>
            </div>

            <h1>区块间隔</h1>
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

            <h1>左右偏移</h1>
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

            <h1>栅格排序</h1>
            <div className="demo">
                <Row>
                    <Col span={18} push={6}>
                        col-18 col-push-6
                    </Col>
                    <Col span={6} pull={18}>
                        col-6 col-pull-18
                    </Col>
                </Row>
            </div>

            <h1>Flex 布局</h1>
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

            <h1>响应式布局</h1>
            <div className="demo">
                <Row>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                        Col
                    </Col>
                    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                        Col
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                        Col
                    </Col>
                </Row>
            </div>
        </div>
    );
}
