import Image from "next/image";
import {LiteralBook, LiteralReadingStatus} from "@website/types";
import {getCoverImage, getReadingSectionHeading} from "@website/lib";
import {NO_DESCRIPTION} from "@website/constants";

type BookProps = {
    books: LiteralBook[]
    status: LiteralReadingStatus
}
const getCommaSeparatedAuthors = (authors: LiteralBook["authors"]) => {
    return authors?.map((author, i) => (
        <span key={`${author.name}-${i}`} className="mr-2">
            {author.name}{authors?.length - 1 !== i && ","}
        </span>
    ))
}
const CommaSeparatedAuthors = ({authors}: { authors: LiteralBook["authors"] }) => {
    return <div className="inline-flex">
        {getCommaSeparatedAuthors(authors)}
    </div>
}
export const Book = ({books, status}: BookProps) => {
    return <div className="collapse collapse-plus my-4">
        <input type="radio" name="my-accordion-1" defaultChecked={status === "IS_READING"}/>
        <h2 className="text-2xl font-bold tracking-tight collapse-title">{getReadingSectionHeading(status)}</h2>
        <div className="flex flex-col w-3/4 collapse-content">
            {
                books.map(book => (
                    <div className="card card-side border my-2" key={book.title}>
                        <Image src={getCoverImage(book.cover)} alt="Book Cover" width={200} height={300} className="p-6 pr-0 rounded-l-xl"/>
                        <div className="card-body w-1/2">
                            <h1 className="card-title">{book.title}</h1>
                            <div className="inline-flex">
                                <CommaSeparatedAuthors authors={book.authors}/>
                            </div>
                            <div className="space-y-7 max-h-52 overflow-hidden">
                                <span className="line-clamp-6">{book.description ?? NO_DESCRIPTION}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}