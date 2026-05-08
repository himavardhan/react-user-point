import React, { useState, useRef } from 'react';

type FormData = {
    departure:string,
    arrival: string,
    trip: 'Two_Way' | 'One_Way',
    departureDate: Date | null,
    returnDate: Date | null,
    passengerCount: number,
}

type FormError = Partial<Record<keyof FormData, string>>;
type FormFieldTouched = Partial<Record<keyof FormData,boolean>>;
type FormFieldDirty = Partial<Record<keyof FormData,boolean>>;
type FormFieldInvalid = Partial<Record<keyof FormData,boolean>>;



export function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    departure: '',
    arrival: '',
    trip: 'Two_Way',
    departureDate: null,
    returnDate: null,
    passengerCount: 1,
  });

    const [error, setError] = useState<FormError>({});
    const [touched, setTouched] = useState<FormFieldTouched>({});
    const [dirty, setDirty] = useState<FormFieldDirty>({});
    const [invalid, setInvalid] = useState<FormFieldInvalid>({});


  const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

    setDirty((prev)=>({
        ...prev,
        [name]: true
    }
    ));

    if(value.trim().length === 0){
        setInvalid((prev)=>({
        ...prev,
        [name]: true
       }
    ));
    }else{
       setInvalid((prev)=>({
        ...prev,
        [name]: false
    }
    ));
    }
    
  };

  const handleTouched = (name: keyof FormData) =>{
    console.log(name);
    setTouched((prev)=>({
        ...prev,
        [name]: true
    }
    ));

    if(formData[name] && (formData[name] as string).trim().length){


    }

    console.log(touched);
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h4> Booking Form </h4>
      <form onSubmit={handleSubmit}  >
        <label htmlFor="departure"> Departure Place :</label>
        <input
          id="departure"
          type="text"
          name="departure"
          aria-label="Departure Place"
          onChange={(e) => handleChange(e)}
          onBlur={ () => handleTouched('departure') }

        />
          { (touched?.departure || dirty?.departure ) && invalid?.departure && <span style={{color:'red',fontSize:'10px'}} > Required </span> }
        <br /> <br />
        <label htmlFor="arrival"> Arrival Place :</label>
        <input
          id="arrival"
          type="text"
          name="arrival"
          aria-label="Arrival Place"
          onChange={(e) => handleChange(e)}
          onBlur={ () => handleTouched('arrival') }
        />{' '}
        { (touched?.arrival || dirty?.arrival ) && invalid?.arrival && <span style={{color:'red',fontSize:'10px'}} > Required </span> }
        <br /> <br />
        <label id="trip"> Trip :</label>
        <input
          id="twoWay"
          type="radio"
          name="trip"
          value='Two_Way'
          aria-labelledby="roundtrip"
          onChange={(e) => handleChange(e)}
        />{' '}
        <label id="roundtrip"> Two Way </label>
        <input
          id="OneWay"
          type="radio"
          name="trip"
          value="One_Way"
          aria-labelledby="oneWaytrip"
          onChange={(e) => handleChange(e)}
        />{' '}
        <label id="oneWaytrip"> One Way </label>
        { (touched?.trip || dirty?.trip ) && invalid?.trip && <span style={{color:'red',fontSize:'10px'}} > Required </span> }
        <br /> <br />
        <label htmlFor="departureDate"> Departure Date </label>
        <input
          id="departureDate"
          type="date"
          name="departureDate"
          aria-label="Departure Date"
          onChange={(e) => handleChange(e)}
        />{' '}
        { (touched?.departureDate || dirty?.departureDate ) && invalid?.departureDate && <span style={{color:'red',fontSize:'10px'}} > Required </span> }
        <br /> <br />
        <label htmlFor="returnDate"> Return Date </label>
        <input
          id="returnDate"
          type="date"
          name="returnDate"
          aria-label="Return Date"
          onChange={(e) => handleChange(e)}
        />{' '}
        { (touched?.returnDate || dirty?.returnDate ) && invalid?.returnDate && <span style={{color:'red',fontSize:'10px'}} > Required </span> }
        <br /> <br />
        <label htmlFor="passengerCount"> Passenger Count </label>
        <input
          id="passengerCount"
          type="number"
          name="passengerCount"
          aria-label="Passenger Count"
          onChange={(e) => handleChange(e)}
        />
        { (touched?.passengerCount || dirty?.passengerCount ) && invalid?.passengerCount && <span style={{color:'red',fontSize:'10px'}} > Required </span> }
        <br /> <br />
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
