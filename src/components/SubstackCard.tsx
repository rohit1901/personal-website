import {FaEnvelope} from "react-icons/fa";

export const SubstackCard = () => {
    return (
        <div className="lg:pl-16 xl:pl-24">
            <form className="rounded-2xl border p-6" action="/thank-you">
                <h2 className="flex font-semibold">
                    <FaEnvelope className="w-5 h-5"/>
                    <span className="ml-3">Stay up to date</span>
                </h2>
                <p className="mt-2 text-sm">
                    Get notified when I publish something new, and unsubscribe at any time.
                </p>
                <div className="mt-6 flex">
                    <input type="text" placeholder="Email address" className="input input-bordered w-full max-w-xs"/>
                    <button className="btn btn-outline ml-auto rounded-md text-sm" type="submit">Join</button>
                </div>
            </form>
        </div>
    )
}