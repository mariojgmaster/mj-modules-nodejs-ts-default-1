/**
 * @description      :
 * @author           : mario
 * @group            :
 * @created          : 12/01/2023 - 18:23:08
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 12/01/2023
 * - Author          : mario
 * - Modification    :
 **/

import { Request, Response, NextFunction } from "express";
import EntityModel from "../../models/EntityModel";

export default {
	async saveEntities(req: Request, res: Response, next: NextFunction) {
		const bodyData = req.body;

		try {
			const newEntity = await EntityModel.create(bodyData);
			return res.status(201).json(newEntity);
		} catch (err) {
			return res.status(500).json({
				status: 500,
				errorMessage: "An error occurred creating data",
				error: err,
			});
		}
	},
	
	async getEntities(req: Request, res: Response, next: NextFunction) {
		try {
			let entities: Document | Document[] | null;

			if (req.query?.entity_id) { entities = await EntityModel.findById(req.query?.entity_id); }
			else { entities = await EntityModel.find(); }

            let total: Number = 0;
            if (entities) total = Object.values(entities).length;
			
			return res.status(200).json({total, entities});
		} catch (err) {
			return res.status(500).json({
				status: 500,
				errorMessage: 'An error occurred getting data',
				error: err,
			});
		}
	}
};
