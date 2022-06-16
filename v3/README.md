# Strapi plugin csv-export

Working on Strapi (version 3)

<!-- ## Demo
[![EStrapi plugin csv-export](https://free-png.ru/wp-content/uploads/2020/07/logo-you-tube-2-1.png)](https://www.youtube.com/watch?v=pnbbesqGfmw "Strapi plugin csv-export") -->

## First Setup

1. Clone the plugin into your Strapi project

```bash
cd plugins
```

# create plugins folder if not exists

```bash
mkdir plugins
```

# go to plugins folder

```bash
cd plugins
```

# clone the plugin code into a folder and skip the prefix

```bash
 git clone https://github.com/StekolschikovV/csv-export.git csv-export-all-v && cd csv-export-all-v && mv v3 ../csv-export && cd ../ && rm -fr csv-export-all-v
```

# install dependencies

```bash
cd csv-export && yarn install
```

2. Build the plugin

```bash
# back to project root and build the plugin
yarn build
# start
yarn develop
```

2. Set permissions

Go to settings -> users-permissions -> APPLICATION and select find
Go to settings -> users-permissions -> CONTENT-TYPE-BUILDER -> CONTENTTYPES and select getcontenttypes

Note:

> it's important to clone the repo into a target folder named `csv-export`, the prefix has to be omitted.

## Plugin development

```bash
yarn develop --watch-admin
```

Running at http://localhost:8080/

## Features

- Support CSV export