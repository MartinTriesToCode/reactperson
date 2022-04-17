import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const location = useLocation();
    const { hej } = location.state;
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('Boden');
    const [country, setCountry] = useState('Sverige');
    const [languages, setLanguages] = useState([]);
    const navigate = useNavigate();
 

        let citiesList =
        hej[0].Cities.length > 0 &&
        hej[0].Cities.map((item) => {
            return (
                <option key = {item.key} value={item}>
                    {item}
                </option>
            );
        }, this);

        let countriesList =
        hej[0].Countries.length > 0 &&
        hej[0].Countries.map((item) => {
            return (
                <option key = {item.key} value={item}>
                    {item}
                </option>
            );
        }, this);

       
        console.log(hej[0].LanguageList)

        let languageList =
        hej[0].LanguageList.length > 0 &&
        hej[0].LanguageList.map((item) => {
            return (
                <option key = {item} value={item}>
                    {item}
                </option>
            );
        }, this);
 
      

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = { name, phone, city, country, languages};
        fetch('/api/React', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                accepts: 'application/json'
            },
            body: JSON.stringify(newPerson)
        }).then(() => {
            console.log('Person created');
            navigate('/People')
        })
    };

    const handleMultiple = (e) => {
        let value = Array.from(
          e.target.selectedOptions,
          (option) => option.value
        );
        setLanguages(value)
      };

     

    return (
        <div className="container">
            <h2>Create new person</h2>
            <form onSubmit={handleSubmit} className="SimpleForm">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="number"
                        className="form-control"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>City</label>
                    <select 
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="form-control">{citiesList}
                    </select>
                </div>

                <div className="form-group">
                    <label>Country</label>
                    <select
                    value={country}
                    required
                    onChange={(e) => setCountry(e.target.value)} 
                    className="form-control">{countriesList}
                    </select>
                </div>

                <div className="form-group">
                    <label>Languages</label>
                    <select
                    multiple={true}
                    value={languages}
                    required
                    onChange={handleMultiple} 
                    className="form-control">{languageList}
                    </select>
                </div>
                <button>Create</button>
              
            </form>
        </div>
    );
};

export default Create;
