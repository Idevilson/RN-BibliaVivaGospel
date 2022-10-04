import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

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

    const [books, setBooks] = useState<bookDataProps[]>( bibleData );
    const [searchText, setSearchText] = useState("");

    function handleSearchBook(bookName: string) {
        console.log(bookName);
        const book = bibleData.find((item) => item.abbrev === bookName);

        console.log(book);

    }

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