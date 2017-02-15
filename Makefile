
#  run rerraform plan to ensure that all our config is working
terraform:
	@type terraform >&2 /dev/null
plan: terraform
	cd setup && terraform plan

apply: terraform
	cd setup && terraform apply

destroy: terraform
	cd setup && terraform destroy

build:
	npm run build

test:
	npm test

