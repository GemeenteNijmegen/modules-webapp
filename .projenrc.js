const { GemeenteNijmegenCdkLib } = require('@gemeentenijmegen/projen-project-type');
const project = new GemeenteNijmegenCdkLib({
  author: 'Gemeente Nijmegen',
  majorVersion: 1,
  cdkVersion: '2.122.0',
  jsiiVersion: '~5.3.0',
  defaultReleaseBranch: 'main',
  name: '@gemeentenijmegen/webapp',
  repository: 'https://github.com/gemeentenijmegen/modules-webapp',
  depsUpgradeOptions: {
    workflowOptions: {
      branches: ['main'], // No acceptance branch
    },
  },
  devDeps: [
    '@gemeentenijmegen/projen-project-type',
    '@types/aws-lambda',
    '@aws-sdk/types',
    'aws-sdk-client-mock',
    'axios-mock-adapter',
    'copyfiles',
    '@playwright/test',
    '@playwright/test',
    '@axe-core/playwright',
    'aws-sdk-client-mock',
    '@glen/jest-raw-loader',
    '@types/mustache',
  ],
  deps: [
    '@gemeentenijmegen/aws-constructs',
  ],
  bundledDeps: [
    '@aws-lambda-powertools/logger',
    '@aws-sdk/client-dynamodb',
    '@aws-sdk/client-secrets-manager',
    '@gemeentenijmegen/apiclient',
    '@gemeentenijmegen/apigateway-http',
    '@gemeentenijmegen/session',
    '@gemeentenijmegen/utils',
    'dotenv',
    '@aws-solutions-constructs/aws-lambda-dynamodb',
    'cdk-remote-stack',
    'mustache',
    'axios',
    'cookie',
    'openid-client',
  ],
  jestOptions: {
    jestConfig: {
      setupFiles: ['dotenv/config'],
      moduleFileExtensions: [
        'js', 'json', 'jsx', 'ts', 'tsx', 'node', 'mustache',
      ],
      transform: {
        '\\.[jt]sx?$': 'ts-jest',
        '^.+\\.mustache$': '@glen/jest-raw-loader',
      },
      testPathIgnorePatterns: ['/node_modules/', '/cdk.out', '/test/playwright'],
      roots: ['src', 'test'],
    },
  },
  bundlerOptions: {
    loaders: {
      mustache: 'text',
    },
  },
});
project.synth();