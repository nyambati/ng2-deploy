# Deploy angular 2 apps to production
This repo provides a kick start for deploying angular 2 app apps to production article at scotch.io. Its provides aboilerplate for you to follow along if need be.

# files and folders
The repo contains these files
```
.
├── LICENSE
├── Makefile // absracted commands for terrform & Angular
├── README.md
├── angular-cli.json
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── setup/  // terrform heroku setup files
│   ├── main.tf 
│   ├── terraform.tfvars.sample
│   └── variables.tf
├── src/  // our sample app
└── tslint.json
```
Make sure you have all this files to get you started

# usage
1. clone this repo
2. npm install
3. Follow along with the scotch.io article.

# Terraform
Terraform is used to automate heroku app details creation. If you have not worked with it before you can check the there [documentation here](https://www.terraform.io/docs/providers/heroku/index.html). The scripts have already been setup you will need to configure variables only.

# Makefile
We have used the makefile to abstract some terrform and angular commands. This will make it easier to run them as you go along. You can read the makefile to get and idea of what each command does. You can run this my using make command and the target as shown below.
```bash
$ make <target>
```
considerig we have the following makefile

```
apply: terraform
  cd setup && terraform apply
```
We can use the apply target by running
```
$ make apply

```
This will run the commands under it which is `cd setup && terraform apply`.

I hope you enjoy and learn.


