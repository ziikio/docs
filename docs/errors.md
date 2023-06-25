# Errors

The Ziik API uses the following error codes:


Error Code | Title | Meaning
---------- | ----- | -------
400 | Bad Request | Your request could not be understood
401 | Unauthorized | Missing or invalid API token sent
403 | Forbidden | You lack the privileges needed to perform the requested action
404 | Not Found | The specified content could not be found
405 | Method Not Allowed | You tried to access a resource with a method (GET, POST, PATCH, DELETE, etc.) that is not supported for the requested action
406 | Not Acceptable | Your request could not be understood
410 | Gone | The content requested has been removed from our servers
422 | Unprocessable Entity | The parameters given are invalid or in an invalid combination to process the request
429 | Too Many Requests | Slow down!
500 | Internal Server Error | We have a problem with our server for the given request. Try again later and contact customer support if the error persists.
503 | Service Unavailable | We're temporarially offline for maintenance. Please try again later.
