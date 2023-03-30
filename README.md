# Clean Architecture in NodeJS POC #

## Project Structure

- All the packages are located under `packages.
- Libraries are packages without an executable script that expose _some_ common functionality but does not fulfill a business use case. These are meant to be standalone.
- Features are packages without an executable script that fulfill a business use-case and can reference libraries
- Applications are packages that actually contain an executable script and can only reference features and libraries. There should not be anything more complicated than bootstrapping features and libraries in this package.

## Setup

- run `yarn`
- run `yarn build` to build all the packages
- run `yarn run:applications:cli` to start the demo application