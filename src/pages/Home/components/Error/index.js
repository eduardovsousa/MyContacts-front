import PropTypes from 'prop-types';

import sad from '../../../../assets/images/sad.svg';
import { Container } from './styles';

import Button from '../../../../components/Button';

export default function Error({ onTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="Sad" />
      <div className="details">
        <strong>Ocorreu um erro ao obter os seus contatos!</strong>
        <Button type="button" onClick={onTryAgain}>
          Tentar novamente
        </Button>
      </div>
    </Container>
  );
}

Error.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};
