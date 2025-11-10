import React, { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';
import { BsPlus } from 'react-icons/bs';

function App() {
    
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Mancing', priority: 'Hard', time: '7 pm', status: 'In Progress' },
        { id: 2, name: 'Belajar React', priority: 'Medium', time: '9 am', status: 'To Do' },
    ]);
    const [showForm, setShowForm] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);

    
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);


    const handleShowForm = () => setShowForm(true);
    const handleCloseForm = () => {
        setShowForm(false);
        setTaskToEdit(null);
    };


    const requestDelete = (id) => {
        setTaskToDelete(id);      
        setShowDeleteModal(true); 
    };

    // Tutup modal hapus
    const handleCloseDeleteModal = () => {
        setTaskToDelete(null);
        setShowDeleteModal(false);
    };

    
    const confirmDelete = () => {
        deleteTask(taskToDelete); 
        handleCloseDeleteModal(); 
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
                
                <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    Task List
    <img src="/asterisk.png" alt="Task icon" style={{ width: '50px', height: 'auto' }} />
</h1>
                
                <div className="header-actions">
                    <button className="add-task-btn" onClick={handleShowForm}>
                        <BsPlus size={20} /> Add Task
                    </button>
                </div>
            </header>
            
            <TaskList 
                tasks={tasks} 
               
                requestDelete={requestDelete} 
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

   
            <Modal 
                show={showDeleteModal} 
                onHide={handleCloseDeleteModal} 
                centered 
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton className="custom-modal-header">
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body className="custom-modal-body">
                    <p>Are you sure you want to delete this task?</p>
                </Modal.Body>
                
            
                <div className="custom-modal-footer">
                    <Button 
                        variant="secondary" 
                        onClick={handleCloseDeleteModal} 
                        className="modal-btn secondary"
                    >
                        Cancel
                    </Button>
                    <Button 
                        variant="danger" 
                        onClick={confirmDelete} 
                        className="modal-btn danger" 
                    >
                        Delete
                    </Button>
                </div>
            </Modal>

        </div>
    );
}

export default App;