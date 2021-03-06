import './Promo.css';

// нет css preview section
function Promo(props) {
    return (
        <section className="preview section">
            <div className="banner">
                <h1 className="banner__heading">Учебный проект студента факультета Веб-разработки.</h1>
                <div className="banner-link-container">
                    <a href="#about-project" className="link banner__link">О проекте</a>
                    <a href="#technologies" className="link banner__link">Технологии</a>
                    <a href="#student" className="link banner__link">Студент</a>
                </div>
            </div>
        </section>    
    );    
}

export default Promo;
