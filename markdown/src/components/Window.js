import React from "react";

class Window extends React.Component {
  constructor(props) {
    super(props);

    this.handleIcon = this.handleIcon.bind(this);
  }

  handleIcon(id) {
    //HANDLES DAY AND NIGHT CYCLE
    let sunMoon;
    if (this.props.dayNight) {
      sunMoon = "img/sun.svg";
    } else {
      sunMoon = "img/moon.svg";
    }

    if (id >= 200 && id <= 232) {
      // THUNDER STORM
      return (
        <div className="weather--container">
          <img className="storm" src="img/storm.svg" alt="thunderstorm" />
          <img className="storm--two" src="img/storm.svg" alt="thunderstorm" />
          <img className="rain" src="img/rain.svg" alt="rain" />
          <img className="rain--two" src="img/rain.svg" alt="rain" />
        </div>
      );
    } else if (id >= 300 && id <= 321) {
      // DRIZZLE
      return (
        <div className="weather--container">
          <img className="rain" src="img/drizzle.svg" alt="drizzle" />
          <img className="sun" src={sunMoon} alt="sun" />
        </div>
      );
    } else if (id >= 500 && id <= 531) {
      // RAIN
      return (
        <div className="weather--container">
          <img className="rain" src="img/rain.svg" alt="rain" />
          <img className="rain--two" src="img/rain.svg" alt="rain" />
        </div>
      );
    } else if (id >= 600 && id <= 622) {
      // SNOW
      return (
        <div className="weather--container">
          <img className="snow--two" src="img/snow.svg" alt="snow" />
          <img className="snow" src="img/snow.svg" alt="snow" />
          <img className="snowman" src="img/snowman.svg" alt="snowman" />
          <img className="cloud" src="img/greycloud.svg" alt="cloud" />
          <img className="cloud-three" src="img/greycloud.svg" alt="cloud" />
          <img className="cloud-four" src="img/greycloud.svg" alt="cloud" />
          <img className="cloud-five" src="img/greycloud.svg" alt="cloud" />
          <img className="cloud-six" src="img/greycloud.svg" alt="cloud" />
          <img className="cloud-four" src="img/greycloud.svg" alt="cloud" />
          <img className="cloud-two" src="img/greycloud.svg" alt="cloud" />
        </div>
      );
    } else {
      switch (id) {
        case 701: // MIST
          return (
            <div>
              <div className="mist"></div>{" "}
              <img className="sun" src={sunMoon} alt="sun" />
            </div>
          );

        case 711: // SMOKE
          return (
            <div>
              <div className="smoke"></div>{" "}
              <img className="sun" src={sunMoon} alt="sun" />
            </div>
          );
        case 721: // HAZE
          return (
            <div>
              <div className="haze"></div>{" "}
              <img className="sun" src={sunMoon} alt="sun" />
            </div>
          );
        case 731: // DUST
          return (
            <div>
              <div className="dust"></div>{" "}
              <img className="sun" src={sunMoon} alt="sun" />
            </div>
          );
        case 741: // FOG
          return (
            <div>
              <div className="fog"></div>{" "}
              <img className="sun" src={sunMoon} alt="sun" />
            </div>
          );
        case 751: // SAND
          return (
            <div>
              <div className="sand"></div>{" "}
              <img className="sun" src={sunMoon} alt="sun" />
            </div>
          );
        case 761: // DUST
          return (
            <div>
              <div className="dust"></div>{" "}
              <img className="sun" src={sunMoon} alt="sun" />
            </div>
          );
        case 762: // ASH
          return (
            <div>
              <div className="ash"></div>{" "}
              <img className="sun" src={sunMoon} alt="sun" />
            </div>
          );
        case 771: //SQUALL
          return (
            <div>
              <img className="wind" src="img/wind.svg" alt="windy" />
              <img className="wind-two" src="img/wind.svg" alt="windy" />{" "}
              <img className="cloud" src="img/greycloud.svg" alt="cloud" />
              <img
                className="cloud-three"
                src="img/greycloud.svg"
                alt="cloud"
              />
              <img className="cloud-four" src="img/greycloud.svg" alt="cloud" />
              <img className="sun" src={sunMoon} alt="sun" />
            </div>
          );
        case 781: // TORNADO
          return (
            <div className="weather--container">
              <img className="cloud" src="img/greycloud.svg" alt="cloud" />
              <img
                className="cloud-three"
                src="img/greycloud.svg"
                alt="cloud"
              />
              <img className="cloud-four" src="img/greycloud.svg" alt="cloud" />
              <img className="cloud-five" src="img/greycloud.svg" alt="cloud" />
              <img className="cloud-six" src="img/greycloud.svg" alt="cloud" />
              <img className="cloud-four" src="img/greycloud.svg" alt="cloud" />
              <img className="cloud-two" src="img/greycloud.svg" alt="cloud" />
              <img className="tornado" src="img/tornado.svg" alt="cloud" />
            </div>
          );
        case 800:
          return <img className="sun" src={sunMoon} />; // SUNNY
        case 801:
          return (
            <div className="weather--container">
              <img className="cloud" src="img/cloud.svg" alt="cloud" />
              <img className="sun" src={sunMoon} alt="sun" />
            </div>
          ); // FEW CLOUDS
        case 802:
          return (
            <div className="weather--container">
              <img className="cloud" src="img/cloud.svg" alt="cloud" />
              <img className="cloud-two" src="img/cloud.svg" alt="cloud" />
              <img className="sun" src={sunMoon} alt="sun" />
            </div>
          ); // SCATTERED CLOUDS
        case 803:
          return (
            <div className="weather--container">
              <img className="cloud" src="img/cloud.svg" alt="cloud" />
              <img className="cloud-three" src="img/cloud.svg" alt="cloud" />
              <img className="cloud-four" src="img/cloud.svg" alt="cloud" />
              <img className="cloud-two" src="img/cloud.svg" alt="cloud" />
              <img className="sun" src={sunMoon} alt="sun" />
            </div>
          ); // BROKEN CLOUDS
        case 804:
          return (
            <div className="weather--container">
              <img className="cloud" src="img/greycloud.svg" alt="cloud" />
              <img
                className="cloud-three"
                src="img/greycloud.svg"
                alt="cloud"
              />
              <img className="cloud-four" src="img/greycloud.svg" alt="cloud" />
              <img className="cloud-five" src="img/greycloud.svg" alt="cloud" />
              <img className="cloud-six" src="img/greycloud.svg" alt="cloud" />
              <img className="cloud-four" src="img/greycloud.svg" alt="cloud" />
              <img className="cloud-two" src="img/greycloud.svg" alt="cloud" />
            </div>
          ); // OVERCAST
        default:
          <p>{id}</p>;
      }
    }
  }

  render() {
    //    const {weather} = this.props.weatherIconCheck;
    return (
      <div className="window-container">
        <div className="window" style={this.props.dayNight ? {backgroundColor: '#83a8ee'} :{backgroundColor: '#131822'}}>
          {this.props.isLoaded && (
            <div>{this.handleIcon(this.props.weatherID[0].id)}</div>
          )}

          <svg
            id="Layer_1"
            enableBackground="new 0 0 512 512"
            height="512"
            viewBox="0 0 512 512"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m0 205.213v210.82h512v-38.204c-162.761-83.089-326.116-191.992-512-172.616z"
              fill="#aced70"
            />
            <path
              d="m0 205.213v38.154c57.987 2.745 162.11 3.478 227.071-4.952-72.731-26.41-147.854-41.459-227.071-33.202z"
              fill="#c0f28b"
            />
            <path
              d="m98.992 292.513c-23.608 8.307-68.244 6.367-98.992 3.66v89.354c137.4-25.933 348.69-65.816 353.465-66.74 4.544-.879-9.555-20.459-20.262-34.401-9.05-4.44-18.125-8.79-27.23-13.026-46.023 2.431-175.651 10.13-206.981 21.153z"
              fill="#9bd65e"
            />
            <path
              d="m512 256.008v255.182h-512v-91.598c162.761-83.09 331.726-152.239 512-163.584z"
              fill="#9bd65e"
            />
            <path
              d="m376.857 312.361c65.501-19.884 108.264-28.186 135.143-31.397v-24.955c-94.023 5.917-184.969 27.564-273.563 58.706 27.303 10.433 72.557 17.64 138.42-2.354z"
              fill="#aced70"
            />
            <path
              d="m512 386.01c-44.658 28.891-99.146 2.609-186.179-16.943-97.82-21.974-212.651-1.418-212.285 0-27.379 11.321-89.533 38.271-113.536 50.525v91.598h512z"
              fill="#91c656"
            />
            <path
              d="m0 320.877v190.313h512v-38.204c-162.761-83.09-331.726-140.764-512-152.109z"
              fill="#9bd65e"
            />
            <path
              d="m0 320.877v25.471c167.278 18.786 177.544 39.967 293.554 33.651-94.895-31.82-192.445-52.759-293.554-59.122z"
              fill="#aced70"
            />
            <path
              d="m84.816 450.584c-40.611-10.418-67.242-19.24-84.816-26.508v87.114h349.585c-60.767-8.329-177.27-24.189-231.454-30.834-75.137-9.216 102.073 4.961-33.315-29.772z"
              fill="#91c656"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tree"
            viewBox="0 0 64 64"
            width="512"
            height="512"
          >
            <g id="_20-tree" data-name="20-tree">
              <path
                d="M23.72,51.88l-5.51-2.36A2.014,2.014,0,0,1,17,47.68V47l-.02-.1A4.981,4.981,0,0,0,20,45l.09-.19a6.689,6.689,0,0,0,2.92,1.11L23,46v3.04A5.987,5.987,0,0,0,23.72,51.88Z"
                fill="fff"
              />
              <path
                d="M32,48.71V51l-2.81.94-.98-.42A2.014,2.014,0,0,1,27,49.68V45.32a6.948,6.948,0,0,0,.66-.36A7.066,7.066,0,0,0,32,48.71Z"
                fill="fff"
              />
              <path
                d="M34,49a6.935,6.935,0,0,0,4.94-2.05L39,47v3.65a2,2,0,0,1-1.26,1.85L34,54l-4.81-2.06L32,51V48.71A7.01,7.01,0,0,0,34,49Z"
                fill="fff"
              />
              <path
                d="M47,42.28v4.48a2,2,0,0,1-1.11,1.79L43,50V45l-.07-.23A7.942,7.942,0,0,0,47,42.28Z"
                fill="fff"
              />
              <path
                d="M43,45v5.52a6,6,0,0,1-3.02,5.21L36,58l-2-4,3.74-1.5A2,2,0,0,0,39,50.65V47l-.06-.05a6.877,6.877,0,0,0,1.39-1.98c.22.01.44.03.67.03a8.159,8.159,0,0,0,1.93-.23Z"
                fill="#9a6948"
              />
              <path
                d="M29.19,51.94,34,54l2,4,2,5H30V56l-3.36-1.44A6.033,6.033,0,0,1,23,49.04V46l.01-.08A5.365,5.365,0,0,0,24,46a7.02,7.02,0,0,0,3-.68v4.36a2.014,2.014,0,0,0,1.21,1.84Z"
                fill="#9a6948"
              />
              <path
                d="M26.88,28.65a6.033,6.033,0,0,0-1.8,3.44A7.738,7.738,0,0,0,24,32a7,7,0,0,0-3.91,12.81L20,45a4.981,4.981,0,0,1-3.02,1.9A4.526,4.526,0,0,1,16,47a5,5,0,0,1-4.67-3.24A4.178,4.178,0,0,1,10,44a4,4,0,0,1-4-4c0-.14.03-.27.04-.4a5,5,0,0,1,0-9.2C6.03,30.27,6,30.14,6,30a4.961,4.961,0,0,1,7.27-4.43A4.006,4.006,0,0,1,17,23l.08-.01A6.98,6.98,0,0,0,24,29a7.071,7.071,0,0,0,2.65-.52A1.952,1.952,0,0,0,26.88,28.65Z"
                fill="#2f5224"
              />
              <path
                d="M52,16a6.976,6.976,0,0,1-2.59,5.43A6.867,6.867,0,0,0,47,21a7,7,0,0,0-7,7,7.455,7.455,0,0,0,.09,1.06,7.912,7.912,0,0,0-3.67,1.38,5.982,5.982,0,0,0-9.54-1.79,1.952,1.952,0,0,1-.23-.17A7.071,7.071,0,0,1,24,29a6.98,6.98,0,0,1-6.92-6.01A5.365,5.365,0,0,1,17,22a6.767,6.767,0,0,1,.08-1.01c-.03,0-.05.01-.08.01a5,5,0,0,1,0-10c.04,0,.07.01.1.01A5.578,5.578,0,0,1,17,10a5,5,0,0,1,5-5,4.893,4.893,0,0,1,1.99.42A6.986,6.986,0,0,1,33.3,2.83,6.986,6.986,0,0,1,45,8a6.531,6.531,0,0,1-.08,1H45A7,7,0,0,1,52,16Z"
                fill="#5cb34f"
              />
              <path
                d="M32,48.71a7.066,7.066,0,0,1-4.34-3.75,6.948,6.948,0,0,1-.66.36A7.02,7.02,0,0,1,24,46a5.365,5.365,0,0,1-.99-.08,6.689,6.689,0,0,1-2.92-1.11A7,7,0,0,1,24,32a7.738,7.738,0,0,1,1.08.09,6.033,6.033,0,0,1,1.8-3.44,5.982,5.982,0,0,1,9.54,1.79,7.912,7.912,0,0,1,3.67-1.38A7.455,7.455,0,0,1,40,28a7,7,0,0,1,7-7,6.867,6.867,0,0,1,2.41.43,4.551,4.551,0,0,1,.51.21A5.5,5.5,0,0,1,58,26.5a5.543,5.543,0,0,1-1.01,3.18,7,7,0,1,1-8.63,10.46A8.1,8.1,0,0,1,47,42.28a7.942,7.942,0,0,1-4.07,2.49A8.159,8.159,0,0,1,41,45c-.23,0-.45-.02-.67-.03A7,7,0,0,1,34,49,7.01,7.01,0,0,1,32,48.71Z"
                fill="#7bc24f"
              />
              <path
                d="M54,38a7,7,0,0,1-5.64-2.86A8.1,8.1,0,0,1,47,37.28a7.942,7.942,0,0,1-4.07,2.49A8.159,8.159,0,0,1,41,40c-.23,0-.45-.02-.67-.03A7,7,0,0,1,34,44a6.981,6.981,0,0,1-6.34-4.04,6.948,6.948,0,0,1-.66.36A7.02,7.02,0,0,1,24,41a5.365,5.365,0,0,1-.99-.08,6.689,6.689,0,0,1-2.92-1.11,7.007,7.007,0,0,1-2.626-3.3,6.987,6.987,0,0,0,2.626,8.3,6.689,6.689,0,0,0,2.92,1.11A5.365,5.365,0,0,0,24,46a7.02,7.02,0,0,0,3-.68,6.948,6.948,0,0,0,.66-.36A6.981,6.981,0,0,0,34,49a7,7,0,0,0,6.33-4.03c.22.01.44.03.67.03a8.159,8.159,0,0,0,1.93-.23A7.942,7.942,0,0,0,47,42.28a8.1,8.1,0,0,0,1.36-2.14,6.984,6.984,0,0,0,12.167-6.624A6.989,6.989,0,0,1,54,38Z"
                fill="#44853b"
              />
              <path
                d="M57.014,29.693l-.045.007a5.652,5.652,0,0,1-5.855,4.8,6.138,6.138,0,0,1-4.743-2.145,6.045,6.045,0,0,1-1.144,1.605,6.864,6.864,0,0,1-3.422,1.868A7.7,7.7,0,0,1,40.182,36c-.194,0-.379-.015-.564-.023a5.18,5.18,0,0,1-1.168,1.485A6.205,6.205,0,0,1,34.3,39a6.533,6.533,0,0,1-1.681-.218,5.793,5.793,0,0,1-3.65-2.812c-.177.1-.362.187-.555.27a6.513,6.513,0,0,1-2.523.51,5.038,5.038,0,0,1-.832-.06,6.054,6.054,0,0,1-2.456-.833,5.341,5.341,0,0,1-2.318-2.781,7.006,7.006,0,0,0-2.816,3.431,7.007,7.007,0,0,0,2.626,3.3,6.689,6.689,0,0,0,2.92,1.11A5.365,5.365,0,0,0,24,41a7.02,7.02,0,0,0,3-.68,6.948,6.948,0,0,0,.66-.36A6.981,6.981,0,0,0,34,44a7,7,0,0,0,6.33-4.03c.22.01.44.03.67.03a8.159,8.159,0,0,0,1.93-.23A7.942,7.942,0,0,0,47,37.28a8.1,8.1,0,0,0,1.36-2.14,6.991,6.991,0,0,0,12.163-1.615A6.97,6.97,0,0,0,57.014,29.693Z"
                fill="#5cb34f"
              />
              <path
                d="M23.72,51.88a5.966,5.966,0,0,1-.516-1.309L18.611,48.6A1.014,1.014,0,0,1,18,47.68V46.57a4.9,4.9,0,0,1-1.02.33A4.526,4.526,0,0,1,16,47v.68a3.012,3.012,0,0,0,1.816,2.758L23.327,52.8a1,1,0,0,0,.34.08l.779.041A5.946,5.946,0,0,1,23.72,51.88Z"
                fill="#5d241d"
              />
              <path
                d="M31,48.311V50.28l-2.127.712a1,1,0,0,0-.6.555l.916.393,1.383.592,1.744-.584A1,1,0,0,0,33,51V48.928a6.371,6.371,0,0,1-2-.617Z"
                fill="#5d241d"
              />
              <path
                d="M47.973,40.869A7.931,7.931,0,0,1,47,42.28a7.807,7.807,0,0,1-1,.949V46.76a1,1,0,0,1-.558.9L43,48.881V50.52c0,.162-.019.32-.032.48H43a.994.994,0,0,0,.448-.106l2.889-1.45A2.986,2.986,0,0,0,48,46.76V41A.823.823,0,0,0,47.973,40.869Z"
                fill="#5d241d"
              />
              <path
                d="M35.64,61a2,2,0,0,1-1.962-1.608L33,56l-7.231-3.616A1.39,1.39,0,0,1,25,51.141v-.75A1.391,1.391,0,0,1,26.391,49H27V45.32A7.02,7.02,0,0,1,24,46a5.365,5.365,0,0,1-.99-.08L23,46v3.04a6.033,6.033,0,0,0,3.64,5.52L30,56v7h8l-.8-2Z"
                fill="#714226"
              />
              <path
                d="M42.93,44.77A8.159,8.159,0,0,1,41,45c-.23,0-.45-.02-.67-.03a6.877,6.877,0,0,1-1.39,1.98L39,47v3.65a2,2,0,0,1-1.26,1.85L34,54l2,4,2.174-1.24-.125-.186a2,2,0,0,1,.465-2.709L39.8,52.9A3,3,0,0,0,41,50.5V49a2,2,0,0,1,2-2V45Z"
                fill="#714226"
              />
              <path
                d="M52.5,21a5.477,5.477,0,0,0-2.58.64,4.551,4.551,0,0,0-.51-.21A6.867,6.867,0,0,0,47,21a7,7,0,0,0-7,7,7.455,7.455,0,0,0,.09,1.06,7.912,7.912,0,0,0-3.67,1.38,5.991,5.991,0,0,0-11.34,1.65L25,32.08v3l.08.01a6.033,6.033,0,0,1,1.8-3.44,5.982,5.982,0,0,1,9.54,1.79,7.912,7.912,0,0,1,3.67-1.38A7.455,7.455,0,0,1,40,31a7,7,0,0,1,7-7,6.867,6.867,0,0,1,2.41.43,4.551,4.551,0,0,1,.51.21,5.5,5.5,0,0,1,7.863,3.341A5.457,5.457,0,0,0,52.5,21Z"
                fill="#8ee05b"
              />
              <path
                d="M44.082,18.4A9.282,9.282,0,0,0,29.838,22.43c.038-1.346-1.436-2.2-2.748-2.506a11.075,11.075,0,0,0-6.233.4,6.848,6.848,0,0,1-1.336.477c-.514.073-1.045.01-1.566.1a7.458,7.458,0,0,0-.885.215A6.7,6.7,0,0,0,17,22a5.365,5.365,0,0,0,.08.99A6.98,6.98,0,0,0,24,29a7.071,7.071,0,0,0,2.65-.52,1.952,1.952,0,0,0,.23.17,5.982,5.982,0,0,1,9.54,1.79,7.912,7.912,0,0,1,3.67-1.38A7.455,7.455,0,0,1,40,28a7,7,0,0,1,7-7,6.867,6.867,0,0,1,2.41.43A6.975,6.975,0,0,0,51.886,17.2,7.865,7.865,0,0,0,44.082,18.4Z"
                fill="#44853b"
              />
              <path
                d="M50.088,11.2c-.33,0-.66-.015-.991.007a8.481,8.481,0,0,0-5.785,2.542,7.448,7.448,0,0,0-10.908.435,6.837,6.837,0,0,0-10.211,1.688A5.615,5.615,0,0,0,18.1,14.543,8.406,8.406,0,0,0,14,16.031a11.2,11.2,0,0,0-1.74,1.478A4.986,4.986,0,0,0,17,21c.03,0,.05-.01.08-.01-.006.041,0,.083-.01.124a7.458,7.458,0,0,1,.885-.215c.521-.09,1.052-.027,1.566-.1a6.848,6.848,0,0,0,1.336-.477,11.075,11.075,0,0,1,6.233-.4c1.312.3,2.786,1.16,2.748,2.506A9.282,9.282,0,0,1,44.082,18.4a7.865,7.865,0,0,1,7.8-1.2,6.86,6.86,0,0,0-1.8-6Z"
                fill="#52a147"
              />
              <path
                d="M8.081,40.838A21.553,21.553,0,0,1,8.9,38.172a2.333,2.333,0,0,1-1.34-.9,3.825,3.825,0,0,1-.635-3.626,3.428,3.428,0,0,1,1.15-1.535,3.337,3.337,0,0,1,.844-.468c.2-.075.818-.108.888-.285.062-.157-.428-.856-.5-1.024a9.193,9.193,0,0,1-.46-1.213,6.415,6.415,0,0,1-.258-2.538,5.173,5.173,0,0,1,.248-1.071A4.987,4.987,0,0,0,6,30c0,.14.03.27.04.4a5,5,0,0,0,0,9.2c-.01.13-.04.26-.04.4a3.984,3.984,0,0,0,1.907,3.4A9.438,9.438,0,0,1,8.081,40.838Z"
                fill="#39632c"
              />
              <path
                d="M26.65,28.48A7.071,7.071,0,0,1,24,29a6.98,6.98,0,0,1-6.92-6.01L17,23a4,4,0,0,0-3.688,2.482c.313,1.027.719,2.028,1.127,3.022.132.324.265.648.424.96a5.79,5.79,0,0,0,.969,1.455,8.159,8.159,0,0,0-1.12.868,6.013,6.013,0,0,0-.878,1.137,7,7,0,0,0-.928,2.7,11,11,0,0,0,.949,5.592A5.652,5.652,0,0,0,11.538,44.2,4.981,4.981,0,0,0,16,47a4.526,4.526,0,0,0,.98-.1A4.981,4.981,0,0,0,20,45l.09-.19A7,7,0,0,1,24,32a7.738,7.738,0,0,1,1.08.09,6.033,6.033,0,0,1,1.8-3.44A1.952,1.952,0,0,1,26.65,28.48Z"
                fill="#233d1b"
              />
              <path
                d="M13.855,41.22a11,11,0,0,1-.949-5.592,7,7,0,0,1,.928-2.7,6.013,6.013,0,0,1,.878-1.137,8.159,8.159,0,0,1,1.12-.868,5.79,5.79,0,0,1-.969-1.455c-.159-.312-.292-.636-.424-.96-.408-.994-.814-2-1.127-3.022-.013.03-.03.058-.042.088a4.817,4.817,0,0,0-4.436-.057,5.173,5.173,0,0,0-.248,1.071,6.415,6.415,0,0,0,.258,2.538,9.193,9.193,0,0,0,.46,1.213c.077.168.567.867.5,1.024-.07.177-.688.21-.888.285a3.337,3.337,0,0,0-.844.468,3.428,3.428,0,0,0-1.15,1.535,3.825,3.825,0,0,0,.635,3.626,2.333,2.333,0,0,0,1.34.9,21.553,21.553,0,0,0-.821,2.666A9.438,9.438,0,0,0,7.907,43.4,3.966,3.966,0,0,0,10,44a4.178,4.178,0,0,0,1.33-.24c.059.154.136.3.208.444A5.652,5.652,0,0,1,13.855,41.22Z"
                fill="#2f5224"
              />
              <path
                d="M14,16.031A9,9,0,0,1,17.031,14.7,4.987,4.987,0,0,1,22,10a4.893,4.893,0,0,1,1.99.42A6.986,6.986,0,0,1,33.3,7.83,6.979,6.979,0,0,1,44.2,9.743C44.688,9.31,45,9,45,9h-.08A6.531,6.531,0,0,0,45,8,6.986,6.986,0,0,0,33.3,2.83a6.986,6.986,0,0,0-9.31,2.59A4.893,4.893,0,0,0,22,5a5,5,0,0,0-5,5,5.578,5.578,0,0,0,.1,1.01c-.03,0-.06-.01-.1-.01a5,5,0,0,0-5,5,4.859,4.859,0,0,0,.524,2.163,5.121,5.121,0,0,1-.267-.654A11.2,11.2,0,0,1,14,16.031Z"
                fill="#7bc24f"
              />
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default Window;
