/**
 * BLOCK: Dynamic-block
 */

/**
* Internal block libraries
*/
const { Component, Fragment } = wp.element;
const { InnerBlocks, } = wp.editor;

/**
 * Build the row save
 */
class Save extends Component {

    render() {
        return (
            <Fragment>
                <div className="card">
                    hello
                </div>
            </Fragment>
        );
    }
}
export default Save;