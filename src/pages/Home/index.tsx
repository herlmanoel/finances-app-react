import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { COLORS } from '../../assets/styles/Colors';
import { MenuResume } from '../../components/MenuResume';
import { ModalCreateTransaction } from '../../components/ModalCreateTransaction';
import { Table } from '../../components/Table';
import { Transaction, TransactionStatus } from '../../models/Transaction';
import { Container, Wrapper, ButtonFloating, Title } from './styles';

export const Home = () => {

    const APP_KEY = "app-transactions";

    const [transactions, setTransactions] = useState<Transaction[]>();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [transactionSelected, setTransactionSelected] = useState<Transaction>({} as Transaction);

    const getDataLocalStorage = async () => {
        const arrayTransactions = await JSON.parse(localStorage.getItem(APP_KEY) as string);
        const transactionsLocal: Transaction[] = await arrayTransactions.map((transaction: Transaction) => {
            return new Transaction(transaction.id, transaction.titulo ?? '', transaction.tipo ?? TransactionStatus.INPUT, transaction.idCategoria ?? 1, transaction.valor ?? 0);
        });
        setTransactions(transactionsLocal);
    }

    useEffect(() => {
        if (localStorage.getItem(APP_KEY)) {
            getDataLocalStorage();
        }
    }, []);

    useEffect(() => {
        if (!transactions) return;
        const arrayTransactions = transactions.map((transaction: Transaction) => {
            return {
                id: transaction.id,
                titulo: transaction.titulo,
                tipo: transaction.tipo,
                idCategoria: transaction.idCategoria,
                valor: transaction.valor,
            }
        });
        localStorage.setItem(APP_KEY, JSON.stringify(arrayTransactions));
    }, [transactions]);

    const handleCloseModal = () => { setIsOpenModal(false); setTransactionSelected({} as Transaction); };

    const removeTransaction = (id: number) => {
        if (!transactions) return;
        const newTransactions = transactions.filter(transaction => transaction.id !== id);
        setTransactions(newTransactions);
    }

    const handleCreateTransaction = (transaction: Transaction) => {
        if (!transactions) {
            setTransactions([transaction]);
            return;
        }

        transaction.created_date = new Date();
        if (transaction.id === 0) {
            transaction.id = transactions.length + 1;
        } else {
            const newTransactionsEdit = transactions.filter(transactionItem => transactionItem.id !== transaction.id);
            setTransactions([...newTransactionsEdit, transaction]);
            return;
        }

        setTransactions([...transactions, transaction]);
    }

    const getResume = () => {
        if (!transactions) return {
            total: 0,
            entradas: 0,
            saidas: 0,
        };

        return {
            total: transactions.reduce((acc, transaction) => {
                if (transaction.tipo === TransactionStatus.INPUT) {
                    return acc + transaction.valor;
                }
                return acc - transaction.valor;
            }
                , 0),
            entradas: transactions.reduce((acc, transaction) => {
                if (transaction.tipo === TransactionStatus.INPUT) {
                    return acc + transaction.valor;
                }
                return acc;
            }
                , 0),
            saidas: transactions.reduce((acc, transaction) => {
                if (transaction.tipo === TransactionStatus.OUTPUT) {
                    return acc + transaction.valor;
                }
                return acc;
            }
                , 0),
        };
    }

    return (
        <>
            <Wrapper>
                <Container>
                    <MenuResume {...getResume()} />
                    {
                        transactions && transactions.length > 0 ?
                            <Table transactions={transactions} removeTransaction={removeTransaction} setTransactionSelected={setTransactionSelected} setIsOpenModal={setIsOpenModal} />
                            : <Title>Clique no botão abaixo e adicione uma transação!</Title>
                    }
                </Container>
                <ButtonFloating onClick={() => setIsOpenModal(true)}> <FiPlus color={COLORS.white} size={16} /> </ButtonFloating>
            </Wrapper>
            {transactionSelected && <ModalCreateTransaction transactionSelected={transactionSelected} isOpenModal={isOpenModal} setCloseModal={handleCloseModal} handleCreateTransaction={handleCreateTransaction} setTransactionSelected={setTransactionSelected} />}
        </>
    );
}