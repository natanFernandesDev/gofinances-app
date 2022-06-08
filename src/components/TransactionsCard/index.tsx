import React from "react";

interface Category{
    name: string;
    icon: string;
}

export interface TransactionCardProps {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: Category;
    date: string;
}

interface Props {
    data: TransactionCardProps;
}

import { 
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
} from "./styles";


export function TransactionCard({ data }: Props) {
    return(
        <Container>
            <Title>{ data.title }</Title>
            <Amount type={data.type}>
                { data.type === 'negative' && '- '}
                { data.amount }
            </Amount>
            <Footer>
                <Category>
                    <Icon name={data.category.icon}>
                        <CategoryName>{ data.category.name }</CategoryName>
                    </Icon>
                </Category>
                <Date>{ data.date }</Date>
            </Footer>
        </Container>
    );
}