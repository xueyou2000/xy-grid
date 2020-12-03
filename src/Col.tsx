import React, { useContext } from "react";
import classNames from "classnames";
import { ColProps, ColConfig } from "./interface";
import RowContext from "./RowContext";
import { responsiveArray } from "./Row";

export function Col(props: ColProps) {
    const { className, span, pull, push, offset, order, children, ...others } = props;
    const context = useContext(RowContext);
    const prefixCls = "ant-col";
    let sizeClassObj = {};
    responsiveArray.forEach((size) => {
        let sizeProps: ColConfig = {};
        if (typeof props[size] === "number") {
            sizeProps.span = props[size] as number;
        } else if (typeof props[size] === "object") {
            sizeProps = (props[size] as ColConfig) || {};
        }

        delete others[size];

        sizeClassObj = {
            ...sizeClassObj,
            [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
            [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
            [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
            [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
            [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0
        };
    });
    const classString = classNames(
        prefixCls,
        className,
        {
            [`${prefixCls}-${span}`]: span !== undefined,
            [`${prefixCls}-order-${order}`]: order,
            [`${prefixCls}-offset-${offset}`]: offset,
            [`${prefixCls}-push-${push}`]: push,
            [`${prefixCls}-pull-${pull}`]: pull
        },
        sizeClassObj
    );
    const style = context && context.gutter ? { paddingLeft: context.gutter / 2, paddingRight: context.gutter / 2 } : props.style;

    return (
        <div className={classString} style={style}>
            {children}
        </div>
    );
}

export default React.memo(Col);
