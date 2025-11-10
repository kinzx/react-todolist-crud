import React from 'react';
import { BsPencil, BsTrash } from 'react-icons/bs';

// 1. Ganti prop 'deleteTask' menjadi 'requestDelete'
const TaskList = ({ tasks, requestDelete, showEditForm }) => {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <div className="task-card-wrapper" key={task.id}>
                    <div className="task-card">
                        
                        {/* ... (Semua detail task Anda) ... */}
                        <div className={`priority-bar ${task.priority}`}></div>
                        <div className="task-details">
                            <span className="label">Task</span>
                            <span className="value task-name-value">{task.name}</span>
                        </div>
                        <div className="task-details">
                            <span className="label">Priority</span>
                            <span className={`value ${task.priority}`}>{task.priority}</span>
                        </div>
                        <div className="task-details">
                            <span className="label">Time</span>
                            <span className="value">{task.time}</span>
                        </div>
                        <div>
                            <span className={`status-pill ${task.status}`}>{task.status}</span>
                        </div>

                        {/* Tombol Aksi */}
                        <div className="task-actions">
                            <button onClick={() => showEditForm(task)}>
                                <BsPencil size={18} />
                            </button>
                            {/* 2. Ubah onClick di sini */}
                            <button onClick={() => requestDelete(task.id)}>
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