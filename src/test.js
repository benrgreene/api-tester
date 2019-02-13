/**
 * User callable function for testing an API endpoint
 * 
 * Parameters:
 *     - url: a string with the API endpoint's URL
 *     - options: object with the following properties
 *           - method: defaults to GET
 *           - body: the body parameter to send in the request. defaults to an empty object
 *           - head: the header parameter sent in. For GET, defaults to the fetch default. Defaults to {'Content-Type': 'application/json'}
 */
export function testEndpoint (url, options, callback) {
  // set our default options
  options = setDefaults(options)

  // individual pieces for the fetch call
  let head       = options.head
  let method     = options.method
  let body       = options.body
  let returnType = options.returnType
  
  let fetchPromise = fetch(url, {
    method: method,
    headers: head,
    body: body
  }) 

  switch (returnType) {
    case 'raw':
      fetchPromise.then((data) => {
        callback(data)
      })
    default: 
      fetchPromise.then((blob) => {
        callback(blob.json())
      })
  }
}
  
// Set our default options 
export function setDefaults (options) {
  options.method     = (undefined != options.method) ? options.method : "GET"
  options.head       = (undefined != options.head) ? options.head : { 'Content-Type': 'application/json' }
  options.body       = (undefined != options.body) ? options.body : {}
  options.returnType = (undefined != options.returnType) ? options.returnType : 'JSON'

  return options
}