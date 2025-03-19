# Introduction

Welcome to the documentation Ziik API! You can use our API to access Ziik API endpoints, fetching and supplying data from your Ziik system.

Ziik is the complete solution for internal communication. We combine the best intranet features with social technologies in a single company app, enabling effective and engaging communication for all.

## Getting Started

The Ziik API is a RESTful API that can be used to access the data in your Ziik system.

When using the API, you need to include the following headers in your requests:

- `Authorization: Bearer <token>`
- `Content-Type: application/json`

You can find your API token in the [Authentication](/authentication.md) section of the documentation.

:::tip Note

For requests that allows you to paginate through results, the `limit` parameter is capped to 100 items, unless otherwise specified.

:::
