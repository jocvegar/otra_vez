module ApplicationHelper
	def current_order
		if !session[:order_id].nil?
			Order.find(session[:order_id])
		else
			Order.new
		end
	end

	def bootstrap_class_for(flash_type)
	  { success: "alert-success", error: "alert-danger", info: "alert-info", alert: "alert-warning", notice: "alert-dark" }[flash_type] || flash_type.to_s
	end

	def flash_messages
		flash.each do |msg_type, message|
			concat(
				content_tag(:div, id: "flash-wrapper", class: "container-fluid", style: "padding-top:0.5rem;") do
					concat(
						content_tag(:div, message, class: "alert alert-dismissible #{bootstrap_class_for(msg_type.to_sym)}", role: "alert") do
							concat content_tag(:button, '<span></span>'.html_safe, class: "btn-close", data: { dismiss: 'alert' })
							concat content_tag(:span, message.html_safe, class: 'message')
						end
					)
				end
			)
		end
		nil
	end

	def active_class(link_path)
		current_page?(link_path) ? "active" : ""
	end

	def fa_spinner
		'<i class="fa fa-spinner fa-pulse fa-fw"></i>'.html_safe
	end

  def device
    agent = request.user_agent
    return "tablet" if agent =~ /(tablet|ipad)|(android(?!.*mobile))/i
    return "mobile" if agent =~ /Mobile/
    return "desktop"
  end
end
