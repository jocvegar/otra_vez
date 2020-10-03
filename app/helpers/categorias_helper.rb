module CategoriasHelper
	def filter_link_options(parameter, attribute = nil)
		link_to params.permit(:cat, :option, :open).
			merge(cat: params['cat'], option: attribute, open: true),
			class: "text-decoration-none text-dark" do
			content_tag :li, class: "list-group-item d-flex justify-content-between align-middle" do
				concat attribute.nil? ? "Todo" : attribute.titleize
				concat "<i class='fas fa-check'></i>".html_safe if attribute == parameter
			end
		end
	end
end
