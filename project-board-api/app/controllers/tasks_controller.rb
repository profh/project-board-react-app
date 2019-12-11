class TasksController < ApplicationController

  def index
    tasks = Task.all
    render json: tasks
  end

  def create
    new_task = Task.create(task_params)
    render json: new_task
  end

  def update
    task = Task.find(params[:id])
    task.update(task_params)
    render json: task
  end

  private

  def task_params
    params.require(:task).permit(:description, :completed, :card_id)
  end

end
