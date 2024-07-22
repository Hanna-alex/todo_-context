import React from 'react'
import { TodoProvider } from './TodoProvider';
import ReactDOM from 'react-dom/client'
import './index.css'
import { TodoList } from './TodoList'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>

		<TodoProvider>
			<TodoList />
		</TodoProvider>
	</React.StrictMode>
)


