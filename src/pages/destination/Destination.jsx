import React, { Component } from 'react';
import './Destination.scss';
import PageTitle from '../../components/pageTitle/PageTitle';
import data from '../../data.json';

const sliderData = data.destinations;

class Destination extends Component {
    handleShow = (event) => {
        const slideSelectors = document.querySelectorAll('.slider-controls ul li');
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

    render(){
        return (
            <div className='destination'>
                <div className='main-section main-wrapper'>
                    <PageTitle order='01' title='Pick your destination'/>
                    <div className='destination-slider'>
                        <div className='image-wrapper'>
                        {sliderData.map((slide, index)=>(
                            <img className={`slide-image ${index+1===1 ? "active" : ""}`} src={slide.images.png} alt={slide.name} data-slide={index+1} key={index+1}/>
                        ))}
                        </div>
                        <div className='description-wrapper'>
                            <div className='slider-controls nav-text'>
                                <ul>
                                    <li className="slide-selector active" data-slide="1" onClick={this.handleShow}>Moon</li>
                                    <li className="slide-selector" data-slide="2" onClick={this.handleShow}>Mars</li>
                                    <li className="slide-selector"  data-slide="3" onClick={this.handleShow}>Europa</li>
                                    <li className="slide-selector"  data-slide="4" onClick={this.handleShow}>Titan</li>
                                </ul>                        
                            </div>
                            <div className='copy-wrapper'>
                            {sliderData.map((slide, index)=>(
                                <div className={`description ${index+1===1 ? "active" : ""}`} data-slide={index+1} key={index+1}>
                                <p className='name heading2'>{slide.name}</p>
                                <p className='copy body-text'>{slide.description}</p>
                                <div className='distance'>
                                    <div className='average'>
                                        <p className='title subheading2'>Avg. Distance</p>
                                        <p className='value subheading1'>{slide.distance}</p>
                                    </div>
                                    <div className='average'>
                                        <p className='title subheading2'>Est. Travel Time</p>
                                        <p className='value subheading1'>{slide.travel}</p>
                                    </div>
                                </div>                        
                            </div>                                
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Destination;