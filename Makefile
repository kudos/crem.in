# See http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help
help:
	@echo
	@echo "Commands:"
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo

.PHONY: build
build: ## Build the site and place it in ./_site
	jekyll build

.PHONY: serve
serve: ## Build, watch, and serve the site from http://127.0.0.1:4000
	jekyll serve --watch

.PHONY: push
push: ## Push the built site from ./_site to S3
	s3deploy --bucket crem.in --source ./_site
