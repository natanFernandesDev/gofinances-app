import React from 'react-native';
import { 
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,
} from './styles';

//Criei as propriedades obrigatorias a serem passadas pro HighlighCard.
interface Props {
    type: 'up' | 'down' | 'total'; 
    title: string;
    amount: string;
    lastTransaction: string;
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

//Associei elas aqui:
export function HightlighCard({ type, title, amount, lastTransaction}: Props) {

    return(
        <Container type={type}>
            <Header>
                <Title type={type} > { title } </Title>
                <Icon name={icon[type]} type={type}/>
            </Header>

            <Footer>
                <Amount type={type}> { amount }</Amount>
                <LastTransaction type={type}>{ lastTransaction} </LastTransaction>
            </Footer>

        </Container>
    );
}