export const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
}

export const LeftArrow = ({ goToPrevSlide }) => {
    return (
        <div className="backArrow arrow-custom" onClick={goToPrevSlide}>
            <span class="dashicons dashicons-arrow-left-alt"></span>
        </div>
    );
}

export const RightArrow = ({ goToNextSlide }) => {
    return (
        <div className="nextArrow arrow-custom" onClick={goToNextSlide}>
            <span class="dashicons dashicons-arrow-right-alt"></span>
        </div>
    );
}
