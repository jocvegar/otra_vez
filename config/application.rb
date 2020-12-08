require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_mailbox/engine"
require "action_text/engine"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module OtraVez
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Jobs performed asynchronously will be handled by Sidekiq
    # config.active_job.queue_adapter = :sidekiq
    # config.active_job.queue_adapter = Rails.env.production? ? :sidekiq : :async

    # Don't generate system test files.
    config.generators.system_tests = nil
    config.time_zone =  "Central America"
    config.active_record.default_timezone = :local
    config.i18n.available_locales = [:en, :es]
    config.i18n.default_locale = :es
    config.i18n.fallbacks = true

    # image optim
    config.assets.image_optim.nice = 20
    config.assets.image_optim.svgo = false
    config.assets.image_optim.pngout = false
    config.assets.image_optim.advpng = false
    config.assets.image_optim.jhead = false
    config.assets.image_optim.jpegtran = false
    config.assets.image_optim.jpegrecompress = false
    config.assets.image_optim.optipng = false
    config.assets.image_optim.pngquant = false
    config.assets.image_optim.gifsicle.careful = true
    config.assets.image_optim.jpegoptim.allow_lossy = true
    config.assets.image_optim.jpegoptim.max_quality = 85
  end
end
