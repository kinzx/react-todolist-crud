import React, { useState } from 'react';
// 'Dropdown' dan 'useMemo' sudah dihapus
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';
import { BsPlus } from 'react-icons/bs'; // Ikon untuk tombol Add

function App() {
    
    const [tasks, setTasks] = useState([
        // Data contoh agar tidak kosong
        { id: 1, name: 'Mancing', priority: 'Hard', time: '7 pm', status: 'In Progress' },
        { id: 2, name: 'Masak', priority: 'Medium', time: '8 pm', status: 'Done' }
    ]);
    const [showForm, setShowForm] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);
    
    // State 'sortBy' dan logika 'sortedTasks' sudah dihapus

    const handleShowForm = () => setShowForm(true);
    const handleCloseForm = () => {
        setShowForm(false);
        setTaskToEdit(null);
    };

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), time: task.time || 'N/A' }]);
    };

    const editTask = (updatedTask) => {
        setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const showEditForm = (task) => {
        setTaskToEdit(task);
        handleShowForm();
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Task List</h1>
                <div className="header-actions">
                    
                    {/* Komponen Dropdown "Short by" sudah dihapus dari sini */}
                    
                    <button className="add-task-btn" onClick={handleShowForm}>
                        <BsPlus size={20} /> Add Task
                    </button>
                </div>
            </header>
            
            <TaskList 
                tasks={tasks} // Diubah kembali ke 'tasks' (bukan sortedTasks)
                deleteTask={deleteTask} 
                showEditForm={showEditForm} 
            />
            
            {showForm && (
                <TaskForm
                    show={showForm}
                    handleClose={handleCloseForm}
                    addTask={addTask}
                    editTask={editTask}
                    taskToEdit={taskToEdit}
                />
            )}
        </div>
    );
}

export default App;