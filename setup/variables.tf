variable "heroku_email" {
  type = "string"
  description = "Your heroku email"
}

variable "heroku_app_name" {
  type = "string"
  description = "The name of your app"
  default = "ng2-app-deploy"
}

variable "heroku_app_region" {
  type = "string"
  description = "The region you are launching the app in"
  default = "us"
}

variable "heroku_api_key" {
  type = "string"
  description = "The api key of your heroku account"
  default = "default_value"
}

variable "node_env" {
  type = "string"
  description = "environment to run app in"
  default = "production"
}
