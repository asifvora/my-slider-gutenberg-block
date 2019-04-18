/**
 * BLOCK: Dynamic-block
 */

/**
 * Import attributes
 */
import attributes from './attributes';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { ServerSideRender, TextControl, PanelBody } = wp.components;
const { InnerBlocks, InspectorControls } = wp.editor;

/**
 * Register: a Gutenberg Block.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('asif/dynamic-block', {
  title: __('dynamic-block'),
  description: __('Dynamic-block basic dynamic block.'),
  icon: "analytics",
  category: "widgets",
  keywords: [
    __('dynamic'),
    __('block'),
    __('asif'),
  ],
  attributes,
  supports: {
    align: true,
    alignWide: false,
    customClassName: false,
  },
  edit: ({ attributes, setAttributes }) => {
    const { posts } = attributes;

    return [
      <InspectorControls>
        <PanelBody title="Select Post" initialOpen={true}>
          <TextControl
            type="number"
            min="1"
            placeHolder="How many posts"
            value={posts}
            onChange={value => setAttributes({ posts: value })}
          />
        </PanelBody>
      </InspectorControls>,
      <ServerSideRender
        block="asif/dynamic-block"
        attributes={{ posts }}
      />
    ];
  },
  save: () => {
    return <InnerBlocks.Content />;
  }
});