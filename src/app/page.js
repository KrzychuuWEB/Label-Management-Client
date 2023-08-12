"use client"

import React, {useEffect, useState} from "react";
import {productsTable} from "@/inMemoryDatabase/products";
import {Divider, Icon, List, ListItem, ListItemButton, ListItemText, Paper, Skeleton, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {routes} from "@/utils/routes";
import {Visibility} from "@mui/icons-material";

const ListBox = styled('div')(() => ({
    marginBottom: 20,
}));

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setProducts(productsTable);
            setIsLoading(false);
        }, 5000);
    }, []);

    const getFirstLettersProductsAndSortAlphabetical = (productsList) => {
        let letters = [];

        productsList.map(product => {
            const letter = product.name.charAt(0);

            if (!letters.find(item => letter === item)) {
                letters.push(letter.toUpperCase());
            }
        })

        return letters.sort();
    };

    const getProductsByFirstLetterAndSortAlphabetical = (productsList, letter) => {
        const productsArray = [];

        productsList.map(product => {
            const productLetter = product.name.charAt(0).toUpperCase();

            if (productLetter === letter) {
                productsArray.push(product)
            }
        });

        return productsArray.sort((a, b) => a.name.localeCompare(b.name));
    };

    return (
        <div>
            {
                isLoading
                    ? (<div>
                        <Skeleton variant="rounded" width="100%" height={50} sx={{marginBottom: 1}}/>
                        <Skeleton variant="rounded" width="100%" height={50} sx={{marginBottom: 1}}/>
                        <Skeleton variant="rounded" width="100%" height={50} sx={{marginBottom: 1}}/>
                        <Skeleton variant="rounded" width="100%" height={50}/>
                    </div>)
                    : getFirstLettersProductsAndSortAlphabetical(products).map(letter => (
                        <ListBox key={letter}>
                            <Typography variant="h6" color="secondary">
                                {letter}
                            </Typography>
                            <Paper>
                                <List>
                                    {
                                        getProductsByFirstLetterAndSortAlphabetical(products, letter).map((product, index) => (
                                            <div key={product.id}>
                                                <ListItem disablePadding>
                                                    <ListItemButton href={routes.products.getById(product.id)}>
                                                        <ListItemText primary={product.name}/>
                                                        <Icon align="right" color="primary">
                                                            <Visibility/>
                                                        </Icon>
                                                    </ListItemButton>
                                                </ListItem>

                                                {
                                                    (getProductsByFirstLetterAndSortAlphabetical(products, letter).length > (index + 1)) && (
                                                        <Divider/>
                                                    )
                                                }
                                            </div>
                                        ))
                                    }
                                </List>
                            </Paper>
                        </ListBox>
                    ))

            }
        </div>
    );
};

export default HomePage;