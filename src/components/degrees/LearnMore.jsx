import PropTypes from 'prop-types';
import Floater from 'react-floater';

function LearnMore(props) {
    return (
        <p className='mt-3'>
            <Floater
                className="cursor-pointer"
                content={props.children}
                placement="center"
                showCloseButton={true}
                styles={ {
                    floater: {
                        maxWidth: '500'
                    }
                } }
            >
                <span className='bg-teal-300 rounded-lg py-1 px-2 text-black font-medium !cursor-pointer'>
                    Learn More
                </span>
            </Floater>
        </p>
    );
}

export default LearnMore;

LearnMore.propTypes = {
    children: PropTypes.node
}