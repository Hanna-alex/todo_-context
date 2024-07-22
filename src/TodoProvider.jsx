import React, { createContext, useState } from 'react';
import {
	useRequestGetTasks,
	useRequestAddTask,
	useRequestUpDataTask,
	useRequestDeleteTask,
} from './hooks';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);
	const [newTitle, setNewTitle] = useState('');
	const [searchTerm, setSearchTerm] = useState('');
	const [isSortOn, setIsSortOn] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [isOpenAddForm, setIsOpenAddForm] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [id, setId] = useState(null);
	const [title, setTitle] = useState('');

	const { isLoading } = useRequestGetTasks(setTasks, setIsOpenAddForm);
	const { isAdding, addTask } = useRequestAddTask(
		newTitle,
		setNewTitle,
		tasks,
		setTasks,
		setErrorMessage,
		setIsOpenAddForm
	);
	const { isUpdating, saveTask } = useRequestUpDataTask(
		id,
		title,
		setTitle,
		tasks,
		setTasks,
		setId,
		setIsEditing,
		setErrorMessage
	);
	const { isDeleting, deleteTask } = useRequestDeleteTask(setTasks, tasks);

	const value = {
		tasks,
		setTasks,
		newTitle,
		setNewTitle,
		searchTerm,
		setSearchTerm,
		isSortOn,
		setIsSortOn,
		errorMessage,
		isOpenAddForm,
		setIsOpenAddForm,
		isEditing,
		setIsEditing,
		id,
		setId,
		title,
		setTitle,
		isLoading,
		addTask,
		saveTask,
		deleteTask,
		isAdding,
		isUpdating,
		isDeleting,
	};

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
