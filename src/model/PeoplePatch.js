/**
 * Pydio API V2
 * Access to a Pydio Server. Second version of the API.
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The PeoplePatch model module.
* @module model/PeoplePatch
* @version 2.0.0
*/
export default class PeoplePatch {
    /**
    * Constructs a new <code>PeoplePatch</code>.
    * a key / value tuple describing which parameter to patch
    * @alias module:model/PeoplePatch
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PeoplePatch</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PeoplePatch} obj Optional instance to populate.
    * @return {module:model/PeoplePatch} The populated <code>PeoplePatch</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PeoplePatch();

            
            
            

            if (data.hasOwnProperty('resourceType')) {
                obj['resourceType'] = ApiClient.convertToType(data['resourceType'], 'String');
            }
            if (data.hasOwnProperty('parameterName')) {
                obj['parameterName'] = ApiClient.convertToType(data['parameterName'], 'String');
            }
            if (data.hasOwnProperty('parameterValue')) {
                obj['parameterValue'] = ApiClient.convertToType(data['parameterValue'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/PeoplePatch.ResourceTypeEnum} resourceType
    */
    resourceType = undefined;
    /**
    * @member {module:model/PeoplePatch.ParameterNameEnum} parameterName
    */
    parameterName = undefined;
    /**
    * @member {String} parameterValue
    */
    parameterValue = undefined;






    /**
    * Allowed values for the <code>resourceType</code> property.
    * @enum {String}
    * @readonly
    */
    static ResourceTypeEnum = {
    
        /**
         * value: "user"
         * @const
         */
        "user": "user",
    
        /**
         * value: "group"
         * @const
         */
        "group": "group"    
    };

    /**
    * Allowed values for the <code>parameterName</code> property.
    * @enum {String}
    * @readonly
    */
    static ParameterNameEnum = {
    
        /**
         * value: "groupLabel"
         * @const
         */
        "groupLabel": "groupLabel",
    
        /**
         * value: "userPass"
         * @const
         */
        "userPass": "userPass",
    
        /**
         * value: "userProfile"
         * @const
         */
        "userProfile": "userProfile",
    
        /**
         * value: "userLock"
         * @const
         */
        "userLock": "userLock",
    
        /**
         * value: "userRoles"
         * @const
         */
        "userRoles": "userRoles",
    
        /**
         * value: "userAddRole"
         * @const
         */
        "userAddRole": "userAddRole",
    
        /**
         * value: "userRemoveRole"
         * @const
         */
        "userRemoveRole": "userRemoveRole",
    
        /**
         * value: "userPreferences"
         * @const
         */
        "userPreferences": "userPreferences"    
    };



}


