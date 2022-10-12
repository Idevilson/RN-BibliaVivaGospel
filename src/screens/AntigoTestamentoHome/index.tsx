import React, { useState, useEffect } from "react";

import { FlatList, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { useBook } from "../../hooks/atBooksContext";
import { BookButton } from "../../components/bookButton";
import { SearchBar } from "../../components/searchBar";

import { Container } from "./styles";


interface bookDataProps {
    abbrev: string;
    chapters: string[][];
    name: string;
}

export function Books(){
    const { bibleData } = useBook();
    const isFocused = useIsFocused();

    const [books, setBooks] = useState<bookDataProps[]>( [] );
    const [searchText, setSearchText] = useState("");

    function handleSearchBook(bookName: string) {
        const book = bibleData.filter((item) => (item.name.includes(bookName)));

        setBooks(book);
    }

    useEffect(() => {
        setBooks(bibleData);
    }, [isFocused]);

    console.log("Tela dos livros do antigo testamento");

    return(
           <Container>
                <SearchBar
                    setSearchText={setSearchText}
                    onPress={() => handleSearchBook(searchText)}
                />
                <FlatList
                    data={books}
                    style={styles.FlatList}
                    numColumns={2}
                    columnWrapperStyle={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}

                    renderItem={({item, index}) => (
                        <BookButton
                            id={index + 1}
                            bookName={item.abbrev}
                            bookFullName={item.name}
                            key={item.abbrev}
                            data={item.chapters}
                        />
                    )}
                />
           </Container>
    )
}

const styles = StyleSheet.create({
    FlatList: {
        width: '100%',
    }
});