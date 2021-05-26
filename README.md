# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
$ yarn  # 安装依赖
```

## Local Development

```console
$ yarn start     # 开始中文
$ yarn start:en  # 开始英文
```

## Deploy

```console
$ yarn deploy    # 开始构建
```

## Translate 

```console
$ yarn write-translations:en  # 翻译中文
```

```console
$ mkdir -p i18n/en/docusaurus-plugin-content-docs/current
$ cp -r docs/** i18n/en/docusaurus-plugin-content-docs/current
```
