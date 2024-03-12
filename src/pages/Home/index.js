import {
  Card,
  Container, Header,
  InputSearchContainer,
  ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow icon" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Eduardo Varela</strong>
              <small>instagram</small>
            </div>
            <span>eduardo@mail.com</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit icon" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash icon" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Eduardo Varela</strong>
              <small>instagram</small>
            </div>
            <span>eduardo@mail.com</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit icon" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash icon" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Eduardo Varela</strong>
              <small>instagram</small>
            </div>
            <span>eduardo@mail.com</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit icon" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash icon" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
