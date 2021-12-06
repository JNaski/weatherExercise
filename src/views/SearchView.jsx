import React from 'react';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../components/inputs/FormInput';
import { FormSelect } from '../components/inputs/FormSelect';
import { PrimaryButton } from '../components/buttons/Button';
import { measurementUnits } from '../util/constants'; 


const SearchView = ({submitSearch}) => {

  const {register, handleSubmit, errors} = useForm({mode:'onBlur'});
  
  const onSubmit = (data) => {
    submitSearch(data);
  }

  return (
    <div className="bg-gray-300 h-full px-3 py-3">
      <h1 className="mt-1 mb-5 text-xl font-extrabold text-lg">Search for local weather</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
       <FormTextInput 
          id={'searchInput'}
          label={'Insert town name'}
          inputRef={register('searchInput', {required: 'Required'})}
          autoComplete={'off'}
        />
        <FormSelect
          id={'unitSelect'}
          label={'Select measurement unit'}
          inputRef={register('unitSelect')}
          options={measurementUnits} />

        <PrimaryButton className="float-right">Search</PrimaryButton>
      </form>
      
      <p className="mt-20 text-sm">* Enter city to check weather, you can also select the measurement units</p>
    </div>
  );
};

export default SearchView;