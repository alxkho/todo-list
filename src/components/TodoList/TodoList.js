import Todo from "../Todo/Todo";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TodoList = (props) => {
  const { todos, setTodos, filteredTodos } = props;


  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    console.log(result);

    if (!result.destination) {
      return;
    }

    const items = reorder(
      todos,
      result.source.index,
      result.destination.index
    );

    setTodos(items)
  }

  return (

    <DragDropContext className="todo-comtainer" onDragEnd={onDragEnd}>
      <ul className="todo-list">
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredTodos.map((todo, i) =>
                <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} index={i} />
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </ul>
    </DragDropContext>
  );
};

export default TodoList;
