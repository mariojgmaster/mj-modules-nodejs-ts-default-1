/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 12/01/2023 - 17:45:38
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/01/2023
    * - Author          : mario
    * - Modification    : 
**/

import mongoose from "mongoose";

export default mongoose.model('Guest', new mongoose.Schema(
    {
        field: String
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
));