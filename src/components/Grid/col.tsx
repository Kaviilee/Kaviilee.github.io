import * as React from 'react';
import classnames from 'classnames';

import RowContext from './RowContext';

// import styles from './index.less';

type ColSpanType = number | string;

type FlexType = number | 'none' | 'auto' | string;

export interface ColSize {
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
  xs?: ColSpanType | ColSize;
  sm?: ColSpanType | ColSize;
  md?: ColSpanType | ColSize;
  lg?: ColSpanType | ColSize;
  xl?: ColSpanType | ColSize;
  xxl?: ColSpanType | ColSize;
}

const parseFlex = (flex: FlexType): string => {
  if (typeof flex === 'number') {
    return  `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`
  }

  return flex;
}

export const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const renderCol = () => {
    const { span, order, offset, pull, push, className, children, flex, style, ...others } = props;

    // TODO css前缀问题
    // const prefix = 'components-Grid-index__';
    const prefix = '';

    let sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
      let sizeProps: ColSize = {};
      const propSize = (props as any)[size];

      if (typeof propSize === 'number') {
        sizeProps.span = propSize;
      } else if (typeof propSize === 'object') {
        sizeProps = propSize || {};
      }

      delete (others as any)[size];

      sizeClassObj = {
        ...sizeClassObj,
        [`${prefix}col-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
        [`${prefix}col-${size}-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
        [`${prefix}col-${size}-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
        [`${prefix}col-${size}-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
        [`${prefix}col-${size}-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      };
    });

    const classes = classnames(
      'col', {
        [`${prefix}col-${span}`]: span !== undefined,
        [`${prefix}col-order-${order}`]: order,
        [`${prefix}col-offset-${offset}`]: offset,
        [`${prefix}col-push-${push}`]: push,
        [`${prefix}col-pull-${pull}`]: pull,
      },
      className,
      sizeClassObj
    );

    return (
      <RowContext.Consumer>
        {({ gutter }) => {
          let mergedStyle: React.CSSProperties = { ...style };
          if (gutter) {
            mergedStyle = {
              ...(gutter[0]! > 0
                ? {
                    paddingLeft: gutter[0]! / 2,
                    paddingRight: gutter[0]! / 2,
                  }
                : {}),
              ...(gutter[1]! > 0
                ? {
                    paddingTop: gutter[1]! / 2,
                    paddingBottom: gutter[1]! / 2,
                  }
                : {}),
              ...mergedStyle,
            };
          }
          if (flex) {
            mergedStyle.flex = parseFlex(flex);
          }

          return (
            <div {...others} style={mergedStyle} className={classes} ref={ref}>
              {children}
            </div>
          );
        }}
      </RowContext.Consumer>
    );
  };

  return (
    <>{ renderCol() }</>
  )
});

Col.displayName = 'Col';

// export default CSSModules(Col, styles)
export default Col;
