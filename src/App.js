import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import AddBook from "./components/AddBook";
import {List} from "./components/List";
import {Filters} from "./components/Filters";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [{
                title: 'Harry Potter',
                author: 'Rowling',
                isLoaned: false,
                tags: ['książka', 'Potter']
            },{
                title: 'Władca Pierścienie: dwie wieże',
                author: 'Tolkien',
                isLoaned: false,
                tags: ['Frodo','Tolkien','książka']
            },{
                title: 'Mistrz i Małgorzata',
                author: 'Michał B.',
                isLoaned: false,
                tags: ['Mistrz','Małgorzata']
            }],
        }
    }

    handleClickRemove = (index) => {
        var newData = this.state.items.slice();
        newData.splice(index, 1);

        this.setState({
            items: newData
        })
    }

    // handleClickLoaned = (bool, index) => {
    //     var newData = this.state.items.slice();
    //     console.log(newData[1].isLoaned);
    //
    //     this.setState({
    //         isLoaned: !this.state.isLoaned
    //     })
    // }

    handelAddNew = (values) => {
        console.log(values.title);
        const newItems = [...this.state.items];
        newItems.push({
            title: values.title,
            author: values.author,
            tags: values.tags.split(',')
        });

        this.setState({
            items: newItems
        })
    }

    showByTags = (value) => {

    }



  render() {
    return (
      <div className="App">
          <Header/>
          <Filters items={this.state.items} onClickShow={this.showByTags}/>
          <List items={this.state.items} onSubmitRemove={this.handleClickRemove} />
          <AddBook onSubmit={this.handelAddNew}/>
      </div>
    );
  }
}

export default App;
