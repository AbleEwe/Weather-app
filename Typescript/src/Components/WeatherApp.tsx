import search_icon from '../assets/Logos/search.png'
import cloud_icon from '../assets/Logos/cloud.png'
import humidity_icon from '../assets/Logos/humidity.png'
import wind_icon from '../assets/Logos/wind.png'
import './WeatherApp.css'
import { optionType } from '../Types'
import { ChangeEvent } from 'react'

type Props = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}

const WeatherApp = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit
}: Props): JSX.Element => {
  
  return (
    <div className='page-wrap'>
      <section className='weather-container'>
        <div className="top-bar">
          <input type='text' className='city-input' placeholder='Search' onChange={onInputChange} value={term}/>
          <ul className='options-list'>
          {options.map((option: optionType, index : number) => (
            <li key={option.name + '_' + index}>
              <button onClick={() => onOptionSelect(option)}>
              {option.name}
              </button>
            </li>
          ))}
          </ul>
          <div className="search-icon" onClick={onSubmit}>
            <img src={search_icon} alt='search-icon'/>
          </div>
        </div>
        <div className="weather-image">
          <img src={cloud_icon} alt='cloud-icon'/>
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">Mexico</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="humidity icon" className="icon" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="wind icon" className="icon" />
            <div className="data">
              <div className="humidity-percent">18 km/h</div>
              <div className="text">Wind speed</div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default WeatherApp
