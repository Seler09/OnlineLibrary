import React from 'react';

export class Filters extends React.Component{
    listOfFilters = () =>{
        let newArray = [];
        let newArrayItems = [];

        this.props.items.forEach((elem) => {
            console.log('elementy: ' + elem.tags);
            elem.tags.forEach((tag) => {
                newArray.push(tag);
            })
            console.log(newArray);
        })

        console.log("doen: "+newArray);
        let tmp;
        let tmp2;
        newArray.forEach((elem) => {
            if(elem!==tmp2){
                tmp=elem;
            }
            let number=0;

            newArray.forEach((elem) => {
                if(elem===tmp){
                    number++;
                }
            })
            console.log(tmp2);
            newArrayItems.push({number,elem});
            tmp2=elem;

        })
        console.log(newArrayItems)

        return newArrayItems.map((elem)=>{
            return (
                <div className='checkbox'>
                    <input type='checkbox'/>
                    <p className='tag'>{elem.elem + " "}{elem.number}</p>
                </div>)
        })
    };

    render(){
        console.log('Filters');

        return(
            <div>

                {this.listOfFilters()}

            </div>
        );
    }
}