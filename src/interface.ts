/**
 * xs 小于 576px
 */
/**
 * sm 大于等于 576px
 */
/**
 * md 大于等于 768px
 */
/**
 * lg 大于等于 992px
 */
/**
 * xl 大于等于 1200px
 */
/**
 * xxl 大于等于 1600px
 */
export type Breakpoint = "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
export type BreakpointMap = Partial<Record<Breakpoint, string>>;

/**
 * 列布局配置
 */
export interface ColConfig {
    /**
     * 栅格占位格数
     * @description 为 0 时相当于 display: none
     */
    span?: number;
    /**
     * 栅格向左移动格数
     */
    pull?: number;
    /**
     * 栅格向右移动格数
     */
    push?: number;
    /**
     * 栅格左侧的间隔格数，间隔内不可以有栅格
     */
    offset?: number;
    /**
     * flex 布局模式下得栅格顺序
     */
    order?: number;
}

/**
 * 响应栅格配置
 */
export type MediaConfig = Partial<Record<Breakpoint, number | ColConfig>>;

export interface RowProps {
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * children
     */
    children?: React.ReactNode;
    /**
     * 布局模式
     */
    type?: "flex";
    /**
     * flex 布局下的水平排列方式
     * @description 默认 start
     */
    justify?: "start" | "end" | "center" | "space-around" | "space-between";
    /**
     * flex布局下得垂直对齐方式
     * @description 默认 top
     */
    align?: "top" | "middle" | "bottom";
    /**
     * 栅格间隔
     */
    gutter?: number | Partial<Record<Breakpoint, number>>;
}

export interface ColProps extends ColConfig, MediaConfig {
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * children
     */
    children?: React.ReactNode;
}

export interface RowContextState {
    gutter?: number;
}
