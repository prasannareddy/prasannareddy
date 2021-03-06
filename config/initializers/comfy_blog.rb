ComfyBlog.configure do |config|


  config.title        = 'Prasanna Blog'
  config.description  = 'Prasanna Blog'
  
  # set the cms admin path if you have changed it for CMS
     config.admin_route_prefix = 'admin'
  
  # Controller that should be used for admin area
     config.admin_controller = 'ApplicationController'
  
  # Form builder
     config.form_builder = 'ComfyBlog::FormBuilder'
  
  # Set the public path if you have changed it
     config.public_route_prefix = '/blog'

  # Layout used for public posts/comments
     config.public_layout = 'application'
  
  # Number of posts per page. Default is 10
   config.posts_per_page = 10
  
  # Comments can be automatically approved/published by changing this setting
  # Default is false.
     config.auto_publish_comments = true
  
end