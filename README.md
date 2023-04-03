# Clean Architecture in NodeJS POC #

## Project Structure

- All the packages are located under `packages.
- Libraries are packages without an executable script that expose _some_ common functionality but does not fulfill a business use case. These are meant to be standalone.
- Features are packages without an executable script that fulfill a business use-case and can reference libraries
- Applications are packages that actually contain an executable script and can only reference features and libraries. There should not be anything more complicated than bootstrapping features and libraries in this package.

## Setup locally

- run `pnpm install`
- run `pnpm build` to build all the packages
- run `pnpm run --filter @avwie/web-server start` to start the web server

## Setup Docker

- run `docker:build:workspace` to build the workspace image, as a basis for the apps images
- run `docker:build:web-server` to build the web server image
- run `docker:run:web-server` to run the web server image
- run `docker:stop:web-server` to stop the web server image
- run `docker:remove:web-server` to remove the web server image
