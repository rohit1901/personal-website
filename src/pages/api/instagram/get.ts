import {NextApiRequest, NextApiResponse} from "next";
import {getInstagramUrl, isDev, isInstagramError} from "@website/lib";
import {INSTAGRAM_DATA} from "@website/data";
import {InstagramMedia} from "@website/types";
import {sendEmail} from "@website/lib/sendEmail";

const fallbackData = INSTAGRAM_DATA.data?.filter((instagramObj: InstagramMedia) => instagramObj.caption?.includes("#random"));

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (isDev()) {
            res.status(200).json(
                INSTAGRAM_DATA.data?.filter((instagramObj: InstagramMedia) => instagramObj.caption?.includes("#random"))
            );
            return;
        }
        const raw = await fetch(getInstagramUrl());
        const instagramObj = await raw.json();
        if (isInstagramError(instagramObj)) {
            await sendEmail();
            return res.status(200).json(fallbackData)
        }
        return res.status(200).json(instagramObj?.data?.filter((instagramObj: InstagramMedia) => instagramObj.caption?.includes("#random")));

    } catch (e) {
        res.status(500).json(e);
    }
}