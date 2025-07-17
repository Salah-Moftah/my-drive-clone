import PropTypes from 'prop-types';

const HoverCircleBackground = ({ children, color = 'gray', style }) => {
  return (
    <div className={`hover-circle-background ${color}`} style={style}>
      {children}
    </div>
  )
};

HoverCircleBackground.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  style: PropTypes.string,
}

export default HoverCircleBackground;
