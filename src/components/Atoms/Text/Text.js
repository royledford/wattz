import PropTypes from 'prop-types'

import cx from 'classnames'

import styles from './Text.module.css'

Text.propTypes = {
  /** Can display as a p or span */
  as: PropTypes.oneOf(['p', 'span']),

  /** Content  */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,

  /** Size for the Text */
  size: PropTypes.oneOf(['small']),

  /** Color for the Text */
  color: PropTypes.oneOf(['black', 'white']),

  /** Can override the default weight */
  weight: PropTypes.oneOf(['regular', 'medium', 'bold']),

  /** Color can be inverted */
}

export default function Text({
  as = 'span',
  children,
  size = 'small',
  color = 'black',
  weight = 'regular',
  inverted = false,
  className = '',
  style = {},
  ...rest
}) {
  const colorClass = styles[color]
  const weightOverride = weight ? styles[`weight_${weight}`] : null
  const ElementType = as

  return (
    <ElementType
      className={cx(styles.base, styles[size], colorClass, { [styles.inverted]: inverted }, weightOverride, className)}
      style={style}
      {...rest}>
      {children}
    </ElementType>
  )
}
