import React from "react";
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from "./ToDonesContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Help from "./Help"
import NotFound from "./NotFound";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 0, text: "Wash my face", done: false },
        { id: 1, text: "Do live Coding", done: false },
        { id: 2, text: "Pay my rent", done: false },
        { id: 3, text: "Walk the Dog", done: true },
        { id: 4, text: "create a website", done: false },
        { id: 5, text: "Finish reading my book", done: false },
        { id: 6, text: "Call my mom", done: false },
        { id: 7, text: "Make a coffee", done: false },
      ],
    };
  }

  //life-cycle method which executes only once.
  componentDidMount() {
    console.log("component did mount");
    //get data stored in localstorage
    let storedItems = localStorage.getItem("to-do-app");
    //converting into original form
    let convertedToOriginal = JSON.parse(storedItems);

    if (storedItems !== null) {
      //storing it in our state
      this.setState({
        items: convertedToOriginal,
      });
    }
  }

  /*
  updating phase (life cycle)
   shouldComponentUpdate(nextprops, nextstate){
    if(nextState.score!==this.state.score)
      return true
  }else{
    return false
  }   */

  /*   unmounting phase 
  componentWillUnmount(){
    //execute just before component removed from the DOM
    //cleanup code
    //close all background running tasks.
  }
*/

  updateItem = (id) => {
    const updatedItems = this.state.items.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
        return item;
      } else {
        return item;
      }
    });

    this.setState(
      {
        items: updatedItems,
      },
      () => {
        //storing updated state items into localStorage
        localStorage.setItem("to-do-app", JSON.stringify(this.state.items));
      }
    );
  };

  deleteItem = (id) => {
    const updatedItems = this.state.items.filter((item) => item.id !== id);

    this.setState(
      {
        items: updatedItems,
      },
      () => {
        //storing updated state items into localStorage
        localStorage.setItem("to-do-app", JSON.stringify(this.state.items));
      }
    );
  };

  AddItem = (InputText) => {
    const item = {
      id: this.state.items.length,
      text: InputText,
      done: false,
    };
    /* this.state.items.push(item) directly mutate your state */
    this.setState(
      {
        items: [item, ...this.state.items],
      },
      () => {
        //storing state items into localStorage
        localStorage.setItem("to-do-app", JSON.stringify(this.state.items));
      }
    );
  };

  render() {
    console.log("render from App");
    const toDones = this.state.items.filter((item) => item.done === true);
    const toDos = this.state.items.filter((item) => item.done === false);

    return (
      <BrowserRouter>
        <div className="app">
          <Navigation />
          {/* <Route path="/" component={NameOfheComponent}/>  //you will receive browserRouter props but not pass custom props*/}

          {/* <Route path="/" render={(props)=><ComponentTag {...props} customerProps/>}/> //you will receive browserRouter props and pass custom props */}

          {/*    <Route path="/" //you will not receive browserRouter props but can pass custom props>
            <Components1/>
            <Components2/>
          </Route> */}
          <Switch> 
 
          <Route exact path="/">
            <ToDosContainer
              deleteItemProps={this.deleteItem}
              updateItemProps={this.updateItem}
              toDosProps={toDos}
              AddItemProps={this.AddItem}
            />
            <ToDonesContainer
              deleteItemProps={this.deleteItem}
              updateItemProps={this.updateItem}
              toDonesProps={toDones}
            />
          </Route>
          <Route exact path="/help" component={Help}/>
          <Route component={NotFound}/> {/* fallback ui for your routes ,remember use notfound route at the end of all routes. */}
          </Switch>




          {/* <Route
            path="/"
            render={(props) => {
              return (
                <>
                  <ToDosContainer
                    {...props}
                    deleteItemProps={this.deleteItem}
                    updateItemProps={this.updateItem}
                    toDosProps={toDos}
                    AddItemProps={this.AddItem}
                  />
                  <ToDonesContainer
                    {...props}
                    deleteItemProps={this.deleteItem}
                    updateItemProps={this.updateItem}
                    toDonesProps={toDones}
                  />
                </>
              );
            }}
          /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
