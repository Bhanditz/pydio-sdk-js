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
import Node from './Node';





/**
* The NodeListData model module.
* @module model/NodeListData
* @version 2.0.0
*/
export default class NodeListData {
    /**
    * Constructs a new <code>NodeListData</code>.
    * @alias module:model/NodeListData
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>NodeListData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NodeListData} obj Optional instance to populate.
    * @return {module:model/NodeListData} The populated <code>NodeListData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NodeListData();

            
            
            

            if (data.hasOwnProperty('node')) {
                obj['node'] = Node.constructFromObject(data['node']);
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], {'String': Node});
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Node} node
    */
    node = undefined;
    /**
    * @member {Object.<String, module:model/Node>} children
    */
    children = undefined;








}


