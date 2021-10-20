# Description
The Yarn workspaces aim to make working with monorepos easy, solving one of the main use cases for yarn link in a more declarative way. In short, they allow multiple of your projects to live together in the same repository AND to cross-reference each others - any modification to one's source code being instantly applied to the others.

**_package-common_** folder contains common configs for other modules (webpack, eslint and test configs).

**_package-one_** and **_package-two_** contains **_package-common_** as a dependency and use it configs
to run own script. In this scenario we avoid a lot of boilerplate code and reuse existing configs.

## Scripts
**_package-one_** and **_package-two_** are standalone React projects. They can be stared by executing start command:
```
yarn start;
```

### Linting
Execute next command maintain the code quality:
```
yarn lint;
```

### Testing
Execute next to run all tests for a selected project:
```
yarn test;
```

## Links
Yarn workspaces: https://yarnpkg.com/features/workspaces

