# Environment Setup for HamroChat

This document provides the steps required to configure the environment variables necessary for running the HamroChat project.

## Prerequisites

- Ensure you have a `.env` file in the root of your project. If it doesn't exist, create one.
- Install the necessary dependencies for your project by running:

  ```bash
  npm install
  ```

## Adding Environment Variables

Copy and paste the following configuration into your `.env` file:

```env
BLOB_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=hamrochat;AccountKey=u3UvvM1JP4pOYttIa7a2BefSNq17iBc9+yGSAC9o9WSFbUm9tQ/rrMdAy7cj8iMPd1B9Cmq2Y4Zl+ASt0IfJJA==;EndpointSuffix=core.windows.net
CONTAINER_NAME=hamrochatbot
BLOB_NAME=questions_answers.csv
OPENAI_ENDPOINT=https://api.openai.com/v1/completions
OPENAI_API_KEY=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
DEPLOYMENT_ID=gpt-35-turbo
PORT=4000
Connection_Name=hamrochat
```

## Explanation of Variables

- **BLOB_CONNECTION_STRING**: Connection string for Azure Blob Storage. It provides access to the storage account.
- **CONTAINER_NAME**: Name of the container in Azure Blob Storage that stores the chatbot files.
- **BLOB_NAME**: Name of the specific file to fetch from Azure Blob Storage.
- **OPENAI_ENDPOINT**: Endpoint URL for OpenAI API.
- **OPENAI_API_KEY**: API key to authenticate with OpenAI's GPT model.
- **DEPLOYMENT_ID**: Identifier for the specific GPT model deployment.
- **PORT**: Port on which the application will run.
- **Connection_Name**: Identifier for the connection.

## Usage

After configuring the `.env` file, you can start the application by running:

```bash
npm start
```

The application will load the environment variables from the `.env` file and use them to connect to Azure Blob Storage, OpenAI API, and other necessary services.

## Notes

- Never share the `.env` file or its contents publicly as it contains sensitive information.
- Ensure that the `.env` file is included in the `.gitignore` file to avoid accidental commits.

## Troubleshooting

If the application fails to start, verify:

1. The `.env` file is in the correct location.
2. All required variables are properly set.
3. The dependencies are installed correctly.

