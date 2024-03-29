// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "product-service",
    "version": "1"
  },
  "paths": {
    "/products/{id}": {
      "get": {
        "summary": "getProductsById",
        "description": "",
        "operationId": "getProductsById.get.products/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful API Response, Product found",
            "schema": {
              "$ref": "#/definitions/Product"
            }
          },
          "404": {
            "description": "Product not found",
            "schema": {
              "$ref": "#/definitions/ProductNotFoundResponseBody"
            }
          }
        }
      }
    },
    "/products": {
      "get": {
        "summary": "getProductsList",
        "description": "",
        "operationId": "getProductsList.get.products",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Successful API Response",
            "schema": {
              "$ref": "#/definitions/Products"
            }
          }
        }
      },
      "post": {
        "summary": "createProduct",
        "description": "",
        "operationId": "createProduct.post.products",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "201": {
            "description": "Created"
          },
          "default": {
            "description": "default response"
          }
        }
      }
    }
  },
  "definitions": {
    "Product": {
      "properties": {
        "count": {
          "title": "Product.count",
          "type": "number"
        },
        "description": {
          "title": "Product.description",
          "type": "string"
        },
        "id": {
          "title": "Product.id",
          "type": "string"
        },
        "price": {
          "title": "Product.price",
          "type": "number"
        },
        "title": {
          "title": "Product.title",
          "type": "string"
        }
      },
      "required": [
        "count",
        "description",
        "price",
        "title"
      ],
      "additionalProperties": false,
      "title": "Product",
      "type": "object"
    },
    "Products": {
      "items": {
        "$ref": "#/definitions/Product",
        "title": "Products.[]"
      },
      "title": "Products.[]",
      "type": "array"
    },
    "ProductDocument": {
      "properties": {
        "id": {
          "title": "ProductDocument.id",
          "type": "string"
        },
        "title": {
          "title": "ProductDocument.title",
          "type": "string"
        },
        "description": {
          "title": "ProductDocument.description",
          "type": "string"
        },
        "price": {
          "title": "ProductDocument.price",
          "type": "number"
        }
      },
      "required": [
        "id",
        "title",
        "description",
        "price"
      ],
      "additionalProperties": false,
      "title": "ProductDocument",
      "type": "object"
    },
    "StockDocument": {
      "properties": {
        "product_id": {
          "title": "StockDocument.product_id",
          "type": "string"
        },
        "count": {
          "title": "StockDocument.count",
          "type": "number"
        }
      },
      "required": [
        "product_id",
        "count"
      ],
      "additionalProperties": false,
      "title": "StockDocument",
      "type": "object"
    },
    "Document": {
      "anyOf": [
        {
          "$ref": "#/definitions/ProductDocument",
          "title": "Document"
        },
        {
          "$ref": "#/definitions/StockDocument",
          "title": "Document"
        }
      ],
      "title": "Document"
    },
    "ProductNotFoundResponseBody": {
      "properties": {
        "message": {
          "title": "ProductNotFoundResponseBody.message",
          "enum": [
            "Product not found"
          ],
          "type": "string"
        }
      },
      "required": [
        "message"
      ],
      "additionalProperties": false,
      "title": "ProductNotFoundResponseBody",
      "type": "object"
    },
    "CreateProductRequestBody": {
      "properties": {
        "title": {
          "title": "CreateProductRequestBody.title",
          "type": "string"
        },
        "description": {
          "title": "CreateProductRequestBody.description",
          "type": "string"
        },
        "price": {
          "title": "CreateProductRequestBody.price",
          "type": "number"
        },
        "count": {
          "title": "CreateProductRequestBody.count",
          "type": "number"
        }
      },
      "required": [
        "title",
        "description",
        "price",
        "count"
      ],
      "additionalProperties": false,
      "title": "CreateProductRequestBody",
      "type": "object"
    }
  },
  "securityDefinitions": {}
};