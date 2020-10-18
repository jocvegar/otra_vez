Rails.application.routes.draw do

	root 'home#index'
	resources :order_items
	resource :shopping_carts
	get '/service-worker.js' => "service_worker#service_worker"
	get '/manifest.json' => "service_worker#manifest"
	get '/offline.html' => "service_worker#offline"

	devise_for :admins, controllers: {
		sessions: 'admins/sessions'
	}

	resources :categorias
	resources :checkout, except: [:destroy]
	resources :payments, only: [:new, :create, :destroy]
	patch '/extend_timer' => 'payments#extend_timer'
	get '/gracias/:id' => 'payments#gracias', as: "gracias"

	namespace :admin do
		get '/' => 'home#index'
		resources :products
		resources :soldout_products, only: [:index]
		resources :orders
	end

	get 'test/index'
end
