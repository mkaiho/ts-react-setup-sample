# ts-react-setup-sample

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![mkaiho](https://circleci.com/gh/mkaiho/ts-react-setup-sample.svg?style=shield)](https://app.circleci.com/pipelines/github/mkaiho/ts-react-setup-sample)
[![codecov](https://codecov.io/gh/mkaiho/ts-react-setup-sample/branch/main/graph/badge.svg?token=6TXFXUVBRL)](https://codecov.io/gh/mkaiho/ts-react-setup-sample)

```bash
# test
$ yarn test

# test and output coverage report
$ yarn test:cov

# construct docker containers for development.
$ docker-compose up --build -d
## execute follows after log in container.
$ yarn start

# build for production.
$ yarn build

# build doccker image for production.
$ docker build --rm -t ts-react-setup-sample .
```
