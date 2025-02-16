.PHONY: all help pre-commit migrate

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

initialize: application certs
	@sudo ./infra/local/scripts/hosts.sh
	@npm install

application:
	@brew install mkcert nss traefik node watchman || true

certs:
	@mkcert -install
	@rm -rf infra/local/cert && mkdir infra/local/cert
	@cd infra/local/cert && mkcert -key-file key.pem -cert-file cert.pem local.carpool.com '*.carpool.com'