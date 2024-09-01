import PropTypes from 'prop-types';

function GradientContainer(props) {
  return (
      <div className={`${props.gradient} from-gray-700 to-gray-900 min-h-[50vh]`}>
          {props.children}
      </div>
  );
}

export default GradientContainer;

GradientContainer.propTypes = {
    children: PropTypes.node,
    gradient: PropTypes.string
}