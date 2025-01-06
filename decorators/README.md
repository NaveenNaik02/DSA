# TypeScript Decorators

TypeScript decorators are an extension that allows adding annotation and metaprogramming capabilities to class declarations and their members. They are useful for modifying the behavior of classes, methods, properties, and accessors.

## Class Decorators

When a decorator is applied to a class, the target is always the constructor function of the class.

## Property Decorators

When applying a decorator to a property, the following parameters are exposed to the decorator function:

1. **Target**:
   - The constructor function if the property is static.
   - The prototype of the class if the property is an instance property.
2. **Key**: The name of the member being decorated.

## Accessor Decorators

When applying a decorator to a property accessor, the following parameters are exposed to the decorator function:

1. **Target**:
   - The constructor function if the accessor is static.
   - The prototype of the class if the accessor is an instance member.
2. **Key**: The name of the accessor being decorated.
3. **Descriptor**: The property descriptor of the accessor. This allows direct modification of the member's metadata.

## Method Decorators

When applying a decorator to a method, the following parameters are exposed:

1. **Target**:
   - The constructor function if the method is static.
   - The prototype of the class if the method is an instance member.
2. **Key**: The name of the method being decorated.
3. **Descriptor**: The property descriptor of the method.
