import { Link } from "react-router-dom";
import { useState, FormEvent } from "react";
import axios from "axios";

import "../styles/forms.css";

const Forms = () => {
    const [speciality,setSpecialty]=useState('');
    const [experience,setExperience] = useState('');
    const [abillities,setAbilities]=useState('');
    const [horas, setHoras] = useState("2");
    const [learning,setLearning] = useState('');
    const[knowledge,setKnowledge]=useState('');
    const[info,setInfo] = useState('');

    const handleSubmit= async(event:FormEvent) => {
        event.preventDefault();

        const preference={
            specialty:speciality,
            experience:experience,
            studyTime:horas,
            specificSkills:abillities,
            learningStyle:learning,
            previousKnowledge:knowledge,
            moreAboutMe:info

        };

        try {
            const response = await axios.post("http://10.22.135.18:5000/personalplan/suggestvideos", preference);
            console.log(response.data);
          } catch (error) {
            console.error("Hubo un error al registrar al usuario", error);
          }
    }

    return(
        <form className="formsContainer" onSubmit={handleSubmit}>
            <div className="cabecera">
                <h1>Cuentanos sobre ti</h1>
            </div>
            <div className="data">
                <label htmlFor="especialidad">Elige una especialidad:</label>
                <select name="especialidad" value={speciality} onChange={(e) => setSpecialty(e.target.value)}>
                    <option value="Aprender a programar desde cero">Aprender a programar desde cero</option>
                    <option value="Desarrollo Web Frontend">Desarrollo Web Frontend</option>
                    <option value="Desarrollo Web Backend">Desarrollo Web Backend</option>
                    <option value="Desarrollo Web Fullstack">Desarrollo Web Fullstack</option>
                    <option value="Desarrollo de aplicaciones móviles">Desarrollo de aplicaciones móviles</option>
                    <option value="Bases de datos">Bases de datos</option>
                    <option value="Ciencia de datos">Ciencia de datos</option>
                    <option value="Cloud computing">Cloud computing</option>
                    <option value="Seguridad informática">Seguridad informática</option>
                    <option value="Internet de las cosas">Internet de las cosas</option>
                    <option value="IA y machine learning">IA y machine learning</option>
                    <option value="DevOps">DevOps</option>
                </select>
                <label htmlFor="experiencia">¿Cuál consideras que es tu nivel de experiencia en dicha materia?</label>
                <select name="experiencia" value={experience} onChange={(e) =>setExperience(e.target.value)}>
                    <option value="Ajeno">Ajeno</option>
                    <option value="Principiante">Principiante</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                    <option value="Experto">Experto</option>
                </select>
                <label htmlFor="habilidades">¿Qué habilidades específicas te gustaría desarrollar en este campo?</label>
                <textarea className="habilidades" name="habilidades" maxLength={150} value={abillities} onChange={(e) => setAbilities(e.target.value)}></textarea>
                <label htmlFor="tiempo">¿Cuántas horas tienes disponibles para estudiar cada semana?</label>
                <div className="range">
                    2
                    <input className="rangeInput" type="range" name="tiempo" min={2} max={50} step={1} value={horas} onInput={(e) => setHoras((e.target as HTMLInputElement).value)} />
                    50
                </div>
                <div className="horas">
                    <label htmlFor="horas">Tiempo:</label>
                    <input id="inputHoras" type="number" name="horas" min={2} max={50} value={horas}/>
                </div>
                <label htmlFor="tipoAprendizaje">¿Cuál de las siguientes afirmaciones concuerda contigo?</label>
                <select name="tipoAprendizaje" value={learning} onChange={(e) => setLearning(e.target.value)}>
                    <option value="auditory">Para aprender me funciona más ver videos en internet para comprender qué se está haciendo y luego hacerlo yo.</option>
                    <option value="visual">Para aprender me funciona más leer documentación y proyectos de internet, para luego implementarlo en mis propios programas.</option>
                    <option value="kinesthetic">Para aprender me funciona más aprender sobre la marcha pensando en un proyecto primero y luego ir aprendiendo conforme lo voy requiriendo para el desarrollo</option>
                </select>
                <label htmlFor="conocimiento">En caso de tener conocimiento previo en el tema, cuéntanos sobre lo que ya sabes</label>
                <textarea name="conocimiento" maxLength={150} value={knowledge} onChange={(e) => setKnowledge(e.target.value)}></textarea>
                <label htmlFor="info">Cuéntanos más sobre tí. Si tienes algo que agregar que crees que sería importante escríbelo aquí</label>
                <textarea name="info" maxLength={150} value={info} onChange={(e) => setInfo(e.target.value)}></textarea>
                <button className="submit" type="submit">Enviar datos</button>
            </div>
        </form>
    );
};

export default Forms