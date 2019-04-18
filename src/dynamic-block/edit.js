/**
 * BLOCK: Dynamic-block
 */

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

/**
 * Build the row edit
 */
class Edit extends Component {

    constructor() {
        super(...arguments);
        this.state = {
        };
    }

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
export default Edit;