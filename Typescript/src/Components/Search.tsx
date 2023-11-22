import useForecast from '../hooks/useForecast';
import WeatherApp from './WeatherApp';

const Search = () => {
  const {
    options, 
    term, 
    forecast, 
    onSubmit, 
    onOptionSelect, 
    onInputChange
  } = useForecast()

  return (
    <div>
      {forecast ? ('we have a forecast') : ( 
      <WeatherApp 
      term={term} 
      options={options} 
      onInputChange={onInputChange}
      onOptionSelect={onOptionSelect} 
      onSubmit={onSubmit}/>
      )
      }
    </div>
  )
}

export default Search
