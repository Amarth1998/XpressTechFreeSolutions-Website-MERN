  const validate = (schema) => async (req, res, next) => {
    try {
      // Parse and validate the request body using the provided schema
      const parseBody = await schema.parseAsync(req.body);
  
      // Update the request body with the parsed and validated data
      req.body = parseBody;
  
      // Proceed to the next middleware or route handler
      next();
    } catch (err) {
      // Handle validation errors
      const status = 422; // Unprocessable Entity status code
      const message = "Fill the input properly"; // Default error message for validation failure
      const extraDetails = err.errors[0].message; // Extract specific error details from the validation error
  
      // Prepare error object to be passed to the error handler middleware
      const error = {
        status,
        message,
        extraDetails,
      };
  
      // Log the error to the console for debugging purposes
      console.log(err);
      console.log(error);
  
      // Pass the error to the global error handler middleware using `next`
      next(error);
    }
  };
  
module.exports = validate;
  

//   Middleware Function:

// validate is a higher-order function that takes a schema as its parameter and returns an asynchronous middleware function (req, res, next) => {...}.
// The returned middleware function (async (req, res, next) => {...}) is invoked for each incoming request.
// Request Body Validation:

// Inside the middleware function, it attempts to parse and validate the req.body using the provided schema (e.g., a schema from a validation library like Joi or Yup).
// The schema.parseAsync(req.body) method is assumed to be an asynchronous function that performs validation and returns a parsed and validated version of the request body.
// Handling Validation Errors:

// If validation fails (i.e., schema.parseAsync() throws an error), the code inside the catch block is executed.
// It prepares an error object (error) containing details about the validation failure:
// status: HTTP status code (422 for Unprocessable Entity) indicating validation failure.
// message: Default error message indicating the nature of the validation failure.
// extraDetails: Specific error message extracted from the validation error (err.errors[0].message).
// Error Logging and Passing:

// The error (err) and the prepared error object (error) are logged to the console for debugging purposes.
// The error object (error) is passed to the next middleware using next(error), which triggers the global error handler middleware to handle the error (e.g., sending an appropriate error response to the client).
// Exporting the Middleware:

// The validate middleware function is exported (module.exports = validate;) so that it can be used in other parts of the application (e.g., in route handlers) to validate incoming request bodies against specified schemas.
// Usage Example:
// T