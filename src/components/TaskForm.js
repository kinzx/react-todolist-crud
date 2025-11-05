import React, { useState, useEffect } from 'react';
// Import 'react-bootstrap', bukan 'react-react-bootstrap'
import { Button, Form, Modal } from 'react-bootstrap';

const TaskForm = ({ show, handleClose, addTask, editTask, taskToEdit }) => {
    // State awal untuk task baru
    const [task, setTask] = useState({ name: '', priority: 'Medium', status: 'To Do' });

    // useEffect untuk memantau taskToEdit
    // Jika taskToEdit ada (mode edit), isi form dengan datanya
    useEffect(() => {
        if (taskToEdit) {
            setTask(taskToEdit);
        }
    }, [taskToEdit]);

    // Menangani perubahan pada input form
    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    // Menangani saat form disubmit (tombol Add/Update diklik)
    const handleSubmit = (e) => {
        // Cek apakah ini mode edit atau tambah baru
        taskToEdit ? editTask(task) : addTask(task);
        
        // Reset form ke keadaan awal
        setTask({ name: '', priority: 'Medium', status: 'To Do' });
        // Tutup modal
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                {/* Judul modal berubah tergantung mode */}
                <Modal.Title>{taskToEdit ? 'Edit Task' : 'Add Task'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* Input untuk Nama Task */}
                    <Form.Group controlId="taskName">
                        <Form.Label>Task</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={task.name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    {/* Input untuk Prioritas */}
                    <Form.Group controlId="taskPriority">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control 
                            as="select" 
                            name="priority" 
                            value={task.priority} 
                            onChange={handleChange}
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </Form.Control>
                    </Form.Group>

                    {/* Input untuk Status */}
                    <Form.Group controlId="taskStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control 
                            as="select" 
                            name="status" 
                            value={task.status} 
                            onChange={handleChange}
                        >
                            <option>To Do</option>
                            <option>In Progress</option>
                            <option>Done</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {/* Teks tombol berubah tergantung mode */}
                    {taskToEdit ? 'Update Task' : 'Add Task'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TaskForm;