class ApplicationController < ActionController::Base
	include ApplicationHelper
	add_flash_types :success, :error, :info
	before_action :set_action_cable_identifier
	before_action :set_locale

	private

	def set_action_cable_identifier
		cookies.encrypted[:session_id] = session.id.to_s
	end

	def set_locale
		I18n.locale = :es
	end
end
