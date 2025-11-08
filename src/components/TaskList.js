import React from 'react';
// Hapus import 'framer-motion'
// Kita masih butuh ikon-ikon ini
import { BsPencil, BsTrash } from 'react-icons/bs';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                // Tidak perlu 'TaskItem' terpisah, kita bisa langsung di sini
                <div className="task-card-wrapper" key={task.id}>
                    
                    {/* Hapus div 'delete-button' yang tersembunyi */}

                    {/* Ganti 'motion.div' menjadi 'div' biasa */}
                    <div className="task-card">
                        
                        {/* Bilah warna prioritas */}
                        <div className={`priority-bar ${task.priority}`}></div>

                        {/* Detail Task (Nama) */}
                        <div className="task-details">
                            <span className="label">Task</span>
                            <span className="value task-name-value">{task.name}</span>
                        </div>
                        
                        {/* Detail Prioritas */}
                        <div className="task-details">
                            <span className="label">Priority</span>
                            <span className={`value ${task.priority}`}>{task.priority}</span>
                        </div>

                        {/* Detail Waktu */}
                        <div className="task-details">
                            <span className="label">Time</span>
                            <span className="value">{task.time}</span>
                        </div>

                        {/* Status Pill */}
                        <div>
                            <span className={`status-pill ${task.status}`}>{task.status}</span>
                        </div>

                        {/* Tombol Edit & Delete */}
                        <div className="task-actions">
                            <button onClick={() => showEditForm(task)}>
                                <BsPencil size={18} />
                            </button>
                            {/* TAMBAHKAN TOMBOL DELETE DI SINI */}
                            <button onClick={() => deleteTask(task.id)}>
                                <BsTrash size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;