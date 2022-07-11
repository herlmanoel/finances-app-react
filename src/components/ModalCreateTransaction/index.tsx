import { Transaction, TransactionStatus } from '../../models/Transaction';
import { Input, Container, Button, ContainerButtons, Select, ContainerSelects } from './styles';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { categoriesData } from '../../data/data';
import { Category } from '../../models/Category';

type Props = {
    transactionSelected: Transaction | undefined;
    isOpenModal: boolean;
    setCloseModal: () => void;
    handleCreateTransaction: (transaction: Transaction) => void;
    setTransactionSelected: (transaction: Transaction) => void;
}

export const ModalCreateTransaction = ({ transactionSelected, isOpenModal, setCloseModal, handleCreateTransaction, setTransactionSelected }: Props) => {
    const [transaction, setTransaction] = useState<Transaction | undefined>( );
    const [categories] = useState<Category[]>(categoriesData);
    
    useEffect(() => {
        setTransaction(transactionSelected);
    }, [transactionSelected]);

    const createTransaction = (e: any) => {
        if (transaction === undefined || transaction.titulo === "") {
            return;
        }
        e.preventDefault();
        if (!transaction) {
            return;
        }

        const newTransaction = new Transaction(transaction.id ? transaction.id : 0, transaction.titulo, transaction.tipo ? transaction.tipo : TransactionStatus.OUTPUT, transaction.idCategoria ? transaction.idCategoria : 1, transaction.valor);
        handleCreateTransaction(newTransaction);
        setCloseModal();
        setTransaction({} as Transaction);
    }

    const isSelectedInput = () => {
        if (transaction === undefined) {
            return;
        }
        if (transaction) {
            return transaction.tipo === TransactionStatus.INPUT;
        }
        return false;
    }

    const getInputTitle = (value: string) => {
        if (transaction === undefined) {
            return;
        }
        transaction.titulo = value;
        setTransaction(new Transaction(transaction.id, transaction.titulo, transaction.tipo, transaction.idCategoria, transaction.valor));
    }

    const getInputValue = (value: string) => {
        if (transaction === undefined) {
            return;
        }
        if(value === "") {
            transaction.valor = 0;
        }
        transaction.valor = parseFloat(value);
        setTransaction(new Transaction(transaction.id, transaction.titulo, transaction.tipo, transaction.idCategoria, transaction.valor));    }

    const getInputCategory = (value: string) => {
        if (transaction === undefined) {
            return;
        }
        transaction.idCategoria = parseInt(value);
        setTransaction(new Transaction(transaction.id, transaction.titulo, transaction.tipo, transaction.idCategoria, transaction.valor));
    }

    const getInputTipo = (value: string) => {
        if (transaction === undefined) {
            return;
        }
        transaction.tipo = value === "Entrada" ? TransactionStatus.INPUT : TransactionStatus.OUTPUT;
        setTransaction(new Transaction(transaction.id, transaction.titulo, transaction.tipo, transaction.idCategoria, transaction.valor));
    }


    return (
        <Modal
            isOpen={isOpenModal}
            onRequestClose={() => {}}
            ariaHideApp={false}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    margin: 0,
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.0001)',
                    borderRadius: '4px',
                }
            }}
        >
            <Container>
                <h1>Criar Transação</h1>
                <form onSubmit={(e) => createTransaction(e)}>
                    <Input placeholder="Título" onChange={(e) => getInputTitle(e.target.value)} value={transaction?.titulo ?? ''} />
                    <Input placeholder="Valor" type="number" onChange={(e) => getInputValue(e.target.value)} value={transaction?.valor ?? ''} />
                    <ContainerSelects>
                        <Select
                            onChange={e => getInputTipo(e.target.value)}
                        >
                            <option value="Entrada" selected={isSelectedInput()} >Entrada</option>
                            <option value="Saida" selected={!isSelectedInput()} >Saída</option>
                        </Select>
                        <Select
                            onChange={e => getInputCategory(e.target.value)}
                            defaultValue={transaction?.idCategoria ?? 1}
                        >
                            <option value="">Selecione uma categoria</option>
                            {categories.map(category => (
                                <option key={category.id} selected={transaction?.idCategoria === category.id} value={category.id}>{category.title}</option>
                            ))}
                        </Select>
                    </ContainerSelects>
                    <ContainerButtons>
                        <Button className='cancelar' onClick={setCloseModal} >Cancelar</Button>
                        <Button type='submit' className='confirmar'>Salvar</Button>
                    </ContainerButtons>
                </form>
            </Container>
        </Modal>
    );


}