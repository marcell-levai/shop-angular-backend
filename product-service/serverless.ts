import type { AWS } from '@serverless/typescript';

import getProductsById from '@functions/getProductsById';
import getProductsList from '@functions/getProductsList';
import createProduct from '@functions/createProduct';
import catalogBatchProcess from '@functions/catalogBatchProcess';

const serverlessConfiguration: AWS = {
  service: 'product-service',
  frameworkVersion: '3',
  plugins: [ 'serverless-auto-swagger', 'serverless-offline', 'serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      TABLE_PRODUCTS: 'products',
      TABLE_STOCKSS: 'stocks',
      TOPIC_ARN: {
        Ref: 'createProductTopic'
      }
    },
    iam: {
      role: {
        statements: [
          {
            Effect: 'Allow',
            Action: [
              "dynamodb:DescribeTable",
              "dynamodb:Query",
              "dynamodb:Scan",
              "dynamodb:GetItem",
              "dynamodb:PutItem",
              // "dynamodb:UpdateItem",
              // "dynamodb:DeleteItem",
            ],
            Resource: [
              "arn:aws:dynamodb:us-east-1:*:table/products",
              "arn:aws:dynamodb:us-east-1:*:table/stocks",
            ]
          },
          {
            Effect: "Allow",
            Resource: {
              Ref: "createProductTopic"
            },
            Action: ["sns:*"]
          }
        ]
      }
    }
  },
  functions: { getProductsById, getProductsList, createProduct, catalogBatchProcess },
  package: { individually: true },
  resources: {
    Resources: {
      catalogItemsQueue: {
        Type: 'AWS::SQS::Queue',
        Properties: {
          QueueName: 'catalogItemsQueue'
        }
      },
      createProductTopic: {
        Type: 'AWS::SNS::Topic',
        Properties: {
          TopicName: 'createProductTopic'
        }
      },
      createProductSubscription: {
        Type: 'AWS::SNS::Subscription',
        Properties: {
          Protocol: 'email',
          Endpoint: 'levaimarcell65@gmail.com',
          TopicArn: {
            Ref: 'createProductTopic'
          }
        }
      }
    }
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    autoswagger: {
      //exludeStages: ['dev'],
      typefiles: ['./src/types.ts']
    }
  },
};

module.exports = serverlessConfiguration;
