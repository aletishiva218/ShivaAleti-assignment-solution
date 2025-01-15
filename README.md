start the server:
"node index.js"

url: localhost:3000

To check the api is working:
path: /api
method: GET

To check the prime number:
path: /api/checkprime
body: e.g. {"number":10}
method:POST

To add the number in queue from end:
path: /api/enqueue
body: e.g. {"number":10}
method:POST

To get first element from queue:
path: /api/dequeue
method:GET

To calculate factorial of a number:
path: /api/factorial
body: e.g. {"number":10}
method:POST

To sort array:
path: /api/bubblesort
body: e.g. {"array":[15,6,78,...]}
method:POST

To perform binary search tree:
The array already exists in /Routes/binarysearch.js
path: /api/find
body: e.g. {"number":12}
method:POST