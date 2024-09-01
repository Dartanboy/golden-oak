import PropTypes from 'prop-types';

function NavLink(props) {
  return (
      <li><a href={props.link}>{props.children}</a></li>
  );
}

export default NavLink;

NavLink.propTypes = {
    children: PropTypes.node,
    link: PropTypes.string
}