I have two enum values:

```
schema:
  - ./src/main.graphql

generates:
  ./src/types.ts:
    plugins:
      - typescript
      - typescript-operations
    config:
      enumValues:
        UserStatusNotOk: ./Enums#USER_STATUS_NOT_OK
        UserStatusOk: ./Enums#UserStatusOk
```

It seems as if after one of the more recent updates, enumValues which do not have the same name, e.g. `UserStatusNotOk` vs `USER_STATUS_NOT_OK` are generating different output as before:

```
import { USER_STATUS_NOT_OK } from './Enums';
import UserStatusNotOk = USER_STATUS_NOT_OK; // <--
import { UserStatusOk } from './Enums';
```

In earlier versions, this would generate:

```
import { USER_STATUS_NOT_OK as UserStatusNotOk } from './Enums';
import { UserStatusOk } from './Enums';
```

Ultimately this gives an error when using it alongside `@babel/plugin-transform-typescript`:

```
SyntaxError: /Users/philipp/node/dev/dh/gql-types-test/src/types.ts: `import =` is not supported by @babel/plugin-transform-typescript
Please consider using `import <moduleName> from '<moduleName>';` alongside Typescript's --allowSyntheticDefaultImports option.
```

I am not sure if the usage of `import =` is correct in this case.

You can test this by running `npm run test`.
