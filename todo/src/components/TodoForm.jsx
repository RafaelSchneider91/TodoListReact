import {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return; //verifica se esta vazio
        addTodo(value, category);
        // console.log(value, category);
        setValue("");
        setCategory("");     

    };

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa:</h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" 
                    name="" id="" 
                    placeholder='Digite o titulo'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}/>
            <select name="" 
                    id=""
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                <option value="">Selecione uma categoria:</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm