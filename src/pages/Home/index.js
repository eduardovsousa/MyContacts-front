/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import { Container } from './styles';

import Loader from '../../components/Loader';
import Header from './components/Header';
import InputSearch from './components/InputSearch';

import Modal from '../../components/Modal';
import ContactsList from './components/ContactsList';
import EmptyList from './components/EmptyList';
import Error from './components/Error';
import SearchNotFound from './components/SearchNotFound';
import useHome from './useHome';

export default function Home() {
  const {
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    contacts,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    filteredContacts,
    handleTryAgain,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && (!isLoading && !hasContacts);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts.length < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}

      <Header
        hasError={hasError}
        quantityOfContacts={contacts.length}
        quantityOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <Error onTryAgain={handleTryAgain} />}
      {isListEmpty && <EmptyList />}
      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} /> }

      {hasContacts && (
        <>
          <ContactsList
            filteredContacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
          />

          <Modal
            danger
            isLoading={isLoadingDelete}
            visible={isDeleteModalVisible}
            title={`Tem certeza que desja remover o contato "${contactBeingDeleted?.name}"?
        `}
            confirmLabel="Deletar"
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
          >
            <p>Esta ação não poderá ser desfeita!</p>
          </Modal>

        </>
      )}

    </Container>
  );
}
