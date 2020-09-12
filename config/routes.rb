Rails.application.routes.draw do
 	 get 'test/index'
	root 'home#index'
	resources :order_items
	resource :shopping_carts
	get '/service-worker.js' => "service_worker#service_worker"
	get '/manifest.json' => "service_worker#manifest"
	get '/offline.html' => "service_worker#offline"

	devise_for :admins
	namespace :admin do
		get '/' => 'home#index'
		resources :products
	end
end
