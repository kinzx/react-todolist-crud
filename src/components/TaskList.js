import React from 'react';
import { BsPencil, BsTrash } from 'react-icons/bs';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <div className="task-card-wrapper" key={task.id}>
                    <div className="task-card">
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
                        <div className="task-actions">
                            <button onClick={() => showEditForm(task)}>
                                <BsPencil size={18} />
                            </button>
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