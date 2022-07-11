
import { useEffect, useState } from 'react';
import { categoriesData } from '../../data/data';
import { Transaction, TransactionStatus } from '../../models/Transaction';
import {
    TableContainer, TableHeader, TableTd, TableTh, StatusTransaction,
    TableBody, ButtonEdit, ButtonDelete, Select, ContainerSelects, TitleFilter, ContainerFilter
} from './styles';

type Props = {
    transactions: Transaction[];
    removeTransaction: (id: number) => void;
    setTransactionSelected: (transaction: Transaction) => void;
    setIsOpenModal: (isOpenModal: boolean) => void;
}

type OptionFilter = {
    categoryId: number;
    status: TransactionStatus;
}


export const Table = ({ transactions, removeTransaction, setTransactionSelected, setIsOpenModal }: Props) => {

    const [transactionsFiltered, setTransactionsFiltered] = useState<Transaction[]>(transactions);

    const [optionsFilter, setOptionsFilter] = useState<OptionFilter>({
        categoryId: 0,
        status: TransactionStatus.ALL,
    });

    useEffect(() => {
        setTransactionsFiltered(transactions.filter(transaction => {
            if (optionsFilter.categoryId !== 0 && optionsFilter.status !== TransactionStatus.ALL) {
                return transaction.idCategoria === optionsFilter.categoryId && transaction.tipo === optionsFilter.status;
            }
            if (optionsFilter.categoryId !== 0) {
                return transaction.idCategoria === optionsFilter.categoryId;
            }
            if (optionsFilter.status !== TransactionStatus.ALL) {
                return transaction.tipo === optionsFilter.status;
            }

            return true;
        }));
    }, [optionsFilter, transactions]);

    const getCategoryById = (id: number) => {
        const category = categoriesData.find(category => category.id === id);
        return category ? category.title : 'Não definido';
    }

    const showModal = (item: Transaction) => {
        setTransactionSelected(item);
        setIsOpenModal(true);
    }

    const setStatusInOptions = (statusStr: string) => {
        if (statusStr === "0") {
            setOptionsFilter({ ...optionsFilter, status: TransactionStatus.ALL });
            return;
        }

        setOptionsFilter({ ...optionsFilter, status: statusStr === "1" ? TransactionStatus.INPUT : TransactionStatus.OUTPUT });
    }

    const setCategoryInOptions = (categoryIdStr: string) => {
        const categoryId = categoryIdStr === "0" ? 0 : parseInt(categoryIdStr);
        if (categoryId === 0) {
            setOptionsFilter({ ...optionsFilter, categoryId: 0 });
            return;
        }

        setOptionsFilter({ ...optionsFilter, categoryId });
    }

    return (
        <div className="App">
            <ContainerFilter>
                <TitleFilter>
                    Filtrar por:
                </TitleFilter>
                <ContainerSelects>
                    <Select onChange={(e) => setStatusInOptions(e.target.value)}>
                        <option value="0">Todas as tipos</option>
                        <option value="1">Entradas</option>
                        <option value="2">Saídas</option>
                    </Select>
                    <Select onChange={(e) => setCategoryInOptions(e.target.value)}>
                        <option value="0">Todas as categorias</option>
                        {categoriesData.map(category => (
                            <option key={category.id} value={category.id}>{category.title}</option>
                        ))}
                    </Select>
                </ContainerSelects>
            </ContainerFilter>
            <TableContainer>
                <TableHeader>
                    <tr>
                        <TableTh>Título</TableTh>
                        <TableTh>Tipo</TableTh>
                        <TableTh>Categoria</TableTh>
                        <TableTh>Valor</TableTh>
                        <TableTh>Data de criação</TableTh>
                        <TableTh>Ações</TableTh>
                    </tr>
                </TableHeader>
                <TableBody>
                    {transactionsFiltered.map(transaction => (
                        <tr>
                            <TableTd>{transaction.titulo}</TableTd>
                            <TableTd>{getCategoryById(transaction.idCategoria)}</TableTd>
                            <TableTd>
                                <StatusTransaction className={transaction.tipo === TransactionStatus.INPUT ? 'statusInput' : 'statusOutput'}>{transaction.getTipoFormat()}</StatusTransaction>
                            </TableTd>
                            <TableTd>{transaction.getValorFormat()}</TableTd>
                            <TableTd>{transaction.getDateCreatedFormat()}</TableTd>
                            <TableTd> <ButtonEdit onClick={() => showModal(transaction)} /> <ButtonDelete onClick={() => removeTransaction(transaction.id)} /></TableTd>
                        </tr>
                    ))}
                </TableBody>
            </TableContainer>
        </div>
    );
}