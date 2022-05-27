import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HightlighCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionsCard';

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

// Nota-se que agora é obrigatorio passar as propriedades do componente, HighlighCards.

export function Dashboard() {
    const data = [
        {
        title: "Desenvolvimento de site",
        amount: "R$: 12.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: "13/04/2020"
    },
    {
        title: "Desenvolvimento de site",
        amount: "R$: 12.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: "13/04/2020"
    },
    {
        title: "Desenvolvimento de site",
        amount: "R$: 12.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
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
                    renderItem={({ item }) => <TransactionCard data={ item }/>}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: getBottomSpace()
                    }}
                />
            
            </Transactions>

        </Container>
    );
}
