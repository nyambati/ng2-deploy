# confgiure heroku provider. In this block we will require the heroku emial and the api key
#  if you dont have an api key you can get one from the following url
# https://dashboard.heroku.com/account
provider "heroku" {
  email   = "${ var.heroku_email }"
  api_key = "${ var.heroku_api_key }"
}


resource "heroku_app" "app" {
  name = "${ var.heroku_app_name }"
  region = "${ var.heroku_app_region }"
  config_vars {
    NODE_ENV = "${ var.node_env }"
  }
}

output "app_name" {
  value = "${ heroku_app.app.name }"
}

output "host_name" {
  value = "${ heroku_app.app.host_name}"
}

output "web_urk" {
  value = "${ heroku_app.app.web_url }"
}
