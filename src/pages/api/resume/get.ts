import {NextApiRequest, NextApiResponse} from "next";
import {RESUME, WEBSITE} from "@website/constants";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const websiteBasics = req.query.websiteBasics;
        const websiteWorkExperience = req.query.websiteWorkExperience;
        if (websiteBasics) {
            res.status(200).json(WEBSITE.basics);
            return;
        }
        if (websiteWorkExperience) {
            res.status(200).json(WEBSITE.work);
            return;
        }
        res.status(200).json(RESUME);
    } catch (e) {
        res.status(500).json({error: e});
    }
}