import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Tooltip as ReactTippy } from 'react-tippy'

export default class Tooltip extends PureComponent {
  static defaultProps = {
    arrow: true,
    children: null,
    containerClassName: '',
    html: null,
    interactive: undefined,
    onHidden: null,
    position: 'left',
    offset: 0,
    distance: 10,
    size: 'small',
    title: null,
    trigger: 'mouseenter',
    wrapperClassName: undefined,
  }

  static propTypes = {
    arrow: PropTypes.bool,
    children: PropTypes.node,
    containerClassName: PropTypes.string,
    disabled: PropTypes.bool,
    html: PropTypes.node,
    interactive: PropTypes.bool,
    offset: PropTypes.number,
    distance: PropTypes.number,
    onHidden: PropTypes.func,
    position: PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left',
    ]),
    size: PropTypes.oneOf([
      'small', 'regular', 'big',
    ]),
    title: PropTypes.string,
    trigger: PropTypes.any,
    wrapperClassName: PropTypes.string,
    style: PropTypes.object,
  }

  render () {
    const {
      arrow,
      children,
      containerClassName,
      disabled,
      position,
      html,
      interactive,
      size,
      title,
      trigger,
      onHidden,
      offset,
      distance,
      wrapperClassName,
      style,
    } = this.props

    if (!title && !html) {
      return (
        <div className={wrapperClassName}>
          {children}
        </div>
      )
    }

    return (
      <div className={wrapperClassName}>
        <ReactTippy
          arrow={arrow}
          className={containerClassName}
          disabled={disabled}
          hideOnClick={false}
          html={html}
          interactive={interactive}
          onHidden={onHidden}
          position={position}
          size={size}
          offset={offset}
          distance={distance}
          style={style}
          title={title}
          trigger={trigger}
        >
          {children}
        </ReactTippy>
      </div>
    )
  }
}
