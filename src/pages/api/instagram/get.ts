import {NextApiRequest, NextApiResponse} from "next";
import {getInstagramUrl, isDev} from "@website/lib";
import {INSTAGRAM_DATA} from "@website/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (isDev()) {
            res.status(200).json(INSTAGRAM_DATA.data);
            return;
        }
        const raw = await fetch(getInstagramUrl());
        const instagramObj = await raw.json();
        res.status(200).json(instagramObj?.data);
    } catch (e) {
        res.status(500).json(e);
    }
}