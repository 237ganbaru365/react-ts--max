//tsx for the components using typescript
//ts just for a typescript dependencies

//interface is altanative way to decreare the type for typescript
// interface Todo {
//   id: string;
//   text: string;
// }

class Todo {
  //in TypeSctipt these are necesarry to decrere
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = new Date().toISOString();
    this.text = todoText;
  }
}

export default Todo;
