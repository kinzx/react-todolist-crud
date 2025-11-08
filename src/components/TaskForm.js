import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

// Pastikan untuk mengimpor CSS Anda agar modalnya terlihat kustom
import '../App.css'; 

const TaskForm = ({ show, handleClose, addTask, editTask, taskToEdit }) => {
    
    // State awal sekarang menyertakan 'time'
    const [task, setTask] = useState({ name: '', priority: 'Medium', status: 'To Do', time: '' });

    useEffect(() => {
        if (taskToEdit) {
            setTask(taskToEdit);
        } else {
            // Reset form saat membuka untuk 'Add Task' baru
            setTask({ name: '', priority: 'Medium', status: 'To Do', time: '' });
        }
    }, [taskToEdit, show]); // Pantau 'show' juga

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        taskToEdit ? editTask(task) : addTask(task);
        handleClose();
    };

    // 'modal-lg' adalah kelas kustom kita, 'rounded-4' adalah Bootstrap
    return (
        <Modal 
            show={show} 
            onHide={handleClose} 
            centered /* Menengahkan modal */
            dialogClassName="custom-modal" /* Kelas kustom kita */
        >
            <Modal.Header closeButton className="custom-modal-header">
                <Modal.Title>{taskToEdit ? 'Edit Task' : 'Add Task'}</Modal.Title>
            </Modal.Header>
            
            <Modal.Body className="custom-modal-body">
                <Form onSubmit={handleSubmit}>
                    
                    {/* Input untuk Nama Task */}
                    <Form.Group className="mb-3" controlId="taskName">
                        <Form.Label>Task</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Input Text"
                            value={task.name}
                            onChange={handleChange}
                            required
                            className="custom-form-control"
                        />
                    </Form.Group>
                    
                    {/* Input untuk Waktu Task */}
                    <Form.Group className="mb-3" controlId="taskTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                            type="text"
                            name="time"
                            placeholder="e.g. 7 pm"
                            value={task.time}
                            onChange={handleChange}
                            className="custom-form-control"
                        />
                    </Form.Group>

                    {/* Dropdown untuk Prioritas */}
                    <Form.Group className="mb-3" controlId="taskPriority">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control 
                            as="select" 
                            name="priority" 
                            value={task.priority} 
                            onChange={handleChange}
                            className="custom-form-control"
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </Form.Control>
                    </Form.Group>

                    {/* Dropdown untuk Status */}
                    <Form.Group className="mb-3" controlId="taskStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control 
                            as="select" 
                            name="status" 
                            value={task.status} 
                            onChange={handleChange}
                            className="custom-form-control"
                        >
                            <option>To Do</option>
                            <option>In Progress</option>
                            <option>Done</option>
                        </Form.Control>
                    </Form.Group>

                    {/* Tombol Footer */}
                    <div className="custom-modal-footer">
                        <Button variant="secondary" onClick={handleClose} className="modal-btn secondary">
                            Close
                        </Button>
                        <Button variant="primary" type="submit" className="modal-btn primary">
                            {taskToEdit ? 'Update Task' : 'Add Task'}
                        </Button>
                    </div>

                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default TaskForm;