import PropTypes from 'prop-types';

export default function toast({ type, text }) {
  const event = new CustomEvent('addtoast', {
    detail: {
      type,
      text,
    },
  });

  document.dispatchEvent(event);
}

toast.propTypes = {
  type: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
