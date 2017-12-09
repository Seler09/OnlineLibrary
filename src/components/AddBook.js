import React from 'react';
import '../css/AddBookStyle.css'


class AddBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            tags: ''
        }
    }

    handleClick = (event) =>{
        this.props.onSubmit(this.state);
        this.setState({
            title: '',
            author: '',
            tags: ''
        })

    }

    handleChange = (event) =>{
        console.log(event.target.value);
        this.setState({
            [event.target.id]: event.target.value
        });
    }


    render(){
        return(
                <div className='addBook'>
                    <h2 className='addBookHeader'>Dodaj książkę</h2>
                    <button type="submit" className='submitButton' value="Dodaj" onClick={this.handleClick}>Dodaj</button>
                    <div className='clear'/>

                    <div className='infoBar'>
                        <div className='infoTitle' >Tytuł</div>
                        <input id='title' className='input' placeholder="np. Harry Potter" value={this.state.title} onChange={this.handleChange}/>
                        <div className='infoTitle' >Autor</div>
                        <input id='author' className='input'  placeholder='np. J.K.Rowling' value={this.state.author} onChange={this.handleChange}/>
                        <div className='infoTitle' >Tagi</div>
                        <input id='tags' className='input'  placeholder='harry, potter, anglia' value={this.state.tags} onChange={this.handleChange}/>
                    </div>
                </div>

        );
    }
}
export default AddBook;


