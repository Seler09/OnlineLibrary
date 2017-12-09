import React from 'react';
import {ListItem} from "./ListItem";


// const items = [{
//    title: 'Harry Potter',
//    author: 'Rowling',
//     tags: ['książka', 'Potter']
// },{
//     title: 'Władca Pierścienie: dwie wieże',
//     author: 'Tolkien',
//     tags: ['Frodo','Tolkien']
// },{
//     title: 'Mistrz i Małgorzata',
//     author: 'Michał B.',
//     tags: ['Mistrz','Małgorzata']
// }];

export class List extends React.Component{
    render(){
        return(
          <div>
              {this.props.items.map((elem, i) => {
                  return <ListItem key={i} index={i} author={elem.author} title={elem.title} tags={elem.tags} handleClickRemove={this.props.onSubmitRemove}/>;
              })}
          </div>
        );
    }
}