import {NextApiRequest, NextApiResponse} from "next";
import {getInstagramUrl} from "@website/lib";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const raw = await fetch(getInstagramUrl());
        const instagramObj = await raw.json();
        res.status(200).json(instagramObj?.data);
    } catch (e) {
        res.status(500).json(e);
    }
}