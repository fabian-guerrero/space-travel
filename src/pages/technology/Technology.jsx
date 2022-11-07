import React, { Component } from 'react';
import './Technology.scss';
import PageTitle from '../../components/pageTitle/PageTitle';
import data from '../../data.json';

const sliderData = data.technology;

class Technology extends Component{
    handleShow = (event) => {
        const slideSelectors = document.querySelectorAll('.slide-selector');
        const selector= event.target.dataset.slide;
        const slideDescription = document.querySelectorAll('.description');
        const slideImage = document.querySelectorAll('.slide-image');

        for (let i=0; i<slideSelectors.length; i++){
            if (slideSelectors[i].dataset.slide === selector){
                slideSelectors[i].classList.add('active');
                slideDescription[i].classList.add('active');
                slideImage[i].classList.add('active');
            }else{
                slideSelectors[i].classList.remove('active');
                slideDescription[i].classList.remove('active');
                slideImage[i].classList.remove('active');
            }
        }
    };

    render() {
        return (
            <div className='technology'>
                <div className='main-section main-wrapper'> 
                    <PageTitle order='03' title='Space launch 101'/>
                    <div className='technology-slider'>
                        <div className='description-wrapper'>
                            <div className='slider-controls'>
                                <span className='slide-selector heading4 active' data-slide='1'  onClick={this.handleShow}>1</span>
                                <span className='slide-selector heading4' data-slide='2' onClick={this.handleShow}>2</span>
                                <span className='slide-selector heading4' data-slide='3' onClick={this.handleShow}>3</span>
                            </div>
                            <div className='copy-wrapper'>
                                {sliderData.map((slide, index)=>(
                                    <div className={`description ${index+1===1 ? "active" : ""}`} data-slide={index+1} key={index+1}>
                                        <p className='intro nav-text'>The terminology</p>
                                        <p className='title heading3'>{slide.name}</p>
                                        <p className='body-text'>{slide.description}</p>
                                    </div>                                    
                                ))}
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            {sliderData.map((slide, index)=>(
                            <picture className={`slide-image ${index+1===1 ? "active" : ""}`} data-slide={index+1} key={index+1}>
                                <source srcSet={slide.images.portrait} media="(min-width: 1400px)" />
                                <img src={slide.images.landscape} alt={slide.name} />
                            </picture>                                  
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
}

export default Technology;