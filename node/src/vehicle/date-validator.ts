import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments
} from "class-validator";

export function SimpleFeatureDateValidator(
  validationOptions?: ValidationOptions
) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: "checkIfDateInTheFuture",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(date: string, args: ValidationArguments) {
          const dateNow: number = new Date().getTime();
          const receivedDate: number = new Date(date).getTime();
          return receivedDate > dateNow;
        }
      }
    });
  };
}
