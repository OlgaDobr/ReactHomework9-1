import React from 'react';
import PersonalPage from './Components/PersonalPage';

class App extends React.Component {
    render() {
        const personalInfo = {
            name: 'Ольга',
            phone: '+7 (952) 835-12-30',
            email: 'andromeda2005@bk.ru',
            city: 'Краснодар',
            experience: 'веб-разработка',
            skills: ['JavaScript', 'React', 'Node.js', 'CSS'],
            photo: 'https://fs.top-academy.ru/api/v1/files/kBP-OFQNwFRhmufAAY552OiPBZvp3mam', 
        };

        return (
            <div>
                <PersonalPage
                    name={personalInfo.name}
                    phone={personalInfo.phone}
                    email={personalInfo.email}
                    city={personalInfo.city}
                    experience={personalInfo.experience}
                    skills={personalInfo.skills}
                    photo={personalInfo.photo}
                />
            </div>
        );
    }
}

export default App;

