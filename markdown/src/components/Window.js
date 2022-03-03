import React from 'react';

class Window extends React.Component {
    constructor(props) {
        super(props)

        this.handleIcon = this.handleIcon.bind(this)
    }
    
    handleIcon(id) {
        if (id >= 200 && id <= 232) { // THUNDER STORM

        } else if (id >= 300 && id <= 321) { // DRIZZLE
            
        } else if (id >= 500 && id <= 531) { // RAIN

        } else if (id >= 600 && id <= 622) { // SNOW
            
            
        } else { // CLOUDY AND SUNNY


        switch (id) {
            case 800:return <img className="sun" src="img/sun.svg" />; // SUNNY
            case 801: return <div className="weather--container"><img className="cloud" src="img/cloud.svg"/><img className="sun" src="img/sun.svg"/></div>; // FEW CLOUDS
            case 802: return <div className="weather--container"><img className="cloud" src="img/cloud.svg"/><img className="cloud-two" src="img/cloud.svg"/><img className="sun" src="img/sun.svg"/></div>; // SCATTERED CLOUDS
            case 803: return <div className="weather--container"><img className="cloud" src="img/cloud.svg"/><img className="cloud-three" src="img/cloud.svg"/><img className="cloud-four" src="img/cloud.svg"/><img className="cloud-two" src="img/cloud.svg"/><img className="sun" src="img/sun.svg"/></div>; // BROKEN CLOUDS
            case 804: return <div className="weather--container"><img className="cloud" src="img/cloud.svg"/><img className="cloud-three" src="img/cloud.svg"/><img className="cloud-four" src="img/cloud.svg"/><img className="cloud-five" src="img/cloud.svg"/><img className="cloud-six" src="img/cloud.svg"/><img className="cloud-four" src="img/cloud.svg"/><img className="cloud-two" src="img/cloud.svg"/><img className="sun" src="img/sun.svg"/></div>; // OVERCAST
            default: <p>{id}</p>;
        }
    }

    }

    render() {
    //    const {weather} = this.props.weatherIconCheck;
        return(<div className="window-container">
            <div className="window">

            {this.props.isLoaded && <div>{this.handleIcon(this.props.weatherID[0].id)}</div>}   
            <svg id="Layer_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m0 205.213v210.82h512v-38.204c-162.761-83.089-326.116-191.992-512-172.616z" fill="#aced70"/><path d="m0 205.213v38.154c57.987 2.745 162.11 3.478 227.071-4.952-72.731-26.41-147.854-41.459-227.071-33.202z" fill="#c0f28b"/><path d="m98.992 292.513c-23.608 8.307-68.244 6.367-98.992 3.66v89.354c137.4-25.933 348.69-65.816 353.465-66.74 4.544-.879-9.555-20.459-20.262-34.401-9.05-4.44-18.125-8.79-27.23-13.026-46.023 2.431-175.651 10.13-206.981 21.153z" fill="#9bd65e"/><path d="m512 256.008v255.182h-512v-91.598c162.761-83.09 331.726-152.239 512-163.584z" fill="#9bd65e"/><path d="m376.857 312.361c65.501-19.884 108.264-28.186 135.143-31.397v-24.955c-94.023 5.917-184.969 27.564-273.563 58.706 27.303 10.433 72.557 17.64 138.42-2.354z" fill="#aced70"/><path d="m512 386.01c-44.658 28.891-99.146 2.609-186.179-16.943-97.82-21.974-212.651-1.418-212.285 0-27.379 11.321-89.533 38.271-113.536 50.525v91.598h512z" fill="#91c656"/><path d="m0 320.877v190.313h512v-38.204c-162.761-83.09-331.726-140.764-512-152.109z" fill="#9bd65e"/><path d="m0 320.877v25.471c167.278 18.786 177.544 39.967 293.554 33.651-94.895-31.82-192.445-52.759-293.554-59.122z" fill="#aced70"/><path d="m84.816 450.584c-40.611-10.418-67.242-19.24-84.816-26.508v87.114h349.585c-60.767-8.329-177.27-24.189-231.454-30.834-75.137-9.216 102.073 4.961-33.315-29.772z" fill="#91c656"/></svg>
            </div>
        </div>)
    }


}

export default Window; 