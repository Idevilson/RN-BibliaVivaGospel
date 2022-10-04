import React from "react";

import { useBook } from "../../../../hooks/atBooksContext";

import {
    Container,
    Verse,
} from "./styles"


export function VerseScreen() {
    const { book, chapterNumber } = useBook();

    console.log("Tela dos versículos");

    return (
        <Container>
                {
                    book.chapters[chapterNumber].map((item, index) => (
                        <Verse key={index}>
                            {((index + 1) + " ") + item }
                        </Verse>)
                    )
                }
        </Container>
    )
}
