import axios from "axios";

const getTodoList = async () => {
    const response = await axios.get('/api/todo/list', {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
}

export const Todo = {
    getTodoList
}

export default Todo;