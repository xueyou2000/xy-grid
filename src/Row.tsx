import React from "react";
import classNames from "classnames";
import { useMedia } from "utils-hooks";
import { RowProps, BreakpointMap, Breakpoint } from "./interface";
import RowContext from "./RowContext";

export const responsiveArray: Breakpoint[] = ["xxl", "xl", "lg", "md", "sm", "xs"];
const responsiveMap: BreakpointMap = {
    xs: "(max-width: 575px)",
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1600px)"
};

function getGutter(gutter: number | Partial<Record<Breakpoint, number>>, currentBreakpoint: Breakpoint): number | undefined {
    if (typeof gutter === "object") {
        for (let i = 0; i < responsiveArray.length; ++i) {
            const breakpoint: Breakpoint = responsiveArray[i];
            if (currentBreakpoint === breakpoint && gutter[currentBreakpoint] !== undefined) {
                return gutter[currentBreakpoint];
            }
        }
    } else {
        return gutter;
    }
}

export function Row(props: RowProps) {
    const { className, type, justify = "start", align = "top", children } = props;
    // 获取当前媒体查询 Breakpoint
    const breakpoint = useMedia(Object.values(responsiveMap), Object.keys(responsiveMap), null);
    const gutter = getGutter(props.gutter, breakpoint as Breakpoint);
    const isFlex = type === "flex";
    const prefixCls = isFlex ? "ant-row-flex" : "ant-row";
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-${justify}`]: isFlex && justify,
        [`${prefixCls}-${align}`]: isFlex && align
    });
    const half = gutter / -2;
    const style: React.CSSProperties = gutter > 0 ? { ...props.style, marginLeft: half, marginRight: half } : props.style;

    return (
        <RowContext.Provider value={{ gutter }}>
            <div className={classString} style={style}>
                {children}
            </div>
        </RowContext.Provider>
    );
}

export default React.memo(Row);
