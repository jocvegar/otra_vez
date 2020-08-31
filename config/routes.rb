Rails.application.routes.draw do
	root 'home#index'
	resources :order_items
end
