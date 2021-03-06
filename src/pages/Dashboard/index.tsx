import React from 'react';

import { HightlighCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionsCard';

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

// Nota-se que agora é obrigatorio passar as propriedades do componente, HighlighCards.

export function Dashboard() {
    const data: DataListProps[] = [
        {
        id: '1',
        type: 'positive',
        title: "Desenvolvimento de site",
        amount: "R$: 12.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: "13/04/2020"
    },
    {
        id: '2',
        type: 'negative',
        title: "Hamburgueria Pizzy",
        amount: "R$: 59,00",
        category: {
            name: 'Alimentação',
            icon: 'coffee'
        },
        date: "13/04/2020"
    },
    {
        id: '3',
        type: 'negative',
        title: "Aluguel do apartamento",
        amount: "R$: 1.200,00",
        category: {
            name: 'Casa',
            icon: 'shopping-bag'
        },
        date: "13/04/2020"
    }
];


    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri:'https://avatars.githubusercontent.com/u/91268794?v=4' }}/>
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Natan</UserName>
                        </User>
                    </UserInfo>
                    
                    <Icon name="power"/>
                </UserWrapper>
            </Header>
            
            <HighlightCards> 
                <HightlighCard 
                    title='Entradas' 
                    amount='R$ 17.400,00' 
                    lastTransaction='Última entrada dia 13 de abril.'
                    type='up'
                />
                <HightlighCard 
                    title='Saídas' 
                    amount='R$ 1.259,00' 
                    lastTransaction='Última saída dia 03 de abril.'
                    type='down'
                />
                <HightlighCard 
                    title='Total' 
                    amount='R$ 16.141,00' 
                    lastTransaction='01 à 16 de abril.'
                    type='total'
                />
            </HighlightCards>

            <Transactions>
                <Title> Listagem</Title>

                <TransactionList
                    data={data}
                    keyExtractor= { item => item.id }
                    renderItem= {({ item }) => <TransactionCard data={ item }/>}
                />
            
            </Transactions>

        </Container>
    );
}
