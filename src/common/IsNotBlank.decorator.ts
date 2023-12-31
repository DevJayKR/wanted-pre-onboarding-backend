import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsNotBlank(
  property?: string,
  validationOptions?: ValidationOptions,
) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'IsNotBlank',
      target: object.constructor,
      propertyName,
      constraints: [property],
      options: validationOptions || {
        message: '$property must not be an empty string.',
      },
      validator: {
        validate(value: any) {
          return typeof value === 'string' && value.trim().length > 0;
        },
      },
    });
  };
}
