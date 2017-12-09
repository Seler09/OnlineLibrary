import React from 'react';
import '../css/ListItemStyle.css';


export class ListItem extends React.Component{
    handleRemove = (event) => {
        console.log(this.props.index);
        this.props.handleClickRemove(this.props.index);
    }


    render(){
        return(
            <div className='book'>
                <div className='bookHeader'>
                    <h2 id='title'>{this.props.title}</h2>
                    <p id="'autor">Autor: {this.props.author}</p>
                    {/*<button type="submit" className='submitButton' value="Dodaj">Dodaj</button>*/}
                </div>
                <div className='clear'/>
                <div className='bookButtons'>
                    <button type="submit" className='submitButton'  onClick={this.handleRemove}>Usuń</button>
                </div>
                <div className='clear'/>
                <div>
                    <div className='hashtags'>
                        {this.props.tags.map((elem,i) => {
                            return <div  className='hash' key={i}>#{elem}</div>
                        })}
                        <div className='clear'/>
                    </div>
                </div>
            </div>
        );
    }
}

