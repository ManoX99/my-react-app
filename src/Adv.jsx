import { useRef } from 'react';
import './adv.scss';

// text-wrap: pretty;
const AdvancedSearch = () => {
  const formRef = useRef(null);
  const selRef = useRef(null);

  const handleClick = () => {
    // const data = new FormData(formRef.current);
    // console.log(data);
    // console.log(data.getAll('options'));
    // for (let [key, val] of data) {
    //   console.log(key, val);
    // }
    for (let i = 0; i < selRef.current.selectedOptions.length; i++) {
      console.log(selRef.current.selectedOptions[i].value);
    }
  };

  return (
    <div className='adv-search'>
      <h1 className='adv-search'>Advanced Search</h1>
      <button onClick={handleClick}>GET DATA</button>
      <form ref={formRef}>
        <fieldset className='adv-search__fieldset'>
          <legend className='adv-search__legend'>My inputs</legend>
          <div className='adv-search__checkbox-wrapper'>
            <label
              htmlFor='adv-search-checkbox-1'
              className='adv-search__label'>
              option 1
            </label>
            <input
              id='adv-search-checkbox-1'
              className='adv-search__checkbox'
              type='checkbox'
              name='option'
              value='1'
              onChange={(e) => console.log(e.target.value)}></input>
          </div>

          <div className='adv-search__checkbox-wrapper'>
            <label
              htmlFor='adv-search-checkbox-2'
              className='adv-search__label'>
              option 2
            </label>
            <input
              id='adv-search-checkbox-2'
              className='adv-search__checkbox'
              type='checkbox'
              name='option'
              value='2'
              onChange={(e) => console.log(e.target.value)}></input>
          </div>
          <div className='adv-search__checkbox-wrapper'>
            <label
              htmlFor='adv-search-checkbox-3'
              className='adv-search__label'>
              option 3
            </label>
            <input
              id='adv-search-checkbox-3'
              className='adv-search__checkbox'
              type='checkbox'
              name='option'
              value='3'
              onChange={(e) => console.log(e.target.value)}></input>
          </div>
          <div className='adv-search__checkbox-wrapper'>
            <label
              htmlFor='adv-search-checkbox-4'
              className='adv-search__label'>
              option 4
            </label>
            <input
              id='adv-search-checkbox-4'
              className='adv-search__checkbox'
              type='checkbox'
              name='option'
              value='4'
              onChange={(e) => console.log(e.target.value)}></input>
          </div>
        </fieldset>
        <select ref={selRef} multiple={true} name='options' value={[1, 3, 'a']}>
          <optgroup label='first'>
            <option value='1'>hello 1</option>
            <option value='2'>hello 2</option>
            <option value='3'>hello 3</option>
            <option value='4'>hello 4</option>
          </optgroup>
          <optgroup label='second'>
            <option value='a'>buy 1</option>
            <option value='b'>buy 2</option>
            <option value='c'>buy 3</option>
            <option value='d'>buy 4</option>
          </optgroup>
        </select>
      </form>
    </div>
  );
};

export default AdvancedSearch;
