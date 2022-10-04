import React, {createContext, ReactNode, useContext, useState} from "react"

import bibleData from "../../biblia/AT/AT.json";

interface bookDataProps {
    abbrev: string;
    chapters: string[][];
    name: string;
}

interface atBookContextData {
    bibleData: bookDataProps[],
    book: bookDataProps,
    handleSetChapterNumber: (value: number) => void,
    chapterNumber: number
    handleSelectBook: (bookName: string) => void;
}

const atBookContext = createContext<atBookContextData>({} as atBookContextData);

interface atBookProviderProps {
    children: ReactNode;
}

function AtBookProvider({ children }: atBookProviderProps){
    const [ book, setBook ] = useState(bibleData[0]);
    const [chapterNumber, setChapterNumber] = useState(0);

    function handleSelectBook(bookName: string): void{
        const book = bibleData.find((book) => book.abbrev === bookName);

        setBook(book);
    }

    function handleSetChapterNumber(value: number) {
        setChapterNumber(value - 1 );
    }

    return (
        <atBookContext.Provider value={{
            bibleData,
            handleSelectBook,
            book,
            handleSetChapterNumber,
            chapterNumber
        }}>
            { children }
        </atBookContext.Provider>
    )
}

function useBook(): atBookContextData {
    return useContext(atBookContext);
}

export { AtBookProvider, useBook };