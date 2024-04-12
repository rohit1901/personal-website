import {FaEnvelope} from "react-icons/fa";
import {SubstackWidget} from "@website/components/SubstackWidget";

export const SubstackCard = () => {
    return (
        <div className="group flex flex-col items-start rounded-2xl border mb-4">
            <form className="p-6" action="/thank-you">
                <h2 className="flex font-semibold">
                    <FaEnvelope className="w-5 h-5 text-gray-400"/>
                    <span className="ml-3">Stay up to date</span>
                </h2>
                <p className="mt-2 text-sm">
                    Get notified when I publish something new, and unsubscribe at any time.
                </p>
                <div className="mt-6 flex">
                    <SubstackWidget/>
                </div>
            </form>
        </div>
    )
}