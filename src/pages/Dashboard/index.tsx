import React from 'react';

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
    Title
} from './styles';

// Nota-se que agora é obrigatorio passar as propriedades do componente, HighlighCards.

export function Dashboard() {
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
                <TransactionCard/>
            </Transactions>

        </Container>
    );
}
