/* eslint-disable react/jsx-one-expression-per-line */
import { Container } from './styles';

import emptyBox from '../../../../assets/images/icons/empty-box.svg';

export default function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="Empty box" />
      <p>
        Você ainda não tem nenhum contato cadastrado!
        Clique no botão <strong>&quot;Novo contato&quot;</strong>
        à cima para cadastrar o seu primeiro!
      </p>
    </Container>
  );
}
