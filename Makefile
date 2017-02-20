#  run rerraform plan to ensure that all our config is working
terraform:
	@type terraform > /dev/null

plan: terraform
	cd setup && terraform plan

apply: terraform
	cd setup && terraform apply
show:
	cd setup && terraform show

destroy: terraform
	cd setup && terraform destroy

deploy:
	git push heroku master

output:
	cd setup && terraform output
build:
	npm run build

test:
	npm test

vars:
	cd setup && mv terraform.tfvars.sample terraform.tfvars

