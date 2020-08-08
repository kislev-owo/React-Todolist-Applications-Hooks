import React, { useState } from "react";
//word para lo que se escribe en el input
//words enter y se agrega
export function TodoListHooks(props) {
	//const [word, setWord] = useState("");   AQUI podemos ver las  diferencias
	//const [words, setWords] = useState([]);  en constantes que teniamos antes
	const [newTask, setNewTask] = useState("");
	const [tasksList, setTasksList] = useState([]);

	//se guardan todos los elementos
	const handleSubmit = () => {
		setTasksList([...tasksList, newTask]);
		setNewTask("");
	};

	const handleDelete = taskToDelete => {
		const newTaskWords = tasksList.filter((newTaskf, index) => {
			return index != newTask;
		});
		setTasksList(newTaskWords);
	};
	return (
		<div className="container w-75 mt-5">
			<h2 className="font-weight-light text-danger">{"todos"}</h2>
			<div className="col-8 container">
				<input
					type="text"
					placeholder="What needs to be done?"
					className="form-control no-border"
					//cuando hay un cambio en el input el evento actualiza el valor del estado newTask con el valor actual del momento
					onChange={e => setNewTask(e.target.value)}
					//value = newTask si se le da a enter la linea se borra automatico
					value={newTask}
					//sino esta vacio, la palabra se agrega al precionar enter y si esta vacio pues te alerta
					onKeyPress={e => {
						if (e.key === "Enter") {
							if (newTask !== "") {
								handleSubmit();
							} else {
								alert("escribe un texto,please!");
							}
						}
					}}
				/>
				<ul>
					{tasksList.map((newTask, index) => {
						return (
							<div key={index} className="form-control no-border">
								<li>
									{tasksList.label}
									<p onClick={event => handleDelete(newTask)}>
										{" "}
										{newTask}
									</p>
								</li>
							</div>
						);
					})}
					<div>
						<small>{tasksList.length + " task(s) left"}</small>
					</div>
				</ul>
			</div>
		</div>
	);
}
