import React from 'react';
import { useRef } from 'react';

//css
import './Contact.css';

//image
import spacing from './images/spacing.png';

//Email
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_o8t6y7i',
                'template_6hrbcfm', 
                form.current,
                '1D-Ag7mXjedg2ZoKI' 
            )
            .then(
                (result) => {
                    alert('Mensagem enviada com sucesso!');
                    console.log(result.text);
                    form.current.reset();
                },
                (error) => {
                    alert('Erro ao enviar a mensagem.');
                    console.error(error.text);
                }
            );
    };
  return (
    <div>
        <div className="contact-container" id='contact'>
            <span>
                <h2>Contato</h2>
            </span>
            <p>Se você está em busca de um profissional apaixonado por criar interfaces intuitivas e soluções inovadoras, ficarei feliz em conversar sobre como posso contribuir para a sua equipe.</p>
            <div className="space"><img src={spacing} alt="" /></div>

            <div className="form-container">
                <form ref={form} onSubmit={handleSubmit}>
                    
                    <input type="text" placeholder='INSIRA SEU NOME*' name='nome' id='nome' required/>

                    <input type="email" placeholder ='INSIRA SEU EMAIL*' id="email" name='email'required/>

                    <input type="number" placeholder='NÚMERO DE TELEFONE*' id='number'  name='number' required/>

                    <textarea name="message" id="message" placeholder='INSIRA SUA MENSAGEM*' required></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact