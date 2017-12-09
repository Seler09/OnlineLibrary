import React from 'react';
import '../css/AddBookStyle.css'


class AddBookInfo extends React.Component{
    // const items = [{
    //     infoTitle: 'Tytuł'
    // },{
    //     infoTitle: 'Autor'
    // },{
    //     infoTitle: 'Tagi'
    // }];
    render(){
        return(

                <div className='infoBar'>
                    <div className='info'>
                        <div className='infoTitle'>Tytuł</div>
                        <input className='input'/>
                    </div>
                    <div className='clear'/>
                </div>

        );
    }
}
export default AddBookInfo;