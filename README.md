# Proof of Concept: Headless e-Commerce (PWA + React.js + Chakra UI + Builder.io)

Proof of Concept for a headless e-commerce architecture: Progressive Web Application with React and Next.js + Chakra UI for css-in-js styling and theming capabilities + Builder.io for visual editing capabilities.

Data connected dynamically to Builder-enabled React components: Contentful CMS for editorial content, Salesforce Commerce Cloud for merchandising content, product catalogue and CRM


## About

This repository is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) that includes the code that powers the [PWA Kit](https://github.com/SalesforceCommerceCloud/pwa-kit) from Salesforce. The code is divided into the following packages:
-   `pwa`: A set of sample code and tooling for PWA Kit project
-   `pwa-kit-react-sdk`: A set of components and utilities for PWA Kit project


## Requirements

```
  Node ^12.x or ^14.x
  npm ^6.14.4
```

## Installing Dependencies

Behind the scenes, [Lerna](https://lerna.js.org/) smanage the monorepo. Lerna lets
us install all dependencies and link all packages together with one command:

```bash
npm ci
```

Dependencies that are added to the `package.json` at the root of the
repo are shared between packages. Dependencies listed in the
`package.json` files within each individual package directory work as normal.


## Cleaning and Rebuilding

When you pull changes that include modifications to any package's dependencies, run `npm ci` from the top-level directory (`pwa-kit`). This command cleans and reinstalls all packages. Run this command frequently during development to ensure that you're using the same package versions as everyone else.

For more information, see the [Lerna docs](https://lerna.js.org/).


## Linting

```bash
  npm run lint
```


## Localization

See the [Localization README.md](./packages/pwa/app/translations/README.md) for important setup instructions for localization.


## Testing

Run tests for all packages with:

```bash
  cd [repo root]
  npm test
```

Run integration tests against live APIs for all packages with:

```bash
  cd [repo root]
  npm run test:integration
```


## License Information

The PWA Kit is licensed under a BSD 3-Clause license. See the [license](./LICENSE) for details.


## Documentation

The full documentation for PWA Kit is hosted on the [Commerce Cloud Developer Center](https://developer.commercecloud.com/s/article/PWA-Kit).
