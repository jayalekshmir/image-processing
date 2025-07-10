# Image Processing

## Processing the images given in the url with query params

### This project is built using Node.js version 20.9.0 + Express + Typescript

## Commands to launch project locally

### Install libraries

```npm i```

### Take build

```npm run build```

### Launch service locally

```npm run dev```

### Local testing

```npm run test```

### Start the prod build 

```npm run start```

## API Endpoint

### Resize Image

**GET** `/api/resize`

#### Query Parameters

| Parameter | Type   | Required | Description                         |
|-----------|--------|----------|-------------------------------------|
| filename  | string | Yes      | Name of the image file (without extension) located in the `assets/` folder |
| width     | number | Yes      | Desired width in pixels             |
| height    | number | Yes      | Desired height in pixels            |

#### Example Request

```http://localhost:3000/api/resize?filename=encenadaport&width=200&height=200```

#### Expected Response

- **Status:** `200 OK`
- **Content:** Resized `.jpg` image sent as a file download or preview in browser



