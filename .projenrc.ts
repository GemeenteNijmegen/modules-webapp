import { GemeenteNijmegenCdkLib } from '@gemeentenijmegen/projen-project-type';
import { Transform } from 'projen/lib/javascript/index.js';
const project = new GemeenteNijmegenCdkLib({
  author: 'Gemeente Nijmegen',
  authorAddress: 'devops@nijmegen.nl',
  majorVersion: 1,
  cdkVersion: '2.232.2', // pinned version in CdkLib type
  projenrcTs: true,
  name: '@gemeentenijmegen/webapp',
  repositoryUrl: 'git://github.com/GemeenteNijmegen/modules-webapp',
  repository: 'git://github.com/GemeenteNijmegen/modules-webapp',
  defaultReleaseBranch: 'main',
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
  bundledDeps: [
    '@aws-lambda-powertools/logger',
    '@aws-sdk/client-dynamodb',
    '@aws-sdk/client-secrets-manager',
    '@gemeentenijmegen/apiclient',
    '@gemeentenijmegen/apigateway-http',
    '@gemeentenijmegen/session',
    '@gemeentenijmegen/utils',
    '@gemeentenijmegen/aws-constructs',
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
        '\\.[jt]sx?$': new Transform('ts-jest'),
        '^.+\\.mustache$': new Transform('@glen/jest-raw-loader'),
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