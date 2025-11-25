import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, ArrowLeft, CheckCircle, Monitor, PenTool, Microscope, Briefcase, Users, Heart, Zap, Globe, Award, Coffee, BarChart, Book, TrendingUp, Target, Lightbulb, Building, Palette } from 'lucide-react';

const Test = () => {
    const navigate = useNavigate();
    const { user, saveResult } = useAuth();
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({});

    const totalSteps = 10;

    const handleOptionSelect = (questionId, value) => {
        setAnswers({ ...answers, [questionId]: value });
    };

    const calculateResult = () => {
        // Scoring system for each career
        const careerScores = {
            'software-engineering': 0,
            'data-science': 0,
            'product-design': 0,
            'marketing': 0,
            'business': 0,
            'medicine': 0,
            'law': 0,
            'civil-engineering': 0,
            'architecture': 0,
            'psychology': 0,
            'accounting': 0,
            'industrial-engineering': 0,
            'nursing': 0,
            'education': 0,
            'economics': 0,
            'environmental-engineering': 0,
            'nutrition': 0,
            'communications': 0,
            'gastronomy': 0,
            'tourism': 0,
            'graphic-design': 0,
            'systems-engineering': 0,
            'electronic-engineering': 0,
            'mechatronics': 0,
            'human-resources': 0,
            'international-business': 0,
            'veterinary': 0
        };

        // Question 1: Interests
        if (answers.q1 === 'Tecnología y programación') {
            careerScores['software-engineering'] += 10;
            careerScores['data-science'] += 8;
            careerScores['systems-engineering'] += 9;
            careerScores['electronic-engineering'] += 7;
            careerScores['mechatronics'] += 7;
        } else if (answers.q1 === 'Arte y diseño') {
            careerScores['product-design'] += 10;
            careerScores['architecture'] += 9;
            careerScores['graphic-design'] += 10;
            careerScores['gastronomy'] += 6;
        } else if (answers.q1 === 'Salud y medicina') {
            careerScores['medicine'] += 10;
            careerScores['nursing'] += 9;
            careerScores['nutrition'] += 8;
            careerScores['psychology'] += 7;
            careerScores['veterinary'] += 8;
        } else if (answers.q1 === 'Negocios y finanzas') {
            careerScores['business'] += 10;
            careerScores['marketing'] += 9;
            careerScores['accounting'] += 9;
            careerScores['economics'] += 9;
            careerScores['international-business'] += 8;
        } else if (answers.q1 === 'Ingeniería y construcción') {
            careerScores['civil-engineering'] += 10;
            careerScores['industrial-engineering'] += 9;
            careerScores['environmental-engineering'] += 8;
            careerScores['mechatronics'] += 7;
        } else if (answers.q1 === 'Comunicación y medios') {
            careerScores['communications'] += 10;
            careerScores['marketing'] += 7;
            careerScores['graphic-design'] += 6;
        } else if (answers.q1 === 'Ciencias sociales') {
            careerScores['psychology'] += 10;
            careerScores['education'] += 9;
            careerScores['law'] += 8;
            careerScores['human-resources'] += 8;
        }

        // Question 2: Skills
        if (answers.q2 === 'Resolver problemas lógicos') {
            careerScores['software-engineering'] += 9;
            careerScores['data-science'] += 9;
            careerScores['systems-engineering'] += 8;
            careerScores['industrial-engineering'] += 7;
        } else if (answers.q2 === 'Crear y diseñar') {
            careerScores['product-design'] += 9;
            careerScores['architecture'] += 9;
            careerScores['graphic-design'] += 9;
            careerScores['gastronomy'] += 7;
        } else if (answers.q2 === 'Ayudar y cuidar personas') {
            careerScores['medicine'] += 9;
            careerScores['nursing'] += 9;
            careerScores['psychology'] += 8;
            careerScores['education'] += 7;
        } else if (answers.q2 === 'Analizar datos y números') {
            careerScores['data-science'] += 9;
            careerScores['accounting'] += 9;
            careerScores['economics'] += 8;
            careerScores['industrial-engineering'] += 6;
        } else if (answers.q2 === 'Liderar y gestionar') {
            careerScores['business'] += 9;
            careerScores['industrial-engineering'] += 7;
            careerScores['human-resources'] += 8;
            careerScores['international-business'] += 7;
        } else if (answers.q2 === 'Comunicar ideas') {
            careerScores['communications'] += 9;
            careerScores['marketing'] += 8;
            careerScores['law'] += 7;
            careerScores['education'] += 6;
        }

        // Question 3: Work Environment
        if (answers.q3 === 'En una oficina moderna') {
            careerScores['software-engineering'] += 7;
            careerScores['marketing'] += 7;
            careerScores['business'] += 7;
            careerScores['accounting'] += 6;
        } else if (answers.q3 === 'En campo o exteriores') {
            careerScores['civil-engineering'] += 8;
            careerScores['environmental-engineering'] += 8;
            careerScores['tourism'] += 7;
            careerScores['veterinary'] += 6;
        } else if (answers.q3 === 'En un hospital o clínica') {
            careerScores['medicine'] += 9;
            careerScores['nursing'] += 9;
            careerScores['nutrition'] += 7;
        } else if (answers.q3 === 'En un estudio creativo') {
            careerScores['architecture'] += 8;
            careerScores['graphic-design'] += 8;
            careerScores['product-design'] += 7;
        } else if (answers.q3 === 'En un laboratorio') {
            careerScores['data-science'] += 7;
            careerScores['medicine'] += 6;
            careerScores['nutrition'] += 6;
            careerScores['environmental-engineering'] += 6;
        } else if (answers.q3 === 'Viajando constantemente') {
            careerScores['tourism'] += 9;
            careerScores['international-business'] += 8;
            careerScores['communications'] += 6;
        }

        // Question 4: Learning Style
        if (answers.q4 === 'Práctica y experimentación') {
            careerScores['gastronomy'] += 8;
            careerScores['architecture'] += 7;
            careerScores['nursing'] += 7;
            careerScores['graphic-design'] += 7;
        } else if (answers.q4 === 'Teoría y lectura') {
            careerScores['law'] += 8;
            careerScores['medicine'] += 7;
            careerScores['psychology'] += 7;
            careerScores['economics'] += 7;
        } else if (answers.q4 === 'Proyectos en equipo') {
            careerScores['business'] += 8;
            careerScores['marketing'] += 8;
            careerScores['industrial-engineering'] += 7;
            careerScores['human-resources'] += 7;
        } else if (answers.q4 === 'Estudio individual') {
            careerScores['software-engineering'] += 7;
            careerScores['accounting'] += 7;
            careerScores['data-science'] += 6;
        }

        // Question 5: Motivation
        if (answers.q5 === 'Alto salario') {
            careerScores['medicine'] += 8;
            careerScores['software-engineering'] += 7;
            careerScores['economics'] += 7;
            careerScores['law'] += 6;
        } else if (answers.q5 === 'Ayudar a la sociedad') {
            careerScores['medicine'] += 8;
            careerScores['education'] += 8;
            careerScores['psychology'] += 7;
            careerScores['environmental-engineering'] += 7;
        } else if (answers.q5 === 'Creatividad y expresión') {
            careerScores['architecture'] += 8;
            careerScores['graphic-design'] += 8;
            careerScores['gastronomy'] += 7;
            careerScores['communications'] += 7;
        } else if (answers.q5 === 'Estabilidad laboral') {
            careerScores['accounting'] += 8;
            careerScores['education'] += 7;
            careerScores['nursing'] += 7;
            careerScores['law'] += 6;
        } else if (answers.q5 === 'Reconocimiento e impacto') {
            careerScores['business'] += 7;
            careerScores['marketing'] += 7;
            careerScores['law'] += 7;
            careerScores['communications'] += 6;
        }

        // Question 6: Subject Preference
        if (answers.q6 === 'Matemáticas') {
            careerScores['software-engineering'] += 8;
            careerScores['data-science'] += 8;
            careerScores['economics'] += 7;
            careerScores['accounting'] += 6;
        } else if (answers.q6 === 'Ciencias (Biología/Química)') {
            careerScores['medicine'] += 9;
            careerScores['nursing'] += 8;
            careerScores['veterinary'] += 8;
            careerScores['nutrition'] += 7;
        } else if (answers.q6 === 'Arte y Diseño') {
            careerScores['graphic-design'] += 9;
            careerScores['architecture'] += 8;
            careerScores['product-design'] += 8;
        } else if (answers.q6 === 'Ciencias Sociales') {
            careerScores['psychology'] += 8;
            careerScores['law'] += 7;
            careerScores['communications'] += 7;
            careerScores['human-resources'] += 6;
        } else if (answers.q6 === 'Tecnología') {
            careerScores['software-engineering'] += 9;
            careerScores['systems-engineering'] += 8;
            careerScores['electronic-engineering'] += 8;
        }

        // Question 7: Personality Type
        if (answers.q7 === 'Extrovertido y social') {
            careerScores['marketing'] += 8;
            careerScores['tourism'] += 8;
            careerScores['communications'] += 7;
            careerScores['human-resources'] += 7;
        } else if (answers.q7 === 'Introvertido y analítico') {
            careerScores['software-engineering'] += 8;
            careerScores['data-science'] += 8;
            careerScores['accounting'] += 7;
        } else if (answers.q7 === 'Empático y comprensivo') {
            careerScores['psychology'] += 9;
            careerScores['nursing'] += 8;
            careerScores['education'] += 8;
        } else if (answers.q7 === 'Innovador y arriesgado') {
            careerScores['business'] += 8;
            careerScores['architecture'] += 7;
            careerScores['gastronomy'] += 7;
        }

        // Question 8: Work Style
        if (answers.q8 === 'Trabajo independiente') {
            careerScores['software-engineering'] += 7;
            careerScores['graphic-design'] += 7;
            careerScores['accounting'] += 6;
        } else if (answers.q8 === 'Trabajo en equipo') {
            careerScores['business'] += 8;
            careerScores['industrial-engineering'] += 8;
            careerScores['marketing'] += 7;
            careerScores['human-resources'] += 7;
        } else if (answers.q8 === 'Liderando proyectos') {
            careerScores['business'] += 8;
            careerScores['industrial-engineering'] += 7;
            careerScores['civil-engineering'] += 7;
        }

        // Question 9: Challenge Type
        if (answers.q9 === 'Problemas técnicos complejos') {
            careerScores['software-engineering'] += 9;
            careerScores['electronic-engineering'] += 8;
            careerScores['mechatronics'] += 8;
            careerScores['data-science'] += 7;
        } else if (answers.q9 === 'Casos únicos con personas') {
            careerScores['medicine'] += 9;
            careerScores['psychology'] += 8;
            careerScores['law'] += 7;
        } else if (answers.q9 === 'Proyectos creativos') {
            careerScores['architecture'] += 8;
            careerScores['graphic-design'] += 8;
            careerScores['gastronomy'] += 7;
        } else if (answers.q9 === 'Estrategias de negocio') {
            careerScores['business'] += 9;
            careerScores['marketing'] += 8;
            careerScores['economics'] += 7;
        }

        // Question 10: Impact Vision
        if (answers.q10 === 'Innovación tecnológica') {
            careerScores['software-engineering'] += 8;
            careerScores['mechatronics'] += 7;
            careerScores['data-science'] += 7;
        } else if (answers.q10 === 'Mejorar la salud') {
            careerScores['medicine'] += 9;
            careerScores['nursing'] += 8;
            careerScores['nutrition'] += 7;
            careerScores['veterinary'] += 6;
        } else if (answers.q10 === 'Desarrollo sostenible') {
            careerScores['environmental-engineering'] += 9;
            careerScores['civil-engineering'] += 6;
            careerScores['architecture'] += 6;
        } else if (answers.q10 === 'Crecimiento económico') {
            careerScores['business'] += 8;
            careerScores['economics'] += 8;
            careerScores['international-business'] += 7;
        } else if (answers.q10 === 'Educación y cultura') {
            careerScores['education'] += 9;
            careerScores['communications'] += 7;
            careerScores['psychology'] += 6;
        } else if (answers.q10 === 'Arte y diseño') {
            careerScores['architecture'] += 8;
            careerScores['graphic-design'] += 8;
            careerScores['product-design'] += 7;
        }

        // Find the career with highest score
        let maxScore = 0;
        let topCareer = 'software-engineering';

        for (const [career, score] of Object.entries(careerScores)) {
            if (score > maxScore) {
                maxScore = score;
                topCareer = career;
            }
        }

        // Return complete result object for personalization
        return {
            topCareer,
            scores: careerScores,
            answers
        };
    };

    const nextStep = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            const resultData = calculateResult();

            // Save complete result if user is logged in
            if (user) {
                saveResult(resultData);
            }

            // Pass the result to the dashboard via state
            navigate('/dashboard', { state: { resultData } });
        }
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const currentQuestionKey = `q${step}`;
    const isCurrentStepAnswered = !!answers[currentQuestionKey];

    // Questions configuration
    const questions = {
        1: {
            title: "¿Qué área te apasiona más?",
            subtitle: "Elige el campo donde te gustaría especializarte",
            options: [
                { label: 'Tecnología y programación', icon: <Monitor />, desc: 'Software, IA, Apps' },
                { label: 'Arte y diseño', icon: <PenTool />, desc: 'Creatividad visual' },
                { label: 'Salud y medicina', icon: <Heart />, desc: 'Cuidado de personas' },
                { label: 'Negocios y finanzas', icon: <Briefcase />, desc: 'Emprendimiento, economía' },
                { label: 'Ingeniería y construcción', icon: <Building />, desc: 'Infraestructura, obras' },
                { label: 'Comunicación y medios', icon: <Globe />, desc: 'Periodismo, marketing' },
                { label: 'Ciencias sociales', icon: <Users />, desc: 'Psicología, educación' }
            ]
        },
        2: {
            title: "¿En qué habilidad destacas más?",
            subtitle: "Piensa en actividades donde otros reconocen tu talento",
            options: [
                { label: 'Resolver problemas lógicos', icon: <Zap />, desc: 'Puzzles, matemáticas' },
                { label: 'Crear y diseñar', icon: <Palette />, desc: 'Arte, innovación' },
                { label: 'Ayudar y cuidar personas', icon: <Heart />, desc: 'Empatía, servicio' },
                { label: 'Analizar datos y números', icon: <BarChart />, desc: 'Estadística, finanzas' },
                { label: 'Liderar y gestionar', icon: <Award />, desc: 'Coordinación, equipos' },
                { label: 'Comunicar ideas', icon: <Globe />, desc: 'Hablar, escribir, persuadir' }
            ]
        },
        3: {
            title: "¿Dónde te ves trabajando?",
            subtitle: "El ambiente laboral que prefieres",
            options: [
                { label: 'En una oficina moderna', icon: <Building />, desc: 'Tech, startups' },
                { label: 'En campo o exteriores', icon: <Globe />, desc: 'Naturaleza, obras' },
                { label: 'En un hospital o clínica', icon: <Heart />, desc: 'Salud, medicina' },
                { label: 'En un estudio creativo', icon: <Palette />, desc: 'Diseño, arquitectura' },
                { label: 'En un laboratorio', icon: <Microscope />, desc: 'Investigación, ciencia' },
                { label: 'Viajando constantemente', icon: <Globe />, desc: 'Turismo, negocios' }
            ]
        },
        4: {
            title: "¿Cómo prefieres aprender?",
            subtitle: "Tu estilo de estudio ideal",
            options: [
                { label: 'Práctica y experimentación', icon: <Zap />, desc: 'Hacer y probar' },
                { label: 'Teoría y lectura', icon: <Book />, desc: 'Libros, investigación' },
                { label: 'Proyectos en equipo', icon: <Users />, desc: 'Colaboración' },
                { label: 'Estudio individual', icon: <Lightbulb />, desc: 'Autonomía' }
            ]
        },
        5: {
            title: "¿Qué te motiva más en una carrera?",
            subtitle: "Lo más importante para ti",
            options: [
                { label: 'Alto salario', icon: <TrendingUp />, desc: 'Buenos ingresos' },
                { label: 'Ayudar a la sociedad', icon: <Heart />, desc: 'Impacto social' },
                { label: 'Creatividad y expresión', icon: <Palette />, desc: 'Libertad artística' },
                { label: 'Estabilidad laboral', icon: <Award />, desc: 'Seguridad' },
                { label: 'Reconocimiento e impacto', icon: <Target />, desc: 'Prestigio' }
            ]
        },
        6: {
            title: "¿Qué materia disfrutabas más en el colegio?",
            subtitle: "Tus áreas académicas favoritas",
            options: [
                { label: 'Matemáticas', icon: <BarChart />, desc: 'Números, lógica' },
                { label: 'Ciencias (Biología/Química)', icon: <Microscope />, desc: 'Laboratorio' },
                { label: 'Arte y Diseño', icon: <Palette />, desc: 'Creatividad visual' },
                { label: 'Ciencias Sociales', icon: <Users />, desc: 'Historia, psicología' },
                { label: 'Tecnología', icon: <Monitor />, desc: 'Computación' }
            ]
        },
        7: {
            title: "¿Cómo te describirías?",
            subtitle: "Tu tipo de personalidad",
            options: [
                { label: 'Extrovertido y social', icon: <Users />, desc: 'Me gusta estar con gente' },
                { label: 'Introvertido y analítico', icon: <Book />, desc: 'Prefiero el pensamiento profundo' },
                { label: 'Empático y comprensivo', icon: <Heart />, desc: 'Entiendo a los demás' },
                { label: 'Innovador y arriesgado', icon: <Lightbulb />, desc: 'Me gustan los retos' }
            ]
        },
        8: {
            title: "¿Cómo prefieres trabajar?",
            subtitle: "Tu estilo de trabajo ideal",
            options: [
                { label: 'Trabajo independiente', icon: <Lightbulb />, desc: 'Por mi cuenta' },
                { label: 'Trabajo en equipo', icon: <Users />, desc: 'Colaborativo' },
                { label: 'Liderando proyectos', icon: <Award />, desc: 'Dirigiendo equipos' }
            ]
        },
        9: {
            title: "¿Qué tipo de desafío te atrae más?",
            subtitle: "Los retos que disfrutas resolver",
            options: [
                { label: 'Problemas técnicos complejos', icon: <Zap />, desc: 'Ingeniería, código' },
                { label: 'Casos únicos con personas', icon: <Heart />, desc: 'Salud, derecho' },
                { label: 'Proyectos creativos', icon: <Palette />, desc: 'Diseño, arte' },
                { label: 'Estrategias de negocio', icon: <Target />, desc: 'Empresas, marketing' }
            ]
        },
        10: {
            title: "¿En qué área quieres generar impacto?",
            subtitle: "Tu visión de futuro",
            options: [
                { label: 'Innovación tecnológica', icon: <Monitor />, desc: 'Transformar con tech' },
                { label: 'Mejorar la salud', icon: <Heart />, desc: 'Cuidado de personas' },
                { label: 'Desarrollo sostenible', icon: <Globe />, desc: 'Medio ambiente' },
                { label: 'Crecimiento económico', icon: <TrendingUp />, desc: 'Negocios, finanzas' },
                { label: 'Educación y cultura', icon: <Book />, desc: 'Formar personas' },
                { label: 'Arte y diseño', icon: <Palette />, desc: 'Expresión creativa' }
            ]
        }
    };

    const currentQuestion = questions[step];

    return (
        <div className="page-container">
            <div className="container max-w-lg">
                {/* Progress Header */}
                <div className="test-header">
                    <h1 className="heading-md text-white mb-2">Descubriendo tu perfil vocacional</h1>
                    <p className="text-body text-sm mb-4">Pregunta {step} de {totalSteps}</p>

                    <div className="progress-bar-container">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${(step / totalSteps) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="test-content">
                    <StepContent
                        title={currentQuestion.title}
                        subtitle={currentQuestion.subtitle}
                        options={currentQuestion.options}
                        onSelect={(val) => handleOptionSelect(currentQuestionKey, val)}
                        selected={answers[currentQuestionKey]}
                    />
                </div>

                {/* Navigation Footer */}
                <div className="test-footer">
                    <button
                        onClick={prevStep}
                        className={`btn btn-outline ${step === 1 ? 'invisible' : ''}`}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
                    </button>

                    <button
                        onClick={nextStep}
                        disabled={!isCurrentStepAnswered}
                        className="btn btn-primary"
                    >
                        {step === totalSteps ? 'Ver Resultados' : 'Siguiente'} <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const StepContent = ({ title, subtitle, options, onSelect, selected }) => (
    <div className="step-container">
        <div className="step-header">
            <h2 className="heading-lg text-white">{title}</h2>
            <p className="text-body">{subtitle}</p>
        </div>

        <div className="options-grid">
            {options.map((opt) => (
                <button
                    key={opt.label}
                    onClick={() => onSelect(opt.label)}
                    className={`option-card ${selected === opt.label ? 'selected' : ''}`}
                >
                    <div className="option-icon">
                        {opt.icon}
                    </div>

                    <div className="option-info">
                        <div className="option-header">
                            <h3 className="option-title">{opt.label}</h3>
                            {selected === opt.label && <CheckCircle className="check-icon" />}
                        </div>
                        <p className="option-desc">{opt.desc}</p>
                    </div>
                </button>
            ))}
        </div>
    </div>
);

export default Test;
