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
import NodeList from './NodeList';





/**
* The Node model module.
* @module model/Node
* @version 2.0.0
*/
export default class Node {
    /**
    * Constructs a new <code>Node</code>.
    * A file or folder represented as a generic resource, including metadata and children. Properties before children are part of the \&quot;standard\&quot; metadat set, properties after are returned by the \&quot;extended\&quot; metadata set.
    * @alias module:model/Node
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Node</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Node} obj Optional instance to populate.
    * @return {module:model/Node} The populated <code>Node</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Node();

            
            
            

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('is_leaf')) {
                obj['is_leaf'] = ApiClient.convertToType(data['is_leaf'], 'Boolean');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('ajxp_modiftime')) {
                obj['ajxp_modiftime'] = ApiClient.convertToType(data['ajxp_modiftime'], 'Number');
            }
            if (data.hasOwnProperty('bytesize')) {
                obj['bytesize'] = ApiClient.convertToType(data['bytesize'], 'Number');
            }
            if (data.hasOwnProperty('stat')) {
                obj['stat'] = ApiClient.convertToType(data['stat'], Object);
            }
            if (data.hasOwnProperty('ajxp_relativetime')) {
                obj['ajxp_relativetime'] = ApiClient.convertToType(data['ajxp_relativetime'], 'String');
            }
            if (data.hasOwnProperty('ajxp_description')) {
                obj['ajxp_description'] = ApiClient.convertToType(data['ajxp_description'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('filesize')) {
                obj['filesize'] = ApiClient.convertToType(data['filesize'], 'String');
            }
            if (data.hasOwnProperty('mimestring_id')) {
                obj['mimestring_id'] = ApiClient.convertToType(data['mimestring_id'], 'String');
            }
            if (data.hasOwnProperty('ajxp_readonly')) {
                obj['ajxp_readonly'] = ApiClient.convertToType(data['ajxp_readonly'], 'Boolean');
            }
            if (data.hasOwnProperty('file_perms')) {
                obj['file_perms'] = ApiClient.convertToType(data['file_perms'], 'String');
            }
            if (data.hasOwnProperty('repo_has_recycle')) {
                obj['repo_has_recycle'] = ApiClient.convertToType(data['repo_has_recycle'], 'Boolean');
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = NodeList.constructFromObject(data['children']);
            }
        }
        return obj;
    }

    /**
    * @member {String} path
    */
    path = undefined;
    /**
    * @member {module:model/Node.TypeEnum} type
    */
    type = undefined;
    /**
    * @member {Boolean} is_leaf
    */
    is_leaf = undefined;
    /**
    * @member {String} label
    */
    label = undefined;
    /**
    * @member {Number} ajxp_modiftime
    */
    ajxp_modiftime = undefined;
    /**
    * @member {Number} bytesize
    */
    bytesize = undefined;
    /**
    * @member {Object} stat
    */
    stat = undefined;
    /**
    * @member {String} ajxp_relativetime
    */
    ajxp_relativetime = undefined;
    /**
    * @member {String} ajxp_description
    */
    ajxp_description = undefined;
    /**
    * @member {String} icon
    */
    icon = undefined;
    /**
    * @member {String} filesize
    */
    filesize = undefined;
    /**
    * @member {String} mimestring_id
    */
    mimestring_id = undefined;
    /**
    * @member {Boolean} ajxp_readonly
    */
    ajxp_readonly = undefined;
    /**
    * @member {String} file_perms
    */
    file_perms = undefined;
    /**
    * @member {Boolean} repo_has_recycle
    */
    repo_has_recycle = undefined;
    /**
    * @member {module:model/NodeList} children
    */
    children = undefined;






    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
    
        /**
         * value: "collection"
         * @const
         */
        "collection": "collection",
    
        /**
         * value: "leaf"
         * @const
         */
        "leaf": "leaf"    
    };



}


