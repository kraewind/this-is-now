Rails.application.routes.draw do
  # resources :users
  # resources :activities
  # resources :values
  # get '/users/profile', :to => 'users#profile'
  post '/values', :to => 'values#create'
  post '/signup', :to => 'users#create'
  post '/login', :to => 'auth#create'
  get '/values', :to => 'values#index'
  post '/activities', :to => 'activities#create'
  get '/activities', :to => 'activities#index'
  post '/users/:id', :to => 'users#update'
  get '/users/:id', :to => 'users#show'
  get '/scores', :to => 'activities#scores'
  patch '/users/:id', :to => 'users#remove_value'
  delete'/values/:id', :to => "values#destroy"
  delete'/activities/:id', :to => "activities#destroy"

end
