"use client"
import {useEffect, useState} from "react";
import {LiteralReadingState, LiteralSecrets} from "@website/types";
import {getBooks, getLiteralReadingStatusValues} from "@website/lib";
import {Book} from "@website/components/Books/Book";
import {DefaultLiteralToken, ILITERAL_GRAPHQL_URL, ILITERAL_TOKEN_URL} from "@website/constants";
import {ContentLoader} from "@website/components/ContentLoader";
import {Section} from "@website/components/Section";

export const BooksContent = () => {
    const [literalToken, setLiteralToken] = useState<LiteralSecrets>(DefaultLiteralToken)
    const [readingStates, setReadingStates] = useState<LiteralReadingState[]>([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(ILITERAL_TOKEN_URL)
            .then(res => res.json())
            .then((data) => setLiteralToken(data.getLiteralToken))
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [])
    useEffect(() => {
        if (literalToken.token === "") return
        setLoading(true)
        fetch(ILITERAL_GRAPHQL_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json", "x-literal-token": literalToken.token},
        }).then(res => res.json())
            .then((data) => setReadingStates(data.getReadingStates))
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [literalToken])
    if (loading) return <ContentLoader/>
    return (
        <Section className="flex-col">
            <div className="flex flex-col xl:w-3/4 2xl:w-3/4 w-full mb-10">
                <h1 className="text-4xl font-bold tracking-tight w-3/4">Books that I&apos;m reading, I&apos;ve read, want to read, and a lot of other things
                    related to books.</h1>
                <div className="mt-6 space-y-7 text-base">
                    <span>Here are some of the books that I&apos;ve read, am reading, or want to read.
                        I&apos;m always looking for new books to read, so if you have any recommendations, feel free to reach out to me.</span>
                </div>
            </div>
            {getLiteralReadingStatusValues().map(status => (
                <Book key={status} books={getBooks(readingStates, status)} status={status}/>
            ))}
        </Section>
    )
}