import React from "react";

class PersonalPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() { 
        const { name, phone, email, city, experience, skills, photo } = this.props;

        return (
            <div style={{ backgroundColor: 'yellow', textAlign: 'center', padding: '20px', border: '4px solid #ccc', borderRadius: '40px', maxWidth: '400px', margin: 'auto' }}>
                <h1>{name}</h1>
                <img src={photo} alt={name} style={{ width: '150px', borderRadius: '75px' }} />
                <p><strong>Телефон:</strong> {phone}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Город:</strong> {city}</p>
                <p><strong>Опыт работы:</strong> {experience}</p>
                <p><strong>Навыки:</strong> {skills.join(', ')}</p>
            </div>
        );}
    
}

export default PersonalPage;
