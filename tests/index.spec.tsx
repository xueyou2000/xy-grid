import React from "react";
import { render } from "@testing-library/react";
import { Row, Col } from "../src";

// TODO: 有空书写测试

describe("Grid", () => {
    test("render", () => {
        const mockMatchMedia = jest
            // 默认
            .fn(() => ({ matches: false, addListener: jest.fn(), removeListener: jest.fn() }))
            // 第一次结果
            .mockImplementationOnce(() => ({ matches: true, addListener: jest.fn(), removeListener: jest.fn() }))
            // 第二次结果
            .mockImplementationOnce(() => ({ matches: false, addListener: jest.fn(), removeListener: jest.fn() }));

        (global as any).matchMedia = mockMatchMedia;
        const wrapper = render(
            <Row>
                <Col span={4}>占据4/24</Col>
            </Row>,
        );
        const col = wrapper.getByText("占据4/24");
        expect(col.classList.contains("ant-col-4")).toBeTruthy();
    });
});
