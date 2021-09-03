# getir-case-study

A RESTful NodeJs API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.

### Clone the repository

```
git clone git@github.com:Vaigadre/getir-case-study.git
```

### Install dependencies

```
npm install
```

### Run the project

```
npm run start
```

### Run unit tests

```
npm run test
```

### API Signature:

```
POST /api/v1/records

sample Request body:
{
    "startDate": "2016-01-26",
    "endDate": "2016-12-30",
    "minCount": 2700,
    "maxCount": 3000
}

sample Response body:
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "ibfRLaFT",
            "createdAt": "2016-12-25T16:43:27.909Z",
            "totalCount": 2892
        },
    ]
}       
```

