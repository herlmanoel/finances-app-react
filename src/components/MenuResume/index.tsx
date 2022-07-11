import { Card, Container } from './styles';

type Props = {
    entradas: number;
    saidas: number;
    total: number;
}



export const MenuResume = ({ entradas, saidas, total }: Props) => {
    return (
       <Container>
        <Card className='entrada'>
            <h1>Entradas</h1>
            <h2>R$ {entradas.toFixed(2).replace('.', ',')}</h2>
        </Card>
        <Card className='saida'>
            <h1>Saídas</h1>
            <h2>R$ {saidas.toFixed(2).replace('.', ',')}</h2>
        </Card>
        <Card className='total'>
            <h1>Total</h1>
            <h2>R$ {total.toFixed(2).replace('.', ',')}</h2>
        </Card>
       </Container>
    );
}