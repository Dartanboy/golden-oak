import PropTypes from 'prop-types';

function Degree(props) {
    const degreeName = props.degreeName ?? 'Degree Name';

    return (
        <div className='degree border-gray-400 border border-solid rounded p-2'>
            <h3 className='text-xl'>{degreeName}</h3>
            {props.children}
        </div>
    );
}

export default Degree;

Degree.propTypes = {
    children: PropTypes.node,
    degreeName: PropTypes.string
}