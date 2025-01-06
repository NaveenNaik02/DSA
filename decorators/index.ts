//class decorators
function frozen(target: Function) {
  Object.freeze(target);
  Object.freeze(target.prototype);
}

//property decorators
function required(target: any, key: string) {
  let currentValue = target[key];
  Object.defineProperty(target, key, {
    set: (newValue: string) => {
      if (!newValue) {
        throw new Error(`${key} is required`);
      }
      currentValue = newValue;
    },
    get: () => currentValue,
  });
}

//accessor decorators
function enumerable(isEnumerable: boolean) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    descriptor.enumerable = isEnumerable;
    console.log(
      "The enumerable property of this member is set to: " +
        descriptor.enumerable
    );
  };
}

//method decorator
function deprecated(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalDef = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Warning: ${key}() is deprecated. Use other methods instead.`);
    return originalDef.apply(this, args);
  };
}

@frozen
class User {
  private static userType: string = "Generic";

  @required
  public username: string;

  @required
  private _email: string;

  public addressLine1: string = "";
  public addressLine2: string = "";
  public country: string = "";
  constructor(username: string, _email: string) {
    this.username = username;
    this._email = _email;
  }

  @enumerable(false)
  get userType() {
    return User.userType;
  }

  get email() {
    return this._email;
  }

  set email(newEmail: string) {
    this.email = newEmail;
  }

  @deprecated
  address(): any {
    return `${this.addressLine1}\n${this.addressLine2}\n${this.country}`;
  }
}

const user = new User("john", "john@gmail.com");
