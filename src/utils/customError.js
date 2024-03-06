class CustomError extends Error{
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode
    }
  } 
  
modules.export = CustomError;