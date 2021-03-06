import React,{Component} from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'
class TodoList extends Component{

    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo,index) =>
                        <Todo {...todo} key={index} onClick={() => this.props.onTodoClick(index)}/>
                    )}
                </ul>
            </div>
        )
    }
}
TodoList.propTypes = {
    onTodoClick : PropTypes.func.isRequired,
    todos : PropTypes.arrayOf(PropTypes.shape({
        text : PropTypes.string.isRequired,
        complated : PropTypes.bool.isRequired
    }).isRequired).isRequired
}

export default TodoList