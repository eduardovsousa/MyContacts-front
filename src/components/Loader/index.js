import PropTypes from 'prop-types';

import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';
import Spinner from '../Spinner';
import { Overlay } from './styles';

export default function Loader({ isLoading }) {
  const { animatedElementRef, shouldRender } = useAnimatedUnmount(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <Overlay $isLeaving={!isLoading} ref={animatedElementRef}>
      <Spinner size={90} />
    </Overlay>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
