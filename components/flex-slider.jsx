import HeroSlider, { Overlay, Slide, MenuNav } from 'hero-slider';
// import Wrapper from './components/Wrapper';
// import Title from './components/Title';
// import Subtitle from './components/Subtitle';

const img1 = '/images/20230804.jpg';
const img2 = '/images/20230813.jpg';
const img3 = '/images/20230818.jpg';

export default function FlexSlider() {
    return (
        <HeroSlider
            height={'100vh'}
            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 100
                // onSliding: (nextSlide) => console.log('onSliding(nextSlide): ', nextSlide),
                // onBeforeSliding: (previousSlide, nextSlide) =>
                //     console.log('onBeforeSliding(previousSlide, nextSlide): ', previousSlide, nextSlide),
                // onAfterSliding: (nextSlide) => console.log('onAfterSliding(nextSlide): ', nextSlide)
            }}
        >
            <Overlay>
                {/*  <Wrapper>
                    <Title>Basic Setup</Title>
                    <Subtitle>Check out the documentation for more advanced examples.</Subtitle>
                </Wrapper>*/}
            </Overlay>
            <Slide
                label="Giau Pass - Italy"
                background={{
                    backgroundImageSrc: img1
                }}
            />
            <Slide
                shouldRenderMask
                label="Bogliasco - Italy"
                background={{
                    backgroundImageSrc: img2
                }}
            />
            <Slide
                shouldRenderMask
                label="County Clare - Ireland"
                background={{
                    backgroundImageSrc: img3
                }}
            />
            <MenuNav />
        </HeroSlider>
    );
}
