import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const TaskCreate = ({ tasks, setTasks }) => {
  const notify = () => toast.success("Task created");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setTasks((prevTasks) => {
      tasks = [...prevTasks, data];
      console.log(tasks);
      notify();
      return tasks;
    });

    axios
      .post("http://localhost:3000/tasks", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title", { required: true })} placeholder="title" />

        <input
          {...register("description", { required: true })}
          placeholder="description"
        />

        <label>
          Priority:
          <select {...register("task_priority")}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>

        <label>
          Status:
          <select {...register("task_status")}>
            <option value="open">open</option>
            <option value="in-progress">in-progress</option>
            <option value="resolved">resolved</option>
            <option value="closed">closed</option>
          </select>
        </label>

        {errors.title && <span>Title is required</span>}
        {errors.description && <span>Description is required</span>}

        <div>
          <input type="submit" />
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default TaskCreate;
