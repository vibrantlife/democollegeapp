class FeedbackController < ApplicationController
  respond_to :html, :json

  def new
    @feedback = Feedback.new
    respond_modal_with @feedback
  end

  def create
    @feedback = Feedback.create(feedback_params)
    respond_modal_with @feedback, location: root_path
  end

  private

  def feedback_params
    params.require(:feedback).permit(:name, :order)
  end
end
