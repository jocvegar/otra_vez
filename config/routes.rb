require 'sidekiq/web'

Rails.application.routes.draw do

	# Sidekiq Worker Manager
	authenticate :admin do
		mount Sidekiq::Web, at: '/admin/sidekiq-manager'
	end

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
	resources :payments, only: [:new, :create, :destroy] do
		collection { post 'compra_click' }
	end
	patch '/extend_timer' => 'payments#extend_timer'
	get '/gracias/:id' => 'payments#gracias', as: "gracias"

	namespace :admin do
		get '/' => 'home#index'
		resources :products
		resources :soldout_products, only: [:index]
		resources :orders
		namespace :orders do
			get 'shipped/index'
			get 'declined/index'
		end
	end

	get 'test/index'
end
