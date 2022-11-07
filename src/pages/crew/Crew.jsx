import React, { Component } from 'react';
import './Crew.scss';
import PageTitle from '../../components/pageTitle/PageTitle';
import data from '../../data.json';

const sliderData = data.crew;

class Crew extends Component{
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
            <div className='crew'>
                <div className='main-section main-wrapper'>
                    <PageTitle order='02' title='Meet your crew'/>
                    <div className='crew-slider'>
                        <div className='description-wrapper'>
                        {sliderData.map((slide, index)=>(
                            <div className={`description ${index+1===1 ? "active" : ""}`} data-slide={index+1} key={index+1}>
                                <p className='role heading4'>{slide.role}</p>
                                <p className='name heading3'>{slide.name}</p>
                                <p className='copy body-text'>{slide.bio}</p>
                            </div>
                        ))}
                            <div className='slider-controls'>
                                <span className='slide-selector active' data-slide='1' onClick={this.handleShow}></span>
                                <span className='slide-selector' data-slide='2' onClick={this.handleShow}></span>
                                <span className='slide-selector' data-slide='3' onClick={this.handleShow}></span>
                                <span className='slide-selector' data-slide='4' onClick={this.handleShow}></span>
                            </div>
                        </div>     
                        <div className='image-wrapper'>
                        {sliderData.map((slide, index)=>(
                            <img className={`slide-image ${index+1===1 ? "active" : ""}`} src={slide.images.png} alt={slide.name}  key={index+1}/>
                        ))}
                        </div>           
                    </div>
                </div>
            </div>
        );
    }
}

export default Crew;