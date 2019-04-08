/**
 * BLOCK: my-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { Slide, LeftArrow, RightArrow } from './components/slider';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('cgb/block-my-slider-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('My Slider'), // Block title.
	description: __('My Slider Test Blog'), // Block description.
	icon: 'images-alt2', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('my-slider-block — CGB Block'),
		__('Slider Example'),
		__('create-guten-block'),
	],
	attributes: {
		images: {
			type: 'Array',
			default: [
				"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
				"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
				"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
				"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
				"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
				"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
				"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
				"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
			]
		},
		currentIndex: {
			type: 'Number',
			default: 0
		},
		translateValue: {
			type: 'Number',
			default: 0
		}
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: ({ className, setAttributes, attributes }) => {
		const { images, currentIndex, translateValue } = attributes;

		const goToPrevSlide = () => {
			if (currentIndex === 0)
				return;

			setAttributes({
				currentIndex: currentIndex - 1,
				translateValue: translateValue + slideWidth()
			});
		}

		const goToNextSlide = () => {
			// Exiting the method early if we are at the end of the images array.
			// We also want to reset currentIndex and translateValue, so we return
			// to the first image in the array.
			if (currentIndex === images.length - 1) {
				return setAttributes({
					currentIndex: 0,
					translateValue: 0
				});
			}

			// This will not run if we met the if condition above
			setAttributes({
				currentIndex: currentIndex + 1,
				translateValue: translateValue + -(slideWidth())
			});
		}

		const slideWidth = () => {
			return document.querySelector('.slide').clientWidth
		}

		return (
			<div className={className}>
				<div className="slider">
					<p>My Slider</p>
					<div className="slider-wrapper" style={{
						transform: `translateX(${translateValue}px)`,
						transition: 'transform ease-out 0.45s'
					}}>
						{images.map((image, i) => (
							<Slide key={i} image={image} />
						))}
					</div>
					<LeftArrow goToPrevSlide={goToPrevSlide} />
					<RightArrow goToNextSlide={goToNextSlide} />
				</div >
			</div >
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: ({ className, setAttributes, attributes }) => {
		return (
			<div className={className}>
				<div className="slider">
					<p>My Slider</p>
				</div>
			</div>
		);
	},
	useOnce: false,
	supports: {
		align: true,
		alignWide: false,
		customClassName: false,
	}
});
