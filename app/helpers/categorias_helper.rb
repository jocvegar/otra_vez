module CategoriasHelper
	def filter_link_options(parameter, attribute = nil)
		link_to params.permit(:cat, :option, :open_option, :size).
			merge(cat: params['cat'], size: params['size'], option: attribute, open_option: true),
			class: "text-decoration-none text-dark" do
			content_tag :li, class: "list-group-item d-flex justify-content-between align-middle" do
				concat attribute.nil? ? "Todo" : attribute.titleize
				concat "<i class='fas fa-check'></i>".html_safe if attribute == parameter
			end
		end
	end


	def filter_link_sizes(parameter, attribute = nil)
		link_to params.permit(:cat, :option, :open_size, :size).
			merge(cat: params['cat'], option: params['option'], size: attribute, open_size: true),
			class: "text-decoration-none text-dark" do
			content_tag :li, class: "list-group-item d-flex justify-content-between align-middle" do
				concat attribute.nil? ? "Todo" : attribute.humanize.upcase
				concat "<i class='fas fa-check'></i>".html_safe if attribute == parameter
			end
		end
	end
end
