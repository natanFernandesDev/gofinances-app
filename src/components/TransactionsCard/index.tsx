import React from "react";

interface Category{
    name: string;
    icon: string;
}

interface Props {
    data: {
        title: string;
        amount: string;
        category: Category;
        date: string;
    }
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
            <Amount>{ data.amount }</Amount>
            <Footer>
                <Category>
                    <Icon name="dollar-sign">
                        <CategoryName>{ data.category.name }</CategoryName>
                    </Icon>
                </Category>
                <Date>{ data.date }</Date>
            </Footer>
        </Container>
    );
}