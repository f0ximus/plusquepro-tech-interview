SAIL := ./vendor/bin/sail

install-laravel:
	@echo "Initializing Laravel..."
	@cp .env.example .env
	$(SAIL) up -d
	$(SAIL) composer install
	$(SAIL) npm install
	$(SAIL) npm run build
	$(SAIL) artisan key:generate
	$(SAIL) artisan migrate:fresh --seed
	@echo "Done!"

install-scout:
	@echo "Syncing scout settings"
	$(SAIL) artisan scout:sync-index-settings
	$(SAIL) artisan scout:flush "App\Models\Movie"
	$(SAIL) artisan scout:import "App\Models\Movie"
	@echo "Done!"

refresh-movies:
	@echo "Refreshing movies..."
	$(SAIL) artisan movies:refresh
	@echo "Done!"

start: ## Start containers.
	$(SAIL) up -d

stop: ## Stop containers.
	$(SAIL) stop

migrate: ## Migrate database migrations.
	$(SAIL) artisan migrate

migrate-seed: ## Migrate database migrations and seed dummy data.
	$(SAIL) artisan migrate --seed

migrate-fresh-seed: ## Refresh database, migrate database migrations and seed dummy data.
	$(SAIL) artisan migrate:fresh --seed

test-db: ## Setup testing database.
	$(SAIL) artisan migrate:fresh --seed --env=testing

clear: ## Clear application and configuration cache.
	$(SAIL) artisan optimize:clear

optimize: ## Cache config and routes.
	$(SAIL) artisan optimize && $(SAIL) artisan route:trans:cache
