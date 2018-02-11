import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import phoneSlide1 from '../../../assets/slide_1.jpg'
import phoneSlide2 from '../../../assets/slide_2.jpg'


const styles = {
    phoneModelStyle: {
        width: '310px',
        height: 560,
    }
}

class PhoneModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            phoneSlides: [
                {
                    photo: phoneSlide1,
                    altText: 'phoneSlide1'
                },
                {
                    photo: phoneSlide2,
                    altText: 'slide2'
                }
            ]
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    componentDidMount() {
        this.onExited()
    }
    componentWillUnmount() {
        this.onExiting()
    }
    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.phoneSlides.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.phoneSlides.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex, phoneSlides } = this.state;


        const slides = phoneSlides.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.photo}
                >
                    <img style={styles.phoneModelStyle} src={item.photo} alt={item.altText} />
                </CarouselItem>
            );
        })

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                style={{position: 'static'}}
            >
                <CarouselIndicators items={phoneSlides} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}


export default PhoneModel;