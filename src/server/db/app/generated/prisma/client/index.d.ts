
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectMaterial
 * 
 */
export type ProjectMaterial = $Result.DefaultSelection<Prisma.$ProjectMaterialPayload>
/**
 * Model ProjectMaterialTest
 * 
 */
export type ProjectMaterialTest = $Result.DefaultSelection<Prisma.$ProjectMaterialTestPayload>
/**
 * Model ProjectWorkItem
 * 
 */
export type ProjectWorkItem = $Result.DefaultSelection<Prisma.$ProjectWorkItemPayload>
/**
 * Model ProjectWorkItemTest
 * 
 */
export type ProjectWorkItemTest = $Result.DefaultSelection<Prisma.$ProjectWorkItemTestPayload>
/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model WorkItem
 * 
 */
export type WorkItem = $Result.DefaultSelection<Prisma.$WorkItemPayload>
/**
 * Model WorkItemMaterial
 * 
 */
export type WorkItemMaterial = $Result.DefaultSelection<Prisma.$WorkItemMaterialPayload>
/**
 * Model WorkItemMaterialTest
 * 
 */
export type WorkItemMaterialTest = $Result.DefaultSelection<Prisma.$WorkItemMaterialTestPayload>
/**
 * Model WorkItemTest
 * 
 */
export type WorkItemTest = $Result.DefaultSelection<Prisma.$WorkItemTestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Materials
 * const materials = await prisma.material.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Materials
   * const materials = await prisma.material.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectMaterial`: Exposes CRUD operations for the **ProjectMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMaterials
    * const projectMaterials = await prisma.projectMaterial.findMany()
    * ```
    */
  get projectMaterial(): Prisma.ProjectMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectMaterialTest`: Exposes CRUD operations for the **ProjectMaterialTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMaterialTests
    * const projectMaterialTests = await prisma.projectMaterialTest.findMany()
    * ```
    */
  get projectMaterialTest(): Prisma.ProjectMaterialTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectWorkItem`: Exposes CRUD operations for the **ProjectWorkItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectWorkItems
    * const projectWorkItems = await prisma.projectWorkItem.findMany()
    * ```
    */
  get projectWorkItem(): Prisma.ProjectWorkItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectWorkItemTest`: Exposes CRUD operations for the **ProjectWorkItemTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectWorkItemTests
    * const projectWorkItemTests = await prisma.projectWorkItemTest.findMany()
    * ```
    */
  get projectWorkItemTest(): Prisma.ProjectWorkItemTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workItem`: Exposes CRUD operations for the **WorkItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkItems
    * const workItems = await prisma.workItem.findMany()
    * ```
    */
  get workItem(): Prisma.WorkItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workItemMaterial`: Exposes CRUD operations for the **WorkItemMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkItemMaterials
    * const workItemMaterials = await prisma.workItemMaterial.findMany()
    * ```
    */
  get workItemMaterial(): Prisma.WorkItemMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workItemMaterialTest`: Exposes CRUD operations for the **WorkItemMaterialTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkItemMaterialTests
    * const workItemMaterialTests = await prisma.workItemMaterialTest.findMany()
    * ```
    */
  get workItemMaterialTest(): Prisma.WorkItemMaterialTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workItemTest`: Exposes CRUD operations for the **WorkItemTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkItemTests
    * const workItemTests = await prisma.workItemTest.findMany()
    * ```
    */
  get workItemTest(): Prisma.WorkItemTestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = Partial<Record<Exclude<keyof T, keyof U>, never>>;

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends bigint
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = Record<K, T>;

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Material: 'Material',
    Project: 'Project',
    ProjectMaterial: 'ProjectMaterial',
    ProjectMaterialTest: 'ProjectMaterialTest',
    ProjectWorkItem: 'ProjectWorkItem',
    ProjectWorkItemTest: 'ProjectWorkItemTest',
    Test: 'Test',
    Unit: 'Unit',
    WorkItem: 'WorkItem',
    WorkItemMaterial: 'WorkItemMaterial',
    WorkItemMaterialTest: 'WorkItemMaterialTest',
    WorkItemTest: 'WorkItemTest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "material" | "project" | "projectMaterial" | "projectMaterialTest" | "projectWorkItem" | "projectWorkItemTest" | "test" | "unit" | "workItem" | "workItemMaterial" | "workItemMaterialTest" | "workItemTest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectMaterial: {
        payload: Prisma.$ProjectMaterialPayload<ExtArgs>
        fields: Prisma.ProjectMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>
          }
          findFirst: {
            args: Prisma.ProjectMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>
          }
          findMany: {
            args: Prisma.ProjectMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>[]
          }
          create: {
            args: Prisma.ProjectMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>
          }
          createMany: {
            args: Prisma.ProjectMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectMaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>[]
          }
          delete: {
            args: Prisma.ProjectMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>
          }
          update: {
            args: Prisma.ProjectMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>
          }
          deleteMany: {
            args: Prisma.ProjectMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectMaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>[]
          }
          upsert: {
            args: Prisma.ProjectMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>
          }
          aggregate: {
            args: Prisma.ProjectMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMaterial>
          }
          groupBy: {
            args: Prisma.ProjectMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMaterialCountAggregateOutputType> | number
          }
        }
      }
      ProjectMaterialTest: {
        payload: Prisma.$ProjectMaterialTestPayload<ExtArgs>
        fields: Prisma.ProjectMaterialTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMaterialTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMaterialTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialTestPayload>
          }
          findFirst: {
            args: Prisma.ProjectMaterialTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMaterialTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialTestPayload>
          }
          findMany: {
            args: Prisma.ProjectMaterialTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialTestPayload>[]
          }
          create: {
            args: Prisma.ProjectMaterialTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialTestPayload>
          }
          createMany: {
            args: Prisma.ProjectMaterialTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectMaterialTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialTestPayload>[]
          }
          delete: {
            args: Prisma.ProjectMaterialTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialTestPayload>
          }
          update: {
            args: Prisma.ProjectMaterialTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialTestPayload>
          }
          deleteMany: {
            args: Prisma.ProjectMaterialTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMaterialTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectMaterialTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialTestPayload>[]
          }
          upsert: {
            args: Prisma.ProjectMaterialTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialTestPayload>
          }
          aggregate: {
            args: Prisma.ProjectMaterialTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMaterialTest>
          }
          groupBy: {
            args: Prisma.ProjectMaterialTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMaterialTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMaterialTestCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMaterialTestCountAggregateOutputType> | number
          }
        }
      }
      ProjectWorkItem: {
        payload: Prisma.$ProjectWorkItemPayload<ExtArgs>
        fields: Prisma.ProjectWorkItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectWorkItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectWorkItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemPayload>
          }
          findFirst: {
            args: Prisma.ProjectWorkItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectWorkItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemPayload>
          }
          findMany: {
            args: Prisma.ProjectWorkItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemPayload>[]
          }
          create: {
            args: Prisma.ProjectWorkItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemPayload>
          }
          createMany: {
            args: Prisma.ProjectWorkItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectWorkItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemPayload>[]
          }
          delete: {
            args: Prisma.ProjectWorkItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemPayload>
          }
          update: {
            args: Prisma.ProjectWorkItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemPayload>
          }
          deleteMany: {
            args: Prisma.ProjectWorkItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectWorkItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectWorkItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemPayload>[]
          }
          upsert: {
            args: Prisma.ProjectWorkItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemPayload>
          }
          aggregate: {
            args: Prisma.ProjectWorkItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectWorkItem>
          }
          groupBy: {
            args: Prisma.ProjectWorkItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectWorkItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectWorkItemCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectWorkItemCountAggregateOutputType> | number
          }
        }
      }
      ProjectWorkItemTest: {
        payload: Prisma.$ProjectWorkItemTestPayload<ExtArgs>
        fields: Prisma.ProjectWorkItemTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectWorkItemTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectWorkItemTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemTestPayload>
          }
          findFirst: {
            args: Prisma.ProjectWorkItemTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectWorkItemTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemTestPayload>
          }
          findMany: {
            args: Prisma.ProjectWorkItemTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemTestPayload>[]
          }
          create: {
            args: Prisma.ProjectWorkItemTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemTestPayload>
          }
          createMany: {
            args: Prisma.ProjectWorkItemTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectWorkItemTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemTestPayload>[]
          }
          delete: {
            args: Prisma.ProjectWorkItemTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemTestPayload>
          }
          update: {
            args: Prisma.ProjectWorkItemTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemTestPayload>
          }
          deleteMany: {
            args: Prisma.ProjectWorkItemTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectWorkItemTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectWorkItemTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemTestPayload>[]
          }
          upsert: {
            args: Prisma.ProjectWorkItemTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectWorkItemTestPayload>
          }
          aggregate: {
            args: Prisma.ProjectWorkItemTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectWorkItemTest>
          }
          groupBy: {
            args: Prisma.ProjectWorkItemTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectWorkItemTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectWorkItemTestCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectWorkItemTestCountAggregateOutputType> | number
          }
        }
      }
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      WorkItem: {
        payload: Prisma.$WorkItemPayload<ExtArgs>
        fields: Prisma.WorkItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          findFirst: {
            args: Prisma.WorkItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          findMany: {
            args: Prisma.WorkItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>[]
          }
          create: {
            args: Prisma.WorkItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          createMany: {
            args: Prisma.WorkItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>[]
          }
          delete: {
            args: Prisma.WorkItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          update: {
            args: Prisma.WorkItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          deleteMany: {
            args: Prisma.WorkItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>[]
          }
          upsert: {
            args: Prisma.WorkItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          aggregate: {
            args: Prisma.WorkItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkItem>
          }
          groupBy: {
            args: Prisma.WorkItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkItemCountArgs<ExtArgs>
            result: $Utils.Optional<WorkItemCountAggregateOutputType> | number
          }
        }
      }
      WorkItemMaterial: {
        payload: Prisma.$WorkItemMaterialPayload<ExtArgs>
        fields: Prisma.WorkItemMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkItemMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkItemMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialPayload>
          }
          findFirst: {
            args: Prisma.WorkItemMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkItemMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialPayload>
          }
          findMany: {
            args: Prisma.WorkItemMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialPayload>[]
          }
          create: {
            args: Prisma.WorkItemMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialPayload>
          }
          createMany: {
            args: Prisma.WorkItemMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkItemMaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialPayload>[]
          }
          delete: {
            args: Prisma.WorkItemMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialPayload>
          }
          update: {
            args: Prisma.WorkItemMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialPayload>
          }
          deleteMany: {
            args: Prisma.WorkItemMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkItemMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkItemMaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialPayload>[]
          }
          upsert: {
            args: Prisma.WorkItemMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialPayload>
          }
          aggregate: {
            args: Prisma.WorkItemMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkItemMaterial>
          }
          groupBy: {
            args: Prisma.WorkItemMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkItemMaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkItemMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<WorkItemMaterialCountAggregateOutputType> | number
          }
        }
      }
      WorkItemMaterialTest: {
        payload: Prisma.$WorkItemMaterialTestPayload<ExtArgs>
        fields: Prisma.WorkItemMaterialTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkItemMaterialTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkItemMaterialTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialTestPayload>
          }
          findFirst: {
            args: Prisma.WorkItemMaterialTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkItemMaterialTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialTestPayload>
          }
          findMany: {
            args: Prisma.WorkItemMaterialTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialTestPayload>[]
          }
          create: {
            args: Prisma.WorkItemMaterialTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialTestPayload>
          }
          createMany: {
            args: Prisma.WorkItemMaterialTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkItemMaterialTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialTestPayload>[]
          }
          delete: {
            args: Prisma.WorkItemMaterialTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialTestPayload>
          }
          update: {
            args: Prisma.WorkItemMaterialTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialTestPayload>
          }
          deleteMany: {
            args: Prisma.WorkItemMaterialTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkItemMaterialTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkItemMaterialTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialTestPayload>[]
          }
          upsert: {
            args: Prisma.WorkItemMaterialTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemMaterialTestPayload>
          }
          aggregate: {
            args: Prisma.WorkItemMaterialTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkItemMaterialTest>
          }
          groupBy: {
            args: Prisma.WorkItemMaterialTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkItemMaterialTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkItemMaterialTestCountArgs<ExtArgs>
            result: $Utils.Optional<WorkItemMaterialTestCountAggregateOutputType> | number
          }
        }
      }
      WorkItemTest: {
        payload: Prisma.$WorkItemTestPayload<ExtArgs>
        fields: Prisma.WorkItemTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkItemTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkItemTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemTestPayload>
          }
          findFirst: {
            args: Prisma.WorkItemTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkItemTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemTestPayload>
          }
          findMany: {
            args: Prisma.WorkItemTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemTestPayload>[]
          }
          create: {
            args: Prisma.WorkItemTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemTestPayload>
          }
          createMany: {
            args: Prisma.WorkItemTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkItemTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemTestPayload>[]
          }
          delete: {
            args: Prisma.WorkItemTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemTestPayload>
          }
          update: {
            args: Prisma.WorkItemTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemTestPayload>
          }
          deleteMany: {
            args: Prisma.WorkItemTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkItemTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkItemTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemTestPayload>[]
          }
          upsert: {
            args: Prisma.WorkItemTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemTestPayload>
          }
          aggregate: {
            args: Prisma.WorkItemTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkItemTest>
          }
          groupBy: {
            args: Prisma.WorkItemTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkItemTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkItemTestCountArgs<ExtArgs>
            result: $Utils.Optional<WorkItemTestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    material?: MaterialOmit
    project?: ProjectOmit
    projectMaterial?: ProjectMaterialOmit
    projectMaterialTest?: ProjectMaterialTestOmit
    projectWorkItem?: ProjectWorkItemOmit
    projectWorkItemTest?: ProjectWorkItemTestOmit
    test?: TestOmit
    unit?: UnitOmit
    workItem?: WorkItemOmit
    workItemMaterial?: WorkItemMaterialOmit
    workItemMaterialTest?: WorkItemMaterialTestOmit
    workItemTest?: WorkItemTestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    projectMaterial: number
    workItemMaterial: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMaterial?: boolean | MaterialCountOutputTypeCountProjectMaterialArgs
    workItemMaterial?: boolean | MaterialCountOutputTypeCountWorkItemMaterialArgs
  }

  // Custom InputTypes
  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountProjectMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMaterialWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountWorkItemMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkItemMaterialWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    projectWorkItem: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectWorkItem?: boolean | ProjectCountOutputTypeCountProjectWorkItemArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectWorkItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWorkItemWhereInput
  }


  /**
   * Count Type ProjectMaterialCountOutputType
   */

  export type ProjectMaterialCountOutputType = {
    projectMaterialTest: number
  }

  export type ProjectMaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMaterialTest?: boolean | ProjectMaterialCountOutputTypeCountProjectMaterialTestArgs
  }

  // Custom InputTypes
  /**
   * ProjectMaterialCountOutputType without action
   */
  export type ProjectMaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialCountOutputType
     */
    select?: ProjectMaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectMaterialCountOutputType without action
   */
  export type ProjectMaterialCountOutputTypeCountProjectMaterialTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMaterialTestWhereInput
  }


  /**
   * Count Type ProjectWorkItemCountOutputType
   */

  export type ProjectWorkItemCountOutputType = {
    projectMaterial: number
    projectWorkItemTest: number
  }

  export type ProjectWorkItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMaterial?: boolean | ProjectWorkItemCountOutputTypeCountProjectMaterialArgs
    projectWorkItemTest?: boolean | ProjectWorkItemCountOutputTypeCountProjectWorkItemTestArgs
  }

  // Custom InputTypes
  /**
   * ProjectWorkItemCountOutputType without action
   */
  export type ProjectWorkItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemCountOutputType
     */
    select?: ProjectWorkItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectWorkItemCountOutputType without action
   */
  export type ProjectWorkItemCountOutputTypeCountProjectMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMaterialWhereInput
  }

  /**
   * ProjectWorkItemCountOutputType without action
   */
  export type ProjectWorkItemCountOutputTypeCountProjectWorkItemTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWorkItemTestWhereInput
  }


  /**
   * Count Type TestCountOutputType
   */

  export type TestCountOutputType = {
    projectMaterialTest: number
    projectWorkItemTest: number
    workItemMaterialTest: number
    workItemTest: number
  }

  export type TestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMaterialTest?: boolean | TestCountOutputTypeCountProjectMaterialTestArgs
    projectWorkItemTest?: boolean | TestCountOutputTypeCountProjectWorkItemTestArgs
    workItemMaterialTest?: boolean | TestCountOutputTypeCountWorkItemMaterialTestArgs
    workItemTest?: boolean | TestCountOutputTypeCountWorkItemTestArgs
  }

  // Custom InputTypes
  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountProjectMaterialTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMaterialTestWhereInput
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountProjectWorkItemTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWorkItemTestWhereInput
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountWorkItemMaterialTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkItemMaterialTestWhereInput
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountWorkItemTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkItemTestWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    material: number
    workItem: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | UnitCountOutputTypeCountMaterialArgs
    workItem?: boolean | UnitCountOutputTypeCountWorkItemArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountWorkItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkItemWhereInput
  }


  /**
   * Count Type WorkItemCountOutputType
   */

  export type WorkItemCountOutputType = {
    projectWorkItem: number
    workItemMaterial: number
    workItemTest: number
  }

  export type WorkItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectWorkItem?: boolean | WorkItemCountOutputTypeCountProjectWorkItemArgs
    workItemMaterial?: boolean | WorkItemCountOutputTypeCountWorkItemMaterialArgs
    workItemTest?: boolean | WorkItemCountOutputTypeCountWorkItemTestArgs
  }

  // Custom InputTypes
  /**
   * WorkItemCountOutputType without action
   */
  export type WorkItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemCountOutputType
     */
    select?: WorkItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkItemCountOutputType without action
   */
  export type WorkItemCountOutputTypeCountProjectWorkItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWorkItemWhereInput
  }

  /**
   * WorkItemCountOutputType without action
   */
  export type WorkItemCountOutputTypeCountWorkItemMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkItemMaterialWhereInput
  }

  /**
   * WorkItemCountOutputType without action
   */
  export type WorkItemCountOutputTypeCountWorkItemTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkItemTestWhereInput
  }


  /**
   * Count Type WorkItemMaterialCountOutputType
   */

  export type WorkItemMaterialCountOutputType = {
    workItemMaterialTest: number
  }

  export type WorkItemMaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workItemMaterialTest?: boolean | WorkItemMaterialCountOutputTypeCountWorkItemMaterialTestArgs
  }

  // Custom InputTypes
  /**
   * WorkItemMaterialCountOutputType without action
   */
  export type WorkItemMaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialCountOutputType
     */
    select?: WorkItemMaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkItemMaterialCountOutputType without action
   */
  export type WorkItemMaterialCountOutputTypeCountWorkItemMaterialTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkItemMaterialTestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    unitId: string | null
    createdAt: Date | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    unitId: string | null
    createdAt: Date | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    name: number
    description: number
    unitId: number
    createdAt: number
    _all: number
  }


  export type MaterialMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    unitId?: true
    createdAt?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    unitId?: true
    createdAt?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    unitId?: true
    createdAt?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: string
    name: string
    description: string | null
    unitId: string
    createdAt: Date
    _count: MaterialCountAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    unitId?: boolean
    createdAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    projectMaterial?: boolean | Material$projectMaterialArgs<ExtArgs>
    workItemMaterial?: boolean | Material$workItemMaterialArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    unitId?: boolean
    createdAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    unitId?: boolean
    createdAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    unitId?: boolean
    createdAt?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "unitId" | "createdAt", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    projectMaterial?: boolean | Material$projectMaterialArgs<ExtArgs>
    workItemMaterial?: boolean | Material$workItemMaterialArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      unit: Prisma.$UnitPayload<ExtArgs>
      projectMaterial: Prisma.$ProjectMaterialPayload<ExtArgs>[]
      workItemMaterial: Prisma.$WorkItemMaterialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      unitId: string
      createdAt: Date
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projectMaterial<T extends Material$projectMaterialArgs<ExtArgs> = {}>(args?: Subset<T, Material$projectMaterialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workItemMaterial<T extends Material$workItemMaterialArgs<ExtArgs> = {}>(args?: Subset<T, Material$workItemMaterialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>)   | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>)   | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>)   | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void)   | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'String'>
    readonly name: FieldRef<"Material", 'String'>
    readonly description: FieldRef<"Material", 'String'>
    readonly unitId: FieldRef<"Material", 'String'>
    readonly createdAt: FieldRef<"Material", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material updateManyAndReturn
   */
  export type MaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material.projectMaterial
   */
  export type Material$projectMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    where?: ProjectMaterialWhereInput
    orderBy?: ProjectMaterialOrderByWithRelationInput | ProjectMaterialOrderByWithRelationInput[]
    cursor?: ProjectMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMaterialScalarFieldEnum | ProjectMaterialScalarFieldEnum[]
  }

  /**
   * Material.workItemMaterial
   */
  export type Material$workItemMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterial
     */
    select?: WorkItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterial
     */
    omit?: WorkItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialInclude<ExtArgs> | null
    where?: WorkItemMaterialWhereInput
    orderBy?: WorkItemMaterialOrderByWithRelationInput | WorkItemMaterialOrderByWithRelationInput[]
    cursor?: WorkItemMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkItemMaterialScalarFieldEnum | WorkItemMaterialScalarFieldEnum[]
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    contractCost: Decimal | null
  }

  export type ProjectSumAggregateOutputType = {
    contractCost: Decimal | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    contractId: string | null
    contractName: string | null
    contractor: string | null
    limits: string | null
    location: string | null
    dateStarted: Date | null
    createdAt: Date | null
    materialsEngineer: string | null
    contractCost: Decimal | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    contractId: string | null
    contractName: string | null
    contractor: string | null
    limits: string | null
    location: string | null
    dateStarted: Date | null
    createdAt: Date | null
    materialsEngineer: string | null
    contractCost: Decimal | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    contractId: number
    contractName: number
    contractor: number
    limits: number
    location: number
    dateStarted: number
    createdAt: number
    materialsEngineer: number
    contractCost: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    contractCost?: true
  }

  export type ProjectSumAggregateInputType = {
    contractCost?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    contractId?: true
    contractName?: true
    contractor?: true
    limits?: true
    location?: true
    dateStarted?: true
    createdAt?: true
    materialsEngineer?: true
    contractCost?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    contractId?: true
    contractName?: true
    contractor?: true
    limits?: true
    location?: true
    dateStarted?: true
    createdAt?: true
    materialsEngineer?: true
    contractCost?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    contractId?: true
    contractName?: true
    contractor?: true
    limits?: true
    location?: true
    dateStarted?: true
    createdAt?: true
    materialsEngineer?: true
    contractCost?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    contractId: string
    contractName: string
    contractor: string
    limits: string | null
    location: string | null
    dateStarted: Date
    createdAt: Date
    materialsEngineer: string
    contractCost: Decimal
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    contractName?: boolean
    contractor?: boolean
    limits?: boolean
    location?: boolean
    dateStarted?: boolean
    createdAt?: boolean
    materialsEngineer?: boolean
    contractCost?: boolean
    projectWorkItem?: boolean | Project$projectWorkItemArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    contractName?: boolean
    contractor?: boolean
    limits?: boolean
    location?: boolean
    dateStarted?: boolean
    createdAt?: boolean
    materialsEngineer?: boolean
    contractCost?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    contractName?: boolean
    contractor?: boolean
    limits?: boolean
    location?: boolean
    dateStarted?: boolean
    createdAt?: boolean
    materialsEngineer?: boolean
    contractCost?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    contractId?: boolean
    contractName?: boolean
    contractor?: boolean
    limits?: boolean
    location?: boolean
    dateStarted?: boolean
    createdAt?: boolean
    materialsEngineer?: boolean
    contractCost?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "contractName" | "contractor" | "limits" | "location" | "dateStarted" | "createdAt" | "materialsEngineer" | "contractCost", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectWorkItem?: boolean | Project$projectWorkItemArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      projectWorkItem: Prisma.$ProjectWorkItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contractId: string
      contractName: string
      contractor: string
      limits: string | null
      location: string | null
      dateStarted: Date
      createdAt: Date
      materialsEngineer: string
      contractCost: Prisma.Decimal
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectWorkItem<T extends Project$projectWorkItemArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectWorkItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>)   | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>)   | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>)   | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void)   | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly contractId: FieldRef<"Project", 'String'>
    readonly contractName: FieldRef<"Project", 'String'>
    readonly contractor: FieldRef<"Project", 'String'>
    readonly limits: FieldRef<"Project", 'String'>
    readonly location: FieldRef<"Project", 'String'>
    readonly dateStarted: FieldRef<"Project", 'DateTime'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly materialsEngineer: FieldRef<"Project", 'String'>
    readonly contractCost: FieldRef<"Project", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.projectWorkItem
   */
  export type Project$projectWorkItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItem
     */
    select?: ProjectWorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItem
     */
    omit?: ProjectWorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemInclude<ExtArgs> | null
    where?: ProjectWorkItemWhereInput
    orderBy?: ProjectWorkItemOrderByWithRelationInput | ProjectWorkItemOrderByWithRelationInput[]
    cursor?: ProjectWorkItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectWorkItemScalarFieldEnum | ProjectWorkItemScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMaterial
   */

  export type AggregateProjectMaterial = {
    _count: ProjectMaterialCountAggregateOutputType | null
    _avg: ProjectMaterialAvgAggregateOutputType | null
    _sum: ProjectMaterialSumAggregateOutputType | null
    _min: ProjectMaterialMinAggregateOutputType | null
    _max: ProjectMaterialMaxAggregateOutputType | null
  }

  export type ProjectMaterialAvgAggregateOutputType = {
    quantity: Decimal | null
  }

  export type ProjectMaterialSumAggregateOutputType = {
    quantity: Decimal | null
  }

  export type ProjectMaterialMinAggregateOutputType = {
    id: string | null
    projectWorkItemId: string | null
    materialId: string | null
    quantity: Decimal | null
    createdAt: Date | null
  }

  export type ProjectMaterialMaxAggregateOutputType = {
    id: string | null
    projectWorkItemId: string | null
    materialId: string | null
    quantity: Decimal | null
    createdAt: Date | null
  }

  export type ProjectMaterialCountAggregateOutputType = {
    id: number
    projectWorkItemId: number
    materialId: number
    quantity: number
    createdAt: number
    _all: number
  }


  export type ProjectMaterialAvgAggregateInputType = {
    quantity?: true
  }

  export type ProjectMaterialSumAggregateInputType = {
    quantity?: true
  }

  export type ProjectMaterialMinAggregateInputType = {
    id?: true
    projectWorkItemId?: true
    materialId?: true
    quantity?: true
    createdAt?: true
  }

  export type ProjectMaterialMaxAggregateInputType = {
    id?: true
    projectWorkItemId?: true
    materialId?: true
    quantity?: true
    createdAt?: true
  }

  export type ProjectMaterialCountAggregateInputType = {
    id?: true
    projectWorkItemId?: true
    materialId?: true
    quantity?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMaterial to aggregate.
     */
    where?: ProjectMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMaterials to fetch.
     */
    orderBy?: ProjectMaterialOrderByWithRelationInput | ProjectMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMaterials
    **/
    _count?: true | ProjectMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectMaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectMaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaterialMaxAggregateInputType
  }

  export type GetProjectMaterialAggregateType<T extends ProjectMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMaterial[P]>
      : GetScalarType<T[P], AggregateProjectMaterial[P]>
  }




  export type ProjectMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMaterialWhereInput
    orderBy?: ProjectMaterialOrderByWithAggregationInput | ProjectMaterialOrderByWithAggregationInput[]
    by: ProjectMaterialScalarFieldEnum[] | ProjectMaterialScalarFieldEnum
    having?: ProjectMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMaterialCountAggregateInputType | true
    _avg?: ProjectMaterialAvgAggregateInputType
    _sum?: ProjectMaterialSumAggregateInputType
    _min?: ProjectMaterialMinAggregateInputType
    _max?: ProjectMaterialMaxAggregateInputType
  }

  export type ProjectMaterialGroupByOutputType = {
    id: string
    projectWorkItemId: string
    materialId: string
    quantity: Decimal
    createdAt: Date
    _count: ProjectMaterialCountAggregateOutputType | null
    _avg: ProjectMaterialAvgAggregateOutputType | null
    _sum: ProjectMaterialSumAggregateOutputType | null
    _min: ProjectMaterialMinAggregateOutputType | null
    _max: ProjectMaterialMaxAggregateOutputType | null
  }

  type GetProjectMaterialGroupByPayload<T extends ProjectMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMaterialGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectWorkItemId?: boolean
    materialId?: boolean
    quantity?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    projectWorkItem?: boolean | ProjectWorkItemDefaultArgs<ExtArgs>
    projectMaterialTest?: boolean | ProjectMaterial$projectMaterialTestArgs<ExtArgs>
    _count?: boolean | ProjectMaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMaterial"]>

  export type ProjectMaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectWorkItemId?: boolean
    materialId?: boolean
    quantity?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    projectWorkItem?: boolean | ProjectWorkItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMaterial"]>

  export type ProjectMaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectWorkItemId?: boolean
    materialId?: boolean
    quantity?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    projectWorkItem?: boolean | ProjectWorkItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMaterial"]>

  export type ProjectMaterialSelectScalar = {
    id?: boolean
    projectWorkItemId?: boolean
    materialId?: boolean
    quantity?: boolean
    createdAt?: boolean
  }

  export type ProjectMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectWorkItemId" | "materialId" | "quantity" | "createdAt", ExtArgs["result"]["projectMaterial"]>
  export type ProjectMaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    projectWorkItem?: boolean | ProjectWorkItemDefaultArgs<ExtArgs>
    projectMaterialTest?: boolean | ProjectMaterial$projectMaterialTestArgs<ExtArgs>
    _count?: boolean | ProjectMaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectMaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    projectWorkItem?: boolean | ProjectWorkItemDefaultArgs<ExtArgs>
  }
  export type ProjectMaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    projectWorkItem?: boolean | ProjectWorkItemDefaultArgs<ExtArgs>
  }

  export type $ProjectMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMaterial"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>
      projectWorkItem: Prisma.$ProjectWorkItemPayload<ExtArgs>
      projectMaterialTest: Prisma.$ProjectMaterialTestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectWorkItemId: string
      materialId: string
      quantity: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["projectMaterial"]>
    composites: {}
  }

  type ProjectMaterialGetPayload<S extends boolean | null | undefined | ProjectMaterialDefaultArgs> = $Result.GetResult<Prisma.$ProjectMaterialPayload, S>

  type ProjectMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectMaterialCountAggregateInputType | true
    }

  export interface ProjectMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMaterial'], meta: { name: 'ProjectMaterial' } }
    /**
     * Find zero or one ProjectMaterial that matches the filter.
     * @param {ProjectMaterialFindUniqueArgs} args - Arguments to find a ProjectMaterial
     * @example
     * // Get one ProjectMaterial
     * const projectMaterial = await prisma.projectMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMaterialFindUniqueArgs>(args: SelectSubset<T, ProjectMaterialFindUniqueArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectMaterialFindUniqueOrThrowArgs} args - Arguments to find a ProjectMaterial
     * @example
     * // Get one ProjectMaterial
     * const projectMaterial = await prisma.projectMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialFindFirstArgs} args - Arguments to find a ProjectMaterial
     * @example
     * // Get one ProjectMaterial
     * const projectMaterial = await prisma.projectMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMaterialFindFirstArgs>(args?: SelectSubset<T, ProjectMaterialFindFirstArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialFindFirstOrThrowArgs} args - Arguments to find a ProjectMaterial
     * @example
     * // Get one ProjectMaterial
     * const projectMaterial = await prisma.projectMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMaterials
     * const projectMaterials = await prisma.projectMaterial.findMany()
     * 
     * // Get first 10 ProjectMaterials
     * const projectMaterials = await prisma.projectMaterial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectMaterialWithIdOnly = await prisma.projectMaterial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectMaterialFindManyArgs>(args?: SelectSubset<T, ProjectMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectMaterial.
     * @param {ProjectMaterialCreateArgs} args - Arguments to create a ProjectMaterial.
     * @example
     * // Create one ProjectMaterial
     * const ProjectMaterial = await prisma.projectMaterial.create({
     *   data: {
     *     // ... data to create a ProjectMaterial
     *   }
     * })
     * 
     */
    create<T extends ProjectMaterialCreateArgs>(args: SelectSubset<T, ProjectMaterialCreateArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectMaterials.
     * @param {ProjectMaterialCreateManyArgs} args - Arguments to create many ProjectMaterials.
     * @example
     * // Create many ProjectMaterials
     * const projectMaterial = await prisma.projectMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMaterialCreateManyArgs>(args?: SelectSubset<T, ProjectMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectMaterials and returns the data saved in the database.
     * @param {ProjectMaterialCreateManyAndReturnArgs} args - Arguments to create many ProjectMaterials.
     * @example
     * // Create many ProjectMaterials
     * const projectMaterial = await prisma.projectMaterial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectMaterials and only return the `id`
     * const projectMaterialWithIdOnly = await prisma.projectMaterial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectMaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectMaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectMaterial.
     * @param {ProjectMaterialDeleteArgs} args - Arguments to delete one ProjectMaterial.
     * @example
     * // Delete one ProjectMaterial
     * const ProjectMaterial = await prisma.projectMaterial.delete({
     *   where: {
     *     // ... filter to delete one ProjectMaterial
     *   }
     * })
     * 
     */
    delete<T extends ProjectMaterialDeleteArgs>(args: SelectSubset<T, ProjectMaterialDeleteArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectMaterial.
     * @param {ProjectMaterialUpdateArgs} args - Arguments to update one ProjectMaterial.
     * @example
     * // Update one ProjectMaterial
     * const projectMaterial = await prisma.projectMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMaterialUpdateArgs>(args: SelectSubset<T, ProjectMaterialUpdateArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectMaterials.
     * @param {ProjectMaterialDeleteManyArgs} args - Arguments to filter ProjectMaterials to delete.
     * @example
     * // Delete a few ProjectMaterials
     * const { count } = await prisma.projectMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMaterialDeleteManyArgs>(args?: SelectSubset<T, ProjectMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMaterials
     * const projectMaterial = await prisma.projectMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMaterialUpdateManyArgs>(args: SelectSubset<T, ProjectMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMaterials and returns the data updated in the database.
     * @param {ProjectMaterialUpdateManyAndReturnArgs} args - Arguments to update many ProjectMaterials.
     * @example
     * // Update many ProjectMaterials
     * const projectMaterial = await prisma.projectMaterial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectMaterials and only return the `id`
     * const projectMaterialWithIdOnly = await prisma.projectMaterial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectMaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectMaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectMaterial.
     * @param {ProjectMaterialUpsertArgs} args - Arguments to update or create a ProjectMaterial.
     * @example
     * // Update or create a ProjectMaterial
     * const projectMaterial = await prisma.projectMaterial.upsert({
     *   create: {
     *     // ... data to create a ProjectMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMaterial we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMaterialUpsertArgs>(args: SelectSubset<T, ProjectMaterialUpsertArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialCountArgs} args - Arguments to filter ProjectMaterials to count.
     * @example
     * // Count the number of ProjectMaterials
     * const count = await prisma.projectMaterial.count({
     *   where: {
     *     // ... the filter for the ProjectMaterials we want to count
     *   }
     * })
    **/
    count<T extends ProjectMaterialCountArgs>(
      args?: Subset<T, ProjectMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectMaterialAggregateArgs>(args: Subset<T, ProjectMaterialAggregateArgs>): Prisma.PrismaPromise<GetProjectMaterialAggregateType<T>>

    /**
     * Group by ProjectMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMaterialGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMaterialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMaterial model
   */
  readonly fields: ProjectMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projectWorkItem<T extends ProjectWorkItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectWorkItemDefaultArgs<ExtArgs>>): Prisma__ProjectWorkItemClient<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projectMaterialTest<T extends ProjectMaterial$projectMaterialTestArgs<ExtArgs> = {}>(args?: Subset<T, ProjectMaterial$projectMaterialTestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>)   | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>)   | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>)   | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void)   | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectMaterial model
   */
  interface ProjectMaterialFieldRefs {
    readonly id: FieldRef<"ProjectMaterial", 'String'>
    readonly projectWorkItemId: FieldRef<"ProjectMaterial", 'String'>
    readonly materialId: FieldRef<"ProjectMaterial", 'String'>
    readonly quantity: FieldRef<"ProjectMaterial", 'Decimal'>
    readonly createdAt: FieldRef<"ProjectMaterial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMaterial findUnique
   */
  export type ProjectMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterial to fetch.
     */
    where: ProjectMaterialWhereUniqueInput
  }

  /**
   * ProjectMaterial findUniqueOrThrow
   */
  export type ProjectMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterial to fetch.
     */
    where: ProjectMaterialWhereUniqueInput
  }

  /**
   * ProjectMaterial findFirst
   */
  export type ProjectMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterial to fetch.
     */
    where?: ProjectMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMaterials to fetch.
     */
    orderBy?: ProjectMaterialOrderByWithRelationInput | ProjectMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMaterials.
     */
    cursor?: ProjectMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMaterials.
     */
    distinct?: ProjectMaterialScalarFieldEnum | ProjectMaterialScalarFieldEnum[]
  }

  /**
   * ProjectMaterial findFirstOrThrow
   */
  export type ProjectMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterial to fetch.
     */
    where?: ProjectMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMaterials to fetch.
     */
    orderBy?: ProjectMaterialOrderByWithRelationInput | ProjectMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMaterials.
     */
    cursor?: ProjectMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMaterials.
     */
    distinct?: ProjectMaterialScalarFieldEnum | ProjectMaterialScalarFieldEnum[]
  }

  /**
   * ProjectMaterial findMany
   */
  export type ProjectMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterials to fetch.
     */
    where?: ProjectMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMaterials to fetch.
     */
    orderBy?: ProjectMaterialOrderByWithRelationInput | ProjectMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMaterials.
     */
    cursor?: ProjectMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMaterials.
     */
    skip?: number
    distinct?: ProjectMaterialScalarFieldEnum | ProjectMaterialScalarFieldEnum[]
  }

  /**
   * ProjectMaterial create
   */
  export type ProjectMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMaterial.
     */
    data: XOR<ProjectMaterialCreateInput, ProjectMaterialUncheckedCreateInput>
  }

  /**
   * ProjectMaterial createMany
   */
  export type ProjectMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMaterials.
     */
    data: ProjectMaterialCreateManyInput | ProjectMaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectMaterial createManyAndReturn
   */
  export type ProjectMaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectMaterials.
     */
    data: ProjectMaterialCreateManyInput | ProjectMaterialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMaterial update
   */
  export type ProjectMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMaterial.
     */
    data: XOR<ProjectMaterialUpdateInput, ProjectMaterialUncheckedUpdateInput>
    /**
     * Choose, which ProjectMaterial to update.
     */
    where: ProjectMaterialWhereUniqueInput
  }

  /**
   * ProjectMaterial updateMany
   */
  export type ProjectMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMaterials.
     */
    data: XOR<ProjectMaterialUpdateManyMutationInput, ProjectMaterialUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMaterials to update
     */
    where?: ProjectMaterialWhereInput
    /**
     * Limit how many ProjectMaterials to update.
     */
    limit?: number
  }

  /**
   * ProjectMaterial updateManyAndReturn
   */
  export type ProjectMaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * The data used to update ProjectMaterials.
     */
    data: XOR<ProjectMaterialUpdateManyMutationInput, ProjectMaterialUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMaterials to update
     */
    where?: ProjectMaterialWhereInput
    /**
     * Limit how many ProjectMaterials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMaterial upsert
   */
  export type ProjectMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMaterial to update in case it exists.
     */
    where: ProjectMaterialWhereUniqueInput
    /**
     * In case the ProjectMaterial found by the `where` argument doesn't exist, create a new ProjectMaterial with this data.
     */
    create: XOR<ProjectMaterialCreateInput, ProjectMaterialUncheckedCreateInput>
    /**
     * In case the ProjectMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMaterialUpdateInput, ProjectMaterialUncheckedUpdateInput>
  }

  /**
   * ProjectMaterial delete
   */
  export type ProjectMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * Filter which ProjectMaterial to delete.
     */
    where: ProjectMaterialWhereUniqueInput
  }

  /**
   * ProjectMaterial deleteMany
   */
  export type ProjectMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMaterials to delete
     */
    where?: ProjectMaterialWhereInput
    /**
     * Limit how many ProjectMaterials to delete.
     */
    limit?: number
  }

  /**
   * ProjectMaterial.projectMaterialTest
   */
  export type ProjectMaterial$projectMaterialTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialTest
     */
    select?: ProjectMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterialTest
     */
    omit?: ProjectMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialTestInclude<ExtArgs> | null
    where?: ProjectMaterialTestWhereInput
    orderBy?: ProjectMaterialTestOrderByWithRelationInput | ProjectMaterialTestOrderByWithRelationInput[]
    cursor?: ProjectMaterialTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMaterialTestScalarFieldEnum | ProjectMaterialTestScalarFieldEnum[]
  }

  /**
   * ProjectMaterial without action
   */
  export type ProjectMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMaterialTest
   */

  export type AggregateProjectMaterialTest = {
    _count: ProjectMaterialTestCountAggregateOutputType | null
    _avg: ProjectMaterialTestAvgAggregateOutputType | null
    _sum: ProjectMaterialTestSumAggregateOutputType | null
    _min: ProjectMaterialTestMinAggregateOutputType | null
    _max: ProjectMaterialTestMaxAggregateOutputType | null
  }

  export type ProjectMaterialTestAvgAggregateOutputType = {
    onFile: number | null
  }

  export type ProjectMaterialTestSumAggregateOutputType = {
    onFile: number | null
  }

  export type ProjectMaterialTestMinAggregateOutputType = {
    id: string | null
    testId: string | null
    projectMaterialId: string | null
    onFile: number | null
    createdAt: Date | null
  }

  export type ProjectMaterialTestMaxAggregateOutputType = {
    id: string | null
    testId: string | null
    projectMaterialId: string | null
    onFile: number | null
    createdAt: Date | null
  }

  export type ProjectMaterialTestCountAggregateOutputType = {
    id: number
    testId: number
    projectMaterialId: number
    onFile: number
    createdAt: number
    _all: number
  }


  export type ProjectMaterialTestAvgAggregateInputType = {
    onFile?: true
  }

  export type ProjectMaterialTestSumAggregateInputType = {
    onFile?: true
  }

  export type ProjectMaterialTestMinAggregateInputType = {
    id?: true
    testId?: true
    projectMaterialId?: true
    onFile?: true
    createdAt?: true
  }

  export type ProjectMaterialTestMaxAggregateInputType = {
    id?: true
    testId?: true
    projectMaterialId?: true
    onFile?: true
    createdAt?: true
  }

  export type ProjectMaterialTestCountAggregateInputType = {
    id?: true
    testId?: true
    projectMaterialId?: true
    onFile?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectMaterialTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMaterialTest to aggregate.
     */
    where?: ProjectMaterialTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMaterialTests to fetch.
     */
    orderBy?: ProjectMaterialTestOrderByWithRelationInput | ProjectMaterialTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMaterialTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMaterialTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMaterialTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMaterialTests
    **/
    _count?: true | ProjectMaterialTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectMaterialTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectMaterialTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMaterialTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaterialTestMaxAggregateInputType
  }

  export type GetProjectMaterialTestAggregateType<T extends ProjectMaterialTestAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMaterialTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMaterialTest[P]>
      : GetScalarType<T[P], AggregateProjectMaterialTest[P]>
  }




  export type ProjectMaterialTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMaterialTestWhereInput
    orderBy?: ProjectMaterialTestOrderByWithAggregationInput | ProjectMaterialTestOrderByWithAggregationInput[]
    by: ProjectMaterialTestScalarFieldEnum[] | ProjectMaterialTestScalarFieldEnum
    having?: ProjectMaterialTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMaterialTestCountAggregateInputType | true
    _avg?: ProjectMaterialTestAvgAggregateInputType
    _sum?: ProjectMaterialTestSumAggregateInputType
    _min?: ProjectMaterialTestMinAggregateInputType
    _max?: ProjectMaterialTestMaxAggregateInputType
  }

  export type ProjectMaterialTestGroupByOutputType = {
    id: string
    testId: string
    projectMaterialId: string
    onFile: number
    createdAt: Date
    _count: ProjectMaterialTestCountAggregateOutputType | null
    _avg: ProjectMaterialTestAvgAggregateOutputType | null
    _sum: ProjectMaterialTestSumAggregateOutputType | null
    _min: ProjectMaterialTestMinAggregateOutputType | null
    _max: ProjectMaterialTestMaxAggregateOutputType | null
  }

  type GetProjectMaterialTestGroupByPayload<T extends ProjectMaterialTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMaterialTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMaterialTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMaterialTestGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMaterialTestGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMaterialTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    projectMaterialId?: boolean
    onFile?: boolean
    createdAt?: boolean
    projectMaterial?: boolean | ProjectMaterialDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMaterialTest"]>

  export type ProjectMaterialTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    projectMaterialId?: boolean
    onFile?: boolean
    createdAt?: boolean
    projectMaterial?: boolean | ProjectMaterialDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMaterialTest"]>

  export type ProjectMaterialTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    projectMaterialId?: boolean
    onFile?: boolean
    createdAt?: boolean
    projectMaterial?: boolean | ProjectMaterialDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMaterialTest"]>

  export type ProjectMaterialTestSelectScalar = {
    id?: boolean
    testId?: boolean
    projectMaterialId?: boolean
    onFile?: boolean
    createdAt?: boolean
  }

  export type ProjectMaterialTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testId" | "projectMaterialId" | "onFile" | "createdAt", ExtArgs["result"]["projectMaterialTest"]>
  export type ProjectMaterialTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMaterial?: boolean | ProjectMaterialDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }
  export type ProjectMaterialTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMaterial?: boolean | ProjectMaterialDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }
  export type ProjectMaterialTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMaterial?: boolean | ProjectMaterialDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }

  export type $ProjectMaterialTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMaterialTest"
    objects: {
      projectMaterial: Prisma.$ProjectMaterialPayload<ExtArgs>
      test: Prisma.$TestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      testId: string
      projectMaterialId: string
      onFile: number
      createdAt: Date
    }, ExtArgs["result"]["projectMaterialTest"]>
    composites: {}
  }

  type ProjectMaterialTestGetPayload<S extends boolean | null | undefined | ProjectMaterialTestDefaultArgs> = $Result.GetResult<Prisma.$ProjectMaterialTestPayload, S>

  type ProjectMaterialTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectMaterialTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectMaterialTestCountAggregateInputType | true
    }

  export interface ProjectMaterialTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMaterialTest'], meta: { name: 'ProjectMaterialTest' } }
    /**
     * Find zero or one ProjectMaterialTest that matches the filter.
     * @param {ProjectMaterialTestFindUniqueArgs} args - Arguments to find a ProjectMaterialTest
     * @example
     * // Get one ProjectMaterialTest
     * const projectMaterialTest = await prisma.projectMaterialTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMaterialTestFindUniqueArgs>(args: SelectSubset<T, ProjectMaterialTestFindUniqueArgs<ExtArgs>>): Prisma__ProjectMaterialTestClient<$Result.GetResult<Prisma.$ProjectMaterialTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectMaterialTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectMaterialTestFindUniqueOrThrowArgs} args - Arguments to find a ProjectMaterialTest
     * @example
     * // Get one ProjectMaterialTest
     * const projectMaterialTest = await prisma.projectMaterialTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMaterialTestFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMaterialTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMaterialTestClient<$Result.GetResult<Prisma.$ProjectMaterialTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMaterialTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialTestFindFirstArgs} args - Arguments to find a ProjectMaterialTest
     * @example
     * // Get one ProjectMaterialTest
     * const projectMaterialTest = await prisma.projectMaterialTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMaterialTestFindFirstArgs>(args?: SelectSubset<T, ProjectMaterialTestFindFirstArgs<ExtArgs>>): Prisma__ProjectMaterialTestClient<$Result.GetResult<Prisma.$ProjectMaterialTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMaterialTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialTestFindFirstOrThrowArgs} args - Arguments to find a ProjectMaterialTest
     * @example
     * // Get one ProjectMaterialTest
     * const projectMaterialTest = await prisma.projectMaterialTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMaterialTestFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMaterialTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMaterialTestClient<$Result.GetResult<Prisma.$ProjectMaterialTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectMaterialTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMaterialTests
     * const projectMaterialTests = await prisma.projectMaterialTest.findMany()
     * 
     * // Get first 10 ProjectMaterialTests
     * const projectMaterialTests = await prisma.projectMaterialTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectMaterialTestWithIdOnly = await prisma.projectMaterialTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectMaterialTestFindManyArgs>(args?: SelectSubset<T, ProjectMaterialTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectMaterialTest.
     * @param {ProjectMaterialTestCreateArgs} args - Arguments to create a ProjectMaterialTest.
     * @example
     * // Create one ProjectMaterialTest
     * const ProjectMaterialTest = await prisma.projectMaterialTest.create({
     *   data: {
     *     // ... data to create a ProjectMaterialTest
     *   }
     * })
     * 
     */
    create<T extends ProjectMaterialTestCreateArgs>(args: SelectSubset<T, ProjectMaterialTestCreateArgs<ExtArgs>>): Prisma__ProjectMaterialTestClient<$Result.GetResult<Prisma.$ProjectMaterialTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectMaterialTests.
     * @param {ProjectMaterialTestCreateManyArgs} args - Arguments to create many ProjectMaterialTests.
     * @example
     * // Create many ProjectMaterialTests
     * const projectMaterialTest = await prisma.projectMaterialTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMaterialTestCreateManyArgs>(args?: SelectSubset<T, ProjectMaterialTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectMaterialTests and returns the data saved in the database.
     * @param {ProjectMaterialTestCreateManyAndReturnArgs} args - Arguments to create many ProjectMaterialTests.
     * @example
     * // Create many ProjectMaterialTests
     * const projectMaterialTest = await prisma.projectMaterialTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectMaterialTests and only return the `id`
     * const projectMaterialTestWithIdOnly = await prisma.projectMaterialTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectMaterialTestCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectMaterialTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectMaterialTest.
     * @param {ProjectMaterialTestDeleteArgs} args - Arguments to delete one ProjectMaterialTest.
     * @example
     * // Delete one ProjectMaterialTest
     * const ProjectMaterialTest = await prisma.projectMaterialTest.delete({
     *   where: {
     *     // ... filter to delete one ProjectMaterialTest
     *   }
     * })
     * 
     */
    delete<T extends ProjectMaterialTestDeleteArgs>(args: SelectSubset<T, ProjectMaterialTestDeleteArgs<ExtArgs>>): Prisma__ProjectMaterialTestClient<$Result.GetResult<Prisma.$ProjectMaterialTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectMaterialTest.
     * @param {ProjectMaterialTestUpdateArgs} args - Arguments to update one ProjectMaterialTest.
     * @example
     * // Update one ProjectMaterialTest
     * const projectMaterialTest = await prisma.projectMaterialTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMaterialTestUpdateArgs>(args: SelectSubset<T, ProjectMaterialTestUpdateArgs<ExtArgs>>): Prisma__ProjectMaterialTestClient<$Result.GetResult<Prisma.$ProjectMaterialTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectMaterialTests.
     * @param {ProjectMaterialTestDeleteManyArgs} args - Arguments to filter ProjectMaterialTests to delete.
     * @example
     * // Delete a few ProjectMaterialTests
     * const { count } = await prisma.projectMaterialTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMaterialTestDeleteManyArgs>(args?: SelectSubset<T, ProjectMaterialTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMaterialTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMaterialTests
     * const projectMaterialTest = await prisma.projectMaterialTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMaterialTestUpdateManyArgs>(args: SelectSubset<T, ProjectMaterialTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMaterialTests and returns the data updated in the database.
     * @param {ProjectMaterialTestUpdateManyAndReturnArgs} args - Arguments to update many ProjectMaterialTests.
     * @example
     * // Update many ProjectMaterialTests
     * const projectMaterialTest = await prisma.projectMaterialTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectMaterialTests and only return the `id`
     * const projectMaterialTestWithIdOnly = await prisma.projectMaterialTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectMaterialTestUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectMaterialTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectMaterialTest.
     * @param {ProjectMaterialTestUpsertArgs} args - Arguments to update or create a ProjectMaterialTest.
     * @example
     * // Update or create a ProjectMaterialTest
     * const projectMaterialTest = await prisma.projectMaterialTest.upsert({
     *   create: {
     *     // ... data to create a ProjectMaterialTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMaterialTest we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMaterialTestUpsertArgs>(args: SelectSubset<T, ProjectMaterialTestUpsertArgs<ExtArgs>>): Prisma__ProjectMaterialTestClient<$Result.GetResult<Prisma.$ProjectMaterialTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectMaterialTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialTestCountArgs} args - Arguments to filter ProjectMaterialTests to count.
     * @example
     * // Count the number of ProjectMaterialTests
     * const count = await prisma.projectMaterialTest.count({
     *   where: {
     *     // ... the filter for the ProjectMaterialTests we want to count
     *   }
     * })
    **/
    count<T extends ProjectMaterialTestCountArgs>(
      args?: Subset<T, ProjectMaterialTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMaterialTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMaterialTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectMaterialTestAggregateArgs>(args: Subset<T, ProjectMaterialTestAggregateArgs>): Prisma.PrismaPromise<GetProjectMaterialTestAggregateType<T>>

    /**
     * Group by ProjectMaterialTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectMaterialTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMaterialTestGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMaterialTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectMaterialTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMaterialTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMaterialTest model
   */
  readonly fields: ProjectMaterialTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMaterialTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMaterialTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectMaterial<T extends ProjectMaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectMaterialDefaultArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>)   | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>)   | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>)   | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void)   | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectMaterialTest model
   */
  interface ProjectMaterialTestFieldRefs {
    readonly id: FieldRef<"ProjectMaterialTest", 'String'>
    readonly testId: FieldRef<"ProjectMaterialTest", 'String'>
    readonly projectMaterialId: FieldRef<"ProjectMaterialTest", 'String'>
    readonly onFile: FieldRef<"ProjectMaterialTest", 'Int'>
    readonly createdAt: FieldRef<"ProjectMaterialTest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMaterialTest findUnique
   */
  export type ProjectMaterialTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialTest
     */
    select?: ProjectMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterialTest
     */
    omit?: ProjectMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialTestInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterialTest to fetch.
     */
    where: ProjectMaterialTestWhereUniqueInput
  }

  /**
   * ProjectMaterialTest findUniqueOrThrow
   */
  export type ProjectMaterialTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialTest
     */
    select?: ProjectMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterialTest
     */
    omit?: ProjectMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialTestInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterialTest to fetch.
     */
    where: ProjectMaterialTestWhereUniqueInput
  }

  /**
   * ProjectMaterialTest findFirst
   */
  export type ProjectMaterialTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialTest
     */
    select?: ProjectMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterialTest
     */
    omit?: ProjectMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialTestInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterialTest to fetch.
     */
    where?: ProjectMaterialTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMaterialTests to fetch.
     */
    orderBy?: ProjectMaterialTestOrderByWithRelationInput | ProjectMaterialTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMaterialTests.
     */
    cursor?: ProjectMaterialTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMaterialTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMaterialTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMaterialTests.
     */
    distinct?: ProjectMaterialTestScalarFieldEnum | ProjectMaterialTestScalarFieldEnum[]
  }

  /**
   * ProjectMaterialTest findFirstOrThrow
   */
  export type ProjectMaterialTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialTest
     */
    select?: ProjectMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterialTest
     */
    omit?: ProjectMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialTestInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterialTest to fetch.
     */
    where?: ProjectMaterialTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMaterialTests to fetch.
     */
    orderBy?: ProjectMaterialTestOrderByWithRelationInput | ProjectMaterialTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMaterialTests.
     */
    cursor?: ProjectMaterialTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMaterialTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMaterialTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMaterialTests.
     */
    distinct?: ProjectMaterialTestScalarFieldEnum | ProjectMaterialTestScalarFieldEnum[]
  }

  /**
   * ProjectMaterialTest findMany
   */
  export type ProjectMaterialTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialTest
     */
    select?: ProjectMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterialTest
     */
    omit?: ProjectMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialTestInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterialTests to fetch.
     */
    where?: ProjectMaterialTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMaterialTests to fetch.
     */
    orderBy?: ProjectMaterialTestOrderByWithRelationInput | ProjectMaterialTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMaterialTests.
     */
    cursor?: ProjectMaterialTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMaterialTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMaterialTests.
     */
    skip?: number
    distinct?: ProjectMaterialTestScalarFieldEnum | ProjectMaterialTestScalarFieldEnum[]
  }

  /**
   * ProjectMaterialTest create
   */
  export type ProjectMaterialTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialTest
     */
    select?: ProjectMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterialTest
     */
    omit?: ProjectMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialTestInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMaterialTest.
     */
    data: XOR<ProjectMaterialTestCreateInput, ProjectMaterialTestUncheckedCreateInput>
  }

  /**
   * ProjectMaterialTest createMany
   */
  export type ProjectMaterialTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMaterialTests.
     */
    data: ProjectMaterialTestCreateManyInput | ProjectMaterialTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectMaterialTest createManyAndReturn
   */
  export type ProjectMaterialTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialTest
     */
    select?: ProjectMaterialTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterialTest
     */
    omit?: ProjectMaterialTestOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectMaterialTests.
     */
    data: ProjectMaterialTestCreateManyInput | ProjectMaterialTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMaterialTest update
   */
  export type ProjectMaterialTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialTest
     */
    select?: ProjectMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterialTest
     */
    omit?: ProjectMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialTestInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMaterialTest.
     */
    data: XOR<ProjectMaterialTestUpdateInput, ProjectMaterialTestUncheckedUpdateInput>
    /**
     * Choose, which ProjectMaterialTest to update.
     */
    where: ProjectMaterialTestWhereUniqueInput
  }

  /**
   * ProjectMaterialTest updateMany
   */
  export type ProjectMaterialTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMaterialTests.
     */
    data: XOR<ProjectMaterialTestUpdateManyMutationInput, ProjectMaterialTestUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMaterialTests to update
     */
    where?: ProjectMaterialTestWhereInput
    /**
     * Limit how many ProjectMaterialTests to update.
     */
    limit?: number
  }

  /**
   * ProjectMaterialTest updateManyAndReturn
   */
  export type ProjectMaterialTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialTest
     */
    select?: ProjectMaterialTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterialTest
     */
    omit?: ProjectMaterialTestOmit<ExtArgs> | null
    /**
     * The data used to update ProjectMaterialTests.
     */
    data: XOR<ProjectMaterialTestUpdateManyMutationInput, ProjectMaterialTestUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMaterialTests to update
     */
    where?: ProjectMaterialTestWhereInput
    /**
     * Limit how many ProjectMaterialTests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialTestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMaterialTest upsert
   */
  export type ProjectMaterialTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialTest
     */
    select?: ProjectMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterialTest
     */
    omit?: ProjectMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialTestInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMaterialTest to update in case it exists.
     */
    where: ProjectMaterialTestWhereUniqueInput
    /**
     * In case the ProjectMaterialTest found by the `where` argument doesn't exist, create a new ProjectMaterialTest with this data.
     */
    create: XOR<ProjectMaterialTestCreateInput, ProjectMaterialTestUncheckedCreateInput>
    /**
     * In case the ProjectMaterialTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMaterialTestUpdateInput, ProjectMaterialTestUncheckedUpdateInput>
  }

  /**
   * ProjectMaterialTest delete
   */
  export type ProjectMaterialTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialTest
     */
    select?: ProjectMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterialTest
     */
    omit?: ProjectMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialTestInclude<ExtArgs> | null
    /**
     * Filter which ProjectMaterialTest to delete.
     */
    where: ProjectMaterialTestWhereUniqueInput
  }

  /**
   * ProjectMaterialTest deleteMany
   */
  export type ProjectMaterialTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMaterialTests to delete
     */
    where?: ProjectMaterialTestWhereInput
    /**
     * Limit how many ProjectMaterialTests to delete.
     */
    limit?: number
  }

  /**
   * ProjectMaterialTest without action
   */
  export type ProjectMaterialTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialTest
     */
    select?: ProjectMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterialTest
     */
    omit?: ProjectMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialTestInclude<ExtArgs> | null
  }


  /**
   * Model ProjectWorkItem
   */

  export type AggregateProjectWorkItem = {
    _count: ProjectWorkItemCountAggregateOutputType | null
    _avg: ProjectWorkItemAvgAggregateOutputType | null
    _sum: ProjectWorkItemSumAggregateOutputType | null
    _min: ProjectWorkItemMinAggregateOutputType | null
    _max: ProjectWorkItemMaxAggregateOutputType | null
  }

  export type ProjectWorkItemAvgAggregateOutputType = {
    quantity: Decimal | null
  }

  export type ProjectWorkItemSumAggregateOutputType = {
    quantity: Decimal | null
  }

  export type ProjectWorkItemMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    workItemId: string | null
    quantity: Decimal | null
    createdAt: Date | null
  }

  export type ProjectWorkItemMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    workItemId: string | null
    quantity: Decimal | null
    createdAt: Date | null
  }

  export type ProjectWorkItemCountAggregateOutputType = {
    id: number
    projectId: number
    workItemId: number
    quantity: number
    createdAt: number
    _all: number
  }


  export type ProjectWorkItemAvgAggregateInputType = {
    quantity?: true
  }

  export type ProjectWorkItemSumAggregateInputType = {
    quantity?: true
  }

  export type ProjectWorkItemMinAggregateInputType = {
    id?: true
    projectId?: true
    workItemId?: true
    quantity?: true
    createdAt?: true
  }

  export type ProjectWorkItemMaxAggregateInputType = {
    id?: true
    projectId?: true
    workItemId?: true
    quantity?: true
    createdAt?: true
  }

  export type ProjectWorkItemCountAggregateInputType = {
    id?: true
    projectId?: true
    workItemId?: true
    quantity?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectWorkItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectWorkItem to aggregate.
     */
    where?: ProjectWorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectWorkItems to fetch.
     */
    orderBy?: ProjectWorkItemOrderByWithRelationInput | ProjectWorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectWorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectWorkItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectWorkItems
    **/
    _count?: true | ProjectWorkItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectWorkItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectWorkItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectWorkItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectWorkItemMaxAggregateInputType
  }

  export type GetProjectWorkItemAggregateType<T extends ProjectWorkItemAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectWorkItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectWorkItem[P]>
      : GetScalarType<T[P], AggregateProjectWorkItem[P]>
  }




  export type ProjectWorkItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWorkItemWhereInput
    orderBy?: ProjectWorkItemOrderByWithAggregationInput | ProjectWorkItemOrderByWithAggregationInput[]
    by: ProjectWorkItemScalarFieldEnum[] | ProjectWorkItemScalarFieldEnum
    having?: ProjectWorkItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectWorkItemCountAggregateInputType | true
    _avg?: ProjectWorkItemAvgAggregateInputType
    _sum?: ProjectWorkItemSumAggregateInputType
    _min?: ProjectWorkItemMinAggregateInputType
    _max?: ProjectWorkItemMaxAggregateInputType
  }

  export type ProjectWorkItemGroupByOutputType = {
    id: string
    projectId: string
    workItemId: string
    quantity: Decimal
    createdAt: Date
    _count: ProjectWorkItemCountAggregateOutputType | null
    _avg: ProjectWorkItemAvgAggregateOutputType | null
    _sum: ProjectWorkItemSumAggregateOutputType | null
    _min: ProjectWorkItemMinAggregateOutputType | null
    _max: ProjectWorkItemMaxAggregateOutputType | null
  }

  type GetProjectWorkItemGroupByPayload<T extends ProjectWorkItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectWorkItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectWorkItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectWorkItemGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectWorkItemGroupByOutputType[P]>
        }
      >
    >


  export type ProjectWorkItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    workItemId?: boolean
    quantity?: boolean
    createdAt?: boolean
    projectMaterial?: boolean | ProjectWorkItem$projectMaterialArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
    projectWorkItemTest?: boolean | ProjectWorkItem$projectWorkItemTestArgs<ExtArgs>
    _count?: boolean | ProjectWorkItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectWorkItem"]>

  export type ProjectWorkItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    workItemId?: boolean
    quantity?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectWorkItem"]>

  export type ProjectWorkItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    workItemId?: boolean
    quantity?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectWorkItem"]>

  export type ProjectWorkItemSelectScalar = {
    id?: boolean
    projectId?: boolean
    workItemId?: boolean
    quantity?: boolean
    createdAt?: boolean
  }

  export type ProjectWorkItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "workItemId" | "quantity" | "createdAt", ExtArgs["result"]["projectWorkItem"]>
  export type ProjectWorkItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMaterial?: boolean | ProjectWorkItem$projectMaterialArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
    projectWorkItemTest?: boolean | ProjectWorkItem$projectWorkItemTestArgs<ExtArgs>
    _count?: boolean | ProjectWorkItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectWorkItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
  }
  export type ProjectWorkItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
  }

  export type $ProjectWorkItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectWorkItem"
    objects: {
      projectMaterial: Prisma.$ProjectMaterialPayload<ExtArgs>[]
      project: Prisma.$ProjectPayload<ExtArgs>
      workItem: Prisma.$WorkItemPayload<ExtArgs>
      projectWorkItemTest: Prisma.$ProjectWorkItemTestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      workItemId: string
      quantity: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["projectWorkItem"]>
    composites: {}
  }

  type ProjectWorkItemGetPayload<S extends boolean | null | undefined | ProjectWorkItemDefaultArgs> = $Result.GetResult<Prisma.$ProjectWorkItemPayload, S>

  type ProjectWorkItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectWorkItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectWorkItemCountAggregateInputType | true
    }

  export interface ProjectWorkItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectWorkItem'], meta: { name: 'ProjectWorkItem' } }
    /**
     * Find zero or one ProjectWorkItem that matches the filter.
     * @param {ProjectWorkItemFindUniqueArgs} args - Arguments to find a ProjectWorkItem
     * @example
     * // Get one ProjectWorkItem
     * const projectWorkItem = await prisma.projectWorkItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectWorkItemFindUniqueArgs>(args: SelectSubset<T, ProjectWorkItemFindUniqueArgs<ExtArgs>>): Prisma__ProjectWorkItemClient<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectWorkItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectWorkItemFindUniqueOrThrowArgs} args - Arguments to find a ProjectWorkItem
     * @example
     * // Get one ProjectWorkItem
     * const projectWorkItem = await prisma.projectWorkItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectWorkItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectWorkItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectWorkItemClient<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectWorkItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWorkItemFindFirstArgs} args - Arguments to find a ProjectWorkItem
     * @example
     * // Get one ProjectWorkItem
     * const projectWorkItem = await prisma.projectWorkItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectWorkItemFindFirstArgs>(args?: SelectSubset<T, ProjectWorkItemFindFirstArgs<ExtArgs>>): Prisma__ProjectWorkItemClient<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectWorkItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWorkItemFindFirstOrThrowArgs} args - Arguments to find a ProjectWorkItem
     * @example
     * // Get one ProjectWorkItem
     * const projectWorkItem = await prisma.projectWorkItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectWorkItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectWorkItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectWorkItemClient<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectWorkItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWorkItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectWorkItems
     * const projectWorkItems = await prisma.projectWorkItem.findMany()
     * 
     * // Get first 10 ProjectWorkItems
     * const projectWorkItems = await prisma.projectWorkItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWorkItemWithIdOnly = await prisma.projectWorkItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectWorkItemFindManyArgs>(args?: SelectSubset<T, ProjectWorkItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectWorkItem.
     * @param {ProjectWorkItemCreateArgs} args - Arguments to create a ProjectWorkItem.
     * @example
     * // Create one ProjectWorkItem
     * const ProjectWorkItem = await prisma.projectWorkItem.create({
     *   data: {
     *     // ... data to create a ProjectWorkItem
     *   }
     * })
     * 
     */
    create<T extends ProjectWorkItemCreateArgs>(args: SelectSubset<T, ProjectWorkItemCreateArgs<ExtArgs>>): Prisma__ProjectWorkItemClient<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectWorkItems.
     * @param {ProjectWorkItemCreateManyArgs} args - Arguments to create many ProjectWorkItems.
     * @example
     * // Create many ProjectWorkItems
     * const projectWorkItem = await prisma.projectWorkItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectWorkItemCreateManyArgs>(args?: SelectSubset<T, ProjectWorkItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectWorkItems and returns the data saved in the database.
     * @param {ProjectWorkItemCreateManyAndReturnArgs} args - Arguments to create many ProjectWorkItems.
     * @example
     * // Create many ProjectWorkItems
     * const projectWorkItem = await prisma.projectWorkItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectWorkItems and only return the `id`
     * const projectWorkItemWithIdOnly = await prisma.projectWorkItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectWorkItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectWorkItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectWorkItem.
     * @param {ProjectWorkItemDeleteArgs} args - Arguments to delete one ProjectWorkItem.
     * @example
     * // Delete one ProjectWorkItem
     * const ProjectWorkItem = await prisma.projectWorkItem.delete({
     *   where: {
     *     // ... filter to delete one ProjectWorkItem
     *   }
     * })
     * 
     */
    delete<T extends ProjectWorkItemDeleteArgs>(args: SelectSubset<T, ProjectWorkItemDeleteArgs<ExtArgs>>): Prisma__ProjectWorkItemClient<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectWorkItem.
     * @param {ProjectWorkItemUpdateArgs} args - Arguments to update one ProjectWorkItem.
     * @example
     * // Update one ProjectWorkItem
     * const projectWorkItem = await prisma.projectWorkItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectWorkItemUpdateArgs>(args: SelectSubset<T, ProjectWorkItemUpdateArgs<ExtArgs>>): Prisma__ProjectWorkItemClient<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectWorkItems.
     * @param {ProjectWorkItemDeleteManyArgs} args - Arguments to filter ProjectWorkItems to delete.
     * @example
     * // Delete a few ProjectWorkItems
     * const { count } = await prisma.projectWorkItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectWorkItemDeleteManyArgs>(args?: SelectSubset<T, ProjectWorkItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectWorkItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWorkItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectWorkItems
     * const projectWorkItem = await prisma.projectWorkItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectWorkItemUpdateManyArgs>(args: SelectSubset<T, ProjectWorkItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectWorkItems and returns the data updated in the database.
     * @param {ProjectWorkItemUpdateManyAndReturnArgs} args - Arguments to update many ProjectWorkItems.
     * @example
     * // Update many ProjectWorkItems
     * const projectWorkItem = await prisma.projectWorkItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectWorkItems and only return the `id`
     * const projectWorkItemWithIdOnly = await prisma.projectWorkItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectWorkItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectWorkItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectWorkItem.
     * @param {ProjectWorkItemUpsertArgs} args - Arguments to update or create a ProjectWorkItem.
     * @example
     * // Update or create a ProjectWorkItem
     * const projectWorkItem = await prisma.projectWorkItem.upsert({
     *   create: {
     *     // ... data to create a ProjectWorkItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectWorkItem we want to update
     *   }
     * })
     */
    upsert<T extends ProjectWorkItemUpsertArgs>(args: SelectSubset<T, ProjectWorkItemUpsertArgs<ExtArgs>>): Prisma__ProjectWorkItemClient<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectWorkItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWorkItemCountArgs} args - Arguments to filter ProjectWorkItems to count.
     * @example
     * // Count the number of ProjectWorkItems
     * const count = await prisma.projectWorkItem.count({
     *   where: {
     *     // ... the filter for the ProjectWorkItems we want to count
     *   }
     * })
    **/
    count<T extends ProjectWorkItemCountArgs>(
      args?: Subset<T, ProjectWorkItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectWorkItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectWorkItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWorkItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectWorkItemAggregateArgs>(args: Subset<T, ProjectWorkItemAggregateArgs>): Prisma.PrismaPromise<GetProjectWorkItemAggregateType<T>>

    /**
     * Group by ProjectWorkItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWorkItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectWorkItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectWorkItemGroupByArgs['orderBy'] }
        : { orderBy?: ProjectWorkItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectWorkItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectWorkItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectWorkItem model
   */
  readonly fields: ProjectWorkItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectWorkItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectWorkItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectMaterial<T extends ProjectWorkItem$projectMaterialArgs<ExtArgs> = {}>(args?: Subset<T, ProjectWorkItem$projectMaterialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workItem<T extends WorkItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkItemDefaultArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projectWorkItemTest<T extends ProjectWorkItem$projectWorkItemTestArgs<ExtArgs> = {}>(args?: Subset<T, ProjectWorkItem$projectWorkItemTestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectWorkItemTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>)   | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>)   | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>)   | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void)   | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectWorkItem model
   */
  interface ProjectWorkItemFieldRefs {
    readonly id: FieldRef<"ProjectWorkItem", 'String'>
    readonly projectId: FieldRef<"ProjectWorkItem", 'String'>
    readonly workItemId: FieldRef<"ProjectWorkItem", 'String'>
    readonly quantity: FieldRef<"ProjectWorkItem", 'Decimal'>
    readonly createdAt: FieldRef<"ProjectWorkItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectWorkItem findUnique
   */
  export type ProjectWorkItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItem
     */
    select?: ProjectWorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItem
     */
    omit?: ProjectWorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWorkItem to fetch.
     */
    where: ProjectWorkItemWhereUniqueInput
  }

  /**
   * ProjectWorkItem findUniqueOrThrow
   */
  export type ProjectWorkItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItem
     */
    select?: ProjectWorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItem
     */
    omit?: ProjectWorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWorkItem to fetch.
     */
    where: ProjectWorkItemWhereUniqueInput
  }

  /**
   * ProjectWorkItem findFirst
   */
  export type ProjectWorkItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItem
     */
    select?: ProjectWorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItem
     */
    omit?: ProjectWorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWorkItem to fetch.
     */
    where?: ProjectWorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectWorkItems to fetch.
     */
    orderBy?: ProjectWorkItemOrderByWithRelationInput | ProjectWorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectWorkItems.
     */
    cursor?: ProjectWorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectWorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectWorkItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectWorkItems.
     */
    distinct?: ProjectWorkItemScalarFieldEnum | ProjectWorkItemScalarFieldEnum[]
  }

  /**
   * ProjectWorkItem findFirstOrThrow
   */
  export type ProjectWorkItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItem
     */
    select?: ProjectWorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItem
     */
    omit?: ProjectWorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWorkItem to fetch.
     */
    where?: ProjectWorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectWorkItems to fetch.
     */
    orderBy?: ProjectWorkItemOrderByWithRelationInput | ProjectWorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectWorkItems.
     */
    cursor?: ProjectWorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectWorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectWorkItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectWorkItems.
     */
    distinct?: ProjectWorkItemScalarFieldEnum | ProjectWorkItemScalarFieldEnum[]
  }

  /**
   * ProjectWorkItem findMany
   */
  export type ProjectWorkItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItem
     */
    select?: ProjectWorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItem
     */
    omit?: ProjectWorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWorkItems to fetch.
     */
    where?: ProjectWorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectWorkItems to fetch.
     */
    orderBy?: ProjectWorkItemOrderByWithRelationInput | ProjectWorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectWorkItems.
     */
    cursor?: ProjectWorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectWorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectWorkItems.
     */
    skip?: number
    distinct?: ProjectWorkItemScalarFieldEnum | ProjectWorkItemScalarFieldEnum[]
  }

  /**
   * ProjectWorkItem create
   */
  export type ProjectWorkItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItem
     */
    select?: ProjectWorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItem
     */
    omit?: ProjectWorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectWorkItem.
     */
    data: XOR<ProjectWorkItemCreateInput, ProjectWorkItemUncheckedCreateInput>
  }

  /**
   * ProjectWorkItem createMany
   */
  export type ProjectWorkItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectWorkItems.
     */
    data: ProjectWorkItemCreateManyInput | ProjectWorkItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectWorkItem createManyAndReturn
   */
  export type ProjectWorkItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItem
     */
    select?: ProjectWorkItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItem
     */
    omit?: ProjectWorkItemOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectWorkItems.
     */
    data: ProjectWorkItemCreateManyInput | ProjectWorkItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectWorkItem update
   */
  export type ProjectWorkItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItem
     */
    select?: ProjectWorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItem
     */
    omit?: ProjectWorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectWorkItem.
     */
    data: XOR<ProjectWorkItemUpdateInput, ProjectWorkItemUncheckedUpdateInput>
    /**
     * Choose, which ProjectWorkItem to update.
     */
    where: ProjectWorkItemWhereUniqueInput
  }

  /**
   * ProjectWorkItem updateMany
   */
  export type ProjectWorkItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectWorkItems.
     */
    data: XOR<ProjectWorkItemUpdateManyMutationInput, ProjectWorkItemUncheckedUpdateManyInput>
    /**
     * Filter which ProjectWorkItems to update
     */
    where?: ProjectWorkItemWhereInput
    /**
     * Limit how many ProjectWorkItems to update.
     */
    limit?: number
  }

  /**
   * ProjectWorkItem updateManyAndReturn
   */
  export type ProjectWorkItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItem
     */
    select?: ProjectWorkItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItem
     */
    omit?: ProjectWorkItemOmit<ExtArgs> | null
    /**
     * The data used to update ProjectWorkItems.
     */
    data: XOR<ProjectWorkItemUpdateManyMutationInput, ProjectWorkItemUncheckedUpdateManyInput>
    /**
     * Filter which ProjectWorkItems to update
     */
    where?: ProjectWorkItemWhereInput
    /**
     * Limit how many ProjectWorkItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectWorkItem upsert
   */
  export type ProjectWorkItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItem
     */
    select?: ProjectWorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItem
     */
    omit?: ProjectWorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectWorkItem to update in case it exists.
     */
    where: ProjectWorkItemWhereUniqueInput
    /**
     * In case the ProjectWorkItem found by the `where` argument doesn't exist, create a new ProjectWorkItem with this data.
     */
    create: XOR<ProjectWorkItemCreateInput, ProjectWorkItemUncheckedCreateInput>
    /**
     * In case the ProjectWorkItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectWorkItemUpdateInput, ProjectWorkItemUncheckedUpdateInput>
  }

  /**
   * ProjectWorkItem delete
   */
  export type ProjectWorkItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItem
     */
    select?: ProjectWorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItem
     */
    omit?: ProjectWorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemInclude<ExtArgs> | null
    /**
     * Filter which ProjectWorkItem to delete.
     */
    where: ProjectWorkItemWhereUniqueInput
  }

  /**
   * ProjectWorkItem deleteMany
   */
  export type ProjectWorkItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectWorkItems to delete
     */
    where?: ProjectWorkItemWhereInput
    /**
     * Limit how many ProjectWorkItems to delete.
     */
    limit?: number
  }

  /**
   * ProjectWorkItem.projectMaterial
   */
  export type ProjectWorkItem$projectMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    where?: ProjectMaterialWhereInput
    orderBy?: ProjectMaterialOrderByWithRelationInput | ProjectMaterialOrderByWithRelationInput[]
    cursor?: ProjectMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMaterialScalarFieldEnum | ProjectMaterialScalarFieldEnum[]
  }

  /**
   * ProjectWorkItem.projectWorkItemTest
   */
  export type ProjectWorkItem$projectWorkItemTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemTest
     */
    select?: ProjectWorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItemTest
     */
    omit?: ProjectWorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemTestInclude<ExtArgs> | null
    where?: ProjectWorkItemTestWhereInput
    orderBy?: ProjectWorkItemTestOrderByWithRelationInput | ProjectWorkItemTestOrderByWithRelationInput[]
    cursor?: ProjectWorkItemTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectWorkItemTestScalarFieldEnum | ProjectWorkItemTestScalarFieldEnum[]
  }

  /**
   * ProjectWorkItem without action
   */
  export type ProjectWorkItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItem
     */
    select?: ProjectWorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItem
     */
    omit?: ProjectWorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemInclude<ExtArgs> | null
  }


  /**
   * Model ProjectWorkItemTest
   */

  export type AggregateProjectWorkItemTest = {
    _count: ProjectWorkItemTestCountAggregateOutputType | null
    _avg: ProjectWorkItemTestAvgAggregateOutputType | null
    _sum: ProjectWorkItemTestSumAggregateOutputType | null
    _min: ProjectWorkItemTestMinAggregateOutputType | null
    _max: ProjectWorkItemTestMaxAggregateOutputType | null
  }

  export type ProjectWorkItemTestAvgAggregateOutputType = {
    onFile: number | null
  }

  export type ProjectWorkItemTestSumAggregateOutputType = {
    onFile: number | null
  }

  export type ProjectWorkItemTestMinAggregateOutputType = {
    id: string | null
    testId: string | null
    projectWorkItemId: string | null
    onFile: number | null
    createdAt: Date | null
  }

  export type ProjectWorkItemTestMaxAggregateOutputType = {
    id: string | null
    testId: string | null
    projectWorkItemId: string | null
    onFile: number | null
    createdAt: Date | null
  }

  export type ProjectWorkItemTestCountAggregateOutputType = {
    id: number
    testId: number
    projectWorkItemId: number
    onFile: number
    createdAt: number
    _all: number
  }


  export type ProjectWorkItemTestAvgAggregateInputType = {
    onFile?: true
  }

  export type ProjectWorkItemTestSumAggregateInputType = {
    onFile?: true
  }

  export type ProjectWorkItemTestMinAggregateInputType = {
    id?: true
    testId?: true
    projectWorkItemId?: true
    onFile?: true
    createdAt?: true
  }

  export type ProjectWorkItemTestMaxAggregateInputType = {
    id?: true
    testId?: true
    projectWorkItemId?: true
    onFile?: true
    createdAt?: true
  }

  export type ProjectWorkItemTestCountAggregateInputType = {
    id?: true
    testId?: true
    projectWorkItemId?: true
    onFile?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectWorkItemTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectWorkItemTest to aggregate.
     */
    where?: ProjectWorkItemTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectWorkItemTests to fetch.
     */
    orderBy?: ProjectWorkItemTestOrderByWithRelationInput | ProjectWorkItemTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWorkItemTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectWorkItemTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectWorkItemTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectWorkItemTests
    **/
    _count?: true | ProjectWorkItemTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectWorkItemTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectWorkItemTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectWorkItemTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectWorkItemTestMaxAggregateInputType
  }

  export type GetProjectWorkItemTestAggregateType<T extends ProjectWorkItemTestAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectWorkItemTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectWorkItemTest[P]>
      : GetScalarType<T[P], AggregateProjectWorkItemTest[P]>
  }




  export type ProjectWorkItemTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWorkItemTestWhereInput
    orderBy?: ProjectWorkItemTestOrderByWithAggregationInput | ProjectWorkItemTestOrderByWithAggregationInput[]
    by: ProjectWorkItemTestScalarFieldEnum[] | ProjectWorkItemTestScalarFieldEnum
    having?: ProjectWorkItemTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectWorkItemTestCountAggregateInputType | true
    _avg?: ProjectWorkItemTestAvgAggregateInputType
    _sum?: ProjectWorkItemTestSumAggregateInputType
    _min?: ProjectWorkItemTestMinAggregateInputType
    _max?: ProjectWorkItemTestMaxAggregateInputType
  }

  export type ProjectWorkItemTestGroupByOutputType = {
    id: string
    testId: string
    projectWorkItemId: string
    onFile: number
    createdAt: Date
    _count: ProjectWorkItemTestCountAggregateOutputType | null
    _avg: ProjectWorkItemTestAvgAggregateOutputType | null
    _sum: ProjectWorkItemTestSumAggregateOutputType | null
    _min: ProjectWorkItemTestMinAggregateOutputType | null
    _max: ProjectWorkItemTestMaxAggregateOutputType | null
  }

  type GetProjectWorkItemTestGroupByPayload<T extends ProjectWorkItemTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectWorkItemTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectWorkItemTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectWorkItemTestGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectWorkItemTestGroupByOutputType[P]>
        }
      >
    >


  export type ProjectWorkItemTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    projectWorkItemId?: boolean
    onFile?: boolean
    createdAt?: boolean
    projectWorkItem?: boolean | ProjectWorkItemDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectWorkItemTest"]>

  export type ProjectWorkItemTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    projectWorkItemId?: boolean
    onFile?: boolean
    createdAt?: boolean
    projectWorkItem?: boolean | ProjectWorkItemDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectWorkItemTest"]>

  export type ProjectWorkItemTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    projectWorkItemId?: boolean
    onFile?: boolean
    createdAt?: boolean
    projectWorkItem?: boolean | ProjectWorkItemDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectWorkItemTest"]>

  export type ProjectWorkItemTestSelectScalar = {
    id?: boolean
    testId?: boolean
    projectWorkItemId?: boolean
    onFile?: boolean
    createdAt?: boolean
  }

  export type ProjectWorkItemTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testId" | "projectWorkItemId" | "onFile" | "createdAt", ExtArgs["result"]["projectWorkItemTest"]>
  export type ProjectWorkItemTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectWorkItem?: boolean | ProjectWorkItemDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }
  export type ProjectWorkItemTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectWorkItem?: boolean | ProjectWorkItemDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }
  export type ProjectWorkItemTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectWorkItem?: boolean | ProjectWorkItemDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }

  export type $ProjectWorkItemTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectWorkItemTest"
    objects: {
      projectWorkItem: Prisma.$ProjectWorkItemPayload<ExtArgs>
      test: Prisma.$TestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      testId: string
      projectWorkItemId: string
      onFile: number
      createdAt: Date
    }, ExtArgs["result"]["projectWorkItemTest"]>
    composites: {}
  }

  type ProjectWorkItemTestGetPayload<S extends boolean | null | undefined | ProjectWorkItemTestDefaultArgs> = $Result.GetResult<Prisma.$ProjectWorkItemTestPayload, S>

  type ProjectWorkItemTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectWorkItemTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectWorkItemTestCountAggregateInputType | true
    }

  export interface ProjectWorkItemTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectWorkItemTest'], meta: { name: 'ProjectWorkItemTest' } }
    /**
     * Find zero or one ProjectWorkItemTest that matches the filter.
     * @param {ProjectWorkItemTestFindUniqueArgs} args - Arguments to find a ProjectWorkItemTest
     * @example
     * // Get one ProjectWorkItemTest
     * const projectWorkItemTest = await prisma.projectWorkItemTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectWorkItemTestFindUniqueArgs>(args: SelectSubset<T, ProjectWorkItemTestFindUniqueArgs<ExtArgs>>): Prisma__ProjectWorkItemTestClient<$Result.GetResult<Prisma.$ProjectWorkItemTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectWorkItemTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectWorkItemTestFindUniqueOrThrowArgs} args - Arguments to find a ProjectWorkItemTest
     * @example
     * // Get one ProjectWorkItemTest
     * const projectWorkItemTest = await prisma.projectWorkItemTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectWorkItemTestFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectWorkItemTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectWorkItemTestClient<$Result.GetResult<Prisma.$ProjectWorkItemTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectWorkItemTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWorkItemTestFindFirstArgs} args - Arguments to find a ProjectWorkItemTest
     * @example
     * // Get one ProjectWorkItemTest
     * const projectWorkItemTest = await prisma.projectWorkItemTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectWorkItemTestFindFirstArgs>(args?: SelectSubset<T, ProjectWorkItemTestFindFirstArgs<ExtArgs>>): Prisma__ProjectWorkItemTestClient<$Result.GetResult<Prisma.$ProjectWorkItemTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectWorkItemTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWorkItemTestFindFirstOrThrowArgs} args - Arguments to find a ProjectWorkItemTest
     * @example
     * // Get one ProjectWorkItemTest
     * const projectWorkItemTest = await prisma.projectWorkItemTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectWorkItemTestFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectWorkItemTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectWorkItemTestClient<$Result.GetResult<Prisma.$ProjectWorkItemTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectWorkItemTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWorkItemTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectWorkItemTests
     * const projectWorkItemTests = await prisma.projectWorkItemTest.findMany()
     * 
     * // Get first 10 ProjectWorkItemTests
     * const projectWorkItemTests = await prisma.projectWorkItemTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWorkItemTestWithIdOnly = await prisma.projectWorkItemTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectWorkItemTestFindManyArgs>(args?: SelectSubset<T, ProjectWorkItemTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectWorkItemTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectWorkItemTest.
     * @param {ProjectWorkItemTestCreateArgs} args - Arguments to create a ProjectWorkItemTest.
     * @example
     * // Create one ProjectWorkItemTest
     * const ProjectWorkItemTest = await prisma.projectWorkItemTest.create({
     *   data: {
     *     // ... data to create a ProjectWorkItemTest
     *   }
     * })
     * 
     */
    create<T extends ProjectWorkItemTestCreateArgs>(args: SelectSubset<T, ProjectWorkItemTestCreateArgs<ExtArgs>>): Prisma__ProjectWorkItemTestClient<$Result.GetResult<Prisma.$ProjectWorkItemTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectWorkItemTests.
     * @param {ProjectWorkItemTestCreateManyArgs} args - Arguments to create many ProjectWorkItemTests.
     * @example
     * // Create many ProjectWorkItemTests
     * const projectWorkItemTest = await prisma.projectWorkItemTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectWorkItemTestCreateManyArgs>(args?: SelectSubset<T, ProjectWorkItemTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectWorkItemTests and returns the data saved in the database.
     * @param {ProjectWorkItemTestCreateManyAndReturnArgs} args - Arguments to create many ProjectWorkItemTests.
     * @example
     * // Create many ProjectWorkItemTests
     * const projectWorkItemTest = await prisma.projectWorkItemTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectWorkItemTests and only return the `id`
     * const projectWorkItemTestWithIdOnly = await prisma.projectWorkItemTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectWorkItemTestCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectWorkItemTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectWorkItemTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectWorkItemTest.
     * @param {ProjectWorkItemTestDeleteArgs} args - Arguments to delete one ProjectWorkItemTest.
     * @example
     * // Delete one ProjectWorkItemTest
     * const ProjectWorkItemTest = await prisma.projectWorkItemTest.delete({
     *   where: {
     *     // ... filter to delete one ProjectWorkItemTest
     *   }
     * })
     * 
     */
    delete<T extends ProjectWorkItemTestDeleteArgs>(args: SelectSubset<T, ProjectWorkItemTestDeleteArgs<ExtArgs>>): Prisma__ProjectWorkItemTestClient<$Result.GetResult<Prisma.$ProjectWorkItemTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectWorkItemTest.
     * @param {ProjectWorkItemTestUpdateArgs} args - Arguments to update one ProjectWorkItemTest.
     * @example
     * // Update one ProjectWorkItemTest
     * const projectWorkItemTest = await prisma.projectWorkItemTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectWorkItemTestUpdateArgs>(args: SelectSubset<T, ProjectWorkItemTestUpdateArgs<ExtArgs>>): Prisma__ProjectWorkItemTestClient<$Result.GetResult<Prisma.$ProjectWorkItemTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectWorkItemTests.
     * @param {ProjectWorkItemTestDeleteManyArgs} args - Arguments to filter ProjectWorkItemTests to delete.
     * @example
     * // Delete a few ProjectWorkItemTests
     * const { count } = await prisma.projectWorkItemTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectWorkItemTestDeleteManyArgs>(args?: SelectSubset<T, ProjectWorkItemTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectWorkItemTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWorkItemTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectWorkItemTests
     * const projectWorkItemTest = await prisma.projectWorkItemTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectWorkItemTestUpdateManyArgs>(args: SelectSubset<T, ProjectWorkItemTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectWorkItemTests and returns the data updated in the database.
     * @param {ProjectWorkItemTestUpdateManyAndReturnArgs} args - Arguments to update many ProjectWorkItemTests.
     * @example
     * // Update many ProjectWorkItemTests
     * const projectWorkItemTest = await prisma.projectWorkItemTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectWorkItemTests and only return the `id`
     * const projectWorkItemTestWithIdOnly = await prisma.projectWorkItemTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectWorkItemTestUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectWorkItemTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectWorkItemTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectWorkItemTest.
     * @param {ProjectWorkItemTestUpsertArgs} args - Arguments to update or create a ProjectWorkItemTest.
     * @example
     * // Update or create a ProjectWorkItemTest
     * const projectWorkItemTest = await prisma.projectWorkItemTest.upsert({
     *   create: {
     *     // ... data to create a ProjectWorkItemTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectWorkItemTest we want to update
     *   }
     * })
     */
    upsert<T extends ProjectWorkItemTestUpsertArgs>(args: SelectSubset<T, ProjectWorkItemTestUpsertArgs<ExtArgs>>): Prisma__ProjectWorkItemTestClient<$Result.GetResult<Prisma.$ProjectWorkItemTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectWorkItemTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWorkItemTestCountArgs} args - Arguments to filter ProjectWorkItemTests to count.
     * @example
     * // Count the number of ProjectWorkItemTests
     * const count = await prisma.projectWorkItemTest.count({
     *   where: {
     *     // ... the filter for the ProjectWorkItemTests we want to count
     *   }
     * })
    **/
    count<T extends ProjectWorkItemTestCountArgs>(
      args?: Subset<T, ProjectWorkItemTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectWorkItemTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectWorkItemTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWorkItemTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectWorkItemTestAggregateArgs>(args: Subset<T, ProjectWorkItemTestAggregateArgs>): Prisma.PrismaPromise<GetProjectWorkItemTestAggregateType<T>>

    /**
     * Group by ProjectWorkItemTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWorkItemTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectWorkItemTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectWorkItemTestGroupByArgs['orderBy'] }
        : { orderBy?: ProjectWorkItemTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectWorkItemTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectWorkItemTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectWorkItemTest model
   */
  readonly fields: ProjectWorkItemTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectWorkItemTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectWorkItemTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectWorkItem<T extends ProjectWorkItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectWorkItemDefaultArgs<ExtArgs>>): Prisma__ProjectWorkItemClient<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>)   | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>)   | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>)   | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void)   | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectWorkItemTest model
   */
  interface ProjectWorkItemTestFieldRefs {
    readonly id: FieldRef<"ProjectWorkItemTest", 'String'>
    readonly testId: FieldRef<"ProjectWorkItemTest", 'String'>
    readonly projectWorkItemId: FieldRef<"ProjectWorkItemTest", 'String'>
    readonly onFile: FieldRef<"ProjectWorkItemTest", 'Int'>
    readonly createdAt: FieldRef<"ProjectWorkItemTest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectWorkItemTest findUnique
   */
  export type ProjectWorkItemTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemTest
     */
    select?: ProjectWorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItemTest
     */
    omit?: ProjectWorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemTestInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWorkItemTest to fetch.
     */
    where: ProjectWorkItemTestWhereUniqueInput
  }

  /**
   * ProjectWorkItemTest findUniqueOrThrow
   */
  export type ProjectWorkItemTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemTest
     */
    select?: ProjectWorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItemTest
     */
    omit?: ProjectWorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemTestInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWorkItemTest to fetch.
     */
    where: ProjectWorkItemTestWhereUniqueInput
  }

  /**
   * ProjectWorkItemTest findFirst
   */
  export type ProjectWorkItemTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemTest
     */
    select?: ProjectWorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItemTest
     */
    omit?: ProjectWorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemTestInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWorkItemTest to fetch.
     */
    where?: ProjectWorkItemTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectWorkItemTests to fetch.
     */
    orderBy?: ProjectWorkItemTestOrderByWithRelationInput | ProjectWorkItemTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectWorkItemTests.
     */
    cursor?: ProjectWorkItemTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectWorkItemTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectWorkItemTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectWorkItemTests.
     */
    distinct?: ProjectWorkItemTestScalarFieldEnum | ProjectWorkItemTestScalarFieldEnum[]
  }

  /**
   * ProjectWorkItemTest findFirstOrThrow
   */
  export type ProjectWorkItemTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemTest
     */
    select?: ProjectWorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItemTest
     */
    omit?: ProjectWorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemTestInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWorkItemTest to fetch.
     */
    where?: ProjectWorkItemTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectWorkItemTests to fetch.
     */
    orderBy?: ProjectWorkItemTestOrderByWithRelationInput | ProjectWorkItemTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectWorkItemTests.
     */
    cursor?: ProjectWorkItemTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectWorkItemTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectWorkItemTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectWorkItemTests.
     */
    distinct?: ProjectWorkItemTestScalarFieldEnum | ProjectWorkItemTestScalarFieldEnum[]
  }

  /**
   * ProjectWorkItemTest findMany
   */
  export type ProjectWorkItemTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemTest
     */
    select?: ProjectWorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItemTest
     */
    omit?: ProjectWorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemTestInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWorkItemTests to fetch.
     */
    where?: ProjectWorkItemTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectWorkItemTests to fetch.
     */
    orderBy?: ProjectWorkItemTestOrderByWithRelationInput | ProjectWorkItemTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectWorkItemTests.
     */
    cursor?: ProjectWorkItemTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectWorkItemTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectWorkItemTests.
     */
    skip?: number
    distinct?: ProjectWorkItemTestScalarFieldEnum | ProjectWorkItemTestScalarFieldEnum[]
  }

  /**
   * ProjectWorkItemTest create
   */
  export type ProjectWorkItemTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemTest
     */
    select?: ProjectWorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItemTest
     */
    omit?: ProjectWorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemTestInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectWorkItemTest.
     */
    data: XOR<ProjectWorkItemTestCreateInput, ProjectWorkItemTestUncheckedCreateInput>
  }

  /**
   * ProjectWorkItemTest createMany
   */
  export type ProjectWorkItemTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectWorkItemTests.
     */
    data: ProjectWorkItemTestCreateManyInput | ProjectWorkItemTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectWorkItemTest createManyAndReturn
   */
  export type ProjectWorkItemTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemTest
     */
    select?: ProjectWorkItemTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItemTest
     */
    omit?: ProjectWorkItemTestOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectWorkItemTests.
     */
    data: ProjectWorkItemTestCreateManyInput | ProjectWorkItemTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectWorkItemTest update
   */
  export type ProjectWorkItemTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemTest
     */
    select?: ProjectWorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItemTest
     */
    omit?: ProjectWorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemTestInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectWorkItemTest.
     */
    data: XOR<ProjectWorkItemTestUpdateInput, ProjectWorkItemTestUncheckedUpdateInput>
    /**
     * Choose, which ProjectWorkItemTest to update.
     */
    where: ProjectWorkItemTestWhereUniqueInput
  }

  /**
   * ProjectWorkItemTest updateMany
   */
  export type ProjectWorkItemTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectWorkItemTests.
     */
    data: XOR<ProjectWorkItemTestUpdateManyMutationInput, ProjectWorkItemTestUncheckedUpdateManyInput>
    /**
     * Filter which ProjectWorkItemTests to update
     */
    where?: ProjectWorkItemTestWhereInput
    /**
     * Limit how many ProjectWorkItemTests to update.
     */
    limit?: number
  }

  /**
   * ProjectWorkItemTest updateManyAndReturn
   */
  export type ProjectWorkItemTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemTest
     */
    select?: ProjectWorkItemTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItemTest
     */
    omit?: ProjectWorkItemTestOmit<ExtArgs> | null
    /**
     * The data used to update ProjectWorkItemTests.
     */
    data: XOR<ProjectWorkItemTestUpdateManyMutationInput, ProjectWorkItemTestUncheckedUpdateManyInput>
    /**
     * Filter which ProjectWorkItemTests to update
     */
    where?: ProjectWorkItemTestWhereInput
    /**
     * Limit how many ProjectWorkItemTests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemTestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectWorkItemTest upsert
   */
  export type ProjectWorkItemTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemTest
     */
    select?: ProjectWorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItemTest
     */
    omit?: ProjectWorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemTestInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectWorkItemTest to update in case it exists.
     */
    where: ProjectWorkItemTestWhereUniqueInput
    /**
     * In case the ProjectWorkItemTest found by the `where` argument doesn't exist, create a new ProjectWorkItemTest with this data.
     */
    create: XOR<ProjectWorkItemTestCreateInput, ProjectWorkItemTestUncheckedCreateInput>
    /**
     * In case the ProjectWorkItemTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectWorkItemTestUpdateInput, ProjectWorkItemTestUncheckedUpdateInput>
  }

  /**
   * ProjectWorkItemTest delete
   */
  export type ProjectWorkItemTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemTest
     */
    select?: ProjectWorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItemTest
     */
    omit?: ProjectWorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemTestInclude<ExtArgs> | null
    /**
     * Filter which ProjectWorkItemTest to delete.
     */
    where: ProjectWorkItemTestWhereUniqueInput
  }

  /**
   * ProjectWorkItemTest deleteMany
   */
  export type ProjectWorkItemTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectWorkItemTests to delete
     */
    where?: ProjectWorkItemTestWhereInput
    /**
     * Limit how many ProjectWorkItemTests to delete.
     */
    limit?: number
  }

  /**
   * ProjectWorkItemTest without action
   */
  export type ProjectWorkItemTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemTest
     */
    select?: ProjectWorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItemTest
     */
    omit?: ProjectWorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemTestInclude<ExtArgs> | null
  }


  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type TestMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type TestMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: TestCountAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    projectMaterialTest?: boolean | Test$projectMaterialTestArgs<ExtArgs>
    projectWorkItemTest?: boolean | Test$projectWorkItemTestArgs<ExtArgs>
    workItemMaterialTest?: boolean | Test$workItemMaterialTestArgs<ExtArgs>
    workItemTest?: boolean | Test$workItemTestArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type TestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["test"]>
  export type TestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMaterialTest?: boolean | Test$projectMaterialTestArgs<ExtArgs>
    projectWorkItemTest?: boolean | Test$projectWorkItemTestArgs<ExtArgs>
    workItemMaterialTest?: boolean | Test$workItemMaterialTestArgs<ExtArgs>
    workItemTest?: boolean | Test$workItemTestArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {
      projectMaterialTest: Prisma.$ProjectMaterialTestPayload<ExtArgs>[]
      projectWorkItemTest: Prisma.$ProjectWorkItemTestPayload<ExtArgs>[]
      workItemMaterialTest: Prisma.$WorkItemMaterialTestPayload<ExtArgs>[]
      workItemTest: Prisma.$WorkItemTestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {TestCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests and returns the data updated in the database.
     * @param {TestUpdateManyAndReturnArgs} args - Arguments to update many Tests.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestUpdateManyAndReturnArgs>(args: SelectSubset<T, TestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectMaterialTest<T extends Test$projectMaterialTestArgs<ExtArgs> = {}>(args?: Subset<T, Test$projectMaterialTestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectWorkItemTest<T extends Test$projectWorkItemTestArgs<ExtArgs> = {}>(args?: Subset<T, Test$projectWorkItemTestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectWorkItemTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workItemMaterialTest<T extends Test$workItemMaterialTestArgs<ExtArgs> = {}>(args?: Subset<T, Test$workItemMaterialTestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemMaterialTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workItemTest<T extends Test$workItemTestArgs<ExtArgs> = {}>(args?: Subset<T, Test$workItemTestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>)   | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>)   | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>)   | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void)   | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Test model
   */
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'String'>
    readonly name: FieldRef<"Test", 'String'>
    readonly createdAt: FieldRef<"Test", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test createManyAndReturn
   */
  export type TestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test updateManyAndReturn
   */
  export type TestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to delete.
     */
    limit?: number
  }

  /**
   * Test.projectMaterialTest
   */
  export type Test$projectMaterialTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterialTest
     */
    select?: ProjectMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterialTest
     */
    omit?: ProjectMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialTestInclude<ExtArgs> | null
    where?: ProjectMaterialTestWhereInput
    orderBy?: ProjectMaterialTestOrderByWithRelationInput | ProjectMaterialTestOrderByWithRelationInput[]
    cursor?: ProjectMaterialTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMaterialTestScalarFieldEnum | ProjectMaterialTestScalarFieldEnum[]
  }

  /**
   * Test.projectWorkItemTest
   */
  export type Test$projectWorkItemTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItemTest
     */
    select?: ProjectWorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItemTest
     */
    omit?: ProjectWorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemTestInclude<ExtArgs> | null
    where?: ProjectWorkItemTestWhereInput
    orderBy?: ProjectWorkItemTestOrderByWithRelationInput | ProjectWorkItemTestOrderByWithRelationInput[]
    cursor?: ProjectWorkItemTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectWorkItemTestScalarFieldEnum | ProjectWorkItemTestScalarFieldEnum[]
  }

  /**
   * Test.workItemMaterialTest
   */
  export type Test$workItemMaterialTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialTest
     */
    select?: WorkItemMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterialTest
     */
    omit?: WorkItemMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialTestInclude<ExtArgs> | null
    where?: WorkItemMaterialTestWhereInput
    orderBy?: WorkItemMaterialTestOrderByWithRelationInput | WorkItemMaterialTestOrderByWithRelationInput[]
    cursor?: WorkItemMaterialTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkItemMaterialTestScalarFieldEnum | WorkItemMaterialTestScalarFieldEnum[]
  }

  /**
   * Test.workItemTest
   */
  export type Test$workItemTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemTest
     */
    select?: WorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemTest
     */
    omit?: WorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemTestInclude<ExtArgs> | null
    where?: WorkItemTestWhereInput
    orderBy?: WorkItemTestOrderByWithRelationInput | WorkItemTestOrderByWithRelationInput[]
    cursor?: WorkItemTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkItemTestScalarFieldEnum | WorkItemTestScalarFieldEnum[]
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    name: string | null
    abbreviation: string | null
    createdAt: Date | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    name: string | null
    abbreviation: string | null
    createdAt: Date | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    name: number
    abbreviation: number
    createdAt: number
    _all: number
  }


  export type UnitMinAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    name: string
    abbreviation: string
    createdAt: Date
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    material?: boolean | Unit$materialArgs<ExtArgs>
    workItem?: boolean | Unit$workItemArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "abbreviation" | "createdAt", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | Unit$materialArgs<ExtArgs>
    workItem?: boolean | Unit$workItemArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>[]
      workItem: Prisma.$WorkItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      abbreviation: string
      createdAt: Date
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends Unit$materialArgs<ExtArgs> = {}>(args?: Subset<T, Unit$materialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workItem<T extends Unit$workItemArgs<ExtArgs> = {}>(args?: Subset<T, Unit$workItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>)   | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>)   | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>)   | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void)   | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly name: FieldRef<"Unit", 'String'>
    readonly abbreviation: FieldRef<"Unit", 'String'>
    readonly createdAt: FieldRef<"Unit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.material
   */
  export type Unit$materialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Unit.workItem
   */
  export type Unit$workItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemInclude<ExtArgs> | null
    where?: WorkItemWhereInput
    orderBy?: WorkItemOrderByWithRelationInput | WorkItemOrderByWithRelationInput[]
    cursor?: WorkItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkItemScalarFieldEnum | WorkItemScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model WorkItem
   */

  export type AggregateWorkItem = {
    _count: WorkItemCountAggregateOutputType | null
    _min: WorkItemMinAggregateOutputType | null
    _max: WorkItemMaxAggregateOutputType | null
  }

  export type WorkItemMinAggregateOutputType = {
    id: string | null
    itemNo: string | null
    description: string | null
    unitId: string | null
    createdAt: Date | null
  }

  export type WorkItemMaxAggregateOutputType = {
    id: string | null
    itemNo: string | null
    description: string | null
    unitId: string | null
    createdAt: Date | null
  }

  export type WorkItemCountAggregateOutputType = {
    id: number
    itemNo: number
    description: number
    unitId: number
    createdAt: number
    _all: number
  }


  export type WorkItemMinAggregateInputType = {
    id?: true
    itemNo?: true
    description?: true
    unitId?: true
    createdAt?: true
  }

  export type WorkItemMaxAggregateInputType = {
    id?: true
    itemNo?: true
    description?: true
    unitId?: true
    createdAt?: true
  }

  export type WorkItemCountAggregateInputType = {
    id?: true
    itemNo?: true
    description?: true
    unitId?: true
    createdAt?: true
    _all?: true
  }

  export type WorkItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkItem to aggregate.
     */
    where?: WorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItems to fetch.
     */
    orderBy?: WorkItemOrderByWithRelationInput | WorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkItems
    **/
    _count?: true | WorkItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkItemMaxAggregateInputType
  }

  export type GetWorkItemAggregateType<T extends WorkItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkItem[P]>
      : GetScalarType<T[P], AggregateWorkItem[P]>
  }




  export type WorkItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkItemWhereInput
    orderBy?: WorkItemOrderByWithAggregationInput | WorkItemOrderByWithAggregationInput[]
    by: WorkItemScalarFieldEnum[] | WorkItemScalarFieldEnum
    having?: WorkItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkItemCountAggregateInputType | true
    _min?: WorkItemMinAggregateInputType
    _max?: WorkItemMaxAggregateInputType
  }

  export type WorkItemGroupByOutputType = {
    id: string
    itemNo: string
    description: string | null
    unitId: string
    createdAt: Date
    _count: WorkItemCountAggregateOutputType | null
    _min: WorkItemMinAggregateOutputType | null
    _max: WorkItemMaxAggregateOutputType | null
  }

  type GetWorkItemGroupByPayload<T extends WorkItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkItemGroupByOutputType[P]>
            : GetScalarType<T[P], WorkItemGroupByOutputType[P]>
        }
      >
    >


  export type WorkItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemNo?: boolean
    description?: boolean
    unitId?: boolean
    createdAt?: boolean
    projectWorkItem?: boolean | WorkItem$projectWorkItemArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    workItemMaterial?: boolean | WorkItem$workItemMaterialArgs<ExtArgs>
    workItemTest?: boolean | WorkItem$workItemTestArgs<ExtArgs>
    _count?: boolean | WorkItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workItem"]>

  export type WorkItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemNo?: boolean
    description?: boolean
    unitId?: boolean
    createdAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workItem"]>

  export type WorkItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemNo?: boolean
    description?: boolean
    unitId?: boolean
    createdAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workItem"]>

  export type WorkItemSelectScalar = {
    id?: boolean
    itemNo?: boolean
    description?: boolean
    unitId?: boolean
    createdAt?: boolean
  }

  export type WorkItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemNo" | "description" | "unitId" | "createdAt", ExtArgs["result"]["workItem"]>
  export type WorkItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectWorkItem?: boolean | WorkItem$projectWorkItemArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    workItemMaterial?: boolean | WorkItem$workItemMaterialArgs<ExtArgs>
    workItemTest?: boolean | WorkItem$workItemTestArgs<ExtArgs>
    _count?: boolean | WorkItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type WorkItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }

  export type $WorkItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkItem"
    objects: {
      projectWorkItem: Prisma.$ProjectWorkItemPayload<ExtArgs>[]
      unit: Prisma.$UnitPayload<ExtArgs>
      workItemMaterial: Prisma.$WorkItemMaterialPayload<ExtArgs>[]
      workItemTest: Prisma.$WorkItemTestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemNo: string
      description: string | null
      unitId: string
      createdAt: Date
    }, ExtArgs["result"]["workItem"]>
    composites: {}
  }

  type WorkItemGetPayload<S extends boolean | null | undefined | WorkItemDefaultArgs> = $Result.GetResult<Prisma.$WorkItemPayload, S>

  type WorkItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkItemCountAggregateInputType | true
    }

  export interface WorkItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkItem'], meta: { name: 'WorkItem' } }
    /**
     * Find zero or one WorkItem that matches the filter.
     * @param {WorkItemFindUniqueArgs} args - Arguments to find a WorkItem
     * @example
     * // Get one WorkItem
     * const workItem = await prisma.workItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkItemFindUniqueArgs>(args: SelectSubset<T, WorkItemFindUniqueArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkItemFindUniqueOrThrowArgs} args - Arguments to find a WorkItem
     * @example
     * // Get one WorkItem
     * const workItem = await prisma.workItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemFindFirstArgs} args - Arguments to find a WorkItem
     * @example
     * // Get one WorkItem
     * const workItem = await prisma.workItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkItemFindFirstArgs>(args?: SelectSubset<T, WorkItemFindFirstArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemFindFirstOrThrowArgs} args - Arguments to find a WorkItem
     * @example
     * // Get one WorkItem
     * const workItem = await prisma.workItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkItems
     * const workItems = await prisma.workItem.findMany()
     * 
     * // Get first 10 WorkItems
     * const workItems = await prisma.workItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workItemWithIdOnly = await prisma.workItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkItemFindManyArgs>(args?: SelectSubset<T, WorkItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkItem.
     * @param {WorkItemCreateArgs} args - Arguments to create a WorkItem.
     * @example
     * // Create one WorkItem
     * const WorkItem = await prisma.workItem.create({
     *   data: {
     *     // ... data to create a WorkItem
     *   }
     * })
     * 
     */
    create<T extends WorkItemCreateArgs>(args: SelectSubset<T, WorkItemCreateArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkItems.
     * @param {WorkItemCreateManyArgs} args - Arguments to create many WorkItems.
     * @example
     * // Create many WorkItems
     * const workItem = await prisma.workItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkItemCreateManyArgs>(args?: SelectSubset<T, WorkItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkItems and returns the data saved in the database.
     * @param {WorkItemCreateManyAndReturnArgs} args - Arguments to create many WorkItems.
     * @example
     * // Create many WorkItems
     * const workItem = await prisma.workItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkItems and only return the `id`
     * const workItemWithIdOnly = await prisma.workItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkItem.
     * @param {WorkItemDeleteArgs} args - Arguments to delete one WorkItem.
     * @example
     * // Delete one WorkItem
     * const WorkItem = await prisma.workItem.delete({
     *   where: {
     *     // ... filter to delete one WorkItem
     *   }
     * })
     * 
     */
    delete<T extends WorkItemDeleteArgs>(args: SelectSubset<T, WorkItemDeleteArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkItem.
     * @param {WorkItemUpdateArgs} args - Arguments to update one WorkItem.
     * @example
     * // Update one WorkItem
     * const workItem = await prisma.workItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkItemUpdateArgs>(args: SelectSubset<T, WorkItemUpdateArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkItems.
     * @param {WorkItemDeleteManyArgs} args - Arguments to filter WorkItems to delete.
     * @example
     * // Delete a few WorkItems
     * const { count } = await prisma.workItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkItemDeleteManyArgs>(args?: SelectSubset<T, WorkItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkItems
     * const workItem = await prisma.workItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkItemUpdateManyArgs>(args: SelectSubset<T, WorkItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkItems and returns the data updated in the database.
     * @param {WorkItemUpdateManyAndReturnArgs} args - Arguments to update many WorkItems.
     * @example
     * // Update many WorkItems
     * const workItem = await prisma.workItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkItems and only return the `id`
     * const workItemWithIdOnly = await prisma.workItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkItemUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkItem.
     * @param {WorkItemUpsertArgs} args - Arguments to update or create a WorkItem.
     * @example
     * // Update or create a WorkItem
     * const workItem = await prisma.workItem.upsert({
     *   create: {
     *     // ... data to create a WorkItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkItem we want to update
     *   }
     * })
     */
    upsert<T extends WorkItemUpsertArgs>(args: SelectSubset<T, WorkItemUpsertArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemCountArgs} args - Arguments to filter WorkItems to count.
     * @example
     * // Count the number of WorkItems
     * const count = await prisma.workItem.count({
     *   where: {
     *     // ... the filter for the WorkItems we want to count
     *   }
     * })
    **/
    count<T extends WorkItemCountArgs>(
      args?: Subset<T, WorkItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkItemAggregateArgs>(args: Subset<T, WorkItemAggregateArgs>): Prisma.PrismaPromise<GetWorkItemAggregateType<T>>

    /**
     * Group by WorkItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkItemGroupByArgs['orderBy'] }
        : { orderBy?: WorkItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkItem model
   */
  readonly fields: WorkItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectWorkItem<T extends WorkItem$projectWorkItemArgs<ExtArgs> = {}>(args?: Subset<T, WorkItem$projectWorkItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectWorkItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workItemMaterial<T extends WorkItem$workItemMaterialArgs<ExtArgs> = {}>(args?: Subset<T, WorkItem$workItemMaterialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workItemTest<T extends WorkItem$workItemTestArgs<ExtArgs> = {}>(args?: Subset<T, WorkItem$workItemTestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>)   | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>)   | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>)   | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void)   | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkItem model
   */
  interface WorkItemFieldRefs {
    readonly id: FieldRef<"WorkItem", 'String'>
    readonly itemNo: FieldRef<"WorkItem", 'String'>
    readonly description: FieldRef<"WorkItem", 'String'>
    readonly unitId: FieldRef<"WorkItem", 'String'>
    readonly createdAt: FieldRef<"WorkItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkItem findUnique
   */
  export type WorkItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemInclude<ExtArgs> | null
    /**
     * Filter, which WorkItem to fetch.
     */
    where: WorkItemWhereUniqueInput
  }

  /**
   * WorkItem findUniqueOrThrow
   */
  export type WorkItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemInclude<ExtArgs> | null
    /**
     * Filter, which WorkItem to fetch.
     */
    where: WorkItemWhereUniqueInput
  }

  /**
   * WorkItem findFirst
   */
  export type WorkItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemInclude<ExtArgs> | null
    /**
     * Filter, which WorkItem to fetch.
     */
    where?: WorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItems to fetch.
     */
    orderBy?: WorkItemOrderByWithRelationInput | WorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkItems.
     */
    cursor?: WorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkItems.
     */
    distinct?: WorkItemScalarFieldEnum | WorkItemScalarFieldEnum[]
  }

  /**
   * WorkItem findFirstOrThrow
   */
  export type WorkItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemInclude<ExtArgs> | null
    /**
     * Filter, which WorkItem to fetch.
     */
    where?: WorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItems to fetch.
     */
    orderBy?: WorkItemOrderByWithRelationInput | WorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkItems.
     */
    cursor?: WorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkItems.
     */
    distinct?: WorkItemScalarFieldEnum | WorkItemScalarFieldEnum[]
  }

  /**
   * WorkItem findMany
   */
  export type WorkItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemInclude<ExtArgs> | null
    /**
     * Filter, which WorkItems to fetch.
     */
    where?: WorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItems to fetch.
     */
    orderBy?: WorkItemOrderByWithRelationInput | WorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkItems.
     */
    cursor?: WorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItems.
     */
    skip?: number
    distinct?: WorkItemScalarFieldEnum | WorkItemScalarFieldEnum[]
  }

  /**
   * WorkItem create
   */
  export type WorkItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkItem.
     */
    data: XOR<WorkItemCreateInput, WorkItemUncheckedCreateInput>
  }

  /**
   * WorkItem createMany
   */
  export type WorkItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkItems.
     */
    data: WorkItemCreateManyInput | WorkItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkItem createManyAndReturn
   */
  export type WorkItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * The data used to create many WorkItems.
     */
    data: WorkItemCreateManyInput | WorkItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkItem update
   */
  export type WorkItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkItem.
     */
    data: XOR<WorkItemUpdateInput, WorkItemUncheckedUpdateInput>
    /**
     * Choose, which WorkItem to update.
     */
    where: WorkItemWhereUniqueInput
  }

  /**
   * WorkItem updateMany
   */
  export type WorkItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkItems.
     */
    data: XOR<WorkItemUpdateManyMutationInput, WorkItemUncheckedUpdateManyInput>
    /**
     * Filter which WorkItems to update
     */
    where?: WorkItemWhereInput
    /**
     * Limit how many WorkItems to update.
     */
    limit?: number
  }

  /**
   * WorkItem updateManyAndReturn
   */
  export type WorkItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * The data used to update WorkItems.
     */
    data: XOR<WorkItemUpdateManyMutationInput, WorkItemUncheckedUpdateManyInput>
    /**
     * Filter which WorkItems to update
     */
    where?: WorkItemWhereInput
    /**
     * Limit how many WorkItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkItem upsert
   */
  export type WorkItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkItem to update in case it exists.
     */
    where: WorkItemWhereUniqueInput
    /**
     * In case the WorkItem found by the `where` argument doesn't exist, create a new WorkItem with this data.
     */
    create: XOR<WorkItemCreateInput, WorkItemUncheckedCreateInput>
    /**
     * In case the WorkItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkItemUpdateInput, WorkItemUncheckedUpdateInput>
  }

  /**
   * WorkItem delete
   */
  export type WorkItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemInclude<ExtArgs> | null
    /**
     * Filter which WorkItem to delete.
     */
    where: WorkItemWhereUniqueInput
  }

  /**
   * WorkItem deleteMany
   */
  export type WorkItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkItems to delete
     */
    where?: WorkItemWhereInput
    /**
     * Limit how many WorkItems to delete.
     */
    limit?: number
  }

  /**
   * WorkItem.projectWorkItem
   */
  export type WorkItem$projectWorkItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWorkItem
     */
    select?: ProjectWorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectWorkItem
     */
    omit?: ProjectWorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectWorkItemInclude<ExtArgs> | null
    where?: ProjectWorkItemWhereInput
    orderBy?: ProjectWorkItemOrderByWithRelationInput | ProjectWorkItemOrderByWithRelationInput[]
    cursor?: ProjectWorkItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectWorkItemScalarFieldEnum | ProjectWorkItemScalarFieldEnum[]
  }

  /**
   * WorkItem.workItemMaterial
   */
  export type WorkItem$workItemMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterial
     */
    select?: WorkItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterial
     */
    omit?: WorkItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialInclude<ExtArgs> | null
    where?: WorkItemMaterialWhereInput
    orderBy?: WorkItemMaterialOrderByWithRelationInput | WorkItemMaterialOrderByWithRelationInput[]
    cursor?: WorkItemMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkItemMaterialScalarFieldEnum | WorkItemMaterialScalarFieldEnum[]
  }

  /**
   * WorkItem.workItemTest
   */
  export type WorkItem$workItemTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemTest
     */
    select?: WorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemTest
     */
    omit?: WorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemTestInclude<ExtArgs> | null
    where?: WorkItemTestWhereInput
    orderBy?: WorkItemTestOrderByWithRelationInput | WorkItemTestOrderByWithRelationInput[]
    cursor?: WorkItemTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkItemTestScalarFieldEnum | WorkItemTestScalarFieldEnum[]
  }

  /**
   * WorkItem without action
   */
  export type WorkItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemInclude<ExtArgs> | null
  }


  /**
   * Model WorkItemMaterial
   */

  export type AggregateWorkItemMaterial = {
    _count: WorkItemMaterialCountAggregateOutputType | null
    _avg: WorkItemMaterialAvgAggregateOutputType | null
    _sum: WorkItemMaterialSumAggregateOutputType | null
    _min: WorkItemMaterialMinAggregateOutputType | null
    _max: WorkItemMaterialMaxAggregateOutputType | null
  }

  export type WorkItemMaterialAvgAggregateOutputType = {
    quantityPerUnit: Decimal | null
  }

  export type WorkItemMaterialSumAggregateOutputType = {
    quantityPerUnit: Decimal | null
  }

  export type WorkItemMaterialMinAggregateOutputType = {
    id: string | null
    workItemId: string | null
    materialId: string | null
    quantityPerUnit: Decimal | null
    createdAt: Date | null
  }

  export type WorkItemMaterialMaxAggregateOutputType = {
    id: string | null
    workItemId: string | null
    materialId: string | null
    quantityPerUnit: Decimal | null
    createdAt: Date | null
  }

  export type WorkItemMaterialCountAggregateOutputType = {
    id: number
    workItemId: number
    materialId: number
    quantityPerUnit: number
    createdAt: number
    _all: number
  }


  export type WorkItemMaterialAvgAggregateInputType = {
    quantityPerUnit?: true
  }

  export type WorkItemMaterialSumAggregateInputType = {
    quantityPerUnit?: true
  }

  export type WorkItemMaterialMinAggregateInputType = {
    id?: true
    workItemId?: true
    materialId?: true
    quantityPerUnit?: true
    createdAt?: true
  }

  export type WorkItemMaterialMaxAggregateInputType = {
    id?: true
    workItemId?: true
    materialId?: true
    quantityPerUnit?: true
    createdAt?: true
  }

  export type WorkItemMaterialCountAggregateInputType = {
    id?: true
    workItemId?: true
    materialId?: true
    quantityPerUnit?: true
    createdAt?: true
    _all?: true
  }

  export type WorkItemMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkItemMaterial to aggregate.
     */
    where?: WorkItemMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItemMaterials to fetch.
     */
    orderBy?: WorkItemMaterialOrderByWithRelationInput | WorkItemMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkItemMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItemMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItemMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkItemMaterials
    **/
    _count?: true | WorkItemMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkItemMaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkItemMaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkItemMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkItemMaterialMaxAggregateInputType
  }

  export type GetWorkItemMaterialAggregateType<T extends WorkItemMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkItemMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkItemMaterial[P]>
      : GetScalarType<T[P], AggregateWorkItemMaterial[P]>
  }




  export type WorkItemMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkItemMaterialWhereInput
    orderBy?: WorkItemMaterialOrderByWithAggregationInput | WorkItemMaterialOrderByWithAggregationInput[]
    by: WorkItemMaterialScalarFieldEnum[] | WorkItemMaterialScalarFieldEnum
    having?: WorkItemMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkItemMaterialCountAggregateInputType | true
    _avg?: WorkItemMaterialAvgAggregateInputType
    _sum?: WorkItemMaterialSumAggregateInputType
    _min?: WorkItemMaterialMinAggregateInputType
    _max?: WorkItemMaterialMaxAggregateInputType
  }

  export type WorkItemMaterialGroupByOutputType = {
    id: string
    workItemId: string
    materialId: string
    quantityPerUnit: Decimal
    createdAt: Date
    _count: WorkItemMaterialCountAggregateOutputType | null
    _avg: WorkItemMaterialAvgAggregateOutputType | null
    _sum: WorkItemMaterialSumAggregateOutputType | null
    _min: WorkItemMaterialMinAggregateOutputType | null
    _max: WorkItemMaterialMaxAggregateOutputType | null
  }

  type GetWorkItemMaterialGroupByPayload<T extends WorkItemMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkItemMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkItemMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkItemMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], WorkItemMaterialGroupByOutputType[P]>
        }
      >
    >


  export type WorkItemMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workItemId?: boolean
    materialId?: boolean
    quantityPerUnit?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
    workItemMaterialTest?: boolean | WorkItemMaterial$workItemMaterialTestArgs<ExtArgs>
    _count?: boolean | WorkItemMaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workItemMaterial"]>

  export type WorkItemMaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workItemId?: boolean
    materialId?: boolean
    quantityPerUnit?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workItemMaterial"]>

  export type WorkItemMaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workItemId?: boolean
    materialId?: boolean
    quantityPerUnit?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workItemMaterial"]>

  export type WorkItemMaterialSelectScalar = {
    id?: boolean
    workItemId?: boolean
    materialId?: boolean
    quantityPerUnit?: boolean
    createdAt?: boolean
  }

  export type WorkItemMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workItemId" | "materialId" | "quantityPerUnit" | "createdAt", ExtArgs["result"]["workItemMaterial"]>
  export type WorkItemMaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
    workItemMaterialTest?: boolean | WorkItemMaterial$workItemMaterialTestArgs<ExtArgs>
    _count?: boolean | WorkItemMaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkItemMaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
  }
  export type WorkItemMaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
  }

  export type $WorkItemMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkItemMaterial"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>
      workItem: Prisma.$WorkItemPayload<ExtArgs>
      workItemMaterialTest: Prisma.$WorkItemMaterialTestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workItemId: string
      materialId: string
      quantityPerUnit: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["workItemMaterial"]>
    composites: {}
  }

  type WorkItemMaterialGetPayload<S extends boolean | null | undefined | WorkItemMaterialDefaultArgs> = $Result.GetResult<Prisma.$WorkItemMaterialPayload, S>

  type WorkItemMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkItemMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkItemMaterialCountAggregateInputType | true
    }

  export interface WorkItemMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkItemMaterial'], meta: { name: 'WorkItemMaterial' } }
    /**
     * Find zero or one WorkItemMaterial that matches the filter.
     * @param {WorkItemMaterialFindUniqueArgs} args - Arguments to find a WorkItemMaterial
     * @example
     * // Get one WorkItemMaterial
     * const workItemMaterial = await prisma.workItemMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkItemMaterialFindUniqueArgs>(args: SelectSubset<T, WorkItemMaterialFindUniqueArgs<ExtArgs>>): Prisma__WorkItemMaterialClient<$Result.GetResult<Prisma.$WorkItemMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkItemMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkItemMaterialFindUniqueOrThrowArgs} args - Arguments to find a WorkItemMaterial
     * @example
     * // Get one WorkItemMaterial
     * const workItemMaterial = await prisma.workItemMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkItemMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkItemMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkItemMaterialClient<$Result.GetResult<Prisma.$WorkItemMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkItemMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemMaterialFindFirstArgs} args - Arguments to find a WorkItemMaterial
     * @example
     * // Get one WorkItemMaterial
     * const workItemMaterial = await prisma.workItemMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkItemMaterialFindFirstArgs>(args?: SelectSubset<T, WorkItemMaterialFindFirstArgs<ExtArgs>>): Prisma__WorkItemMaterialClient<$Result.GetResult<Prisma.$WorkItemMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkItemMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemMaterialFindFirstOrThrowArgs} args - Arguments to find a WorkItemMaterial
     * @example
     * // Get one WorkItemMaterial
     * const workItemMaterial = await prisma.workItemMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkItemMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkItemMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkItemMaterialClient<$Result.GetResult<Prisma.$WorkItemMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkItemMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkItemMaterials
     * const workItemMaterials = await prisma.workItemMaterial.findMany()
     * 
     * // Get first 10 WorkItemMaterials
     * const workItemMaterials = await prisma.workItemMaterial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workItemMaterialWithIdOnly = await prisma.workItemMaterial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkItemMaterialFindManyArgs>(args?: SelectSubset<T, WorkItemMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkItemMaterial.
     * @param {WorkItemMaterialCreateArgs} args - Arguments to create a WorkItemMaterial.
     * @example
     * // Create one WorkItemMaterial
     * const WorkItemMaterial = await prisma.workItemMaterial.create({
     *   data: {
     *     // ... data to create a WorkItemMaterial
     *   }
     * })
     * 
     */
    create<T extends WorkItemMaterialCreateArgs>(args: SelectSubset<T, WorkItemMaterialCreateArgs<ExtArgs>>): Prisma__WorkItemMaterialClient<$Result.GetResult<Prisma.$WorkItemMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkItemMaterials.
     * @param {WorkItemMaterialCreateManyArgs} args - Arguments to create many WorkItemMaterials.
     * @example
     * // Create many WorkItemMaterials
     * const workItemMaterial = await prisma.workItemMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkItemMaterialCreateManyArgs>(args?: SelectSubset<T, WorkItemMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkItemMaterials and returns the data saved in the database.
     * @param {WorkItemMaterialCreateManyAndReturnArgs} args - Arguments to create many WorkItemMaterials.
     * @example
     * // Create many WorkItemMaterials
     * const workItemMaterial = await prisma.workItemMaterial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkItemMaterials and only return the `id`
     * const workItemMaterialWithIdOnly = await prisma.workItemMaterial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkItemMaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkItemMaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemMaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkItemMaterial.
     * @param {WorkItemMaterialDeleteArgs} args - Arguments to delete one WorkItemMaterial.
     * @example
     * // Delete one WorkItemMaterial
     * const WorkItemMaterial = await prisma.workItemMaterial.delete({
     *   where: {
     *     // ... filter to delete one WorkItemMaterial
     *   }
     * })
     * 
     */
    delete<T extends WorkItemMaterialDeleteArgs>(args: SelectSubset<T, WorkItemMaterialDeleteArgs<ExtArgs>>): Prisma__WorkItemMaterialClient<$Result.GetResult<Prisma.$WorkItemMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkItemMaterial.
     * @param {WorkItemMaterialUpdateArgs} args - Arguments to update one WorkItemMaterial.
     * @example
     * // Update one WorkItemMaterial
     * const workItemMaterial = await prisma.workItemMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkItemMaterialUpdateArgs>(args: SelectSubset<T, WorkItemMaterialUpdateArgs<ExtArgs>>): Prisma__WorkItemMaterialClient<$Result.GetResult<Prisma.$WorkItemMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkItemMaterials.
     * @param {WorkItemMaterialDeleteManyArgs} args - Arguments to filter WorkItemMaterials to delete.
     * @example
     * // Delete a few WorkItemMaterials
     * const { count } = await prisma.workItemMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkItemMaterialDeleteManyArgs>(args?: SelectSubset<T, WorkItemMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkItemMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkItemMaterials
     * const workItemMaterial = await prisma.workItemMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkItemMaterialUpdateManyArgs>(args: SelectSubset<T, WorkItemMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkItemMaterials and returns the data updated in the database.
     * @param {WorkItemMaterialUpdateManyAndReturnArgs} args - Arguments to update many WorkItemMaterials.
     * @example
     * // Update many WorkItemMaterials
     * const workItemMaterial = await prisma.workItemMaterial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkItemMaterials and only return the `id`
     * const workItemMaterialWithIdOnly = await prisma.workItemMaterial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkItemMaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkItemMaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemMaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkItemMaterial.
     * @param {WorkItemMaterialUpsertArgs} args - Arguments to update or create a WorkItemMaterial.
     * @example
     * // Update or create a WorkItemMaterial
     * const workItemMaterial = await prisma.workItemMaterial.upsert({
     *   create: {
     *     // ... data to create a WorkItemMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkItemMaterial we want to update
     *   }
     * })
     */
    upsert<T extends WorkItemMaterialUpsertArgs>(args: SelectSubset<T, WorkItemMaterialUpsertArgs<ExtArgs>>): Prisma__WorkItemMaterialClient<$Result.GetResult<Prisma.$WorkItemMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkItemMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemMaterialCountArgs} args - Arguments to filter WorkItemMaterials to count.
     * @example
     * // Count the number of WorkItemMaterials
     * const count = await prisma.workItemMaterial.count({
     *   where: {
     *     // ... the filter for the WorkItemMaterials we want to count
     *   }
     * })
    **/
    count<T extends WorkItemMaterialCountArgs>(
      args?: Subset<T, WorkItemMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkItemMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkItemMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkItemMaterialAggregateArgs>(args: Subset<T, WorkItemMaterialAggregateArgs>): Prisma.PrismaPromise<GetWorkItemMaterialAggregateType<T>>

    /**
     * Group by WorkItemMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemMaterialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkItemMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkItemMaterialGroupByArgs['orderBy'] }
        : { orderBy?: WorkItemMaterialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkItemMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkItemMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkItemMaterial model
   */
  readonly fields: WorkItemMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkItemMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkItemMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workItem<T extends WorkItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkItemDefaultArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workItemMaterialTest<T extends WorkItemMaterial$workItemMaterialTestArgs<ExtArgs> = {}>(args?: Subset<T, WorkItemMaterial$workItemMaterialTestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemMaterialTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>)   | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>)   | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>)   | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void)   | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkItemMaterial model
   */
  interface WorkItemMaterialFieldRefs {
    readonly id: FieldRef<"WorkItemMaterial", 'String'>
    readonly workItemId: FieldRef<"WorkItemMaterial", 'String'>
    readonly materialId: FieldRef<"WorkItemMaterial", 'String'>
    readonly quantityPerUnit: FieldRef<"WorkItemMaterial", 'Decimal'>
    readonly createdAt: FieldRef<"WorkItemMaterial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkItemMaterial findUnique
   */
  export type WorkItemMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterial
     */
    select?: WorkItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterial
     */
    omit?: WorkItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemMaterial to fetch.
     */
    where: WorkItemMaterialWhereUniqueInput
  }

  /**
   * WorkItemMaterial findUniqueOrThrow
   */
  export type WorkItemMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterial
     */
    select?: WorkItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterial
     */
    omit?: WorkItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemMaterial to fetch.
     */
    where: WorkItemMaterialWhereUniqueInput
  }

  /**
   * WorkItemMaterial findFirst
   */
  export type WorkItemMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterial
     */
    select?: WorkItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterial
     */
    omit?: WorkItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemMaterial to fetch.
     */
    where?: WorkItemMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItemMaterials to fetch.
     */
    orderBy?: WorkItemMaterialOrderByWithRelationInput | WorkItemMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkItemMaterials.
     */
    cursor?: WorkItemMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItemMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItemMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkItemMaterials.
     */
    distinct?: WorkItemMaterialScalarFieldEnum | WorkItemMaterialScalarFieldEnum[]
  }

  /**
   * WorkItemMaterial findFirstOrThrow
   */
  export type WorkItemMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterial
     */
    select?: WorkItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterial
     */
    omit?: WorkItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemMaterial to fetch.
     */
    where?: WorkItemMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItemMaterials to fetch.
     */
    orderBy?: WorkItemMaterialOrderByWithRelationInput | WorkItemMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkItemMaterials.
     */
    cursor?: WorkItemMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItemMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItemMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkItemMaterials.
     */
    distinct?: WorkItemMaterialScalarFieldEnum | WorkItemMaterialScalarFieldEnum[]
  }

  /**
   * WorkItemMaterial findMany
   */
  export type WorkItemMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterial
     */
    select?: WorkItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterial
     */
    omit?: WorkItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemMaterials to fetch.
     */
    where?: WorkItemMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItemMaterials to fetch.
     */
    orderBy?: WorkItemMaterialOrderByWithRelationInput | WorkItemMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkItemMaterials.
     */
    cursor?: WorkItemMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItemMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItemMaterials.
     */
    skip?: number
    distinct?: WorkItemMaterialScalarFieldEnum | WorkItemMaterialScalarFieldEnum[]
  }

  /**
   * WorkItemMaterial create
   */
  export type WorkItemMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterial
     */
    select?: WorkItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterial
     */
    omit?: WorkItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkItemMaterial.
     */
    data: XOR<WorkItemMaterialCreateInput, WorkItemMaterialUncheckedCreateInput>
  }

  /**
   * WorkItemMaterial createMany
   */
  export type WorkItemMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkItemMaterials.
     */
    data: WorkItemMaterialCreateManyInput | WorkItemMaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkItemMaterial createManyAndReturn
   */
  export type WorkItemMaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterial
     */
    select?: WorkItemMaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterial
     */
    omit?: WorkItemMaterialOmit<ExtArgs> | null
    /**
     * The data used to create many WorkItemMaterials.
     */
    data: WorkItemMaterialCreateManyInput | WorkItemMaterialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkItemMaterial update
   */
  export type WorkItemMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterial
     */
    select?: WorkItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterial
     */
    omit?: WorkItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkItemMaterial.
     */
    data: XOR<WorkItemMaterialUpdateInput, WorkItemMaterialUncheckedUpdateInput>
    /**
     * Choose, which WorkItemMaterial to update.
     */
    where: WorkItemMaterialWhereUniqueInput
  }

  /**
   * WorkItemMaterial updateMany
   */
  export type WorkItemMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkItemMaterials.
     */
    data: XOR<WorkItemMaterialUpdateManyMutationInput, WorkItemMaterialUncheckedUpdateManyInput>
    /**
     * Filter which WorkItemMaterials to update
     */
    where?: WorkItemMaterialWhereInput
    /**
     * Limit how many WorkItemMaterials to update.
     */
    limit?: number
  }

  /**
   * WorkItemMaterial updateManyAndReturn
   */
  export type WorkItemMaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterial
     */
    select?: WorkItemMaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterial
     */
    omit?: WorkItemMaterialOmit<ExtArgs> | null
    /**
     * The data used to update WorkItemMaterials.
     */
    data: XOR<WorkItemMaterialUpdateManyMutationInput, WorkItemMaterialUncheckedUpdateManyInput>
    /**
     * Filter which WorkItemMaterials to update
     */
    where?: WorkItemMaterialWhereInput
    /**
     * Limit how many WorkItemMaterials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkItemMaterial upsert
   */
  export type WorkItemMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterial
     */
    select?: WorkItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterial
     */
    omit?: WorkItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkItemMaterial to update in case it exists.
     */
    where: WorkItemMaterialWhereUniqueInput
    /**
     * In case the WorkItemMaterial found by the `where` argument doesn't exist, create a new WorkItemMaterial with this data.
     */
    create: XOR<WorkItemMaterialCreateInput, WorkItemMaterialUncheckedCreateInput>
    /**
     * In case the WorkItemMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkItemMaterialUpdateInput, WorkItemMaterialUncheckedUpdateInput>
  }

  /**
   * WorkItemMaterial delete
   */
  export type WorkItemMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterial
     */
    select?: WorkItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterial
     */
    omit?: WorkItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialInclude<ExtArgs> | null
    /**
     * Filter which WorkItemMaterial to delete.
     */
    where: WorkItemMaterialWhereUniqueInput
  }

  /**
   * WorkItemMaterial deleteMany
   */
  export type WorkItemMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkItemMaterials to delete
     */
    where?: WorkItemMaterialWhereInput
    /**
     * Limit how many WorkItemMaterials to delete.
     */
    limit?: number
  }

  /**
   * WorkItemMaterial.workItemMaterialTest
   */
  export type WorkItemMaterial$workItemMaterialTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialTest
     */
    select?: WorkItemMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterialTest
     */
    omit?: WorkItemMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialTestInclude<ExtArgs> | null
    where?: WorkItemMaterialTestWhereInput
    orderBy?: WorkItemMaterialTestOrderByWithRelationInput | WorkItemMaterialTestOrderByWithRelationInput[]
    cursor?: WorkItemMaterialTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkItemMaterialTestScalarFieldEnum | WorkItemMaterialTestScalarFieldEnum[]
  }

  /**
   * WorkItemMaterial without action
   */
  export type WorkItemMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterial
     */
    select?: WorkItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterial
     */
    omit?: WorkItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialInclude<ExtArgs> | null
  }


  /**
   * Model WorkItemMaterialTest
   */

  export type AggregateWorkItemMaterialTest = {
    _count: WorkItemMaterialTestCountAggregateOutputType | null
    _avg: WorkItemMaterialTestAvgAggregateOutputType | null
    _sum: WorkItemMaterialTestSumAggregateOutputType | null
    _min: WorkItemMaterialTestMinAggregateOutputType | null
    _max: WorkItemMaterialTestMaxAggregateOutputType | null
  }

  export type WorkItemMaterialTestAvgAggregateOutputType = {
    unitsPerTest: Decimal | null
  }

  export type WorkItemMaterialTestSumAggregateOutputType = {
    unitsPerTest: Decimal | null
  }

  export type WorkItemMaterialTestMinAggregateOutputType = {
    id: string | null
    workItemMaterialId: string | null
    testId: string | null
    unitsPerTest: Decimal | null
    createdAt: Date | null
  }

  export type WorkItemMaterialTestMaxAggregateOutputType = {
    id: string | null
    workItemMaterialId: string | null
    testId: string | null
    unitsPerTest: Decimal | null
    createdAt: Date | null
  }

  export type WorkItemMaterialTestCountAggregateOutputType = {
    id: number
    workItemMaterialId: number
    testId: number
    unitsPerTest: number
    createdAt: number
    _all: number
  }


  export type WorkItemMaterialTestAvgAggregateInputType = {
    unitsPerTest?: true
  }

  export type WorkItemMaterialTestSumAggregateInputType = {
    unitsPerTest?: true
  }

  export type WorkItemMaterialTestMinAggregateInputType = {
    id?: true
    workItemMaterialId?: true
    testId?: true
    unitsPerTest?: true
    createdAt?: true
  }

  export type WorkItemMaterialTestMaxAggregateInputType = {
    id?: true
    workItemMaterialId?: true
    testId?: true
    unitsPerTest?: true
    createdAt?: true
  }

  export type WorkItemMaterialTestCountAggregateInputType = {
    id?: true
    workItemMaterialId?: true
    testId?: true
    unitsPerTest?: true
    createdAt?: true
    _all?: true
  }

  export type WorkItemMaterialTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkItemMaterialTest to aggregate.
     */
    where?: WorkItemMaterialTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItemMaterialTests to fetch.
     */
    orderBy?: WorkItemMaterialTestOrderByWithRelationInput | WorkItemMaterialTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkItemMaterialTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItemMaterialTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItemMaterialTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkItemMaterialTests
    **/
    _count?: true | WorkItemMaterialTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkItemMaterialTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkItemMaterialTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkItemMaterialTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkItemMaterialTestMaxAggregateInputType
  }

  export type GetWorkItemMaterialTestAggregateType<T extends WorkItemMaterialTestAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkItemMaterialTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkItemMaterialTest[P]>
      : GetScalarType<T[P], AggregateWorkItemMaterialTest[P]>
  }




  export type WorkItemMaterialTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkItemMaterialTestWhereInput
    orderBy?: WorkItemMaterialTestOrderByWithAggregationInput | WorkItemMaterialTestOrderByWithAggregationInput[]
    by: WorkItemMaterialTestScalarFieldEnum[] | WorkItemMaterialTestScalarFieldEnum
    having?: WorkItemMaterialTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkItemMaterialTestCountAggregateInputType | true
    _avg?: WorkItemMaterialTestAvgAggregateInputType
    _sum?: WorkItemMaterialTestSumAggregateInputType
    _min?: WorkItemMaterialTestMinAggregateInputType
    _max?: WorkItemMaterialTestMaxAggregateInputType
  }

  export type WorkItemMaterialTestGroupByOutputType = {
    id: string
    workItemMaterialId: string
    testId: string
    unitsPerTest: Decimal
    createdAt: Date
    _count: WorkItemMaterialTestCountAggregateOutputType | null
    _avg: WorkItemMaterialTestAvgAggregateOutputType | null
    _sum: WorkItemMaterialTestSumAggregateOutputType | null
    _min: WorkItemMaterialTestMinAggregateOutputType | null
    _max: WorkItemMaterialTestMaxAggregateOutputType | null
  }

  type GetWorkItemMaterialTestGroupByPayload<T extends WorkItemMaterialTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkItemMaterialTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkItemMaterialTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkItemMaterialTestGroupByOutputType[P]>
            : GetScalarType<T[P], WorkItemMaterialTestGroupByOutputType[P]>
        }
      >
    >


  export type WorkItemMaterialTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workItemMaterialId?: boolean
    testId?: boolean
    unitsPerTest?: boolean
    createdAt?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    workItemMaterial?: boolean | WorkItemMaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workItemMaterialTest"]>

  export type WorkItemMaterialTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workItemMaterialId?: boolean
    testId?: boolean
    unitsPerTest?: boolean
    createdAt?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    workItemMaterial?: boolean | WorkItemMaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workItemMaterialTest"]>

  export type WorkItemMaterialTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workItemMaterialId?: boolean
    testId?: boolean
    unitsPerTest?: boolean
    createdAt?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    workItemMaterial?: boolean | WorkItemMaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workItemMaterialTest"]>

  export type WorkItemMaterialTestSelectScalar = {
    id?: boolean
    workItemMaterialId?: boolean
    testId?: boolean
    unitsPerTest?: boolean
    createdAt?: boolean
  }

  export type WorkItemMaterialTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workItemMaterialId" | "testId" | "unitsPerTest" | "createdAt", ExtArgs["result"]["workItemMaterialTest"]>
  export type WorkItemMaterialTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    workItemMaterial?: boolean | WorkItemMaterialDefaultArgs<ExtArgs>
  }
  export type WorkItemMaterialTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    workItemMaterial?: boolean | WorkItemMaterialDefaultArgs<ExtArgs>
  }
  export type WorkItemMaterialTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    workItemMaterial?: boolean | WorkItemMaterialDefaultArgs<ExtArgs>
  }

  export type $WorkItemMaterialTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkItemMaterialTest"
    objects: {
      test: Prisma.$TestPayload<ExtArgs>
      workItemMaterial: Prisma.$WorkItemMaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workItemMaterialId: string
      testId: string
      unitsPerTest: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["workItemMaterialTest"]>
    composites: {}
  }

  type WorkItemMaterialTestGetPayload<S extends boolean | null | undefined | WorkItemMaterialTestDefaultArgs> = $Result.GetResult<Prisma.$WorkItemMaterialTestPayload, S>

  type WorkItemMaterialTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkItemMaterialTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkItemMaterialTestCountAggregateInputType | true
    }

  export interface WorkItemMaterialTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkItemMaterialTest'], meta: { name: 'WorkItemMaterialTest' } }
    /**
     * Find zero or one WorkItemMaterialTest that matches the filter.
     * @param {WorkItemMaterialTestFindUniqueArgs} args - Arguments to find a WorkItemMaterialTest
     * @example
     * // Get one WorkItemMaterialTest
     * const workItemMaterialTest = await prisma.workItemMaterialTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkItemMaterialTestFindUniqueArgs>(args: SelectSubset<T, WorkItemMaterialTestFindUniqueArgs<ExtArgs>>): Prisma__WorkItemMaterialTestClient<$Result.GetResult<Prisma.$WorkItemMaterialTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkItemMaterialTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkItemMaterialTestFindUniqueOrThrowArgs} args - Arguments to find a WorkItemMaterialTest
     * @example
     * // Get one WorkItemMaterialTest
     * const workItemMaterialTest = await prisma.workItemMaterialTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkItemMaterialTestFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkItemMaterialTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkItemMaterialTestClient<$Result.GetResult<Prisma.$WorkItemMaterialTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkItemMaterialTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemMaterialTestFindFirstArgs} args - Arguments to find a WorkItemMaterialTest
     * @example
     * // Get one WorkItemMaterialTest
     * const workItemMaterialTest = await prisma.workItemMaterialTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkItemMaterialTestFindFirstArgs>(args?: SelectSubset<T, WorkItemMaterialTestFindFirstArgs<ExtArgs>>): Prisma__WorkItemMaterialTestClient<$Result.GetResult<Prisma.$WorkItemMaterialTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkItemMaterialTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemMaterialTestFindFirstOrThrowArgs} args - Arguments to find a WorkItemMaterialTest
     * @example
     * // Get one WorkItemMaterialTest
     * const workItemMaterialTest = await prisma.workItemMaterialTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkItemMaterialTestFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkItemMaterialTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkItemMaterialTestClient<$Result.GetResult<Prisma.$WorkItemMaterialTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkItemMaterialTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemMaterialTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkItemMaterialTests
     * const workItemMaterialTests = await prisma.workItemMaterialTest.findMany()
     * 
     * // Get first 10 WorkItemMaterialTests
     * const workItemMaterialTests = await prisma.workItemMaterialTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workItemMaterialTestWithIdOnly = await prisma.workItemMaterialTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkItemMaterialTestFindManyArgs>(args?: SelectSubset<T, WorkItemMaterialTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemMaterialTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkItemMaterialTest.
     * @param {WorkItemMaterialTestCreateArgs} args - Arguments to create a WorkItemMaterialTest.
     * @example
     * // Create one WorkItemMaterialTest
     * const WorkItemMaterialTest = await prisma.workItemMaterialTest.create({
     *   data: {
     *     // ... data to create a WorkItemMaterialTest
     *   }
     * })
     * 
     */
    create<T extends WorkItemMaterialTestCreateArgs>(args: SelectSubset<T, WorkItemMaterialTestCreateArgs<ExtArgs>>): Prisma__WorkItemMaterialTestClient<$Result.GetResult<Prisma.$WorkItemMaterialTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkItemMaterialTests.
     * @param {WorkItemMaterialTestCreateManyArgs} args - Arguments to create many WorkItemMaterialTests.
     * @example
     * // Create many WorkItemMaterialTests
     * const workItemMaterialTest = await prisma.workItemMaterialTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkItemMaterialTestCreateManyArgs>(args?: SelectSubset<T, WorkItemMaterialTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkItemMaterialTests and returns the data saved in the database.
     * @param {WorkItemMaterialTestCreateManyAndReturnArgs} args - Arguments to create many WorkItemMaterialTests.
     * @example
     * // Create many WorkItemMaterialTests
     * const workItemMaterialTest = await prisma.workItemMaterialTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkItemMaterialTests and only return the `id`
     * const workItemMaterialTestWithIdOnly = await prisma.workItemMaterialTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkItemMaterialTestCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkItemMaterialTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemMaterialTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkItemMaterialTest.
     * @param {WorkItemMaterialTestDeleteArgs} args - Arguments to delete one WorkItemMaterialTest.
     * @example
     * // Delete one WorkItemMaterialTest
     * const WorkItemMaterialTest = await prisma.workItemMaterialTest.delete({
     *   where: {
     *     // ... filter to delete one WorkItemMaterialTest
     *   }
     * })
     * 
     */
    delete<T extends WorkItemMaterialTestDeleteArgs>(args: SelectSubset<T, WorkItemMaterialTestDeleteArgs<ExtArgs>>): Prisma__WorkItemMaterialTestClient<$Result.GetResult<Prisma.$WorkItemMaterialTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkItemMaterialTest.
     * @param {WorkItemMaterialTestUpdateArgs} args - Arguments to update one WorkItemMaterialTest.
     * @example
     * // Update one WorkItemMaterialTest
     * const workItemMaterialTest = await prisma.workItemMaterialTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkItemMaterialTestUpdateArgs>(args: SelectSubset<T, WorkItemMaterialTestUpdateArgs<ExtArgs>>): Prisma__WorkItemMaterialTestClient<$Result.GetResult<Prisma.$WorkItemMaterialTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkItemMaterialTests.
     * @param {WorkItemMaterialTestDeleteManyArgs} args - Arguments to filter WorkItemMaterialTests to delete.
     * @example
     * // Delete a few WorkItemMaterialTests
     * const { count } = await prisma.workItemMaterialTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkItemMaterialTestDeleteManyArgs>(args?: SelectSubset<T, WorkItemMaterialTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkItemMaterialTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemMaterialTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkItemMaterialTests
     * const workItemMaterialTest = await prisma.workItemMaterialTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkItemMaterialTestUpdateManyArgs>(args: SelectSubset<T, WorkItemMaterialTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkItemMaterialTests and returns the data updated in the database.
     * @param {WorkItemMaterialTestUpdateManyAndReturnArgs} args - Arguments to update many WorkItemMaterialTests.
     * @example
     * // Update many WorkItemMaterialTests
     * const workItemMaterialTest = await prisma.workItemMaterialTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkItemMaterialTests and only return the `id`
     * const workItemMaterialTestWithIdOnly = await prisma.workItemMaterialTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkItemMaterialTestUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkItemMaterialTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemMaterialTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkItemMaterialTest.
     * @param {WorkItemMaterialTestUpsertArgs} args - Arguments to update or create a WorkItemMaterialTest.
     * @example
     * // Update or create a WorkItemMaterialTest
     * const workItemMaterialTest = await prisma.workItemMaterialTest.upsert({
     *   create: {
     *     // ... data to create a WorkItemMaterialTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkItemMaterialTest we want to update
     *   }
     * })
     */
    upsert<T extends WorkItemMaterialTestUpsertArgs>(args: SelectSubset<T, WorkItemMaterialTestUpsertArgs<ExtArgs>>): Prisma__WorkItemMaterialTestClient<$Result.GetResult<Prisma.$WorkItemMaterialTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkItemMaterialTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemMaterialTestCountArgs} args - Arguments to filter WorkItemMaterialTests to count.
     * @example
     * // Count the number of WorkItemMaterialTests
     * const count = await prisma.workItemMaterialTest.count({
     *   where: {
     *     // ... the filter for the WorkItemMaterialTests we want to count
     *   }
     * })
    **/
    count<T extends WorkItemMaterialTestCountArgs>(
      args?: Subset<T, WorkItemMaterialTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkItemMaterialTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkItemMaterialTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemMaterialTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkItemMaterialTestAggregateArgs>(args: Subset<T, WorkItemMaterialTestAggregateArgs>): Prisma.PrismaPromise<GetWorkItemMaterialTestAggregateType<T>>

    /**
     * Group by WorkItemMaterialTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemMaterialTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkItemMaterialTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkItemMaterialTestGroupByArgs['orderBy'] }
        : { orderBy?: WorkItemMaterialTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkItemMaterialTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkItemMaterialTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkItemMaterialTest model
   */
  readonly fields: WorkItemMaterialTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkItemMaterialTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkItemMaterialTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workItemMaterial<T extends WorkItemMaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkItemMaterialDefaultArgs<ExtArgs>>): Prisma__WorkItemMaterialClient<$Result.GetResult<Prisma.$WorkItemMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>)   | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>)   | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>)   | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void)   | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkItemMaterialTest model
   */
  interface WorkItemMaterialTestFieldRefs {
    readonly id: FieldRef<"WorkItemMaterialTest", 'String'>
    readonly workItemMaterialId: FieldRef<"WorkItemMaterialTest", 'String'>
    readonly testId: FieldRef<"WorkItemMaterialTest", 'String'>
    readonly unitsPerTest: FieldRef<"WorkItemMaterialTest", 'Decimal'>
    readonly createdAt: FieldRef<"WorkItemMaterialTest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkItemMaterialTest findUnique
   */
  export type WorkItemMaterialTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialTest
     */
    select?: WorkItemMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterialTest
     */
    omit?: WorkItemMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialTestInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemMaterialTest to fetch.
     */
    where: WorkItemMaterialTestWhereUniqueInput
  }

  /**
   * WorkItemMaterialTest findUniqueOrThrow
   */
  export type WorkItemMaterialTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialTest
     */
    select?: WorkItemMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterialTest
     */
    omit?: WorkItemMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialTestInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemMaterialTest to fetch.
     */
    where: WorkItemMaterialTestWhereUniqueInput
  }

  /**
   * WorkItemMaterialTest findFirst
   */
  export type WorkItemMaterialTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialTest
     */
    select?: WorkItemMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterialTest
     */
    omit?: WorkItemMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialTestInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemMaterialTest to fetch.
     */
    where?: WorkItemMaterialTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItemMaterialTests to fetch.
     */
    orderBy?: WorkItemMaterialTestOrderByWithRelationInput | WorkItemMaterialTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkItemMaterialTests.
     */
    cursor?: WorkItemMaterialTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItemMaterialTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItemMaterialTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkItemMaterialTests.
     */
    distinct?: WorkItemMaterialTestScalarFieldEnum | WorkItemMaterialTestScalarFieldEnum[]
  }

  /**
   * WorkItemMaterialTest findFirstOrThrow
   */
  export type WorkItemMaterialTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialTest
     */
    select?: WorkItemMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterialTest
     */
    omit?: WorkItemMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialTestInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemMaterialTest to fetch.
     */
    where?: WorkItemMaterialTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItemMaterialTests to fetch.
     */
    orderBy?: WorkItemMaterialTestOrderByWithRelationInput | WorkItemMaterialTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkItemMaterialTests.
     */
    cursor?: WorkItemMaterialTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItemMaterialTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItemMaterialTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkItemMaterialTests.
     */
    distinct?: WorkItemMaterialTestScalarFieldEnum | WorkItemMaterialTestScalarFieldEnum[]
  }

  /**
   * WorkItemMaterialTest findMany
   */
  export type WorkItemMaterialTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialTest
     */
    select?: WorkItemMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterialTest
     */
    omit?: WorkItemMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialTestInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemMaterialTests to fetch.
     */
    where?: WorkItemMaterialTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItemMaterialTests to fetch.
     */
    orderBy?: WorkItemMaterialTestOrderByWithRelationInput | WorkItemMaterialTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkItemMaterialTests.
     */
    cursor?: WorkItemMaterialTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItemMaterialTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItemMaterialTests.
     */
    skip?: number
    distinct?: WorkItemMaterialTestScalarFieldEnum | WorkItemMaterialTestScalarFieldEnum[]
  }

  /**
   * WorkItemMaterialTest create
   */
  export type WorkItemMaterialTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialTest
     */
    select?: WorkItemMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterialTest
     */
    omit?: WorkItemMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialTestInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkItemMaterialTest.
     */
    data: XOR<WorkItemMaterialTestCreateInput, WorkItemMaterialTestUncheckedCreateInput>
  }

  /**
   * WorkItemMaterialTest createMany
   */
  export type WorkItemMaterialTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkItemMaterialTests.
     */
    data: WorkItemMaterialTestCreateManyInput | WorkItemMaterialTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkItemMaterialTest createManyAndReturn
   */
  export type WorkItemMaterialTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialTest
     */
    select?: WorkItemMaterialTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterialTest
     */
    omit?: WorkItemMaterialTestOmit<ExtArgs> | null
    /**
     * The data used to create many WorkItemMaterialTests.
     */
    data: WorkItemMaterialTestCreateManyInput | WorkItemMaterialTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkItemMaterialTest update
   */
  export type WorkItemMaterialTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialTest
     */
    select?: WorkItemMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterialTest
     */
    omit?: WorkItemMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialTestInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkItemMaterialTest.
     */
    data: XOR<WorkItemMaterialTestUpdateInput, WorkItemMaterialTestUncheckedUpdateInput>
    /**
     * Choose, which WorkItemMaterialTest to update.
     */
    where: WorkItemMaterialTestWhereUniqueInput
  }

  /**
   * WorkItemMaterialTest updateMany
   */
  export type WorkItemMaterialTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkItemMaterialTests.
     */
    data: XOR<WorkItemMaterialTestUpdateManyMutationInput, WorkItemMaterialTestUncheckedUpdateManyInput>
    /**
     * Filter which WorkItemMaterialTests to update
     */
    where?: WorkItemMaterialTestWhereInput
    /**
     * Limit how many WorkItemMaterialTests to update.
     */
    limit?: number
  }

  /**
   * WorkItemMaterialTest updateManyAndReturn
   */
  export type WorkItemMaterialTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialTest
     */
    select?: WorkItemMaterialTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterialTest
     */
    omit?: WorkItemMaterialTestOmit<ExtArgs> | null
    /**
     * The data used to update WorkItemMaterialTests.
     */
    data: XOR<WorkItemMaterialTestUpdateManyMutationInput, WorkItemMaterialTestUncheckedUpdateManyInput>
    /**
     * Filter which WorkItemMaterialTests to update
     */
    where?: WorkItemMaterialTestWhereInput
    /**
     * Limit how many WorkItemMaterialTests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialTestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkItemMaterialTest upsert
   */
  export type WorkItemMaterialTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialTest
     */
    select?: WorkItemMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterialTest
     */
    omit?: WorkItemMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialTestInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkItemMaterialTest to update in case it exists.
     */
    where: WorkItemMaterialTestWhereUniqueInput
    /**
     * In case the WorkItemMaterialTest found by the `where` argument doesn't exist, create a new WorkItemMaterialTest with this data.
     */
    create: XOR<WorkItemMaterialTestCreateInput, WorkItemMaterialTestUncheckedCreateInput>
    /**
     * In case the WorkItemMaterialTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkItemMaterialTestUpdateInput, WorkItemMaterialTestUncheckedUpdateInput>
  }

  /**
   * WorkItemMaterialTest delete
   */
  export type WorkItemMaterialTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialTest
     */
    select?: WorkItemMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterialTest
     */
    omit?: WorkItemMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialTestInclude<ExtArgs> | null
    /**
     * Filter which WorkItemMaterialTest to delete.
     */
    where: WorkItemMaterialTestWhereUniqueInput
  }

  /**
   * WorkItemMaterialTest deleteMany
   */
  export type WorkItemMaterialTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkItemMaterialTests to delete
     */
    where?: WorkItemMaterialTestWhereInput
    /**
     * Limit how many WorkItemMaterialTests to delete.
     */
    limit?: number
  }

  /**
   * WorkItemMaterialTest without action
   */
  export type WorkItemMaterialTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemMaterialTest
     */
    select?: WorkItemMaterialTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemMaterialTest
     */
    omit?: WorkItemMaterialTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemMaterialTestInclude<ExtArgs> | null
  }


  /**
   * Model WorkItemTest
   */

  export type AggregateWorkItemTest = {
    _count: WorkItemTestCountAggregateOutputType | null
    _avg: WorkItemTestAvgAggregateOutputType | null
    _sum: WorkItemTestSumAggregateOutputType | null
    _min: WorkItemTestMinAggregateOutputType | null
    _max: WorkItemTestMaxAggregateOutputType | null
  }

  export type WorkItemTestAvgAggregateOutputType = {
    testQuantity: Decimal | null
  }

  export type WorkItemTestSumAggregateOutputType = {
    testQuantity: Decimal | null
  }

  export type WorkItemTestMinAggregateOutputType = {
    id: string | null
    workItemId: string | null
    testId: string | null
    testQuantity: Decimal | null
    createdAt: Date | null
  }

  export type WorkItemTestMaxAggregateOutputType = {
    id: string | null
    workItemId: string | null
    testId: string | null
    testQuantity: Decimal | null
    createdAt: Date | null
  }

  export type WorkItemTestCountAggregateOutputType = {
    id: number
    workItemId: number
    testId: number
    testQuantity: number
    createdAt: number
    _all: number
  }


  export type WorkItemTestAvgAggregateInputType = {
    testQuantity?: true
  }

  export type WorkItemTestSumAggregateInputType = {
    testQuantity?: true
  }

  export type WorkItemTestMinAggregateInputType = {
    id?: true
    workItemId?: true
    testId?: true
    testQuantity?: true
    createdAt?: true
  }

  export type WorkItemTestMaxAggregateInputType = {
    id?: true
    workItemId?: true
    testId?: true
    testQuantity?: true
    createdAt?: true
  }

  export type WorkItemTestCountAggregateInputType = {
    id?: true
    workItemId?: true
    testId?: true
    testQuantity?: true
    createdAt?: true
    _all?: true
  }

  export type WorkItemTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkItemTest to aggregate.
     */
    where?: WorkItemTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItemTests to fetch.
     */
    orderBy?: WorkItemTestOrderByWithRelationInput | WorkItemTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkItemTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItemTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItemTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkItemTests
    **/
    _count?: true | WorkItemTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkItemTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkItemTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkItemTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkItemTestMaxAggregateInputType
  }

  export type GetWorkItemTestAggregateType<T extends WorkItemTestAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkItemTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkItemTest[P]>
      : GetScalarType<T[P], AggregateWorkItemTest[P]>
  }




  export type WorkItemTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkItemTestWhereInput
    orderBy?: WorkItemTestOrderByWithAggregationInput | WorkItemTestOrderByWithAggregationInput[]
    by: WorkItemTestScalarFieldEnum[] | WorkItemTestScalarFieldEnum
    having?: WorkItemTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkItemTestCountAggregateInputType | true
    _avg?: WorkItemTestAvgAggregateInputType
    _sum?: WorkItemTestSumAggregateInputType
    _min?: WorkItemTestMinAggregateInputType
    _max?: WorkItemTestMaxAggregateInputType
  }

  export type WorkItemTestGroupByOutputType = {
    id: string
    workItemId: string
    testId: string
    testQuantity: Decimal
    createdAt: Date
    _count: WorkItemTestCountAggregateOutputType | null
    _avg: WorkItemTestAvgAggregateOutputType | null
    _sum: WorkItemTestSumAggregateOutputType | null
    _min: WorkItemTestMinAggregateOutputType | null
    _max: WorkItemTestMaxAggregateOutputType | null
  }

  type GetWorkItemTestGroupByPayload<T extends WorkItemTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkItemTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkItemTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkItemTestGroupByOutputType[P]>
            : GetScalarType<T[P], WorkItemTestGroupByOutputType[P]>
        }
      >
    >


  export type WorkItemTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workItemId?: boolean
    testId?: boolean
    testQuantity?: boolean
    createdAt?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workItemTest"]>

  export type WorkItemTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workItemId?: boolean
    testId?: boolean
    testQuantity?: boolean
    createdAt?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workItemTest"]>

  export type WorkItemTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workItemId?: boolean
    testId?: boolean
    testQuantity?: boolean
    createdAt?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workItemTest"]>

  export type WorkItemTestSelectScalar = {
    id?: boolean
    workItemId?: boolean
    testId?: boolean
    testQuantity?: boolean
    createdAt?: boolean
  }

  export type WorkItemTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workItemId" | "testId" | "testQuantity" | "createdAt", ExtArgs["result"]["workItemTest"]>
  export type WorkItemTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
  }
  export type WorkItemTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
  }
  export type WorkItemTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    workItem?: boolean | WorkItemDefaultArgs<ExtArgs>
  }

  export type $WorkItemTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkItemTest"
    objects: {
      test: Prisma.$TestPayload<ExtArgs>
      workItem: Prisma.$WorkItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workItemId: string
      testId: string
      testQuantity: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["workItemTest"]>
    composites: {}
  }

  type WorkItemTestGetPayload<S extends boolean | null | undefined | WorkItemTestDefaultArgs> = $Result.GetResult<Prisma.$WorkItemTestPayload, S>

  type WorkItemTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkItemTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkItemTestCountAggregateInputType | true
    }

  export interface WorkItemTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkItemTest'], meta: { name: 'WorkItemTest' } }
    /**
     * Find zero or one WorkItemTest that matches the filter.
     * @param {WorkItemTestFindUniqueArgs} args - Arguments to find a WorkItemTest
     * @example
     * // Get one WorkItemTest
     * const workItemTest = await prisma.workItemTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkItemTestFindUniqueArgs>(args: SelectSubset<T, WorkItemTestFindUniqueArgs<ExtArgs>>): Prisma__WorkItemTestClient<$Result.GetResult<Prisma.$WorkItemTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkItemTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkItemTestFindUniqueOrThrowArgs} args - Arguments to find a WorkItemTest
     * @example
     * // Get one WorkItemTest
     * const workItemTest = await prisma.workItemTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkItemTestFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkItemTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkItemTestClient<$Result.GetResult<Prisma.$WorkItemTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkItemTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemTestFindFirstArgs} args - Arguments to find a WorkItemTest
     * @example
     * // Get one WorkItemTest
     * const workItemTest = await prisma.workItemTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkItemTestFindFirstArgs>(args?: SelectSubset<T, WorkItemTestFindFirstArgs<ExtArgs>>): Prisma__WorkItemTestClient<$Result.GetResult<Prisma.$WorkItemTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkItemTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemTestFindFirstOrThrowArgs} args - Arguments to find a WorkItemTest
     * @example
     * // Get one WorkItemTest
     * const workItemTest = await prisma.workItemTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkItemTestFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkItemTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkItemTestClient<$Result.GetResult<Prisma.$WorkItemTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkItemTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkItemTests
     * const workItemTests = await prisma.workItemTest.findMany()
     * 
     * // Get first 10 WorkItemTests
     * const workItemTests = await prisma.workItemTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workItemTestWithIdOnly = await prisma.workItemTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkItemTestFindManyArgs>(args?: SelectSubset<T, WorkItemTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkItemTest.
     * @param {WorkItemTestCreateArgs} args - Arguments to create a WorkItemTest.
     * @example
     * // Create one WorkItemTest
     * const WorkItemTest = await prisma.workItemTest.create({
     *   data: {
     *     // ... data to create a WorkItemTest
     *   }
     * })
     * 
     */
    create<T extends WorkItemTestCreateArgs>(args: SelectSubset<T, WorkItemTestCreateArgs<ExtArgs>>): Prisma__WorkItemTestClient<$Result.GetResult<Prisma.$WorkItemTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkItemTests.
     * @param {WorkItemTestCreateManyArgs} args - Arguments to create many WorkItemTests.
     * @example
     * // Create many WorkItemTests
     * const workItemTest = await prisma.workItemTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkItemTestCreateManyArgs>(args?: SelectSubset<T, WorkItemTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkItemTests and returns the data saved in the database.
     * @param {WorkItemTestCreateManyAndReturnArgs} args - Arguments to create many WorkItemTests.
     * @example
     * // Create many WorkItemTests
     * const workItemTest = await prisma.workItemTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkItemTests and only return the `id`
     * const workItemTestWithIdOnly = await prisma.workItemTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkItemTestCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkItemTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkItemTest.
     * @param {WorkItemTestDeleteArgs} args - Arguments to delete one WorkItemTest.
     * @example
     * // Delete one WorkItemTest
     * const WorkItemTest = await prisma.workItemTest.delete({
     *   where: {
     *     // ... filter to delete one WorkItemTest
     *   }
     * })
     * 
     */
    delete<T extends WorkItemTestDeleteArgs>(args: SelectSubset<T, WorkItemTestDeleteArgs<ExtArgs>>): Prisma__WorkItemTestClient<$Result.GetResult<Prisma.$WorkItemTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkItemTest.
     * @param {WorkItemTestUpdateArgs} args - Arguments to update one WorkItemTest.
     * @example
     * // Update one WorkItemTest
     * const workItemTest = await prisma.workItemTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkItemTestUpdateArgs>(args: SelectSubset<T, WorkItemTestUpdateArgs<ExtArgs>>): Prisma__WorkItemTestClient<$Result.GetResult<Prisma.$WorkItemTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkItemTests.
     * @param {WorkItemTestDeleteManyArgs} args - Arguments to filter WorkItemTests to delete.
     * @example
     * // Delete a few WorkItemTests
     * const { count } = await prisma.workItemTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkItemTestDeleteManyArgs>(args?: SelectSubset<T, WorkItemTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkItemTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkItemTests
     * const workItemTest = await prisma.workItemTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkItemTestUpdateManyArgs>(args: SelectSubset<T, WorkItemTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkItemTests and returns the data updated in the database.
     * @param {WorkItemTestUpdateManyAndReturnArgs} args - Arguments to update many WorkItemTests.
     * @example
     * // Update many WorkItemTests
     * const workItemTest = await prisma.workItemTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkItemTests and only return the `id`
     * const workItemTestWithIdOnly = await prisma.workItemTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkItemTestUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkItemTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkItemTest.
     * @param {WorkItemTestUpsertArgs} args - Arguments to update or create a WorkItemTest.
     * @example
     * // Update or create a WorkItemTest
     * const workItemTest = await prisma.workItemTest.upsert({
     *   create: {
     *     // ... data to create a WorkItemTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkItemTest we want to update
     *   }
     * })
     */
    upsert<T extends WorkItemTestUpsertArgs>(args: SelectSubset<T, WorkItemTestUpsertArgs<ExtArgs>>): Prisma__WorkItemTestClient<$Result.GetResult<Prisma.$WorkItemTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkItemTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemTestCountArgs} args - Arguments to filter WorkItemTests to count.
     * @example
     * // Count the number of WorkItemTests
     * const count = await prisma.workItemTest.count({
     *   where: {
     *     // ... the filter for the WorkItemTests we want to count
     *   }
     * })
    **/
    count<T extends WorkItemTestCountArgs>(
      args?: Subset<T, WorkItemTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkItemTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkItemTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkItemTestAggregateArgs>(args: Subset<T, WorkItemTestAggregateArgs>): Prisma.PrismaPromise<GetWorkItemTestAggregateType<T>>

    /**
     * Group by WorkItemTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkItemTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkItemTestGroupByArgs['orderBy'] }
        : { orderBy?: WorkItemTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkItemTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkItemTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkItemTest model
   */
  readonly fields: WorkItemTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkItemTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkItemTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workItem<T extends WorkItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkItemDefaultArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>)   | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>)   | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>)   | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void)   | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkItemTest model
   */
  interface WorkItemTestFieldRefs {
    readonly id: FieldRef<"WorkItemTest", 'String'>
    readonly workItemId: FieldRef<"WorkItemTest", 'String'>
    readonly testId: FieldRef<"WorkItemTest", 'String'>
    readonly testQuantity: FieldRef<"WorkItemTest", 'Decimal'>
    readonly createdAt: FieldRef<"WorkItemTest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkItemTest findUnique
   */
  export type WorkItemTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemTest
     */
    select?: WorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemTest
     */
    omit?: WorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemTestInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemTest to fetch.
     */
    where: WorkItemTestWhereUniqueInput
  }

  /**
   * WorkItemTest findUniqueOrThrow
   */
  export type WorkItemTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemTest
     */
    select?: WorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemTest
     */
    omit?: WorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemTestInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemTest to fetch.
     */
    where: WorkItemTestWhereUniqueInput
  }

  /**
   * WorkItemTest findFirst
   */
  export type WorkItemTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemTest
     */
    select?: WorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemTest
     */
    omit?: WorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemTestInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemTest to fetch.
     */
    where?: WorkItemTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItemTests to fetch.
     */
    orderBy?: WorkItemTestOrderByWithRelationInput | WorkItemTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkItemTests.
     */
    cursor?: WorkItemTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItemTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItemTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkItemTests.
     */
    distinct?: WorkItemTestScalarFieldEnum | WorkItemTestScalarFieldEnum[]
  }

  /**
   * WorkItemTest findFirstOrThrow
   */
  export type WorkItemTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemTest
     */
    select?: WorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemTest
     */
    omit?: WorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemTestInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemTest to fetch.
     */
    where?: WorkItemTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItemTests to fetch.
     */
    orderBy?: WorkItemTestOrderByWithRelationInput | WorkItemTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkItemTests.
     */
    cursor?: WorkItemTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItemTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItemTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkItemTests.
     */
    distinct?: WorkItemTestScalarFieldEnum | WorkItemTestScalarFieldEnum[]
  }

  /**
   * WorkItemTest findMany
   */
  export type WorkItemTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemTest
     */
    select?: WorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemTest
     */
    omit?: WorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemTestInclude<ExtArgs> | null
    /**
     * Filter, which WorkItemTests to fetch.
     */
    where?: WorkItemTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItemTests to fetch.
     */
    orderBy?: WorkItemTestOrderByWithRelationInput | WorkItemTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkItemTests.
     */
    cursor?: WorkItemTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItemTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItemTests.
     */
    skip?: number
    distinct?: WorkItemTestScalarFieldEnum | WorkItemTestScalarFieldEnum[]
  }

  /**
   * WorkItemTest create
   */
  export type WorkItemTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemTest
     */
    select?: WorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemTest
     */
    omit?: WorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemTestInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkItemTest.
     */
    data: XOR<WorkItemTestCreateInput, WorkItemTestUncheckedCreateInput>
  }

  /**
   * WorkItemTest createMany
   */
  export type WorkItemTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkItemTests.
     */
    data: WorkItemTestCreateManyInput | WorkItemTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkItemTest createManyAndReturn
   */
  export type WorkItemTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemTest
     */
    select?: WorkItemTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemTest
     */
    omit?: WorkItemTestOmit<ExtArgs> | null
    /**
     * The data used to create many WorkItemTests.
     */
    data: WorkItemTestCreateManyInput | WorkItemTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkItemTest update
   */
  export type WorkItemTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemTest
     */
    select?: WorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemTest
     */
    omit?: WorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemTestInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkItemTest.
     */
    data: XOR<WorkItemTestUpdateInput, WorkItemTestUncheckedUpdateInput>
    /**
     * Choose, which WorkItemTest to update.
     */
    where: WorkItemTestWhereUniqueInput
  }

  /**
   * WorkItemTest updateMany
   */
  export type WorkItemTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkItemTests.
     */
    data: XOR<WorkItemTestUpdateManyMutationInput, WorkItemTestUncheckedUpdateManyInput>
    /**
     * Filter which WorkItemTests to update
     */
    where?: WorkItemTestWhereInput
    /**
     * Limit how many WorkItemTests to update.
     */
    limit?: number
  }

  /**
   * WorkItemTest updateManyAndReturn
   */
  export type WorkItemTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemTest
     */
    select?: WorkItemTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemTest
     */
    omit?: WorkItemTestOmit<ExtArgs> | null
    /**
     * The data used to update WorkItemTests.
     */
    data: XOR<WorkItemTestUpdateManyMutationInput, WorkItemTestUncheckedUpdateManyInput>
    /**
     * Filter which WorkItemTests to update
     */
    where?: WorkItemTestWhereInput
    /**
     * Limit how many WorkItemTests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemTestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkItemTest upsert
   */
  export type WorkItemTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemTest
     */
    select?: WorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemTest
     */
    omit?: WorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemTestInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkItemTest to update in case it exists.
     */
    where: WorkItemTestWhereUniqueInput
    /**
     * In case the WorkItemTest found by the `where` argument doesn't exist, create a new WorkItemTest with this data.
     */
    create: XOR<WorkItemTestCreateInput, WorkItemTestUncheckedCreateInput>
    /**
     * In case the WorkItemTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkItemTestUpdateInput, WorkItemTestUncheckedUpdateInput>
  }

  /**
   * WorkItemTest delete
   */
  export type WorkItemTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemTest
     */
    select?: WorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemTest
     */
    omit?: WorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemTestInclude<ExtArgs> | null
    /**
     * Filter which WorkItemTest to delete.
     */
    where: WorkItemTestWhereUniqueInput
  }

  /**
   * WorkItemTest deleteMany
   */
  export type WorkItemTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkItemTests to delete
     */
    where?: WorkItemTestWhereInput
    /**
     * Limit how many WorkItemTests to delete.
     */
    limit?: number
  }

  /**
   * WorkItemTest without action
   */
  export type WorkItemTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItemTest
     */
    select?: WorkItemTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItemTest
     */
    omit?: WorkItemTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkItemTestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    unitId: 'unitId',
    createdAt: 'createdAt'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    contractName: 'contractName',
    contractor: 'contractor',
    limits: 'limits',
    location: 'location',
    dateStarted: 'dateStarted',
    createdAt: 'createdAt',
    materialsEngineer: 'materialsEngineer',
    contractCost: 'contractCost'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectMaterialScalarFieldEnum: {
    id: 'id',
    projectWorkItemId: 'projectWorkItemId',
    materialId: 'materialId',
    quantity: 'quantity',
    createdAt: 'createdAt'
  };

  export type ProjectMaterialScalarFieldEnum = (typeof ProjectMaterialScalarFieldEnum)[keyof typeof ProjectMaterialScalarFieldEnum]


  export const ProjectMaterialTestScalarFieldEnum: {
    id: 'id',
    testId: 'testId',
    projectMaterialId: 'projectMaterialId',
    onFile: 'onFile',
    createdAt: 'createdAt'
  };

  export type ProjectMaterialTestScalarFieldEnum = (typeof ProjectMaterialTestScalarFieldEnum)[keyof typeof ProjectMaterialTestScalarFieldEnum]


  export const ProjectWorkItemScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    workItemId: 'workItemId',
    quantity: 'quantity',
    createdAt: 'createdAt'
  };

  export type ProjectWorkItemScalarFieldEnum = (typeof ProjectWorkItemScalarFieldEnum)[keyof typeof ProjectWorkItemScalarFieldEnum]


  export const ProjectWorkItemTestScalarFieldEnum: {
    id: 'id',
    testId: 'testId',
    projectWorkItemId: 'projectWorkItemId',
    onFile: 'onFile',
    createdAt: 'createdAt'
  };

  export type ProjectWorkItemTestScalarFieldEnum = (typeof ProjectWorkItemTestScalarFieldEnum)[keyof typeof ProjectWorkItemTestScalarFieldEnum]


  export const TestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    abbreviation: 'abbreviation',
    createdAt: 'createdAt'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const WorkItemScalarFieldEnum: {
    id: 'id',
    itemNo: 'itemNo',
    description: 'description',
    unitId: 'unitId',
    createdAt: 'createdAt'
  };

  export type WorkItemScalarFieldEnum = (typeof WorkItemScalarFieldEnum)[keyof typeof WorkItemScalarFieldEnum]


  export const WorkItemMaterialScalarFieldEnum: {
    id: 'id',
    workItemId: 'workItemId',
    materialId: 'materialId',
    quantityPerUnit: 'quantityPerUnit',
    createdAt: 'createdAt'
  };

  export type WorkItemMaterialScalarFieldEnum = (typeof WorkItemMaterialScalarFieldEnum)[keyof typeof WorkItemMaterialScalarFieldEnum]


  export const WorkItemMaterialTestScalarFieldEnum: {
    id: 'id',
    workItemMaterialId: 'workItemMaterialId',
    testId: 'testId',
    unitsPerTest: 'unitsPerTest',
    createdAt: 'createdAt'
  };

  export type WorkItemMaterialTestScalarFieldEnum = (typeof WorkItemMaterialTestScalarFieldEnum)[keyof typeof WorkItemMaterialTestScalarFieldEnum]


  export const WorkItemTestScalarFieldEnum: {
    id: 'id',
    workItemId: 'workItemId',
    testId: 'testId',
    testQuantity: 'testQuantity',
    createdAt: 'createdAt'
  };

  export type WorkItemTestScalarFieldEnum = (typeof WorkItemTestScalarFieldEnum)[keyof typeof WorkItemTestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: UuidFilter<"Material"> | string
    name?: StringFilter<"Material"> | string
    description?: StringNullableFilter<"Material"> | string | null
    unitId?: UuidFilter<"Material"> | string
    createdAt?: DateTimeFilter<"Material"> | Date | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    projectMaterial?: ProjectMaterialListRelationFilter
    workItemMaterial?: WorkItemMaterialListRelationFilter
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    unit?: UnitOrderByWithRelationInput
    projectMaterial?: ProjectMaterialOrderByRelationAggregateInput
    workItemMaterial?: WorkItemMaterialOrderByRelationAggregateInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    name?: StringFilter<"Material"> | string
    description?: StringNullableFilter<"Material"> | string | null
    unitId?: UuidFilter<"Material"> | string
    createdAt?: DateTimeFilter<"Material"> | Date | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    projectMaterial?: ProjectMaterialListRelationFilter
    workItemMaterial?: WorkItemMaterialListRelationFilter
  }, "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Material"> | string
    name?: StringWithAggregatesFilter<"Material"> | string
    description?: StringNullableWithAggregatesFilter<"Material"> | string | null
    unitId?: UuidWithAggregatesFilter<"Material"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: UuidFilter<"Project"> | string
    contractId?: StringFilter<"Project"> | string
    contractName?: StringFilter<"Project"> | string
    contractor?: StringFilter<"Project"> | string
    limits?: StringNullableFilter<"Project"> | string | null
    location?: StringNullableFilter<"Project"> | string | null
    dateStarted?: DateTimeFilter<"Project"> | Date | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    materialsEngineer?: StringFilter<"Project"> | string
    contractCost?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    projectWorkItem?: ProjectWorkItemListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    contractName?: SortOrder
    contractor?: SortOrder
    limits?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    dateStarted?: SortOrder
    createdAt?: SortOrder
    materialsEngineer?: SortOrder
    contractCost?: SortOrder
    projectWorkItem?: ProjectWorkItemOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contractId?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    contractName?: StringFilter<"Project"> | string
    contractor?: StringFilter<"Project"> | string
    limits?: StringNullableFilter<"Project"> | string | null
    location?: StringNullableFilter<"Project"> | string | null
    dateStarted?: DateTimeFilter<"Project"> | Date | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    materialsEngineer?: StringFilter<"Project"> | string
    contractCost?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    projectWorkItem?: ProjectWorkItemListRelationFilter
  }, "id" | "contractId">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    contractName?: SortOrder
    contractor?: SortOrder
    limits?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    dateStarted?: SortOrder
    createdAt?: SortOrder
    materialsEngineer?: SortOrder
    contractCost?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Project"> | string
    contractId?: StringWithAggregatesFilter<"Project"> | string
    contractName?: StringWithAggregatesFilter<"Project"> | string
    contractor?: StringWithAggregatesFilter<"Project"> | string
    limits?: StringNullableWithAggregatesFilter<"Project"> | string | null
    location?: StringNullableWithAggregatesFilter<"Project"> | string | null
    dateStarted?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    materialsEngineer?: StringWithAggregatesFilter<"Project"> | string
    contractCost?: DecimalWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string
  }

  export type ProjectMaterialWhereInput = {
    AND?: ProjectMaterialWhereInput | ProjectMaterialWhereInput[]
    OR?: ProjectMaterialWhereInput[]
    NOT?: ProjectMaterialWhereInput | ProjectMaterialWhereInput[]
    id?: UuidFilter<"ProjectMaterial"> | string
    projectWorkItemId?: UuidFilter<"ProjectMaterial"> | string
    materialId?: UuidFilter<"ProjectMaterial"> | string
    quantity?: DecimalFilter<"ProjectMaterial"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ProjectMaterial"> | Date | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    projectWorkItem?: XOR<ProjectWorkItemScalarRelationFilter, ProjectWorkItemWhereInput>
    projectMaterialTest?: ProjectMaterialTestListRelationFilter
  }

  export type ProjectMaterialOrderByWithRelationInput = {
    id?: SortOrder
    projectWorkItemId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    material?: MaterialOrderByWithRelationInput
    projectWorkItem?: ProjectWorkItemOrderByWithRelationInput
    projectMaterialTest?: ProjectMaterialTestOrderByRelationAggregateInput
  }

  export type ProjectMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectMaterialWhereInput | ProjectMaterialWhereInput[]
    OR?: ProjectMaterialWhereInput[]
    NOT?: ProjectMaterialWhereInput | ProjectMaterialWhereInput[]
    projectWorkItemId?: UuidFilter<"ProjectMaterial"> | string
    materialId?: UuidFilter<"ProjectMaterial"> | string
    quantity?: DecimalFilter<"ProjectMaterial"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ProjectMaterial"> | Date | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    projectWorkItem?: XOR<ProjectWorkItemScalarRelationFilter, ProjectWorkItemWhereInput>
    projectMaterialTest?: ProjectMaterialTestListRelationFilter
  }, "id">

  export type ProjectMaterialOrderByWithAggregationInput = {
    id?: SortOrder
    projectWorkItemId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectMaterialCountOrderByAggregateInput
    _avg?: ProjectMaterialAvgOrderByAggregateInput
    _max?: ProjectMaterialMaxOrderByAggregateInput
    _min?: ProjectMaterialMinOrderByAggregateInput
    _sum?: ProjectMaterialSumOrderByAggregateInput
  }

  export type ProjectMaterialScalarWhereWithAggregatesInput = {
    AND?: ProjectMaterialScalarWhereWithAggregatesInput | ProjectMaterialScalarWhereWithAggregatesInput[]
    OR?: ProjectMaterialScalarWhereWithAggregatesInput[]
    NOT?: ProjectMaterialScalarWhereWithAggregatesInput | ProjectMaterialScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProjectMaterial"> | string
    projectWorkItemId?: UuidWithAggregatesFilter<"ProjectMaterial"> | string
    materialId?: UuidWithAggregatesFilter<"ProjectMaterial"> | string
    quantity?: DecimalWithAggregatesFilter<"ProjectMaterial"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectMaterial"> | Date | string
  }

  export type ProjectMaterialTestWhereInput = {
    AND?: ProjectMaterialTestWhereInput | ProjectMaterialTestWhereInput[]
    OR?: ProjectMaterialTestWhereInput[]
    NOT?: ProjectMaterialTestWhereInput | ProjectMaterialTestWhereInput[]
    id?: UuidFilter<"ProjectMaterialTest"> | string
    testId?: UuidFilter<"ProjectMaterialTest"> | string
    projectMaterialId?: UuidFilter<"ProjectMaterialTest"> | string
    onFile?: IntFilter<"ProjectMaterialTest"> | number
    createdAt?: DateTimeFilter<"ProjectMaterialTest"> | Date | string
    projectMaterial?: XOR<ProjectMaterialScalarRelationFilter, ProjectMaterialWhereInput>
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
  }

  export type ProjectMaterialTestOrderByWithRelationInput = {
    id?: SortOrder
    testId?: SortOrder
    projectMaterialId?: SortOrder
    onFile?: SortOrder
    createdAt?: SortOrder
    projectMaterial?: ProjectMaterialOrderByWithRelationInput
    test?: TestOrderByWithRelationInput
  }

  export type ProjectMaterialTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectMaterialTestWhereInput | ProjectMaterialTestWhereInput[]
    OR?: ProjectMaterialTestWhereInput[]
    NOT?: ProjectMaterialTestWhereInput | ProjectMaterialTestWhereInput[]
    testId?: UuidFilter<"ProjectMaterialTest"> | string
    projectMaterialId?: UuidFilter<"ProjectMaterialTest"> | string
    onFile?: IntFilter<"ProjectMaterialTest"> | number
    createdAt?: DateTimeFilter<"ProjectMaterialTest"> | Date | string
    projectMaterial?: XOR<ProjectMaterialScalarRelationFilter, ProjectMaterialWhereInput>
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
  }, "id">

  export type ProjectMaterialTestOrderByWithAggregationInput = {
    id?: SortOrder
    testId?: SortOrder
    projectMaterialId?: SortOrder
    onFile?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectMaterialTestCountOrderByAggregateInput
    _avg?: ProjectMaterialTestAvgOrderByAggregateInput
    _max?: ProjectMaterialTestMaxOrderByAggregateInput
    _min?: ProjectMaterialTestMinOrderByAggregateInput
    _sum?: ProjectMaterialTestSumOrderByAggregateInput
  }

  export type ProjectMaterialTestScalarWhereWithAggregatesInput = {
    AND?: ProjectMaterialTestScalarWhereWithAggregatesInput | ProjectMaterialTestScalarWhereWithAggregatesInput[]
    OR?: ProjectMaterialTestScalarWhereWithAggregatesInput[]
    NOT?: ProjectMaterialTestScalarWhereWithAggregatesInput | ProjectMaterialTestScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProjectMaterialTest"> | string
    testId?: UuidWithAggregatesFilter<"ProjectMaterialTest"> | string
    projectMaterialId?: UuidWithAggregatesFilter<"ProjectMaterialTest"> | string
    onFile?: IntWithAggregatesFilter<"ProjectMaterialTest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProjectMaterialTest"> | Date | string
  }

  export type ProjectWorkItemWhereInput = {
    AND?: ProjectWorkItemWhereInput | ProjectWorkItemWhereInput[]
    OR?: ProjectWorkItemWhereInput[]
    NOT?: ProjectWorkItemWhereInput | ProjectWorkItemWhereInput[]
    id?: UuidFilter<"ProjectWorkItem"> | string
    projectId?: UuidFilter<"ProjectWorkItem"> | string
    workItemId?: UuidFilter<"ProjectWorkItem"> | string
    quantity?: DecimalFilter<"ProjectWorkItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ProjectWorkItem"> | Date | string
    projectMaterial?: ProjectMaterialListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    workItem?: XOR<WorkItemScalarRelationFilter, WorkItemWhereInput>
    projectWorkItemTest?: ProjectWorkItemTestListRelationFilter
  }

  export type ProjectWorkItemOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    workItemId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    projectMaterial?: ProjectMaterialOrderByRelationAggregateInput
    project?: ProjectOrderByWithRelationInput
    workItem?: WorkItemOrderByWithRelationInput
    projectWorkItemTest?: ProjectWorkItemTestOrderByRelationAggregateInput
  }

  export type ProjectWorkItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWorkItemWhereInput | ProjectWorkItemWhereInput[]
    OR?: ProjectWorkItemWhereInput[]
    NOT?: ProjectWorkItemWhereInput | ProjectWorkItemWhereInput[]
    projectId?: UuidFilter<"ProjectWorkItem"> | string
    workItemId?: UuidFilter<"ProjectWorkItem"> | string
    quantity?: DecimalFilter<"ProjectWorkItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ProjectWorkItem"> | Date | string
    projectMaterial?: ProjectMaterialListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    workItem?: XOR<WorkItemScalarRelationFilter, WorkItemWhereInput>
    projectWorkItemTest?: ProjectWorkItemTestListRelationFilter
  }, "id">

  export type ProjectWorkItemOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    workItemId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectWorkItemCountOrderByAggregateInput
    _avg?: ProjectWorkItemAvgOrderByAggregateInput
    _max?: ProjectWorkItemMaxOrderByAggregateInput
    _min?: ProjectWorkItemMinOrderByAggregateInput
    _sum?: ProjectWorkItemSumOrderByAggregateInput
  }

  export type ProjectWorkItemScalarWhereWithAggregatesInput = {
    AND?: ProjectWorkItemScalarWhereWithAggregatesInput | ProjectWorkItemScalarWhereWithAggregatesInput[]
    OR?: ProjectWorkItemScalarWhereWithAggregatesInput[]
    NOT?: ProjectWorkItemScalarWhereWithAggregatesInput | ProjectWorkItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProjectWorkItem"> | string
    projectId?: UuidWithAggregatesFilter<"ProjectWorkItem"> | string
    workItemId?: UuidWithAggregatesFilter<"ProjectWorkItem"> | string
    quantity?: DecimalWithAggregatesFilter<"ProjectWorkItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectWorkItem"> | Date | string
  }

  export type ProjectWorkItemTestWhereInput = {
    AND?: ProjectWorkItemTestWhereInput | ProjectWorkItemTestWhereInput[]
    OR?: ProjectWorkItemTestWhereInput[]
    NOT?: ProjectWorkItemTestWhereInput | ProjectWorkItemTestWhereInput[]
    id?: UuidFilter<"ProjectWorkItemTest"> | string
    testId?: UuidFilter<"ProjectWorkItemTest"> | string
    projectWorkItemId?: UuidFilter<"ProjectWorkItemTest"> | string
    onFile?: IntFilter<"ProjectWorkItemTest"> | number
    createdAt?: DateTimeFilter<"ProjectWorkItemTest"> | Date | string
    projectWorkItem?: XOR<ProjectWorkItemScalarRelationFilter, ProjectWorkItemWhereInput>
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
  }

  export type ProjectWorkItemTestOrderByWithRelationInput = {
    id?: SortOrder
    testId?: SortOrder
    projectWorkItemId?: SortOrder
    onFile?: SortOrder
    createdAt?: SortOrder
    projectWorkItem?: ProjectWorkItemOrderByWithRelationInput
    test?: TestOrderByWithRelationInput
  }

  export type ProjectWorkItemTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWorkItemTestWhereInput | ProjectWorkItemTestWhereInput[]
    OR?: ProjectWorkItemTestWhereInput[]
    NOT?: ProjectWorkItemTestWhereInput | ProjectWorkItemTestWhereInput[]
    testId?: UuidFilter<"ProjectWorkItemTest"> | string
    projectWorkItemId?: UuidFilter<"ProjectWorkItemTest"> | string
    onFile?: IntFilter<"ProjectWorkItemTest"> | number
    createdAt?: DateTimeFilter<"ProjectWorkItemTest"> | Date | string
    projectWorkItem?: XOR<ProjectWorkItemScalarRelationFilter, ProjectWorkItemWhereInput>
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
  }, "id">

  export type ProjectWorkItemTestOrderByWithAggregationInput = {
    id?: SortOrder
    testId?: SortOrder
    projectWorkItemId?: SortOrder
    onFile?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectWorkItemTestCountOrderByAggregateInput
    _avg?: ProjectWorkItemTestAvgOrderByAggregateInput
    _max?: ProjectWorkItemTestMaxOrderByAggregateInput
    _min?: ProjectWorkItemTestMinOrderByAggregateInput
    _sum?: ProjectWorkItemTestSumOrderByAggregateInput
  }

  export type ProjectWorkItemTestScalarWhereWithAggregatesInput = {
    AND?: ProjectWorkItemTestScalarWhereWithAggregatesInput | ProjectWorkItemTestScalarWhereWithAggregatesInput[]
    OR?: ProjectWorkItemTestScalarWhereWithAggregatesInput[]
    NOT?: ProjectWorkItemTestScalarWhereWithAggregatesInput | ProjectWorkItemTestScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProjectWorkItemTest"> | string
    testId?: UuidWithAggregatesFilter<"ProjectWorkItemTest"> | string
    projectWorkItemId?: UuidWithAggregatesFilter<"ProjectWorkItemTest"> | string
    onFile?: IntWithAggregatesFilter<"ProjectWorkItemTest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProjectWorkItemTest"> | Date | string
  }

  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: UuidFilter<"Test"> | string
    name?: StringFilter<"Test"> | string
    createdAt?: DateTimeFilter<"Test"> | Date | string
    projectMaterialTest?: ProjectMaterialTestListRelationFilter
    projectWorkItemTest?: ProjectWorkItemTestListRelationFilter
    workItemMaterialTest?: WorkItemMaterialTestListRelationFilter
    workItemTest?: WorkItemTestListRelationFilter
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    projectMaterialTest?: ProjectMaterialTestOrderByRelationAggregateInput
    projectWorkItemTest?: ProjectWorkItemTestOrderByRelationAggregateInput
    workItemMaterialTest?: WorkItemMaterialTestOrderByRelationAggregateInput
    workItemTest?: WorkItemTestOrderByRelationAggregateInput
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    createdAt?: DateTimeFilter<"Test"> | Date | string
    projectMaterialTest?: ProjectMaterialTestListRelationFilter
    projectWorkItemTest?: ProjectWorkItemTestListRelationFilter
    workItemMaterialTest?: WorkItemMaterialTestListRelationFilter
    workItemTest?: WorkItemTestListRelationFilter
  }, "id" | "name">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Test"> | string
    name?: StringWithAggregatesFilter<"Test"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: UuidFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    abbreviation?: StringFilter<"Unit"> | string
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    material?: MaterialListRelationFilter
    workItem?: WorkItemListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    material?: MaterialOrderByRelationAggregateInput
    workItem?: WorkItemOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    abbreviation?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    material?: MaterialListRelationFilter
    workItem?: WorkItemListRelationFilter
  }, "id" | "name" | "abbreviation">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Unit"> | string
    name?: StringWithAggregatesFilter<"Unit"> | string
    abbreviation?: StringWithAggregatesFilter<"Unit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
  }

  export type WorkItemWhereInput = {
    AND?: WorkItemWhereInput | WorkItemWhereInput[]
    OR?: WorkItemWhereInput[]
    NOT?: WorkItemWhereInput | WorkItemWhereInput[]
    id?: UuidFilter<"WorkItem"> | string
    itemNo?: StringFilter<"WorkItem"> | string
    description?: StringNullableFilter<"WorkItem"> | string | null
    unitId?: UuidFilter<"WorkItem"> | string
    createdAt?: DateTimeFilter<"WorkItem"> | Date | string
    projectWorkItem?: ProjectWorkItemListRelationFilter
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    workItemMaterial?: WorkItemMaterialListRelationFilter
    workItemTest?: WorkItemTestListRelationFilter
  }

  export type WorkItemOrderByWithRelationInput = {
    id?: SortOrder
    itemNo?: SortOrder
    description?: SortOrderInput | SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    projectWorkItem?: ProjectWorkItemOrderByRelationAggregateInput
    unit?: UnitOrderByWithRelationInput
    workItemMaterial?: WorkItemMaterialOrderByRelationAggregateInput
    workItemTest?: WorkItemTestOrderByRelationAggregateInput
  }

  export type WorkItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    itemNo?: string
    AND?: WorkItemWhereInput | WorkItemWhereInput[]
    OR?: WorkItemWhereInput[]
    NOT?: WorkItemWhereInput | WorkItemWhereInput[]
    description?: StringNullableFilter<"WorkItem"> | string | null
    unitId?: UuidFilter<"WorkItem"> | string
    createdAt?: DateTimeFilter<"WorkItem"> | Date | string
    projectWorkItem?: ProjectWorkItemListRelationFilter
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    workItemMaterial?: WorkItemMaterialListRelationFilter
    workItemTest?: WorkItemTestListRelationFilter
  }, "id" | "itemNo">

  export type WorkItemOrderByWithAggregationInput = {
    id?: SortOrder
    itemNo?: SortOrder
    description?: SortOrderInput | SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    _count?: WorkItemCountOrderByAggregateInput
    _max?: WorkItemMaxOrderByAggregateInput
    _min?: WorkItemMinOrderByAggregateInput
  }

  export type WorkItemScalarWhereWithAggregatesInput = {
    AND?: WorkItemScalarWhereWithAggregatesInput | WorkItemScalarWhereWithAggregatesInput[]
    OR?: WorkItemScalarWhereWithAggregatesInput[]
    NOT?: WorkItemScalarWhereWithAggregatesInput | WorkItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WorkItem"> | string
    itemNo?: StringWithAggregatesFilter<"WorkItem"> | string
    description?: StringNullableWithAggregatesFilter<"WorkItem"> | string | null
    unitId?: UuidWithAggregatesFilter<"WorkItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkItem"> | Date | string
  }

  export type WorkItemMaterialWhereInput = {
    AND?: WorkItemMaterialWhereInput | WorkItemMaterialWhereInput[]
    OR?: WorkItemMaterialWhereInput[]
    NOT?: WorkItemMaterialWhereInput | WorkItemMaterialWhereInput[]
    id?: UuidFilter<"WorkItemMaterial"> | string
    workItemId?: UuidFilter<"WorkItemMaterial"> | string
    materialId?: UuidFilter<"WorkItemMaterial"> | string
    quantityPerUnit?: DecimalFilter<"WorkItemMaterial"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"WorkItemMaterial"> | Date | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    workItem?: XOR<WorkItemScalarRelationFilter, WorkItemWhereInput>
    workItemMaterialTest?: WorkItemMaterialTestListRelationFilter
  }

  export type WorkItemMaterialOrderByWithRelationInput = {
    id?: SortOrder
    workItemId?: SortOrder
    materialId?: SortOrder
    quantityPerUnit?: SortOrder
    createdAt?: SortOrder
    material?: MaterialOrderByWithRelationInput
    workItem?: WorkItemOrderByWithRelationInput
    workItemMaterialTest?: WorkItemMaterialTestOrderByRelationAggregateInput
  }

  export type WorkItemMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workItemId_materialId?: WorkItemMaterialWorkItemIdMaterialIdCompoundUniqueInput
    AND?: WorkItemMaterialWhereInput | WorkItemMaterialWhereInput[]
    OR?: WorkItemMaterialWhereInput[]
    NOT?: WorkItemMaterialWhereInput | WorkItemMaterialWhereInput[]
    workItemId?: UuidFilter<"WorkItemMaterial"> | string
    materialId?: UuidFilter<"WorkItemMaterial"> | string
    quantityPerUnit?: DecimalFilter<"WorkItemMaterial"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"WorkItemMaterial"> | Date | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    workItem?: XOR<WorkItemScalarRelationFilter, WorkItemWhereInput>
    workItemMaterialTest?: WorkItemMaterialTestListRelationFilter
  }, "id" | "workItemId_materialId">

  export type WorkItemMaterialOrderByWithAggregationInput = {
    id?: SortOrder
    workItemId?: SortOrder
    materialId?: SortOrder
    quantityPerUnit?: SortOrder
    createdAt?: SortOrder
    _count?: WorkItemMaterialCountOrderByAggregateInput
    _avg?: WorkItemMaterialAvgOrderByAggregateInput
    _max?: WorkItemMaterialMaxOrderByAggregateInput
    _min?: WorkItemMaterialMinOrderByAggregateInput
    _sum?: WorkItemMaterialSumOrderByAggregateInput
  }

  export type WorkItemMaterialScalarWhereWithAggregatesInput = {
    AND?: WorkItemMaterialScalarWhereWithAggregatesInput | WorkItemMaterialScalarWhereWithAggregatesInput[]
    OR?: WorkItemMaterialScalarWhereWithAggregatesInput[]
    NOT?: WorkItemMaterialScalarWhereWithAggregatesInput | WorkItemMaterialScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WorkItemMaterial"> | string
    workItemId?: UuidWithAggregatesFilter<"WorkItemMaterial"> | string
    materialId?: UuidWithAggregatesFilter<"WorkItemMaterial"> | string
    quantityPerUnit?: DecimalWithAggregatesFilter<"WorkItemMaterial"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkItemMaterial"> | Date | string
  }

  export type WorkItemMaterialTestWhereInput = {
    AND?: WorkItemMaterialTestWhereInput | WorkItemMaterialTestWhereInput[]
    OR?: WorkItemMaterialTestWhereInput[]
    NOT?: WorkItemMaterialTestWhereInput | WorkItemMaterialTestWhereInput[]
    id?: UuidFilter<"WorkItemMaterialTest"> | string
    workItemMaterialId?: UuidFilter<"WorkItemMaterialTest"> | string
    testId?: UuidFilter<"WorkItemMaterialTest"> | string
    unitsPerTest?: DecimalFilter<"WorkItemMaterialTest"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"WorkItemMaterialTest"> | Date | string
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    workItemMaterial?: XOR<WorkItemMaterialScalarRelationFilter, WorkItemMaterialWhereInput>
  }

  export type WorkItemMaterialTestOrderByWithRelationInput = {
    id?: SortOrder
    workItemMaterialId?: SortOrder
    testId?: SortOrder
    unitsPerTest?: SortOrder
    createdAt?: SortOrder
    test?: TestOrderByWithRelationInput
    workItemMaterial?: WorkItemMaterialOrderByWithRelationInput
  }

  export type WorkItemMaterialTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workItemMaterialId_testId?: WorkItemMaterialTestWorkItemMaterialIdTestIdCompoundUniqueInput
    AND?: WorkItemMaterialTestWhereInput | WorkItemMaterialTestWhereInput[]
    OR?: WorkItemMaterialTestWhereInput[]
    NOT?: WorkItemMaterialTestWhereInput | WorkItemMaterialTestWhereInput[]
    workItemMaterialId?: UuidFilter<"WorkItemMaterialTest"> | string
    testId?: UuidFilter<"WorkItemMaterialTest"> | string
    unitsPerTest?: DecimalFilter<"WorkItemMaterialTest"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"WorkItemMaterialTest"> | Date | string
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    workItemMaterial?: XOR<WorkItemMaterialScalarRelationFilter, WorkItemMaterialWhereInput>
  }, "id" | "workItemMaterialId_testId">

  export type WorkItemMaterialTestOrderByWithAggregationInput = {
    id?: SortOrder
    workItemMaterialId?: SortOrder
    testId?: SortOrder
    unitsPerTest?: SortOrder
    createdAt?: SortOrder
    _count?: WorkItemMaterialTestCountOrderByAggregateInput
    _avg?: WorkItemMaterialTestAvgOrderByAggregateInput
    _max?: WorkItemMaterialTestMaxOrderByAggregateInput
    _min?: WorkItemMaterialTestMinOrderByAggregateInput
    _sum?: WorkItemMaterialTestSumOrderByAggregateInput
  }

  export type WorkItemMaterialTestScalarWhereWithAggregatesInput = {
    AND?: WorkItemMaterialTestScalarWhereWithAggregatesInput | WorkItemMaterialTestScalarWhereWithAggregatesInput[]
    OR?: WorkItemMaterialTestScalarWhereWithAggregatesInput[]
    NOT?: WorkItemMaterialTestScalarWhereWithAggregatesInput | WorkItemMaterialTestScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WorkItemMaterialTest"> | string
    workItemMaterialId?: UuidWithAggregatesFilter<"WorkItemMaterialTest"> | string
    testId?: UuidWithAggregatesFilter<"WorkItemMaterialTest"> | string
    unitsPerTest?: DecimalWithAggregatesFilter<"WorkItemMaterialTest"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkItemMaterialTest"> | Date | string
  }

  export type WorkItemTestWhereInput = {
    AND?: WorkItemTestWhereInput | WorkItemTestWhereInput[]
    OR?: WorkItemTestWhereInput[]
    NOT?: WorkItemTestWhereInput | WorkItemTestWhereInput[]
    id?: UuidFilter<"WorkItemTest"> | string
    workItemId?: UuidFilter<"WorkItemTest"> | string
    testId?: UuidFilter<"WorkItemTest"> | string
    testQuantity?: DecimalFilter<"WorkItemTest"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"WorkItemTest"> | Date | string
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    workItem?: XOR<WorkItemScalarRelationFilter, WorkItemWhereInput>
  }

  export type WorkItemTestOrderByWithRelationInput = {
    id?: SortOrder
    workItemId?: SortOrder
    testId?: SortOrder
    testQuantity?: SortOrder
    createdAt?: SortOrder
    test?: TestOrderByWithRelationInput
    workItem?: WorkItemOrderByWithRelationInput
  }

  export type WorkItemTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workItemId_testId?: WorkItemTestWorkItemIdTestIdCompoundUniqueInput
    AND?: WorkItemTestWhereInput | WorkItemTestWhereInput[]
    OR?: WorkItemTestWhereInput[]
    NOT?: WorkItemTestWhereInput | WorkItemTestWhereInput[]
    workItemId?: UuidFilter<"WorkItemTest"> | string
    testId?: UuidFilter<"WorkItemTest"> | string
    testQuantity?: DecimalFilter<"WorkItemTest"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"WorkItemTest"> | Date | string
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    workItem?: XOR<WorkItemScalarRelationFilter, WorkItemWhereInput>
  }, "id" | "workItemId_testId">

  export type WorkItemTestOrderByWithAggregationInput = {
    id?: SortOrder
    workItemId?: SortOrder
    testId?: SortOrder
    testQuantity?: SortOrder
    createdAt?: SortOrder
    _count?: WorkItemTestCountOrderByAggregateInput
    _avg?: WorkItemTestAvgOrderByAggregateInput
    _max?: WorkItemTestMaxOrderByAggregateInput
    _min?: WorkItemTestMinOrderByAggregateInput
    _sum?: WorkItemTestSumOrderByAggregateInput
  }

  export type WorkItemTestScalarWhereWithAggregatesInput = {
    AND?: WorkItemTestScalarWhereWithAggregatesInput | WorkItemTestScalarWhereWithAggregatesInput[]
    OR?: WorkItemTestScalarWhereWithAggregatesInput[]
    NOT?: WorkItemTestScalarWhereWithAggregatesInput | WorkItemTestScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WorkItemTest"> | string
    workItemId?: UuidWithAggregatesFilter<"WorkItemTest"> | string
    testId?: UuidWithAggregatesFilter<"WorkItemTest"> | string
    testQuantity?: DecimalWithAggregatesFilter<"WorkItemTest"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkItemTest"> | Date | string
  }

  export type MaterialCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    unit: UnitCreateNestedOneWithoutMaterialInput
    projectMaterial?: ProjectMaterialCreateNestedManyWithoutMaterialInput
    workItemMaterial?: WorkItemMaterialCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    unitId: string
    createdAt?: Date | string
    projectMaterial?: ProjectMaterialUncheckedCreateNestedManyWithoutMaterialInput
    workItemMaterial?: WorkItemMaterialUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutMaterialNestedInput
    projectMaterial?: ProjectMaterialUpdateManyWithoutMaterialNestedInput
    workItemMaterial?: WorkItemMaterialUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterial?: ProjectMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    workItemMaterial?: WorkItemMaterialUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    unitId: string
    createdAt?: Date | string
  }

  export type MaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    contractId: string
    contractName: string
    contractor: string
    limits?: string | null
    location?: string | null
    dateStarted: Date | string
    createdAt?: Date | string
    materialsEngineer: string
    contractCost: Decimal | DecimalJsLike | number | string
    projectWorkItem?: ProjectWorkItemCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    contractId: string
    contractName: string
    contractor: string
    limits?: string | null
    location?: string | null
    dateStarted: Date | string
    createdAt?: Date | string
    materialsEngineer: string
    contractCost: Decimal | DecimalJsLike | number | string
    projectWorkItem?: ProjectWorkItemUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    contractName?: StringFieldUpdateOperationsInput | string
    contractor?: StringFieldUpdateOperationsInput | string
    limits?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materialsEngineer?: StringFieldUpdateOperationsInput | string
    contractCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    projectWorkItem?: ProjectWorkItemUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    contractName?: StringFieldUpdateOperationsInput | string
    contractor?: StringFieldUpdateOperationsInput | string
    limits?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materialsEngineer?: StringFieldUpdateOperationsInput | string
    contractCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    projectWorkItem?: ProjectWorkItemUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    contractId: string
    contractName: string
    contractor: string
    limits?: string | null
    location?: string | null
    dateStarted: Date | string
    createdAt?: Date | string
    materialsEngineer: string
    contractCost: Decimal | DecimalJsLike | number | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    contractName?: StringFieldUpdateOperationsInput | string
    contractor?: StringFieldUpdateOperationsInput | string
    limits?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materialsEngineer?: StringFieldUpdateOperationsInput | string
    contractCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    contractName?: StringFieldUpdateOperationsInput | string
    contractor?: StringFieldUpdateOperationsInput | string
    limits?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materialsEngineer?: StringFieldUpdateOperationsInput | string
    contractCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProjectMaterialCreateInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    material: MaterialCreateNestedOneWithoutProjectMaterialInput
    projectWorkItem: ProjectWorkItemCreateNestedOneWithoutProjectMaterialInput
    projectMaterialTest?: ProjectMaterialTestCreateNestedManyWithoutProjectMaterialInput
  }

  export type ProjectMaterialUncheckedCreateInput = {
    id?: string
    projectWorkItemId: string
    materialId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    projectMaterialTest?: ProjectMaterialTestUncheckedCreateNestedManyWithoutProjectMaterialInput
  }

  export type ProjectMaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneRequiredWithoutProjectMaterialNestedInput
    projectWorkItem?: ProjectWorkItemUpdateOneRequiredWithoutProjectMaterialNestedInput
    projectMaterialTest?: ProjectMaterialTestUpdateManyWithoutProjectMaterialNestedInput
  }

  export type ProjectMaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectWorkItemId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterialTest?: ProjectMaterialTestUncheckedUpdateManyWithoutProjectMaterialNestedInput
  }

  export type ProjectMaterialCreateManyInput = {
    id?: string
    projectWorkItemId: string
    materialId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProjectMaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectWorkItemId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMaterialTestCreateInput = {
    id?: string
    onFile?: number
    createdAt?: Date | string
    projectMaterial: ProjectMaterialCreateNestedOneWithoutProjectMaterialTestInput
    test: TestCreateNestedOneWithoutProjectMaterialTestInput
  }

  export type ProjectMaterialTestUncheckedCreateInput = {
    id?: string
    testId: string
    projectMaterialId: string
    onFile?: number
    createdAt?: Date | string
  }

  export type ProjectMaterialTestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterial?: ProjectMaterialUpdateOneRequiredWithoutProjectMaterialTestNestedInput
    test?: TestUpdateOneRequiredWithoutProjectMaterialTestNestedInput
  }

  export type ProjectMaterialTestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    projectMaterialId?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMaterialTestCreateManyInput = {
    id?: string
    testId: string
    projectMaterialId: string
    onFile?: number
    createdAt?: Date | string
  }

  export type ProjectMaterialTestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMaterialTestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    projectMaterialId?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectWorkItemCreateInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    projectMaterial?: ProjectMaterialCreateNestedManyWithoutProjectWorkItemInput
    project: ProjectCreateNestedOneWithoutProjectWorkItemInput
    workItem: WorkItemCreateNestedOneWithoutProjectWorkItemInput
    projectWorkItemTest?: ProjectWorkItemTestCreateNestedManyWithoutProjectWorkItemInput
  }

  export type ProjectWorkItemUncheckedCreateInput = {
    id?: string
    projectId: string
    workItemId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    projectMaterial?: ProjectMaterialUncheckedCreateNestedManyWithoutProjectWorkItemInput
    projectWorkItemTest?: ProjectWorkItemTestUncheckedCreateNestedManyWithoutProjectWorkItemInput
  }

  export type ProjectWorkItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterial?: ProjectMaterialUpdateManyWithoutProjectWorkItemNestedInput
    project?: ProjectUpdateOneRequiredWithoutProjectWorkItemNestedInput
    workItem?: WorkItemUpdateOneRequiredWithoutProjectWorkItemNestedInput
    projectWorkItemTest?: ProjectWorkItemTestUpdateManyWithoutProjectWorkItemNestedInput
  }

  export type ProjectWorkItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterial?: ProjectMaterialUncheckedUpdateManyWithoutProjectWorkItemNestedInput
    projectWorkItemTest?: ProjectWorkItemTestUncheckedUpdateManyWithoutProjectWorkItemNestedInput
  }

  export type ProjectWorkItemCreateManyInput = {
    id?: string
    projectId: string
    workItemId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProjectWorkItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectWorkItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectWorkItemTestCreateInput = {
    id?: string
    onFile?: number
    createdAt?: Date | string
    projectWorkItem: ProjectWorkItemCreateNestedOneWithoutProjectWorkItemTestInput
    test: TestCreateNestedOneWithoutProjectWorkItemTestInput
  }

  export type ProjectWorkItemTestUncheckedCreateInput = {
    id?: string
    testId: string
    projectWorkItemId: string
    onFile?: number
    createdAt?: Date | string
  }

  export type ProjectWorkItemTestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWorkItem?: ProjectWorkItemUpdateOneRequiredWithoutProjectWorkItemTestNestedInput
    test?: TestUpdateOneRequiredWithoutProjectWorkItemTestNestedInput
  }

  export type ProjectWorkItemTestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    projectWorkItemId?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectWorkItemTestCreateManyInput = {
    id?: string
    testId: string
    projectWorkItemId: string
    onFile?: number
    createdAt?: Date | string
  }

  export type ProjectWorkItemTestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectWorkItemTestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    projectWorkItemId?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    projectMaterialTest?: ProjectMaterialTestCreateNestedManyWithoutTestInput
    projectWorkItemTest?: ProjectWorkItemTestCreateNestedManyWithoutTestInput
    workItemMaterialTest?: WorkItemMaterialTestCreateNestedManyWithoutTestInput
    workItemTest?: WorkItemTestCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    projectMaterialTest?: ProjectMaterialTestUncheckedCreateNestedManyWithoutTestInput
    projectWorkItemTest?: ProjectWorkItemTestUncheckedCreateNestedManyWithoutTestInput
    workItemMaterialTest?: WorkItemMaterialTestUncheckedCreateNestedManyWithoutTestInput
    workItemTest?: WorkItemTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterialTest?: ProjectMaterialTestUpdateManyWithoutTestNestedInput
    projectWorkItemTest?: ProjectWorkItemTestUpdateManyWithoutTestNestedInput
    workItemMaterialTest?: WorkItemMaterialTestUpdateManyWithoutTestNestedInput
    workItemTest?: WorkItemTestUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterialTest?: ProjectMaterialTestUncheckedUpdateManyWithoutTestNestedInput
    projectWorkItemTest?: ProjectWorkItemTestUncheckedUpdateManyWithoutTestNestedInput
    workItemMaterialTest?: WorkItemMaterialTestUncheckedUpdateManyWithoutTestNestedInput
    workItemTest?: WorkItemTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateInput = {
    id?: string
    name: string
    abbreviation: string
    createdAt?: Date | string
    material?: MaterialCreateNestedManyWithoutUnitInput
    workItem?: WorkItemCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    name: string
    abbreviation: string
    createdAt?: Date | string
    material?: MaterialUncheckedCreateNestedManyWithoutUnitInput
    workItem?: WorkItemUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateManyWithoutUnitNestedInput
    workItem?: WorkItemUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUncheckedUpdateManyWithoutUnitNestedInput
    workItem?: WorkItemUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    name: string
    abbreviation: string
    createdAt?: Date | string
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemCreateInput = {
    id?: string
    itemNo: string
    description?: string | null
    createdAt?: Date | string
    projectWorkItem?: ProjectWorkItemCreateNestedManyWithoutWorkItemInput
    unit: UnitCreateNestedOneWithoutWorkItemInput
    workItemMaterial?: WorkItemMaterialCreateNestedManyWithoutWorkItemInput
    workItemTest?: WorkItemTestCreateNestedManyWithoutWorkItemInput
  }

  export type WorkItemUncheckedCreateInput = {
    id?: string
    itemNo: string
    description?: string | null
    unitId: string
    createdAt?: Date | string
    projectWorkItem?: ProjectWorkItemUncheckedCreateNestedManyWithoutWorkItemInput
    workItemMaterial?: WorkItemMaterialUncheckedCreateNestedManyWithoutWorkItemInput
    workItemTest?: WorkItemTestUncheckedCreateNestedManyWithoutWorkItemInput
  }

  export type WorkItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemNo?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWorkItem?: ProjectWorkItemUpdateManyWithoutWorkItemNestedInput
    unit?: UnitUpdateOneRequiredWithoutWorkItemNestedInput
    workItemMaterial?: WorkItemMaterialUpdateManyWithoutWorkItemNestedInput
    workItemTest?: WorkItemTestUpdateManyWithoutWorkItemNestedInput
  }

  export type WorkItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemNo?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWorkItem?: ProjectWorkItemUncheckedUpdateManyWithoutWorkItemNestedInput
    workItemMaterial?: WorkItemMaterialUncheckedUpdateManyWithoutWorkItemNestedInput
    workItemTest?: WorkItemTestUncheckedUpdateManyWithoutWorkItemNestedInput
  }

  export type WorkItemCreateManyInput = {
    id?: string
    itemNo: string
    description?: string | null
    unitId: string
    createdAt?: Date | string
  }

  export type WorkItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemNo?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemNo?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemMaterialCreateInput = {
    id?: string
    quantityPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    material: MaterialCreateNestedOneWithoutWorkItemMaterialInput
    workItem: WorkItemCreateNestedOneWithoutWorkItemMaterialInput
    workItemMaterialTest?: WorkItemMaterialTestCreateNestedManyWithoutWorkItemMaterialInput
  }

  export type WorkItemMaterialUncheckedCreateInput = {
    id?: string
    workItemId: string
    materialId: string
    quantityPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    workItemMaterialTest?: WorkItemMaterialTestUncheckedCreateNestedManyWithoutWorkItemMaterialInput
  }

  export type WorkItemMaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneRequiredWithoutWorkItemMaterialNestedInput
    workItem?: WorkItemUpdateOneRequiredWithoutWorkItemMaterialNestedInput
    workItemMaterialTest?: WorkItemMaterialTestUpdateManyWithoutWorkItemMaterialNestedInput
  }

  export type WorkItemMaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantityPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workItemMaterialTest?: WorkItemMaterialTestUncheckedUpdateManyWithoutWorkItemMaterialNestedInput
  }

  export type WorkItemMaterialCreateManyInput = {
    id?: string
    workItemId: string
    materialId: string
    quantityPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemMaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemMaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantityPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemMaterialTestCreateInput = {
    id?: string
    unitsPerTest: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    test: TestCreateNestedOneWithoutWorkItemMaterialTestInput
    workItemMaterial: WorkItemMaterialCreateNestedOneWithoutWorkItemMaterialTestInput
  }

  export type WorkItemMaterialTestUncheckedCreateInput = {
    id?: string
    workItemMaterialId: string
    testId: string
    unitsPerTest: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemMaterialTestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitsPerTest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutWorkItemMaterialTestNestedInput
    workItemMaterial?: WorkItemMaterialUpdateOneRequiredWithoutWorkItemMaterialTestNestedInput
  }

  export type WorkItemMaterialTestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemMaterialId?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    unitsPerTest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemMaterialTestCreateManyInput = {
    id?: string
    workItemMaterialId: string
    testId: string
    unitsPerTest: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemMaterialTestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitsPerTest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemMaterialTestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemMaterialId?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    unitsPerTest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemTestCreateInput = {
    id?: string
    testQuantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    test: TestCreateNestedOneWithoutWorkItemTestInput
    workItem: WorkItemCreateNestedOneWithoutWorkItemTestInput
  }

  export type WorkItemTestUncheckedCreateInput = {
    id?: string
    workItemId: string
    testId: string
    testQuantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemTestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutWorkItemTestNestedInput
    workItem?: WorkItemUpdateOneRequiredWithoutWorkItemTestNestedInput
  }

  export type WorkItemTestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    testQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemTestCreateManyInput = {
    id?: string
    workItemId: string
    testId: string
    testQuantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemTestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemTestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    testQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type ProjectMaterialListRelationFilter = {
    every?: ProjectMaterialWhereInput
    some?: ProjectMaterialWhereInput
    none?: ProjectMaterialWhereInput
  }

  export type WorkItemMaterialListRelationFilter = {
    every?: WorkItemMaterialWhereInput
    some?: WorkItemMaterialWhereInput
    none?: WorkItemMaterialWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectMaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkItemMaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProjectWorkItemListRelationFilter = {
    every?: ProjectWorkItemWhereInput
    some?: ProjectWorkItemWhereInput
    none?: ProjectWorkItemWhereInput
  }

  export type ProjectWorkItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    contractName?: SortOrder
    contractor?: SortOrder
    limits?: SortOrder
    location?: SortOrder
    dateStarted?: SortOrder
    createdAt?: SortOrder
    materialsEngineer?: SortOrder
    contractCost?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    contractCost?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    contractName?: SortOrder
    contractor?: SortOrder
    limits?: SortOrder
    location?: SortOrder
    dateStarted?: SortOrder
    createdAt?: SortOrder
    materialsEngineer?: SortOrder
    contractCost?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    contractName?: SortOrder
    contractor?: SortOrder
    limits?: SortOrder
    location?: SortOrder
    dateStarted?: SortOrder
    createdAt?: SortOrder
    materialsEngineer?: SortOrder
    contractCost?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    contractCost?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type MaterialScalarRelationFilter = {
    is?: MaterialWhereInput
    isNot?: MaterialWhereInput
  }

  export type ProjectWorkItemScalarRelationFilter = {
    is?: ProjectWorkItemWhereInput
    isNot?: ProjectWorkItemWhereInput
  }

  export type ProjectMaterialTestListRelationFilter = {
    every?: ProjectMaterialTestWhereInput
    some?: ProjectMaterialTestWhereInput
    none?: ProjectMaterialTestWhereInput
  }

  export type ProjectMaterialTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectMaterialCountOrderByAggregateInput = {
    id?: SortOrder
    projectWorkItemId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMaterialAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ProjectMaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    projectWorkItemId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMaterialMinOrderByAggregateInput = {
    id?: SortOrder
    projectWorkItemId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMaterialSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProjectMaterialScalarRelationFilter = {
    is?: ProjectMaterialWhereInput
    isNot?: ProjectMaterialWhereInput
  }

  export type TestScalarRelationFilter = {
    is?: TestWhereInput
    isNot?: TestWhereInput
  }

  export type ProjectMaterialTestCountOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    projectMaterialId?: SortOrder
    onFile?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMaterialTestAvgOrderByAggregateInput = {
    onFile?: SortOrder
  }

  export type ProjectMaterialTestMaxOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    projectMaterialId?: SortOrder
    onFile?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMaterialTestMinOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    projectMaterialId?: SortOrder
    onFile?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMaterialTestSumOrderByAggregateInput = {
    onFile?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type WorkItemScalarRelationFilter = {
    is?: WorkItemWhereInput
    isNot?: WorkItemWhereInput
  }

  export type ProjectWorkItemTestListRelationFilter = {
    every?: ProjectWorkItemTestWhereInput
    some?: ProjectWorkItemTestWhereInput
    none?: ProjectWorkItemTestWhereInput
  }

  export type ProjectWorkItemTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectWorkItemCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    workItemId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectWorkItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ProjectWorkItemMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    workItemId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectWorkItemMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    workItemId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectWorkItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ProjectWorkItemTestCountOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    projectWorkItemId?: SortOrder
    onFile?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectWorkItemTestAvgOrderByAggregateInput = {
    onFile?: SortOrder
  }

  export type ProjectWorkItemTestMaxOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    projectWorkItemId?: SortOrder
    onFile?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectWorkItemTestMinOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    projectWorkItemId?: SortOrder
    onFile?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectWorkItemTestSumOrderByAggregateInput = {
    onFile?: SortOrder
  }

  export type WorkItemMaterialTestListRelationFilter = {
    every?: WorkItemMaterialTestWhereInput
    some?: WorkItemMaterialTestWhereInput
    none?: WorkItemMaterialTestWhereInput
  }

  export type WorkItemTestListRelationFilter = {
    every?: WorkItemTestWhereInput
    some?: WorkItemTestWhereInput
    none?: WorkItemTestWhereInput
  }

  export type WorkItemMaterialTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkItemTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialListRelationFilter = {
    every?: MaterialWhereInput
    some?: MaterialWhereInput
    none?: MaterialWhereInput
  }

  export type WorkItemListRelationFilter = {
    every?: WorkItemWhereInput
    some?: WorkItemWhereInput
    none?: WorkItemWhereInput
  }

  export type MaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkItemCountOrderByAggregateInput = {
    id?: SortOrder
    itemNo?: SortOrder
    description?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkItemMaxOrderByAggregateInput = {
    id?: SortOrder
    itemNo?: SortOrder
    description?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkItemMinOrderByAggregateInput = {
    id?: SortOrder
    itemNo?: SortOrder
    description?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkItemMaterialWorkItemIdMaterialIdCompoundUniqueInput = {
    workItemId: string
    materialId: string
  }

  export type WorkItemMaterialCountOrderByAggregateInput = {
    id?: SortOrder
    workItemId?: SortOrder
    materialId?: SortOrder
    quantityPerUnit?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkItemMaterialAvgOrderByAggregateInput = {
    quantityPerUnit?: SortOrder
  }

  export type WorkItemMaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    workItemId?: SortOrder
    materialId?: SortOrder
    quantityPerUnit?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkItemMaterialMinOrderByAggregateInput = {
    id?: SortOrder
    workItemId?: SortOrder
    materialId?: SortOrder
    quantityPerUnit?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkItemMaterialSumOrderByAggregateInput = {
    quantityPerUnit?: SortOrder
  }

  export type WorkItemMaterialScalarRelationFilter = {
    is?: WorkItemMaterialWhereInput
    isNot?: WorkItemMaterialWhereInput
  }

  export type WorkItemMaterialTestWorkItemMaterialIdTestIdCompoundUniqueInput = {
    workItemMaterialId: string
    testId: string
  }

  export type WorkItemMaterialTestCountOrderByAggregateInput = {
    id?: SortOrder
    workItemMaterialId?: SortOrder
    testId?: SortOrder
    unitsPerTest?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkItemMaterialTestAvgOrderByAggregateInput = {
    unitsPerTest?: SortOrder
  }

  export type WorkItemMaterialTestMaxOrderByAggregateInput = {
    id?: SortOrder
    workItemMaterialId?: SortOrder
    testId?: SortOrder
    unitsPerTest?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkItemMaterialTestMinOrderByAggregateInput = {
    id?: SortOrder
    workItemMaterialId?: SortOrder
    testId?: SortOrder
    unitsPerTest?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkItemMaterialTestSumOrderByAggregateInput = {
    unitsPerTest?: SortOrder
  }

  export type WorkItemTestWorkItemIdTestIdCompoundUniqueInput = {
    workItemId: string
    testId: string
  }

  export type WorkItemTestCountOrderByAggregateInput = {
    id?: SortOrder
    workItemId?: SortOrder
    testId?: SortOrder
    testQuantity?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkItemTestAvgOrderByAggregateInput = {
    testQuantity?: SortOrder
  }

  export type WorkItemTestMaxOrderByAggregateInput = {
    id?: SortOrder
    workItemId?: SortOrder
    testId?: SortOrder
    testQuantity?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkItemTestMinOrderByAggregateInput = {
    id?: SortOrder
    workItemId?: SortOrder
    testId?: SortOrder
    testQuantity?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkItemTestSumOrderByAggregateInput = {
    testQuantity?: SortOrder
  }

  export type UnitCreateNestedOneWithoutMaterialInput = {
    create?: XOR<UnitCreateWithoutMaterialInput, UnitUncheckedCreateWithoutMaterialInput>
    connectOrCreate?: UnitCreateOrConnectWithoutMaterialInput
    connect?: UnitWhereUniqueInput
  }

  export type ProjectMaterialCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ProjectMaterialCreateWithoutMaterialInput, ProjectMaterialUncheckedCreateWithoutMaterialInput> | ProjectMaterialCreateWithoutMaterialInput[] | ProjectMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutMaterialInput | ProjectMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: ProjectMaterialCreateManyMaterialInputEnvelope
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
  }

  export type WorkItemMaterialCreateNestedManyWithoutMaterialInput = {
    create?: XOR<WorkItemMaterialCreateWithoutMaterialInput, WorkItemMaterialUncheckedCreateWithoutMaterialInput> | WorkItemMaterialCreateWithoutMaterialInput[] | WorkItemMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: WorkItemMaterialCreateOrConnectWithoutMaterialInput | WorkItemMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: WorkItemMaterialCreateManyMaterialInputEnvelope
    connect?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
  }

  export type ProjectMaterialUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ProjectMaterialCreateWithoutMaterialInput, ProjectMaterialUncheckedCreateWithoutMaterialInput> | ProjectMaterialCreateWithoutMaterialInput[] | ProjectMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutMaterialInput | ProjectMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: ProjectMaterialCreateManyMaterialInputEnvelope
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
  }

  export type WorkItemMaterialUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<WorkItemMaterialCreateWithoutMaterialInput, WorkItemMaterialUncheckedCreateWithoutMaterialInput> | WorkItemMaterialCreateWithoutMaterialInput[] | WorkItemMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: WorkItemMaterialCreateOrConnectWithoutMaterialInput | WorkItemMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: WorkItemMaterialCreateManyMaterialInputEnvelope
    connect?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UnitUpdateOneRequiredWithoutMaterialNestedInput = {
    create?: XOR<UnitCreateWithoutMaterialInput, UnitUncheckedCreateWithoutMaterialInput>
    connectOrCreate?: UnitCreateOrConnectWithoutMaterialInput
    upsert?: UnitUpsertWithoutMaterialInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutMaterialInput, UnitUpdateWithoutMaterialInput>, UnitUncheckedUpdateWithoutMaterialInput>
  }

  export type ProjectMaterialUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ProjectMaterialCreateWithoutMaterialInput, ProjectMaterialUncheckedCreateWithoutMaterialInput> | ProjectMaterialCreateWithoutMaterialInput[] | ProjectMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutMaterialInput | ProjectMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: ProjectMaterialUpsertWithWhereUniqueWithoutMaterialInput | ProjectMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ProjectMaterialCreateManyMaterialInputEnvelope
    set?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    disconnect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    delete?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    update?: ProjectMaterialUpdateWithWhereUniqueWithoutMaterialInput | ProjectMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ProjectMaterialUpdateManyWithWhereWithoutMaterialInput | ProjectMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ProjectMaterialScalarWhereInput | ProjectMaterialScalarWhereInput[]
  }

  export type WorkItemMaterialUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<WorkItemMaterialCreateWithoutMaterialInput, WorkItemMaterialUncheckedCreateWithoutMaterialInput> | WorkItemMaterialCreateWithoutMaterialInput[] | WorkItemMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: WorkItemMaterialCreateOrConnectWithoutMaterialInput | WorkItemMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: WorkItemMaterialUpsertWithWhereUniqueWithoutMaterialInput | WorkItemMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: WorkItemMaterialCreateManyMaterialInputEnvelope
    set?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    disconnect?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    delete?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    connect?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    update?: WorkItemMaterialUpdateWithWhereUniqueWithoutMaterialInput | WorkItemMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: WorkItemMaterialUpdateManyWithWhereWithoutMaterialInput | WorkItemMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: WorkItemMaterialScalarWhereInput | WorkItemMaterialScalarWhereInput[]
  }

  export type ProjectMaterialUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ProjectMaterialCreateWithoutMaterialInput, ProjectMaterialUncheckedCreateWithoutMaterialInput> | ProjectMaterialCreateWithoutMaterialInput[] | ProjectMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutMaterialInput | ProjectMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: ProjectMaterialUpsertWithWhereUniqueWithoutMaterialInput | ProjectMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ProjectMaterialCreateManyMaterialInputEnvelope
    set?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    disconnect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    delete?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    update?: ProjectMaterialUpdateWithWhereUniqueWithoutMaterialInput | ProjectMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ProjectMaterialUpdateManyWithWhereWithoutMaterialInput | ProjectMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ProjectMaterialScalarWhereInput | ProjectMaterialScalarWhereInput[]
  }

  export type WorkItemMaterialUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<WorkItemMaterialCreateWithoutMaterialInput, WorkItemMaterialUncheckedCreateWithoutMaterialInput> | WorkItemMaterialCreateWithoutMaterialInput[] | WorkItemMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: WorkItemMaterialCreateOrConnectWithoutMaterialInput | WorkItemMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: WorkItemMaterialUpsertWithWhereUniqueWithoutMaterialInput | WorkItemMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: WorkItemMaterialCreateManyMaterialInputEnvelope
    set?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    disconnect?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    delete?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    connect?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    update?: WorkItemMaterialUpdateWithWhereUniqueWithoutMaterialInput | WorkItemMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: WorkItemMaterialUpdateManyWithWhereWithoutMaterialInput | WorkItemMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: WorkItemMaterialScalarWhereInput | WorkItemMaterialScalarWhereInput[]
  }

  export type ProjectWorkItemCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectWorkItemCreateWithoutProjectInput, ProjectWorkItemUncheckedCreateWithoutProjectInput> | ProjectWorkItemCreateWithoutProjectInput[] | ProjectWorkItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectWorkItemCreateOrConnectWithoutProjectInput | ProjectWorkItemCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectWorkItemCreateManyProjectInputEnvelope
    connect?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
  }

  export type ProjectWorkItemUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectWorkItemCreateWithoutProjectInput, ProjectWorkItemUncheckedCreateWithoutProjectInput> | ProjectWorkItemCreateWithoutProjectInput[] | ProjectWorkItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectWorkItemCreateOrConnectWithoutProjectInput | ProjectWorkItemCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectWorkItemCreateManyProjectInputEnvelope
    connect?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProjectWorkItemUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectWorkItemCreateWithoutProjectInput, ProjectWorkItemUncheckedCreateWithoutProjectInput> | ProjectWorkItemCreateWithoutProjectInput[] | ProjectWorkItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectWorkItemCreateOrConnectWithoutProjectInput | ProjectWorkItemCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectWorkItemUpsertWithWhereUniqueWithoutProjectInput | ProjectWorkItemUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectWorkItemCreateManyProjectInputEnvelope
    set?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    disconnect?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    delete?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    connect?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    update?: ProjectWorkItemUpdateWithWhereUniqueWithoutProjectInput | ProjectWorkItemUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectWorkItemUpdateManyWithWhereWithoutProjectInput | ProjectWorkItemUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectWorkItemScalarWhereInput | ProjectWorkItemScalarWhereInput[]
  }

  export type ProjectWorkItemUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectWorkItemCreateWithoutProjectInput, ProjectWorkItemUncheckedCreateWithoutProjectInput> | ProjectWorkItemCreateWithoutProjectInput[] | ProjectWorkItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectWorkItemCreateOrConnectWithoutProjectInput | ProjectWorkItemCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectWorkItemUpsertWithWhereUniqueWithoutProjectInput | ProjectWorkItemUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectWorkItemCreateManyProjectInputEnvelope
    set?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    disconnect?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    delete?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    connect?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    update?: ProjectWorkItemUpdateWithWhereUniqueWithoutProjectInput | ProjectWorkItemUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectWorkItemUpdateManyWithWhereWithoutProjectInput | ProjectWorkItemUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectWorkItemScalarWhereInput | ProjectWorkItemScalarWhereInput[]
  }

  export type MaterialCreateNestedOneWithoutProjectMaterialInput = {
    create?: XOR<MaterialCreateWithoutProjectMaterialInput, MaterialUncheckedCreateWithoutProjectMaterialInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectMaterialInput
    connect?: MaterialWhereUniqueInput
  }

  export type ProjectWorkItemCreateNestedOneWithoutProjectMaterialInput = {
    create?: XOR<ProjectWorkItemCreateWithoutProjectMaterialInput, ProjectWorkItemUncheckedCreateWithoutProjectMaterialInput>
    connectOrCreate?: ProjectWorkItemCreateOrConnectWithoutProjectMaterialInput
    connect?: ProjectWorkItemWhereUniqueInput
  }

  export type ProjectMaterialTestCreateNestedManyWithoutProjectMaterialInput = {
    create?: XOR<ProjectMaterialTestCreateWithoutProjectMaterialInput, ProjectMaterialTestUncheckedCreateWithoutProjectMaterialInput> | ProjectMaterialTestCreateWithoutProjectMaterialInput[] | ProjectMaterialTestUncheckedCreateWithoutProjectMaterialInput[]
    connectOrCreate?: ProjectMaterialTestCreateOrConnectWithoutProjectMaterialInput | ProjectMaterialTestCreateOrConnectWithoutProjectMaterialInput[]
    createMany?: ProjectMaterialTestCreateManyProjectMaterialInputEnvelope
    connect?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
  }

  export type ProjectMaterialTestUncheckedCreateNestedManyWithoutProjectMaterialInput = {
    create?: XOR<ProjectMaterialTestCreateWithoutProjectMaterialInput, ProjectMaterialTestUncheckedCreateWithoutProjectMaterialInput> | ProjectMaterialTestCreateWithoutProjectMaterialInput[] | ProjectMaterialTestUncheckedCreateWithoutProjectMaterialInput[]
    connectOrCreate?: ProjectMaterialTestCreateOrConnectWithoutProjectMaterialInput | ProjectMaterialTestCreateOrConnectWithoutProjectMaterialInput[]
    createMany?: ProjectMaterialTestCreateManyProjectMaterialInputEnvelope
    connect?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
  }

  export type MaterialUpdateOneRequiredWithoutProjectMaterialNestedInput = {
    create?: XOR<MaterialCreateWithoutProjectMaterialInput, MaterialUncheckedCreateWithoutProjectMaterialInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectMaterialInput
    upsert?: MaterialUpsertWithoutProjectMaterialInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutProjectMaterialInput, MaterialUpdateWithoutProjectMaterialInput>, MaterialUncheckedUpdateWithoutProjectMaterialInput>
  }

  export type ProjectWorkItemUpdateOneRequiredWithoutProjectMaterialNestedInput = {
    create?: XOR<ProjectWorkItemCreateWithoutProjectMaterialInput, ProjectWorkItemUncheckedCreateWithoutProjectMaterialInput>
    connectOrCreate?: ProjectWorkItemCreateOrConnectWithoutProjectMaterialInput
    upsert?: ProjectWorkItemUpsertWithoutProjectMaterialInput
    connect?: ProjectWorkItemWhereUniqueInput
    update?: XOR<XOR<ProjectWorkItemUpdateToOneWithWhereWithoutProjectMaterialInput, ProjectWorkItemUpdateWithoutProjectMaterialInput>, ProjectWorkItemUncheckedUpdateWithoutProjectMaterialInput>
  }

  export type ProjectMaterialTestUpdateManyWithoutProjectMaterialNestedInput = {
    create?: XOR<ProjectMaterialTestCreateWithoutProjectMaterialInput, ProjectMaterialTestUncheckedCreateWithoutProjectMaterialInput> | ProjectMaterialTestCreateWithoutProjectMaterialInput[] | ProjectMaterialTestUncheckedCreateWithoutProjectMaterialInput[]
    connectOrCreate?: ProjectMaterialTestCreateOrConnectWithoutProjectMaterialInput | ProjectMaterialTestCreateOrConnectWithoutProjectMaterialInput[]
    upsert?: ProjectMaterialTestUpsertWithWhereUniqueWithoutProjectMaterialInput | ProjectMaterialTestUpsertWithWhereUniqueWithoutProjectMaterialInput[]
    createMany?: ProjectMaterialTestCreateManyProjectMaterialInputEnvelope
    set?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    disconnect?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    delete?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    connect?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    update?: ProjectMaterialTestUpdateWithWhereUniqueWithoutProjectMaterialInput | ProjectMaterialTestUpdateWithWhereUniqueWithoutProjectMaterialInput[]
    updateMany?: ProjectMaterialTestUpdateManyWithWhereWithoutProjectMaterialInput | ProjectMaterialTestUpdateManyWithWhereWithoutProjectMaterialInput[]
    deleteMany?: ProjectMaterialTestScalarWhereInput | ProjectMaterialTestScalarWhereInput[]
  }

  export type ProjectMaterialTestUncheckedUpdateManyWithoutProjectMaterialNestedInput = {
    create?: XOR<ProjectMaterialTestCreateWithoutProjectMaterialInput, ProjectMaterialTestUncheckedCreateWithoutProjectMaterialInput> | ProjectMaterialTestCreateWithoutProjectMaterialInput[] | ProjectMaterialTestUncheckedCreateWithoutProjectMaterialInput[]
    connectOrCreate?: ProjectMaterialTestCreateOrConnectWithoutProjectMaterialInput | ProjectMaterialTestCreateOrConnectWithoutProjectMaterialInput[]
    upsert?: ProjectMaterialTestUpsertWithWhereUniqueWithoutProjectMaterialInput | ProjectMaterialTestUpsertWithWhereUniqueWithoutProjectMaterialInput[]
    createMany?: ProjectMaterialTestCreateManyProjectMaterialInputEnvelope
    set?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    disconnect?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    delete?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    connect?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    update?: ProjectMaterialTestUpdateWithWhereUniqueWithoutProjectMaterialInput | ProjectMaterialTestUpdateWithWhereUniqueWithoutProjectMaterialInput[]
    updateMany?: ProjectMaterialTestUpdateManyWithWhereWithoutProjectMaterialInput | ProjectMaterialTestUpdateManyWithWhereWithoutProjectMaterialInput[]
    deleteMany?: ProjectMaterialTestScalarWhereInput | ProjectMaterialTestScalarWhereInput[]
  }

  export type ProjectMaterialCreateNestedOneWithoutProjectMaterialTestInput = {
    create?: XOR<ProjectMaterialCreateWithoutProjectMaterialTestInput, ProjectMaterialUncheckedCreateWithoutProjectMaterialTestInput>
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutProjectMaterialTestInput
    connect?: ProjectMaterialWhereUniqueInput
  }

  export type TestCreateNestedOneWithoutProjectMaterialTestInput = {
    create?: XOR<TestCreateWithoutProjectMaterialTestInput, TestUncheckedCreateWithoutProjectMaterialTestInput>
    connectOrCreate?: TestCreateOrConnectWithoutProjectMaterialTestInput
    connect?: TestWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectMaterialUpdateOneRequiredWithoutProjectMaterialTestNestedInput = {
    create?: XOR<ProjectMaterialCreateWithoutProjectMaterialTestInput, ProjectMaterialUncheckedCreateWithoutProjectMaterialTestInput>
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutProjectMaterialTestInput
    upsert?: ProjectMaterialUpsertWithoutProjectMaterialTestInput
    connect?: ProjectMaterialWhereUniqueInput
    update?: XOR<XOR<ProjectMaterialUpdateToOneWithWhereWithoutProjectMaterialTestInput, ProjectMaterialUpdateWithoutProjectMaterialTestInput>, ProjectMaterialUncheckedUpdateWithoutProjectMaterialTestInput>
  }

  export type TestUpdateOneRequiredWithoutProjectMaterialTestNestedInput = {
    create?: XOR<TestCreateWithoutProjectMaterialTestInput, TestUncheckedCreateWithoutProjectMaterialTestInput>
    connectOrCreate?: TestCreateOrConnectWithoutProjectMaterialTestInput
    upsert?: TestUpsertWithoutProjectMaterialTestInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutProjectMaterialTestInput, TestUpdateWithoutProjectMaterialTestInput>, TestUncheckedUpdateWithoutProjectMaterialTestInput>
  }

  export type ProjectMaterialCreateNestedManyWithoutProjectWorkItemInput = {
    create?: XOR<ProjectMaterialCreateWithoutProjectWorkItemInput, ProjectMaterialUncheckedCreateWithoutProjectWorkItemInput> | ProjectMaterialCreateWithoutProjectWorkItemInput[] | ProjectMaterialUncheckedCreateWithoutProjectWorkItemInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutProjectWorkItemInput | ProjectMaterialCreateOrConnectWithoutProjectWorkItemInput[]
    createMany?: ProjectMaterialCreateManyProjectWorkItemInputEnvelope
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
  }

  export type ProjectCreateNestedOneWithoutProjectWorkItemInput = {
    create?: XOR<ProjectCreateWithoutProjectWorkItemInput, ProjectUncheckedCreateWithoutProjectWorkItemInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectWorkItemInput
    connect?: ProjectWhereUniqueInput
  }

  export type WorkItemCreateNestedOneWithoutProjectWorkItemInput = {
    create?: XOR<WorkItemCreateWithoutProjectWorkItemInput, WorkItemUncheckedCreateWithoutProjectWorkItemInput>
    connectOrCreate?: WorkItemCreateOrConnectWithoutProjectWorkItemInput
    connect?: WorkItemWhereUniqueInput
  }

  export type ProjectWorkItemTestCreateNestedManyWithoutProjectWorkItemInput = {
    create?: XOR<ProjectWorkItemTestCreateWithoutProjectWorkItemInput, ProjectWorkItemTestUncheckedCreateWithoutProjectWorkItemInput> | ProjectWorkItemTestCreateWithoutProjectWorkItemInput[] | ProjectWorkItemTestUncheckedCreateWithoutProjectWorkItemInput[]
    connectOrCreate?: ProjectWorkItemTestCreateOrConnectWithoutProjectWorkItemInput | ProjectWorkItemTestCreateOrConnectWithoutProjectWorkItemInput[]
    createMany?: ProjectWorkItemTestCreateManyProjectWorkItemInputEnvelope
    connect?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
  }

  export type ProjectMaterialUncheckedCreateNestedManyWithoutProjectWorkItemInput = {
    create?: XOR<ProjectMaterialCreateWithoutProjectWorkItemInput, ProjectMaterialUncheckedCreateWithoutProjectWorkItemInput> | ProjectMaterialCreateWithoutProjectWorkItemInput[] | ProjectMaterialUncheckedCreateWithoutProjectWorkItemInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutProjectWorkItemInput | ProjectMaterialCreateOrConnectWithoutProjectWorkItemInput[]
    createMany?: ProjectMaterialCreateManyProjectWorkItemInputEnvelope
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
  }

  export type ProjectWorkItemTestUncheckedCreateNestedManyWithoutProjectWorkItemInput = {
    create?: XOR<ProjectWorkItemTestCreateWithoutProjectWorkItemInput, ProjectWorkItemTestUncheckedCreateWithoutProjectWorkItemInput> | ProjectWorkItemTestCreateWithoutProjectWorkItemInput[] | ProjectWorkItemTestUncheckedCreateWithoutProjectWorkItemInput[]
    connectOrCreate?: ProjectWorkItemTestCreateOrConnectWithoutProjectWorkItemInput | ProjectWorkItemTestCreateOrConnectWithoutProjectWorkItemInput[]
    createMany?: ProjectWorkItemTestCreateManyProjectWorkItemInputEnvelope
    connect?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
  }

  export type ProjectMaterialUpdateManyWithoutProjectWorkItemNestedInput = {
    create?: XOR<ProjectMaterialCreateWithoutProjectWorkItemInput, ProjectMaterialUncheckedCreateWithoutProjectWorkItemInput> | ProjectMaterialCreateWithoutProjectWorkItemInput[] | ProjectMaterialUncheckedCreateWithoutProjectWorkItemInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutProjectWorkItemInput | ProjectMaterialCreateOrConnectWithoutProjectWorkItemInput[]
    upsert?: ProjectMaterialUpsertWithWhereUniqueWithoutProjectWorkItemInput | ProjectMaterialUpsertWithWhereUniqueWithoutProjectWorkItemInput[]
    createMany?: ProjectMaterialCreateManyProjectWorkItemInputEnvelope
    set?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    disconnect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    delete?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    update?: ProjectMaterialUpdateWithWhereUniqueWithoutProjectWorkItemInput | ProjectMaterialUpdateWithWhereUniqueWithoutProjectWorkItemInput[]
    updateMany?: ProjectMaterialUpdateManyWithWhereWithoutProjectWorkItemInput | ProjectMaterialUpdateManyWithWhereWithoutProjectWorkItemInput[]
    deleteMany?: ProjectMaterialScalarWhereInput | ProjectMaterialScalarWhereInput[]
  }

  export type ProjectUpdateOneRequiredWithoutProjectWorkItemNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectWorkItemInput, ProjectUncheckedCreateWithoutProjectWorkItemInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectWorkItemInput
    upsert?: ProjectUpsertWithoutProjectWorkItemInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectWorkItemInput, ProjectUpdateWithoutProjectWorkItemInput>, ProjectUncheckedUpdateWithoutProjectWorkItemInput>
  }

  export type WorkItemUpdateOneRequiredWithoutProjectWorkItemNestedInput = {
    create?: XOR<WorkItemCreateWithoutProjectWorkItemInput, WorkItemUncheckedCreateWithoutProjectWorkItemInput>
    connectOrCreate?: WorkItemCreateOrConnectWithoutProjectWorkItemInput
    upsert?: WorkItemUpsertWithoutProjectWorkItemInput
    connect?: WorkItemWhereUniqueInput
    update?: XOR<XOR<WorkItemUpdateToOneWithWhereWithoutProjectWorkItemInput, WorkItemUpdateWithoutProjectWorkItemInput>, WorkItemUncheckedUpdateWithoutProjectWorkItemInput>
  }

  export type ProjectWorkItemTestUpdateManyWithoutProjectWorkItemNestedInput = {
    create?: XOR<ProjectWorkItemTestCreateWithoutProjectWorkItemInput, ProjectWorkItemTestUncheckedCreateWithoutProjectWorkItemInput> | ProjectWorkItemTestCreateWithoutProjectWorkItemInput[] | ProjectWorkItemTestUncheckedCreateWithoutProjectWorkItemInput[]
    connectOrCreate?: ProjectWorkItemTestCreateOrConnectWithoutProjectWorkItemInput | ProjectWorkItemTestCreateOrConnectWithoutProjectWorkItemInput[]
    upsert?: ProjectWorkItemTestUpsertWithWhereUniqueWithoutProjectWorkItemInput | ProjectWorkItemTestUpsertWithWhereUniqueWithoutProjectWorkItemInput[]
    createMany?: ProjectWorkItemTestCreateManyProjectWorkItemInputEnvelope
    set?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    disconnect?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    delete?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    connect?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    update?: ProjectWorkItemTestUpdateWithWhereUniqueWithoutProjectWorkItemInput | ProjectWorkItemTestUpdateWithWhereUniqueWithoutProjectWorkItemInput[]
    updateMany?: ProjectWorkItemTestUpdateManyWithWhereWithoutProjectWorkItemInput | ProjectWorkItemTestUpdateManyWithWhereWithoutProjectWorkItemInput[]
    deleteMany?: ProjectWorkItemTestScalarWhereInput | ProjectWorkItemTestScalarWhereInput[]
  }

  export type ProjectMaterialUncheckedUpdateManyWithoutProjectWorkItemNestedInput = {
    create?: XOR<ProjectMaterialCreateWithoutProjectWorkItemInput, ProjectMaterialUncheckedCreateWithoutProjectWorkItemInput> | ProjectMaterialCreateWithoutProjectWorkItemInput[] | ProjectMaterialUncheckedCreateWithoutProjectWorkItemInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutProjectWorkItemInput | ProjectMaterialCreateOrConnectWithoutProjectWorkItemInput[]
    upsert?: ProjectMaterialUpsertWithWhereUniqueWithoutProjectWorkItemInput | ProjectMaterialUpsertWithWhereUniqueWithoutProjectWorkItemInput[]
    createMany?: ProjectMaterialCreateManyProjectWorkItemInputEnvelope
    set?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    disconnect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    delete?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    update?: ProjectMaterialUpdateWithWhereUniqueWithoutProjectWorkItemInput | ProjectMaterialUpdateWithWhereUniqueWithoutProjectWorkItemInput[]
    updateMany?: ProjectMaterialUpdateManyWithWhereWithoutProjectWorkItemInput | ProjectMaterialUpdateManyWithWhereWithoutProjectWorkItemInput[]
    deleteMany?: ProjectMaterialScalarWhereInput | ProjectMaterialScalarWhereInput[]
  }

  export type ProjectWorkItemTestUncheckedUpdateManyWithoutProjectWorkItemNestedInput = {
    create?: XOR<ProjectWorkItemTestCreateWithoutProjectWorkItemInput, ProjectWorkItemTestUncheckedCreateWithoutProjectWorkItemInput> | ProjectWorkItemTestCreateWithoutProjectWorkItemInput[] | ProjectWorkItemTestUncheckedCreateWithoutProjectWorkItemInput[]
    connectOrCreate?: ProjectWorkItemTestCreateOrConnectWithoutProjectWorkItemInput | ProjectWorkItemTestCreateOrConnectWithoutProjectWorkItemInput[]
    upsert?: ProjectWorkItemTestUpsertWithWhereUniqueWithoutProjectWorkItemInput | ProjectWorkItemTestUpsertWithWhereUniqueWithoutProjectWorkItemInput[]
    createMany?: ProjectWorkItemTestCreateManyProjectWorkItemInputEnvelope
    set?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    disconnect?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    delete?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    connect?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    update?: ProjectWorkItemTestUpdateWithWhereUniqueWithoutProjectWorkItemInput | ProjectWorkItemTestUpdateWithWhereUniqueWithoutProjectWorkItemInput[]
    updateMany?: ProjectWorkItemTestUpdateManyWithWhereWithoutProjectWorkItemInput | ProjectWorkItemTestUpdateManyWithWhereWithoutProjectWorkItemInput[]
    deleteMany?: ProjectWorkItemTestScalarWhereInput | ProjectWorkItemTestScalarWhereInput[]
  }

  export type ProjectWorkItemCreateNestedOneWithoutProjectWorkItemTestInput = {
    create?: XOR<ProjectWorkItemCreateWithoutProjectWorkItemTestInput, ProjectWorkItemUncheckedCreateWithoutProjectWorkItemTestInput>
    connectOrCreate?: ProjectWorkItemCreateOrConnectWithoutProjectWorkItemTestInput
    connect?: ProjectWorkItemWhereUniqueInput
  }

  export type TestCreateNestedOneWithoutProjectWorkItemTestInput = {
    create?: XOR<TestCreateWithoutProjectWorkItemTestInput, TestUncheckedCreateWithoutProjectWorkItemTestInput>
    connectOrCreate?: TestCreateOrConnectWithoutProjectWorkItemTestInput
    connect?: TestWhereUniqueInput
  }

  export type ProjectWorkItemUpdateOneRequiredWithoutProjectWorkItemTestNestedInput = {
    create?: XOR<ProjectWorkItemCreateWithoutProjectWorkItemTestInput, ProjectWorkItemUncheckedCreateWithoutProjectWorkItemTestInput>
    connectOrCreate?: ProjectWorkItemCreateOrConnectWithoutProjectWorkItemTestInput
    upsert?: ProjectWorkItemUpsertWithoutProjectWorkItemTestInput
    connect?: ProjectWorkItemWhereUniqueInput
    update?: XOR<XOR<ProjectWorkItemUpdateToOneWithWhereWithoutProjectWorkItemTestInput, ProjectWorkItemUpdateWithoutProjectWorkItemTestInput>, ProjectWorkItemUncheckedUpdateWithoutProjectWorkItemTestInput>
  }

  export type TestUpdateOneRequiredWithoutProjectWorkItemTestNestedInput = {
    create?: XOR<TestCreateWithoutProjectWorkItemTestInput, TestUncheckedCreateWithoutProjectWorkItemTestInput>
    connectOrCreate?: TestCreateOrConnectWithoutProjectWorkItemTestInput
    upsert?: TestUpsertWithoutProjectWorkItemTestInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutProjectWorkItemTestInput, TestUpdateWithoutProjectWorkItemTestInput>, TestUncheckedUpdateWithoutProjectWorkItemTestInput>
  }

  export type ProjectMaterialTestCreateNestedManyWithoutTestInput = {
    create?: XOR<ProjectMaterialTestCreateWithoutTestInput, ProjectMaterialTestUncheckedCreateWithoutTestInput> | ProjectMaterialTestCreateWithoutTestInput[] | ProjectMaterialTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ProjectMaterialTestCreateOrConnectWithoutTestInput | ProjectMaterialTestCreateOrConnectWithoutTestInput[]
    createMany?: ProjectMaterialTestCreateManyTestInputEnvelope
    connect?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
  }

  export type ProjectWorkItemTestCreateNestedManyWithoutTestInput = {
    create?: XOR<ProjectWorkItemTestCreateWithoutTestInput, ProjectWorkItemTestUncheckedCreateWithoutTestInput> | ProjectWorkItemTestCreateWithoutTestInput[] | ProjectWorkItemTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ProjectWorkItemTestCreateOrConnectWithoutTestInput | ProjectWorkItemTestCreateOrConnectWithoutTestInput[]
    createMany?: ProjectWorkItemTestCreateManyTestInputEnvelope
    connect?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
  }

  export type WorkItemMaterialTestCreateNestedManyWithoutTestInput = {
    create?: XOR<WorkItemMaterialTestCreateWithoutTestInput, WorkItemMaterialTestUncheckedCreateWithoutTestInput> | WorkItemMaterialTestCreateWithoutTestInput[] | WorkItemMaterialTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: WorkItemMaterialTestCreateOrConnectWithoutTestInput | WorkItemMaterialTestCreateOrConnectWithoutTestInput[]
    createMany?: WorkItemMaterialTestCreateManyTestInputEnvelope
    connect?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
  }

  export type WorkItemTestCreateNestedManyWithoutTestInput = {
    create?: XOR<WorkItemTestCreateWithoutTestInput, WorkItemTestUncheckedCreateWithoutTestInput> | WorkItemTestCreateWithoutTestInput[] | WorkItemTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: WorkItemTestCreateOrConnectWithoutTestInput | WorkItemTestCreateOrConnectWithoutTestInput[]
    createMany?: WorkItemTestCreateManyTestInputEnvelope
    connect?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
  }

  export type ProjectMaterialTestUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<ProjectMaterialTestCreateWithoutTestInput, ProjectMaterialTestUncheckedCreateWithoutTestInput> | ProjectMaterialTestCreateWithoutTestInput[] | ProjectMaterialTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ProjectMaterialTestCreateOrConnectWithoutTestInput | ProjectMaterialTestCreateOrConnectWithoutTestInput[]
    createMany?: ProjectMaterialTestCreateManyTestInputEnvelope
    connect?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
  }

  export type ProjectWorkItemTestUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<ProjectWorkItemTestCreateWithoutTestInput, ProjectWorkItemTestUncheckedCreateWithoutTestInput> | ProjectWorkItemTestCreateWithoutTestInput[] | ProjectWorkItemTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ProjectWorkItemTestCreateOrConnectWithoutTestInput | ProjectWorkItemTestCreateOrConnectWithoutTestInput[]
    createMany?: ProjectWorkItemTestCreateManyTestInputEnvelope
    connect?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
  }

  export type WorkItemMaterialTestUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<WorkItemMaterialTestCreateWithoutTestInput, WorkItemMaterialTestUncheckedCreateWithoutTestInput> | WorkItemMaterialTestCreateWithoutTestInput[] | WorkItemMaterialTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: WorkItemMaterialTestCreateOrConnectWithoutTestInput | WorkItemMaterialTestCreateOrConnectWithoutTestInput[]
    createMany?: WorkItemMaterialTestCreateManyTestInputEnvelope
    connect?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
  }

  export type WorkItemTestUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<WorkItemTestCreateWithoutTestInput, WorkItemTestUncheckedCreateWithoutTestInput> | WorkItemTestCreateWithoutTestInput[] | WorkItemTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: WorkItemTestCreateOrConnectWithoutTestInput | WorkItemTestCreateOrConnectWithoutTestInput[]
    createMany?: WorkItemTestCreateManyTestInputEnvelope
    connect?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
  }

  export type ProjectMaterialTestUpdateManyWithoutTestNestedInput = {
    create?: XOR<ProjectMaterialTestCreateWithoutTestInput, ProjectMaterialTestUncheckedCreateWithoutTestInput> | ProjectMaterialTestCreateWithoutTestInput[] | ProjectMaterialTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ProjectMaterialTestCreateOrConnectWithoutTestInput | ProjectMaterialTestCreateOrConnectWithoutTestInput[]
    upsert?: ProjectMaterialTestUpsertWithWhereUniqueWithoutTestInput | ProjectMaterialTestUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: ProjectMaterialTestCreateManyTestInputEnvelope
    set?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    disconnect?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    delete?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    connect?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    update?: ProjectMaterialTestUpdateWithWhereUniqueWithoutTestInput | ProjectMaterialTestUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: ProjectMaterialTestUpdateManyWithWhereWithoutTestInput | ProjectMaterialTestUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: ProjectMaterialTestScalarWhereInput | ProjectMaterialTestScalarWhereInput[]
  }

  export type ProjectWorkItemTestUpdateManyWithoutTestNestedInput = {
    create?: XOR<ProjectWorkItemTestCreateWithoutTestInput, ProjectWorkItemTestUncheckedCreateWithoutTestInput> | ProjectWorkItemTestCreateWithoutTestInput[] | ProjectWorkItemTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ProjectWorkItemTestCreateOrConnectWithoutTestInput | ProjectWorkItemTestCreateOrConnectWithoutTestInput[]
    upsert?: ProjectWorkItemTestUpsertWithWhereUniqueWithoutTestInput | ProjectWorkItemTestUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: ProjectWorkItemTestCreateManyTestInputEnvelope
    set?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    disconnect?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    delete?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    connect?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    update?: ProjectWorkItemTestUpdateWithWhereUniqueWithoutTestInput | ProjectWorkItemTestUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: ProjectWorkItemTestUpdateManyWithWhereWithoutTestInput | ProjectWorkItemTestUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: ProjectWorkItemTestScalarWhereInput | ProjectWorkItemTestScalarWhereInput[]
  }

  export type WorkItemMaterialTestUpdateManyWithoutTestNestedInput = {
    create?: XOR<WorkItemMaterialTestCreateWithoutTestInput, WorkItemMaterialTestUncheckedCreateWithoutTestInput> | WorkItemMaterialTestCreateWithoutTestInput[] | WorkItemMaterialTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: WorkItemMaterialTestCreateOrConnectWithoutTestInput | WorkItemMaterialTestCreateOrConnectWithoutTestInput[]
    upsert?: WorkItemMaterialTestUpsertWithWhereUniqueWithoutTestInput | WorkItemMaterialTestUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: WorkItemMaterialTestCreateManyTestInputEnvelope
    set?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    disconnect?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    delete?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    connect?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    update?: WorkItemMaterialTestUpdateWithWhereUniqueWithoutTestInput | WorkItemMaterialTestUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: WorkItemMaterialTestUpdateManyWithWhereWithoutTestInput | WorkItemMaterialTestUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: WorkItemMaterialTestScalarWhereInput | WorkItemMaterialTestScalarWhereInput[]
  }

  export type WorkItemTestUpdateManyWithoutTestNestedInput = {
    create?: XOR<WorkItemTestCreateWithoutTestInput, WorkItemTestUncheckedCreateWithoutTestInput> | WorkItemTestCreateWithoutTestInput[] | WorkItemTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: WorkItemTestCreateOrConnectWithoutTestInput | WorkItemTestCreateOrConnectWithoutTestInput[]
    upsert?: WorkItemTestUpsertWithWhereUniqueWithoutTestInput | WorkItemTestUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: WorkItemTestCreateManyTestInputEnvelope
    set?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    disconnect?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    delete?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    connect?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    update?: WorkItemTestUpdateWithWhereUniqueWithoutTestInput | WorkItemTestUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: WorkItemTestUpdateManyWithWhereWithoutTestInput | WorkItemTestUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: WorkItemTestScalarWhereInput | WorkItemTestScalarWhereInput[]
  }

  export type ProjectMaterialTestUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<ProjectMaterialTestCreateWithoutTestInput, ProjectMaterialTestUncheckedCreateWithoutTestInput> | ProjectMaterialTestCreateWithoutTestInput[] | ProjectMaterialTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ProjectMaterialTestCreateOrConnectWithoutTestInput | ProjectMaterialTestCreateOrConnectWithoutTestInput[]
    upsert?: ProjectMaterialTestUpsertWithWhereUniqueWithoutTestInput | ProjectMaterialTestUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: ProjectMaterialTestCreateManyTestInputEnvelope
    set?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    disconnect?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    delete?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    connect?: ProjectMaterialTestWhereUniqueInput | ProjectMaterialTestWhereUniqueInput[]
    update?: ProjectMaterialTestUpdateWithWhereUniqueWithoutTestInput | ProjectMaterialTestUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: ProjectMaterialTestUpdateManyWithWhereWithoutTestInput | ProjectMaterialTestUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: ProjectMaterialTestScalarWhereInput | ProjectMaterialTestScalarWhereInput[]
  }

  export type ProjectWorkItemTestUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<ProjectWorkItemTestCreateWithoutTestInput, ProjectWorkItemTestUncheckedCreateWithoutTestInput> | ProjectWorkItemTestCreateWithoutTestInput[] | ProjectWorkItemTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ProjectWorkItemTestCreateOrConnectWithoutTestInput | ProjectWorkItemTestCreateOrConnectWithoutTestInput[]
    upsert?: ProjectWorkItemTestUpsertWithWhereUniqueWithoutTestInput | ProjectWorkItemTestUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: ProjectWorkItemTestCreateManyTestInputEnvelope
    set?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    disconnect?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    delete?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    connect?: ProjectWorkItemTestWhereUniqueInput | ProjectWorkItemTestWhereUniqueInput[]
    update?: ProjectWorkItemTestUpdateWithWhereUniqueWithoutTestInput | ProjectWorkItemTestUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: ProjectWorkItemTestUpdateManyWithWhereWithoutTestInput | ProjectWorkItemTestUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: ProjectWorkItemTestScalarWhereInput | ProjectWorkItemTestScalarWhereInput[]
  }

  export type WorkItemMaterialTestUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<WorkItemMaterialTestCreateWithoutTestInput, WorkItemMaterialTestUncheckedCreateWithoutTestInput> | WorkItemMaterialTestCreateWithoutTestInput[] | WorkItemMaterialTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: WorkItemMaterialTestCreateOrConnectWithoutTestInput | WorkItemMaterialTestCreateOrConnectWithoutTestInput[]
    upsert?: WorkItemMaterialTestUpsertWithWhereUniqueWithoutTestInput | WorkItemMaterialTestUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: WorkItemMaterialTestCreateManyTestInputEnvelope
    set?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    disconnect?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    delete?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    connect?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    update?: WorkItemMaterialTestUpdateWithWhereUniqueWithoutTestInput | WorkItemMaterialTestUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: WorkItemMaterialTestUpdateManyWithWhereWithoutTestInput | WorkItemMaterialTestUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: WorkItemMaterialTestScalarWhereInput | WorkItemMaterialTestScalarWhereInput[]
  }

  export type WorkItemTestUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<WorkItemTestCreateWithoutTestInput, WorkItemTestUncheckedCreateWithoutTestInput> | WorkItemTestCreateWithoutTestInput[] | WorkItemTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: WorkItemTestCreateOrConnectWithoutTestInput | WorkItemTestCreateOrConnectWithoutTestInput[]
    upsert?: WorkItemTestUpsertWithWhereUniqueWithoutTestInput | WorkItemTestUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: WorkItemTestCreateManyTestInputEnvelope
    set?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    disconnect?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    delete?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    connect?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    update?: WorkItemTestUpdateWithWhereUniqueWithoutTestInput | WorkItemTestUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: WorkItemTestUpdateManyWithWhereWithoutTestInput | WorkItemTestUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: WorkItemTestScalarWhereInput | WorkItemTestScalarWhereInput[]
  }

  export type MaterialCreateNestedManyWithoutUnitInput = {
    create?: XOR<MaterialCreateWithoutUnitInput, MaterialUncheckedCreateWithoutUnitInput> | MaterialCreateWithoutUnitInput[] | MaterialUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutUnitInput | MaterialCreateOrConnectWithoutUnitInput[]
    createMany?: MaterialCreateManyUnitInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type WorkItemCreateNestedManyWithoutUnitInput = {
    create?: XOR<WorkItemCreateWithoutUnitInput, WorkItemUncheckedCreateWithoutUnitInput> | WorkItemCreateWithoutUnitInput[] | WorkItemUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: WorkItemCreateOrConnectWithoutUnitInput | WorkItemCreateOrConnectWithoutUnitInput[]
    createMany?: WorkItemCreateManyUnitInputEnvelope
    connect?: WorkItemWhereUniqueInput | WorkItemWhereUniqueInput[]
  }

  export type MaterialUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<MaterialCreateWithoutUnitInput, MaterialUncheckedCreateWithoutUnitInput> | MaterialCreateWithoutUnitInput[] | MaterialUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutUnitInput | MaterialCreateOrConnectWithoutUnitInput[]
    createMany?: MaterialCreateManyUnitInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type WorkItemUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<WorkItemCreateWithoutUnitInput, WorkItemUncheckedCreateWithoutUnitInput> | WorkItemCreateWithoutUnitInput[] | WorkItemUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: WorkItemCreateOrConnectWithoutUnitInput | WorkItemCreateOrConnectWithoutUnitInput[]
    createMany?: WorkItemCreateManyUnitInputEnvelope
    connect?: WorkItemWhereUniqueInput | WorkItemWhereUniqueInput[]
  }

  export type MaterialUpdateManyWithoutUnitNestedInput = {
    create?: XOR<MaterialCreateWithoutUnitInput, MaterialUncheckedCreateWithoutUnitInput> | MaterialCreateWithoutUnitInput[] | MaterialUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutUnitInput | MaterialCreateOrConnectWithoutUnitInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutUnitInput | MaterialUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: MaterialCreateManyUnitInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutUnitInput | MaterialUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutUnitInput | MaterialUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type WorkItemUpdateManyWithoutUnitNestedInput = {
    create?: XOR<WorkItemCreateWithoutUnitInput, WorkItemUncheckedCreateWithoutUnitInput> | WorkItemCreateWithoutUnitInput[] | WorkItemUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: WorkItemCreateOrConnectWithoutUnitInput | WorkItemCreateOrConnectWithoutUnitInput[]
    upsert?: WorkItemUpsertWithWhereUniqueWithoutUnitInput | WorkItemUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: WorkItemCreateManyUnitInputEnvelope
    set?: WorkItemWhereUniqueInput | WorkItemWhereUniqueInput[]
    disconnect?: WorkItemWhereUniqueInput | WorkItemWhereUniqueInput[]
    delete?: WorkItemWhereUniqueInput | WorkItemWhereUniqueInput[]
    connect?: WorkItemWhereUniqueInput | WorkItemWhereUniqueInput[]
    update?: WorkItemUpdateWithWhereUniqueWithoutUnitInput | WorkItemUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: WorkItemUpdateManyWithWhereWithoutUnitInput | WorkItemUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: WorkItemScalarWhereInput | WorkItemScalarWhereInput[]
  }

  export type MaterialUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<MaterialCreateWithoutUnitInput, MaterialUncheckedCreateWithoutUnitInput> | MaterialCreateWithoutUnitInput[] | MaterialUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutUnitInput | MaterialCreateOrConnectWithoutUnitInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutUnitInput | MaterialUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: MaterialCreateManyUnitInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutUnitInput | MaterialUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutUnitInput | MaterialUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type WorkItemUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<WorkItemCreateWithoutUnitInput, WorkItemUncheckedCreateWithoutUnitInput> | WorkItemCreateWithoutUnitInput[] | WorkItemUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: WorkItemCreateOrConnectWithoutUnitInput | WorkItemCreateOrConnectWithoutUnitInput[]
    upsert?: WorkItemUpsertWithWhereUniqueWithoutUnitInput | WorkItemUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: WorkItemCreateManyUnitInputEnvelope
    set?: WorkItemWhereUniqueInput | WorkItemWhereUniqueInput[]
    disconnect?: WorkItemWhereUniqueInput | WorkItemWhereUniqueInput[]
    delete?: WorkItemWhereUniqueInput | WorkItemWhereUniqueInput[]
    connect?: WorkItemWhereUniqueInput | WorkItemWhereUniqueInput[]
    update?: WorkItemUpdateWithWhereUniqueWithoutUnitInput | WorkItemUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: WorkItemUpdateManyWithWhereWithoutUnitInput | WorkItemUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: WorkItemScalarWhereInput | WorkItemScalarWhereInput[]
  }

  export type ProjectWorkItemCreateNestedManyWithoutWorkItemInput = {
    create?: XOR<ProjectWorkItemCreateWithoutWorkItemInput, ProjectWorkItemUncheckedCreateWithoutWorkItemInput> | ProjectWorkItemCreateWithoutWorkItemInput[] | ProjectWorkItemUncheckedCreateWithoutWorkItemInput[]
    connectOrCreate?: ProjectWorkItemCreateOrConnectWithoutWorkItemInput | ProjectWorkItemCreateOrConnectWithoutWorkItemInput[]
    createMany?: ProjectWorkItemCreateManyWorkItemInputEnvelope
    connect?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
  }

  export type UnitCreateNestedOneWithoutWorkItemInput = {
    create?: XOR<UnitCreateWithoutWorkItemInput, UnitUncheckedCreateWithoutWorkItemInput>
    connectOrCreate?: UnitCreateOrConnectWithoutWorkItemInput
    connect?: UnitWhereUniqueInput
  }

  export type WorkItemMaterialCreateNestedManyWithoutWorkItemInput = {
    create?: XOR<WorkItemMaterialCreateWithoutWorkItemInput, WorkItemMaterialUncheckedCreateWithoutWorkItemInput> | WorkItemMaterialCreateWithoutWorkItemInput[] | WorkItemMaterialUncheckedCreateWithoutWorkItemInput[]
    connectOrCreate?: WorkItemMaterialCreateOrConnectWithoutWorkItemInput | WorkItemMaterialCreateOrConnectWithoutWorkItemInput[]
    createMany?: WorkItemMaterialCreateManyWorkItemInputEnvelope
    connect?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
  }

  export type WorkItemTestCreateNestedManyWithoutWorkItemInput = {
    create?: XOR<WorkItemTestCreateWithoutWorkItemInput, WorkItemTestUncheckedCreateWithoutWorkItemInput> | WorkItemTestCreateWithoutWorkItemInput[] | WorkItemTestUncheckedCreateWithoutWorkItemInput[]
    connectOrCreate?: WorkItemTestCreateOrConnectWithoutWorkItemInput | WorkItemTestCreateOrConnectWithoutWorkItemInput[]
    createMany?: WorkItemTestCreateManyWorkItemInputEnvelope
    connect?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
  }

  export type ProjectWorkItemUncheckedCreateNestedManyWithoutWorkItemInput = {
    create?: XOR<ProjectWorkItemCreateWithoutWorkItemInput, ProjectWorkItemUncheckedCreateWithoutWorkItemInput> | ProjectWorkItemCreateWithoutWorkItemInput[] | ProjectWorkItemUncheckedCreateWithoutWorkItemInput[]
    connectOrCreate?: ProjectWorkItemCreateOrConnectWithoutWorkItemInput | ProjectWorkItemCreateOrConnectWithoutWorkItemInput[]
    createMany?: ProjectWorkItemCreateManyWorkItemInputEnvelope
    connect?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
  }

  export type WorkItemMaterialUncheckedCreateNestedManyWithoutWorkItemInput = {
    create?: XOR<WorkItemMaterialCreateWithoutWorkItemInput, WorkItemMaterialUncheckedCreateWithoutWorkItemInput> | WorkItemMaterialCreateWithoutWorkItemInput[] | WorkItemMaterialUncheckedCreateWithoutWorkItemInput[]
    connectOrCreate?: WorkItemMaterialCreateOrConnectWithoutWorkItemInput | WorkItemMaterialCreateOrConnectWithoutWorkItemInput[]
    createMany?: WorkItemMaterialCreateManyWorkItemInputEnvelope
    connect?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
  }

  export type WorkItemTestUncheckedCreateNestedManyWithoutWorkItemInput = {
    create?: XOR<WorkItemTestCreateWithoutWorkItemInput, WorkItemTestUncheckedCreateWithoutWorkItemInput> | WorkItemTestCreateWithoutWorkItemInput[] | WorkItemTestUncheckedCreateWithoutWorkItemInput[]
    connectOrCreate?: WorkItemTestCreateOrConnectWithoutWorkItemInput | WorkItemTestCreateOrConnectWithoutWorkItemInput[]
    createMany?: WorkItemTestCreateManyWorkItemInputEnvelope
    connect?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
  }

  export type ProjectWorkItemUpdateManyWithoutWorkItemNestedInput = {
    create?: XOR<ProjectWorkItemCreateWithoutWorkItemInput, ProjectWorkItemUncheckedCreateWithoutWorkItemInput> | ProjectWorkItemCreateWithoutWorkItemInput[] | ProjectWorkItemUncheckedCreateWithoutWorkItemInput[]
    connectOrCreate?: ProjectWorkItemCreateOrConnectWithoutWorkItemInput | ProjectWorkItemCreateOrConnectWithoutWorkItemInput[]
    upsert?: ProjectWorkItemUpsertWithWhereUniqueWithoutWorkItemInput | ProjectWorkItemUpsertWithWhereUniqueWithoutWorkItemInput[]
    createMany?: ProjectWorkItemCreateManyWorkItemInputEnvelope
    set?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    disconnect?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    delete?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    connect?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    update?: ProjectWorkItemUpdateWithWhereUniqueWithoutWorkItemInput | ProjectWorkItemUpdateWithWhereUniqueWithoutWorkItemInput[]
    updateMany?: ProjectWorkItemUpdateManyWithWhereWithoutWorkItemInput | ProjectWorkItemUpdateManyWithWhereWithoutWorkItemInput[]
    deleteMany?: ProjectWorkItemScalarWhereInput | ProjectWorkItemScalarWhereInput[]
  }

  export type UnitUpdateOneRequiredWithoutWorkItemNestedInput = {
    create?: XOR<UnitCreateWithoutWorkItemInput, UnitUncheckedCreateWithoutWorkItemInput>
    connectOrCreate?: UnitCreateOrConnectWithoutWorkItemInput
    upsert?: UnitUpsertWithoutWorkItemInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutWorkItemInput, UnitUpdateWithoutWorkItemInput>, UnitUncheckedUpdateWithoutWorkItemInput>
  }

  export type WorkItemMaterialUpdateManyWithoutWorkItemNestedInput = {
    create?: XOR<WorkItemMaterialCreateWithoutWorkItemInput, WorkItemMaterialUncheckedCreateWithoutWorkItemInput> | WorkItemMaterialCreateWithoutWorkItemInput[] | WorkItemMaterialUncheckedCreateWithoutWorkItemInput[]
    connectOrCreate?: WorkItemMaterialCreateOrConnectWithoutWorkItemInput | WorkItemMaterialCreateOrConnectWithoutWorkItemInput[]
    upsert?: WorkItemMaterialUpsertWithWhereUniqueWithoutWorkItemInput | WorkItemMaterialUpsertWithWhereUniqueWithoutWorkItemInput[]
    createMany?: WorkItemMaterialCreateManyWorkItemInputEnvelope
    set?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    disconnect?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    delete?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    connect?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    update?: WorkItemMaterialUpdateWithWhereUniqueWithoutWorkItemInput | WorkItemMaterialUpdateWithWhereUniqueWithoutWorkItemInput[]
    updateMany?: WorkItemMaterialUpdateManyWithWhereWithoutWorkItemInput | WorkItemMaterialUpdateManyWithWhereWithoutWorkItemInput[]
    deleteMany?: WorkItemMaterialScalarWhereInput | WorkItemMaterialScalarWhereInput[]
  }

  export type WorkItemTestUpdateManyWithoutWorkItemNestedInput = {
    create?: XOR<WorkItemTestCreateWithoutWorkItemInput, WorkItemTestUncheckedCreateWithoutWorkItemInput> | WorkItemTestCreateWithoutWorkItemInput[] | WorkItemTestUncheckedCreateWithoutWorkItemInput[]
    connectOrCreate?: WorkItemTestCreateOrConnectWithoutWorkItemInput | WorkItemTestCreateOrConnectWithoutWorkItemInput[]
    upsert?: WorkItemTestUpsertWithWhereUniqueWithoutWorkItemInput | WorkItemTestUpsertWithWhereUniqueWithoutWorkItemInput[]
    createMany?: WorkItemTestCreateManyWorkItemInputEnvelope
    set?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    disconnect?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    delete?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    connect?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    update?: WorkItemTestUpdateWithWhereUniqueWithoutWorkItemInput | WorkItemTestUpdateWithWhereUniqueWithoutWorkItemInput[]
    updateMany?: WorkItemTestUpdateManyWithWhereWithoutWorkItemInput | WorkItemTestUpdateManyWithWhereWithoutWorkItemInput[]
    deleteMany?: WorkItemTestScalarWhereInput | WorkItemTestScalarWhereInput[]
  }

  export type ProjectWorkItemUncheckedUpdateManyWithoutWorkItemNestedInput = {
    create?: XOR<ProjectWorkItemCreateWithoutWorkItemInput, ProjectWorkItemUncheckedCreateWithoutWorkItemInput> | ProjectWorkItemCreateWithoutWorkItemInput[] | ProjectWorkItemUncheckedCreateWithoutWorkItemInput[]
    connectOrCreate?: ProjectWorkItemCreateOrConnectWithoutWorkItemInput | ProjectWorkItemCreateOrConnectWithoutWorkItemInput[]
    upsert?: ProjectWorkItemUpsertWithWhereUniqueWithoutWorkItemInput | ProjectWorkItemUpsertWithWhereUniqueWithoutWorkItemInput[]
    createMany?: ProjectWorkItemCreateManyWorkItemInputEnvelope
    set?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    disconnect?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    delete?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    connect?: ProjectWorkItemWhereUniqueInput | ProjectWorkItemWhereUniqueInput[]
    update?: ProjectWorkItemUpdateWithWhereUniqueWithoutWorkItemInput | ProjectWorkItemUpdateWithWhereUniqueWithoutWorkItemInput[]
    updateMany?: ProjectWorkItemUpdateManyWithWhereWithoutWorkItemInput | ProjectWorkItemUpdateManyWithWhereWithoutWorkItemInput[]
    deleteMany?: ProjectWorkItemScalarWhereInput | ProjectWorkItemScalarWhereInput[]
  }

  export type WorkItemMaterialUncheckedUpdateManyWithoutWorkItemNestedInput = {
    create?: XOR<WorkItemMaterialCreateWithoutWorkItemInput, WorkItemMaterialUncheckedCreateWithoutWorkItemInput> | WorkItemMaterialCreateWithoutWorkItemInput[] | WorkItemMaterialUncheckedCreateWithoutWorkItemInput[]
    connectOrCreate?: WorkItemMaterialCreateOrConnectWithoutWorkItemInput | WorkItemMaterialCreateOrConnectWithoutWorkItemInput[]
    upsert?: WorkItemMaterialUpsertWithWhereUniqueWithoutWorkItemInput | WorkItemMaterialUpsertWithWhereUniqueWithoutWorkItemInput[]
    createMany?: WorkItemMaterialCreateManyWorkItemInputEnvelope
    set?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    disconnect?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    delete?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    connect?: WorkItemMaterialWhereUniqueInput | WorkItemMaterialWhereUniqueInput[]
    update?: WorkItemMaterialUpdateWithWhereUniqueWithoutWorkItemInput | WorkItemMaterialUpdateWithWhereUniqueWithoutWorkItemInput[]
    updateMany?: WorkItemMaterialUpdateManyWithWhereWithoutWorkItemInput | WorkItemMaterialUpdateManyWithWhereWithoutWorkItemInput[]
    deleteMany?: WorkItemMaterialScalarWhereInput | WorkItemMaterialScalarWhereInput[]
  }

  export type WorkItemTestUncheckedUpdateManyWithoutWorkItemNestedInput = {
    create?: XOR<WorkItemTestCreateWithoutWorkItemInput, WorkItemTestUncheckedCreateWithoutWorkItemInput> | WorkItemTestCreateWithoutWorkItemInput[] | WorkItemTestUncheckedCreateWithoutWorkItemInput[]
    connectOrCreate?: WorkItemTestCreateOrConnectWithoutWorkItemInput | WorkItemTestCreateOrConnectWithoutWorkItemInput[]
    upsert?: WorkItemTestUpsertWithWhereUniqueWithoutWorkItemInput | WorkItemTestUpsertWithWhereUniqueWithoutWorkItemInput[]
    createMany?: WorkItemTestCreateManyWorkItemInputEnvelope
    set?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    disconnect?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    delete?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    connect?: WorkItemTestWhereUniqueInput | WorkItemTestWhereUniqueInput[]
    update?: WorkItemTestUpdateWithWhereUniqueWithoutWorkItemInput | WorkItemTestUpdateWithWhereUniqueWithoutWorkItemInput[]
    updateMany?: WorkItemTestUpdateManyWithWhereWithoutWorkItemInput | WorkItemTestUpdateManyWithWhereWithoutWorkItemInput[]
    deleteMany?: WorkItemTestScalarWhereInput | WorkItemTestScalarWhereInput[]
  }

  export type MaterialCreateNestedOneWithoutWorkItemMaterialInput = {
    create?: XOR<MaterialCreateWithoutWorkItemMaterialInput, MaterialUncheckedCreateWithoutWorkItemMaterialInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutWorkItemMaterialInput
    connect?: MaterialWhereUniqueInput
  }

  export type WorkItemCreateNestedOneWithoutWorkItemMaterialInput = {
    create?: XOR<WorkItemCreateWithoutWorkItemMaterialInput, WorkItemUncheckedCreateWithoutWorkItemMaterialInput>
    connectOrCreate?: WorkItemCreateOrConnectWithoutWorkItemMaterialInput
    connect?: WorkItemWhereUniqueInput
  }

  export type WorkItemMaterialTestCreateNestedManyWithoutWorkItemMaterialInput = {
    create?: XOR<WorkItemMaterialTestCreateWithoutWorkItemMaterialInput, WorkItemMaterialTestUncheckedCreateWithoutWorkItemMaterialInput> | WorkItemMaterialTestCreateWithoutWorkItemMaterialInput[] | WorkItemMaterialTestUncheckedCreateWithoutWorkItemMaterialInput[]
    connectOrCreate?: WorkItemMaterialTestCreateOrConnectWithoutWorkItemMaterialInput | WorkItemMaterialTestCreateOrConnectWithoutWorkItemMaterialInput[]
    createMany?: WorkItemMaterialTestCreateManyWorkItemMaterialInputEnvelope
    connect?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
  }

  export type WorkItemMaterialTestUncheckedCreateNestedManyWithoutWorkItemMaterialInput = {
    create?: XOR<WorkItemMaterialTestCreateWithoutWorkItemMaterialInput, WorkItemMaterialTestUncheckedCreateWithoutWorkItemMaterialInput> | WorkItemMaterialTestCreateWithoutWorkItemMaterialInput[] | WorkItemMaterialTestUncheckedCreateWithoutWorkItemMaterialInput[]
    connectOrCreate?: WorkItemMaterialTestCreateOrConnectWithoutWorkItemMaterialInput | WorkItemMaterialTestCreateOrConnectWithoutWorkItemMaterialInput[]
    createMany?: WorkItemMaterialTestCreateManyWorkItemMaterialInputEnvelope
    connect?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
  }

  export type MaterialUpdateOneRequiredWithoutWorkItemMaterialNestedInput = {
    create?: XOR<MaterialCreateWithoutWorkItemMaterialInput, MaterialUncheckedCreateWithoutWorkItemMaterialInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutWorkItemMaterialInput
    upsert?: MaterialUpsertWithoutWorkItemMaterialInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutWorkItemMaterialInput, MaterialUpdateWithoutWorkItemMaterialInput>, MaterialUncheckedUpdateWithoutWorkItemMaterialInput>
  }

  export type WorkItemUpdateOneRequiredWithoutWorkItemMaterialNestedInput = {
    create?: XOR<WorkItemCreateWithoutWorkItemMaterialInput, WorkItemUncheckedCreateWithoutWorkItemMaterialInput>
    connectOrCreate?: WorkItemCreateOrConnectWithoutWorkItemMaterialInput
    upsert?: WorkItemUpsertWithoutWorkItemMaterialInput
    connect?: WorkItemWhereUniqueInput
    update?: XOR<XOR<WorkItemUpdateToOneWithWhereWithoutWorkItemMaterialInput, WorkItemUpdateWithoutWorkItemMaterialInput>, WorkItemUncheckedUpdateWithoutWorkItemMaterialInput>
  }

  export type WorkItemMaterialTestUpdateManyWithoutWorkItemMaterialNestedInput = {
    create?: XOR<WorkItemMaterialTestCreateWithoutWorkItemMaterialInput, WorkItemMaterialTestUncheckedCreateWithoutWorkItemMaterialInput> | WorkItemMaterialTestCreateWithoutWorkItemMaterialInput[] | WorkItemMaterialTestUncheckedCreateWithoutWorkItemMaterialInput[]
    connectOrCreate?: WorkItemMaterialTestCreateOrConnectWithoutWorkItemMaterialInput | WorkItemMaterialTestCreateOrConnectWithoutWorkItemMaterialInput[]
    upsert?: WorkItemMaterialTestUpsertWithWhereUniqueWithoutWorkItemMaterialInput | WorkItemMaterialTestUpsertWithWhereUniqueWithoutWorkItemMaterialInput[]
    createMany?: WorkItemMaterialTestCreateManyWorkItemMaterialInputEnvelope
    set?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    disconnect?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    delete?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    connect?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    update?: WorkItemMaterialTestUpdateWithWhereUniqueWithoutWorkItemMaterialInput | WorkItemMaterialTestUpdateWithWhereUniqueWithoutWorkItemMaterialInput[]
    updateMany?: WorkItemMaterialTestUpdateManyWithWhereWithoutWorkItemMaterialInput | WorkItemMaterialTestUpdateManyWithWhereWithoutWorkItemMaterialInput[]
    deleteMany?: WorkItemMaterialTestScalarWhereInput | WorkItemMaterialTestScalarWhereInput[]
  }

  export type WorkItemMaterialTestUncheckedUpdateManyWithoutWorkItemMaterialNestedInput = {
    create?: XOR<WorkItemMaterialTestCreateWithoutWorkItemMaterialInput, WorkItemMaterialTestUncheckedCreateWithoutWorkItemMaterialInput> | WorkItemMaterialTestCreateWithoutWorkItemMaterialInput[] | WorkItemMaterialTestUncheckedCreateWithoutWorkItemMaterialInput[]
    connectOrCreate?: WorkItemMaterialTestCreateOrConnectWithoutWorkItemMaterialInput | WorkItemMaterialTestCreateOrConnectWithoutWorkItemMaterialInput[]
    upsert?: WorkItemMaterialTestUpsertWithWhereUniqueWithoutWorkItemMaterialInput | WorkItemMaterialTestUpsertWithWhereUniqueWithoutWorkItemMaterialInput[]
    createMany?: WorkItemMaterialTestCreateManyWorkItemMaterialInputEnvelope
    set?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    disconnect?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    delete?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    connect?: WorkItemMaterialTestWhereUniqueInput | WorkItemMaterialTestWhereUniqueInput[]
    update?: WorkItemMaterialTestUpdateWithWhereUniqueWithoutWorkItemMaterialInput | WorkItemMaterialTestUpdateWithWhereUniqueWithoutWorkItemMaterialInput[]
    updateMany?: WorkItemMaterialTestUpdateManyWithWhereWithoutWorkItemMaterialInput | WorkItemMaterialTestUpdateManyWithWhereWithoutWorkItemMaterialInput[]
    deleteMany?: WorkItemMaterialTestScalarWhereInput | WorkItemMaterialTestScalarWhereInput[]
  }

  export type TestCreateNestedOneWithoutWorkItemMaterialTestInput = {
    create?: XOR<TestCreateWithoutWorkItemMaterialTestInput, TestUncheckedCreateWithoutWorkItemMaterialTestInput>
    connectOrCreate?: TestCreateOrConnectWithoutWorkItemMaterialTestInput
    connect?: TestWhereUniqueInput
  }

  export type WorkItemMaterialCreateNestedOneWithoutWorkItemMaterialTestInput = {
    create?: XOR<WorkItemMaterialCreateWithoutWorkItemMaterialTestInput, WorkItemMaterialUncheckedCreateWithoutWorkItemMaterialTestInput>
    connectOrCreate?: WorkItemMaterialCreateOrConnectWithoutWorkItemMaterialTestInput
    connect?: WorkItemMaterialWhereUniqueInput
  }

  export type TestUpdateOneRequiredWithoutWorkItemMaterialTestNestedInput = {
    create?: XOR<TestCreateWithoutWorkItemMaterialTestInput, TestUncheckedCreateWithoutWorkItemMaterialTestInput>
    connectOrCreate?: TestCreateOrConnectWithoutWorkItemMaterialTestInput
    upsert?: TestUpsertWithoutWorkItemMaterialTestInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutWorkItemMaterialTestInput, TestUpdateWithoutWorkItemMaterialTestInput>, TestUncheckedUpdateWithoutWorkItemMaterialTestInput>
  }

  export type WorkItemMaterialUpdateOneRequiredWithoutWorkItemMaterialTestNestedInput = {
    create?: XOR<WorkItemMaterialCreateWithoutWorkItemMaterialTestInput, WorkItemMaterialUncheckedCreateWithoutWorkItemMaterialTestInput>
    connectOrCreate?: WorkItemMaterialCreateOrConnectWithoutWorkItemMaterialTestInput
    upsert?: WorkItemMaterialUpsertWithoutWorkItemMaterialTestInput
    connect?: WorkItemMaterialWhereUniqueInput
    update?: XOR<XOR<WorkItemMaterialUpdateToOneWithWhereWithoutWorkItemMaterialTestInput, WorkItemMaterialUpdateWithoutWorkItemMaterialTestInput>, WorkItemMaterialUncheckedUpdateWithoutWorkItemMaterialTestInput>
  }

  export type TestCreateNestedOneWithoutWorkItemTestInput = {
    create?: XOR<TestCreateWithoutWorkItemTestInput, TestUncheckedCreateWithoutWorkItemTestInput>
    connectOrCreate?: TestCreateOrConnectWithoutWorkItemTestInput
    connect?: TestWhereUniqueInput
  }

  export type WorkItemCreateNestedOneWithoutWorkItemTestInput = {
    create?: XOR<WorkItemCreateWithoutWorkItemTestInput, WorkItemUncheckedCreateWithoutWorkItemTestInput>
    connectOrCreate?: WorkItemCreateOrConnectWithoutWorkItemTestInput
    connect?: WorkItemWhereUniqueInput
  }

  export type TestUpdateOneRequiredWithoutWorkItemTestNestedInput = {
    create?: XOR<TestCreateWithoutWorkItemTestInput, TestUncheckedCreateWithoutWorkItemTestInput>
    connectOrCreate?: TestCreateOrConnectWithoutWorkItemTestInput
    upsert?: TestUpsertWithoutWorkItemTestInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutWorkItemTestInput, TestUpdateWithoutWorkItemTestInput>, TestUncheckedUpdateWithoutWorkItemTestInput>
  }

  export type WorkItemUpdateOneRequiredWithoutWorkItemTestNestedInput = {
    create?: XOR<WorkItemCreateWithoutWorkItemTestInput, WorkItemUncheckedCreateWithoutWorkItemTestInput>
    connectOrCreate?: WorkItemCreateOrConnectWithoutWorkItemTestInput
    upsert?: WorkItemUpsertWithoutWorkItemTestInput
    connect?: WorkItemWhereUniqueInput
    update?: XOR<XOR<WorkItemUpdateToOneWithWhereWithoutWorkItemTestInput, WorkItemUpdateWithoutWorkItemTestInput>, WorkItemUncheckedUpdateWithoutWorkItemTestInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UnitCreateWithoutMaterialInput = {
    id?: string
    name: string
    abbreviation: string
    createdAt?: Date | string
    workItem?: WorkItemCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutMaterialInput = {
    id?: string
    name: string
    abbreviation: string
    createdAt?: Date | string
    workItem?: WorkItemUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutMaterialInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutMaterialInput, UnitUncheckedCreateWithoutMaterialInput>
  }

  export type ProjectMaterialCreateWithoutMaterialInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    projectWorkItem: ProjectWorkItemCreateNestedOneWithoutProjectMaterialInput
    projectMaterialTest?: ProjectMaterialTestCreateNestedManyWithoutProjectMaterialInput
  }

  export type ProjectMaterialUncheckedCreateWithoutMaterialInput = {
    id?: string
    projectWorkItemId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    projectMaterialTest?: ProjectMaterialTestUncheckedCreateNestedManyWithoutProjectMaterialInput
  }

  export type ProjectMaterialCreateOrConnectWithoutMaterialInput = {
    where: ProjectMaterialWhereUniqueInput
    create: XOR<ProjectMaterialCreateWithoutMaterialInput, ProjectMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type ProjectMaterialCreateManyMaterialInputEnvelope = {
    data: ProjectMaterialCreateManyMaterialInput | ProjectMaterialCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type WorkItemMaterialCreateWithoutMaterialInput = {
    id?: string
    quantityPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    workItem: WorkItemCreateNestedOneWithoutWorkItemMaterialInput
    workItemMaterialTest?: WorkItemMaterialTestCreateNestedManyWithoutWorkItemMaterialInput
  }

  export type WorkItemMaterialUncheckedCreateWithoutMaterialInput = {
    id?: string
    workItemId: string
    quantityPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    workItemMaterialTest?: WorkItemMaterialTestUncheckedCreateNestedManyWithoutWorkItemMaterialInput
  }

  export type WorkItemMaterialCreateOrConnectWithoutMaterialInput = {
    where: WorkItemMaterialWhereUniqueInput
    create: XOR<WorkItemMaterialCreateWithoutMaterialInput, WorkItemMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type WorkItemMaterialCreateManyMaterialInputEnvelope = {
    data: WorkItemMaterialCreateManyMaterialInput | WorkItemMaterialCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type UnitUpsertWithoutMaterialInput = {
    update: XOR<UnitUpdateWithoutMaterialInput, UnitUncheckedUpdateWithoutMaterialInput>
    create: XOR<UnitCreateWithoutMaterialInput, UnitUncheckedCreateWithoutMaterialInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutMaterialInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutMaterialInput, UnitUncheckedUpdateWithoutMaterialInput>
  }

  export type UnitUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workItem?: WorkItemUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workItem?: WorkItemUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type ProjectMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
    where: ProjectMaterialWhereUniqueInput
    update: XOR<ProjectMaterialUpdateWithoutMaterialInput, ProjectMaterialUncheckedUpdateWithoutMaterialInput>
    create: XOR<ProjectMaterialCreateWithoutMaterialInput, ProjectMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type ProjectMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
    where: ProjectMaterialWhereUniqueInput
    data: XOR<ProjectMaterialUpdateWithoutMaterialInput, ProjectMaterialUncheckedUpdateWithoutMaterialInput>
  }

  export type ProjectMaterialUpdateManyWithWhereWithoutMaterialInput = {
    where: ProjectMaterialScalarWhereInput
    data: XOR<ProjectMaterialUpdateManyMutationInput, ProjectMaterialUncheckedUpdateManyWithoutMaterialInput>
  }

  export type ProjectMaterialScalarWhereInput = {
    AND?: ProjectMaterialScalarWhereInput | ProjectMaterialScalarWhereInput[]
    OR?: ProjectMaterialScalarWhereInput[]
    NOT?: ProjectMaterialScalarWhereInput | ProjectMaterialScalarWhereInput[]
    id?: UuidFilter<"ProjectMaterial"> | string
    projectWorkItemId?: UuidFilter<"ProjectMaterial"> | string
    materialId?: UuidFilter<"ProjectMaterial"> | string
    quantity?: DecimalFilter<"ProjectMaterial"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ProjectMaterial"> | Date | string
  }

  export type WorkItemMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
    where: WorkItemMaterialWhereUniqueInput
    update: XOR<WorkItemMaterialUpdateWithoutMaterialInput, WorkItemMaterialUncheckedUpdateWithoutMaterialInput>
    create: XOR<WorkItemMaterialCreateWithoutMaterialInput, WorkItemMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type WorkItemMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
    where: WorkItemMaterialWhereUniqueInput
    data: XOR<WorkItemMaterialUpdateWithoutMaterialInput, WorkItemMaterialUncheckedUpdateWithoutMaterialInput>
  }

  export type WorkItemMaterialUpdateManyWithWhereWithoutMaterialInput = {
    where: WorkItemMaterialScalarWhereInput
    data: XOR<WorkItemMaterialUpdateManyMutationInput, WorkItemMaterialUncheckedUpdateManyWithoutMaterialInput>
  }

  export type WorkItemMaterialScalarWhereInput = {
    AND?: WorkItemMaterialScalarWhereInput | WorkItemMaterialScalarWhereInput[]
    OR?: WorkItemMaterialScalarWhereInput[]
    NOT?: WorkItemMaterialScalarWhereInput | WorkItemMaterialScalarWhereInput[]
    id?: UuidFilter<"WorkItemMaterial"> | string
    workItemId?: UuidFilter<"WorkItemMaterial"> | string
    materialId?: UuidFilter<"WorkItemMaterial"> | string
    quantityPerUnit?: DecimalFilter<"WorkItemMaterial"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"WorkItemMaterial"> | Date | string
  }

  export type ProjectWorkItemCreateWithoutProjectInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    projectMaterial?: ProjectMaterialCreateNestedManyWithoutProjectWorkItemInput
    workItem: WorkItemCreateNestedOneWithoutProjectWorkItemInput
    projectWorkItemTest?: ProjectWorkItemTestCreateNestedManyWithoutProjectWorkItemInput
  }

  export type ProjectWorkItemUncheckedCreateWithoutProjectInput = {
    id?: string
    workItemId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    projectMaterial?: ProjectMaterialUncheckedCreateNestedManyWithoutProjectWorkItemInput
    projectWorkItemTest?: ProjectWorkItemTestUncheckedCreateNestedManyWithoutProjectWorkItemInput
  }

  export type ProjectWorkItemCreateOrConnectWithoutProjectInput = {
    where: ProjectWorkItemWhereUniqueInput
    create: XOR<ProjectWorkItemCreateWithoutProjectInput, ProjectWorkItemUncheckedCreateWithoutProjectInput>
  }

  export type ProjectWorkItemCreateManyProjectInputEnvelope = {
    data: ProjectWorkItemCreateManyProjectInput | ProjectWorkItemCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectWorkItemUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectWorkItemWhereUniqueInput
    update: XOR<ProjectWorkItemUpdateWithoutProjectInput, ProjectWorkItemUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectWorkItemCreateWithoutProjectInput, ProjectWorkItemUncheckedCreateWithoutProjectInput>
  }

  export type ProjectWorkItemUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectWorkItemWhereUniqueInput
    data: XOR<ProjectWorkItemUpdateWithoutProjectInput, ProjectWorkItemUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectWorkItemUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectWorkItemScalarWhereInput
    data: XOR<ProjectWorkItemUpdateManyMutationInput, ProjectWorkItemUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectWorkItemScalarWhereInput = {
    AND?: ProjectWorkItemScalarWhereInput | ProjectWorkItemScalarWhereInput[]
    OR?: ProjectWorkItemScalarWhereInput[]
    NOT?: ProjectWorkItemScalarWhereInput | ProjectWorkItemScalarWhereInput[]
    id?: UuidFilter<"ProjectWorkItem"> | string
    projectId?: UuidFilter<"ProjectWorkItem"> | string
    workItemId?: UuidFilter<"ProjectWorkItem"> | string
    quantity?: DecimalFilter<"ProjectWorkItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ProjectWorkItem"> | Date | string
  }

  export type MaterialCreateWithoutProjectMaterialInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    unit: UnitCreateNestedOneWithoutMaterialInput
    workItemMaterial?: WorkItemMaterialCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutProjectMaterialInput = {
    id?: string
    name: string
    description?: string | null
    unitId: string
    createdAt?: Date | string
    workItemMaterial?: WorkItemMaterialUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutProjectMaterialInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutProjectMaterialInput, MaterialUncheckedCreateWithoutProjectMaterialInput>
  }

  export type ProjectWorkItemCreateWithoutProjectMaterialInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectWorkItemInput
    workItem: WorkItemCreateNestedOneWithoutProjectWorkItemInput
    projectWorkItemTest?: ProjectWorkItemTestCreateNestedManyWithoutProjectWorkItemInput
  }

  export type ProjectWorkItemUncheckedCreateWithoutProjectMaterialInput = {
    id?: string
    projectId: string
    workItemId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    projectWorkItemTest?: ProjectWorkItemTestUncheckedCreateNestedManyWithoutProjectWorkItemInput
  }

  export type ProjectWorkItemCreateOrConnectWithoutProjectMaterialInput = {
    where: ProjectWorkItemWhereUniqueInput
    create: XOR<ProjectWorkItemCreateWithoutProjectMaterialInput, ProjectWorkItemUncheckedCreateWithoutProjectMaterialInput>
  }

  export type ProjectMaterialTestCreateWithoutProjectMaterialInput = {
    id?: string
    onFile?: number
    createdAt?: Date | string
    test: TestCreateNestedOneWithoutProjectMaterialTestInput
  }

  export type ProjectMaterialTestUncheckedCreateWithoutProjectMaterialInput = {
    id?: string
    testId: string
    onFile?: number
    createdAt?: Date | string
  }

  export type ProjectMaterialTestCreateOrConnectWithoutProjectMaterialInput = {
    where: ProjectMaterialTestWhereUniqueInput
    create: XOR<ProjectMaterialTestCreateWithoutProjectMaterialInput, ProjectMaterialTestUncheckedCreateWithoutProjectMaterialInput>
  }

  export type ProjectMaterialTestCreateManyProjectMaterialInputEnvelope = {
    data: ProjectMaterialTestCreateManyProjectMaterialInput | ProjectMaterialTestCreateManyProjectMaterialInput[]
    skipDuplicates?: boolean
  }

  export type MaterialUpsertWithoutProjectMaterialInput = {
    update: XOR<MaterialUpdateWithoutProjectMaterialInput, MaterialUncheckedUpdateWithoutProjectMaterialInput>
    create: XOR<MaterialCreateWithoutProjectMaterialInput, MaterialUncheckedCreateWithoutProjectMaterialInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutProjectMaterialInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutProjectMaterialInput, MaterialUncheckedUpdateWithoutProjectMaterialInput>
  }

  export type MaterialUpdateWithoutProjectMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutMaterialNestedInput
    workItemMaterial?: WorkItemMaterialUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutProjectMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workItemMaterial?: WorkItemMaterialUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type ProjectWorkItemUpsertWithoutProjectMaterialInput = {
    update: XOR<ProjectWorkItemUpdateWithoutProjectMaterialInput, ProjectWorkItemUncheckedUpdateWithoutProjectMaterialInput>
    create: XOR<ProjectWorkItemCreateWithoutProjectMaterialInput, ProjectWorkItemUncheckedCreateWithoutProjectMaterialInput>
    where?: ProjectWorkItemWhereInput
  }

  export type ProjectWorkItemUpdateToOneWithWhereWithoutProjectMaterialInput = {
    where?: ProjectWorkItemWhereInput
    data: XOR<ProjectWorkItemUpdateWithoutProjectMaterialInput, ProjectWorkItemUncheckedUpdateWithoutProjectMaterialInput>
  }

  export type ProjectWorkItemUpdateWithoutProjectMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectWorkItemNestedInput
    workItem?: WorkItemUpdateOneRequiredWithoutProjectWorkItemNestedInput
    projectWorkItemTest?: ProjectWorkItemTestUpdateManyWithoutProjectWorkItemNestedInput
  }

  export type ProjectWorkItemUncheckedUpdateWithoutProjectMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWorkItemTest?: ProjectWorkItemTestUncheckedUpdateManyWithoutProjectWorkItemNestedInput
  }

  export type ProjectMaterialTestUpsertWithWhereUniqueWithoutProjectMaterialInput = {
    where: ProjectMaterialTestWhereUniqueInput
    update: XOR<ProjectMaterialTestUpdateWithoutProjectMaterialInput, ProjectMaterialTestUncheckedUpdateWithoutProjectMaterialInput>
    create: XOR<ProjectMaterialTestCreateWithoutProjectMaterialInput, ProjectMaterialTestUncheckedCreateWithoutProjectMaterialInput>
  }

  export type ProjectMaterialTestUpdateWithWhereUniqueWithoutProjectMaterialInput = {
    where: ProjectMaterialTestWhereUniqueInput
    data: XOR<ProjectMaterialTestUpdateWithoutProjectMaterialInput, ProjectMaterialTestUncheckedUpdateWithoutProjectMaterialInput>
  }

  export type ProjectMaterialTestUpdateManyWithWhereWithoutProjectMaterialInput = {
    where: ProjectMaterialTestScalarWhereInput
    data: XOR<ProjectMaterialTestUpdateManyMutationInput, ProjectMaterialTestUncheckedUpdateManyWithoutProjectMaterialInput>
  }

  export type ProjectMaterialTestScalarWhereInput = {
    AND?: ProjectMaterialTestScalarWhereInput | ProjectMaterialTestScalarWhereInput[]
    OR?: ProjectMaterialTestScalarWhereInput[]
    NOT?: ProjectMaterialTestScalarWhereInput | ProjectMaterialTestScalarWhereInput[]
    id?: UuidFilter<"ProjectMaterialTest"> | string
    testId?: UuidFilter<"ProjectMaterialTest"> | string
    projectMaterialId?: UuidFilter<"ProjectMaterialTest"> | string
    onFile?: IntFilter<"ProjectMaterialTest"> | number
    createdAt?: DateTimeFilter<"ProjectMaterialTest"> | Date | string
  }

  export type ProjectMaterialCreateWithoutProjectMaterialTestInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    material: MaterialCreateNestedOneWithoutProjectMaterialInput
    projectWorkItem: ProjectWorkItemCreateNestedOneWithoutProjectMaterialInput
  }

  export type ProjectMaterialUncheckedCreateWithoutProjectMaterialTestInput = {
    id?: string
    projectWorkItemId: string
    materialId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProjectMaterialCreateOrConnectWithoutProjectMaterialTestInput = {
    where: ProjectMaterialWhereUniqueInput
    create: XOR<ProjectMaterialCreateWithoutProjectMaterialTestInput, ProjectMaterialUncheckedCreateWithoutProjectMaterialTestInput>
  }

  export type TestCreateWithoutProjectMaterialTestInput = {
    id?: string
    name: string
    createdAt?: Date | string
    projectWorkItemTest?: ProjectWorkItemTestCreateNestedManyWithoutTestInput
    workItemMaterialTest?: WorkItemMaterialTestCreateNestedManyWithoutTestInput
    workItemTest?: WorkItemTestCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutProjectMaterialTestInput = {
    id?: string
    name: string
    createdAt?: Date | string
    projectWorkItemTest?: ProjectWorkItemTestUncheckedCreateNestedManyWithoutTestInput
    workItemMaterialTest?: WorkItemMaterialTestUncheckedCreateNestedManyWithoutTestInput
    workItemTest?: WorkItemTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutProjectMaterialTestInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutProjectMaterialTestInput, TestUncheckedCreateWithoutProjectMaterialTestInput>
  }

  export type ProjectMaterialUpsertWithoutProjectMaterialTestInput = {
    update: XOR<ProjectMaterialUpdateWithoutProjectMaterialTestInput, ProjectMaterialUncheckedUpdateWithoutProjectMaterialTestInput>
    create: XOR<ProjectMaterialCreateWithoutProjectMaterialTestInput, ProjectMaterialUncheckedCreateWithoutProjectMaterialTestInput>
    where?: ProjectMaterialWhereInput
  }

  export type ProjectMaterialUpdateToOneWithWhereWithoutProjectMaterialTestInput = {
    where?: ProjectMaterialWhereInput
    data: XOR<ProjectMaterialUpdateWithoutProjectMaterialTestInput, ProjectMaterialUncheckedUpdateWithoutProjectMaterialTestInput>
  }

  export type ProjectMaterialUpdateWithoutProjectMaterialTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneRequiredWithoutProjectMaterialNestedInput
    projectWorkItem?: ProjectWorkItemUpdateOneRequiredWithoutProjectMaterialNestedInput
  }

  export type ProjectMaterialUncheckedUpdateWithoutProjectMaterialTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectWorkItemId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUpsertWithoutProjectMaterialTestInput = {
    update: XOR<TestUpdateWithoutProjectMaterialTestInput, TestUncheckedUpdateWithoutProjectMaterialTestInput>
    create: XOR<TestCreateWithoutProjectMaterialTestInput, TestUncheckedCreateWithoutProjectMaterialTestInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutProjectMaterialTestInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutProjectMaterialTestInput, TestUncheckedUpdateWithoutProjectMaterialTestInput>
  }

  export type TestUpdateWithoutProjectMaterialTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWorkItemTest?: ProjectWorkItemTestUpdateManyWithoutTestNestedInput
    workItemMaterialTest?: WorkItemMaterialTestUpdateManyWithoutTestNestedInput
    workItemTest?: WorkItemTestUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutProjectMaterialTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWorkItemTest?: ProjectWorkItemTestUncheckedUpdateManyWithoutTestNestedInput
    workItemMaterialTest?: WorkItemMaterialTestUncheckedUpdateManyWithoutTestNestedInput
    workItemTest?: WorkItemTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type ProjectMaterialCreateWithoutProjectWorkItemInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    material: MaterialCreateNestedOneWithoutProjectMaterialInput
    projectMaterialTest?: ProjectMaterialTestCreateNestedManyWithoutProjectMaterialInput
  }

  export type ProjectMaterialUncheckedCreateWithoutProjectWorkItemInput = {
    id?: string
    materialId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    projectMaterialTest?: ProjectMaterialTestUncheckedCreateNestedManyWithoutProjectMaterialInput
  }

  export type ProjectMaterialCreateOrConnectWithoutProjectWorkItemInput = {
    where: ProjectMaterialWhereUniqueInput
    create: XOR<ProjectMaterialCreateWithoutProjectWorkItemInput, ProjectMaterialUncheckedCreateWithoutProjectWorkItemInput>
  }

  export type ProjectMaterialCreateManyProjectWorkItemInputEnvelope = {
    data: ProjectMaterialCreateManyProjectWorkItemInput | ProjectMaterialCreateManyProjectWorkItemInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutProjectWorkItemInput = {
    id?: string
    contractId: string
    contractName: string
    contractor: string
    limits?: string | null
    location?: string | null
    dateStarted: Date | string
    createdAt?: Date | string
    materialsEngineer: string
    contractCost: Decimal | DecimalJsLike | number | string
  }

  export type ProjectUncheckedCreateWithoutProjectWorkItemInput = {
    id?: string
    contractId: string
    contractName: string
    contractor: string
    limits?: string | null
    location?: string | null
    dateStarted: Date | string
    createdAt?: Date | string
    materialsEngineer: string
    contractCost: Decimal | DecimalJsLike | number | string
  }

  export type ProjectCreateOrConnectWithoutProjectWorkItemInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectWorkItemInput, ProjectUncheckedCreateWithoutProjectWorkItemInput>
  }

  export type WorkItemCreateWithoutProjectWorkItemInput = {
    id?: string
    itemNo: string
    description?: string | null
    createdAt?: Date | string
    unit: UnitCreateNestedOneWithoutWorkItemInput
    workItemMaterial?: WorkItemMaterialCreateNestedManyWithoutWorkItemInput
    workItemTest?: WorkItemTestCreateNestedManyWithoutWorkItemInput
  }

  export type WorkItemUncheckedCreateWithoutProjectWorkItemInput = {
    id?: string
    itemNo: string
    description?: string | null
    unitId: string
    createdAt?: Date | string
    workItemMaterial?: WorkItemMaterialUncheckedCreateNestedManyWithoutWorkItemInput
    workItemTest?: WorkItemTestUncheckedCreateNestedManyWithoutWorkItemInput
  }

  export type WorkItemCreateOrConnectWithoutProjectWorkItemInput = {
    where: WorkItemWhereUniqueInput
    create: XOR<WorkItemCreateWithoutProjectWorkItemInput, WorkItemUncheckedCreateWithoutProjectWorkItemInput>
  }

  export type ProjectWorkItemTestCreateWithoutProjectWorkItemInput = {
    id?: string
    onFile?: number
    createdAt?: Date | string
    test: TestCreateNestedOneWithoutProjectWorkItemTestInput
  }

  export type ProjectWorkItemTestUncheckedCreateWithoutProjectWorkItemInput = {
    id?: string
    testId: string
    onFile?: number
    createdAt?: Date | string
  }

  export type ProjectWorkItemTestCreateOrConnectWithoutProjectWorkItemInput = {
    where: ProjectWorkItemTestWhereUniqueInput
    create: XOR<ProjectWorkItemTestCreateWithoutProjectWorkItemInput, ProjectWorkItemTestUncheckedCreateWithoutProjectWorkItemInput>
  }

  export type ProjectWorkItemTestCreateManyProjectWorkItemInputEnvelope = {
    data: ProjectWorkItemTestCreateManyProjectWorkItemInput | ProjectWorkItemTestCreateManyProjectWorkItemInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMaterialUpsertWithWhereUniqueWithoutProjectWorkItemInput = {
    where: ProjectMaterialWhereUniqueInput
    update: XOR<ProjectMaterialUpdateWithoutProjectWorkItemInput, ProjectMaterialUncheckedUpdateWithoutProjectWorkItemInput>
    create: XOR<ProjectMaterialCreateWithoutProjectWorkItemInput, ProjectMaterialUncheckedCreateWithoutProjectWorkItemInput>
  }

  export type ProjectMaterialUpdateWithWhereUniqueWithoutProjectWorkItemInput = {
    where: ProjectMaterialWhereUniqueInput
    data: XOR<ProjectMaterialUpdateWithoutProjectWorkItemInput, ProjectMaterialUncheckedUpdateWithoutProjectWorkItemInput>
  }

  export type ProjectMaterialUpdateManyWithWhereWithoutProjectWorkItemInput = {
    where: ProjectMaterialScalarWhereInput
    data: XOR<ProjectMaterialUpdateManyMutationInput, ProjectMaterialUncheckedUpdateManyWithoutProjectWorkItemInput>
  }

  export type ProjectUpsertWithoutProjectWorkItemInput = {
    update: XOR<ProjectUpdateWithoutProjectWorkItemInput, ProjectUncheckedUpdateWithoutProjectWorkItemInput>
    create: XOR<ProjectCreateWithoutProjectWorkItemInput, ProjectUncheckedCreateWithoutProjectWorkItemInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectWorkItemInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectWorkItemInput, ProjectUncheckedUpdateWithoutProjectWorkItemInput>
  }

  export type ProjectUpdateWithoutProjectWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    contractName?: StringFieldUpdateOperationsInput | string
    contractor?: StringFieldUpdateOperationsInput | string
    limits?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materialsEngineer?: StringFieldUpdateOperationsInput | string
    contractCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProjectUncheckedUpdateWithoutProjectWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    contractName?: StringFieldUpdateOperationsInput | string
    contractor?: StringFieldUpdateOperationsInput | string
    limits?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materialsEngineer?: StringFieldUpdateOperationsInput | string
    contractCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type WorkItemUpsertWithoutProjectWorkItemInput = {
    update: XOR<WorkItemUpdateWithoutProjectWorkItemInput, WorkItemUncheckedUpdateWithoutProjectWorkItemInput>
    create: XOR<WorkItemCreateWithoutProjectWorkItemInput, WorkItemUncheckedCreateWithoutProjectWorkItemInput>
    where?: WorkItemWhereInput
  }

  export type WorkItemUpdateToOneWithWhereWithoutProjectWorkItemInput = {
    where?: WorkItemWhereInput
    data: XOR<WorkItemUpdateWithoutProjectWorkItemInput, WorkItemUncheckedUpdateWithoutProjectWorkItemInput>
  }

  export type WorkItemUpdateWithoutProjectWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemNo?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutWorkItemNestedInput
    workItemMaterial?: WorkItemMaterialUpdateManyWithoutWorkItemNestedInput
    workItemTest?: WorkItemTestUpdateManyWithoutWorkItemNestedInput
  }

  export type WorkItemUncheckedUpdateWithoutProjectWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemNo?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workItemMaterial?: WorkItemMaterialUncheckedUpdateManyWithoutWorkItemNestedInput
    workItemTest?: WorkItemTestUncheckedUpdateManyWithoutWorkItemNestedInput
  }

  export type ProjectWorkItemTestUpsertWithWhereUniqueWithoutProjectWorkItemInput = {
    where: ProjectWorkItemTestWhereUniqueInput
    update: XOR<ProjectWorkItemTestUpdateWithoutProjectWorkItemInput, ProjectWorkItemTestUncheckedUpdateWithoutProjectWorkItemInput>
    create: XOR<ProjectWorkItemTestCreateWithoutProjectWorkItemInput, ProjectWorkItemTestUncheckedCreateWithoutProjectWorkItemInput>
  }

  export type ProjectWorkItemTestUpdateWithWhereUniqueWithoutProjectWorkItemInput = {
    where: ProjectWorkItemTestWhereUniqueInput
    data: XOR<ProjectWorkItemTestUpdateWithoutProjectWorkItemInput, ProjectWorkItemTestUncheckedUpdateWithoutProjectWorkItemInput>
  }

  export type ProjectWorkItemTestUpdateManyWithWhereWithoutProjectWorkItemInput = {
    where: ProjectWorkItemTestScalarWhereInput
    data: XOR<ProjectWorkItemTestUpdateManyMutationInput, ProjectWorkItemTestUncheckedUpdateManyWithoutProjectWorkItemInput>
  }

  export type ProjectWorkItemTestScalarWhereInput = {
    AND?: ProjectWorkItemTestScalarWhereInput | ProjectWorkItemTestScalarWhereInput[]
    OR?: ProjectWorkItemTestScalarWhereInput[]
    NOT?: ProjectWorkItemTestScalarWhereInput | ProjectWorkItemTestScalarWhereInput[]
    id?: UuidFilter<"ProjectWorkItemTest"> | string
    testId?: UuidFilter<"ProjectWorkItemTest"> | string
    projectWorkItemId?: UuidFilter<"ProjectWorkItemTest"> | string
    onFile?: IntFilter<"ProjectWorkItemTest"> | number
    createdAt?: DateTimeFilter<"ProjectWorkItemTest"> | Date | string
  }

  export type ProjectWorkItemCreateWithoutProjectWorkItemTestInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    projectMaterial?: ProjectMaterialCreateNestedManyWithoutProjectWorkItemInput
    project: ProjectCreateNestedOneWithoutProjectWorkItemInput
    workItem: WorkItemCreateNestedOneWithoutProjectWorkItemInput
  }

  export type ProjectWorkItemUncheckedCreateWithoutProjectWorkItemTestInput = {
    id?: string
    projectId: string
    workItemId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    projectMaterial?: ProjectMaterialUncheckedCreateNestedManyWithoutProjectWorkItemInput
  }

  export type ProjectWorkItemCreateOrConnectWithoutProjectWorkItemTestInput = {
    where: ProjectWorkItemWhereUniqueInput
    create: XOR<ProjectWorkItemCreateWithoutProjectWorkItemTestInput, ProjectWorkItemUncheckedCreateWithoutProjectWorkItemTestInput>
  }

  export type TestCreateWithoutProjectWorkItemTestInput = {
    id?: string
    name: string
    createdAt?: Date | string
    projectMaterialTest?: ProjectMaterialTestCreateNestedManyWithoutTestInput
    workItemMaterialTest?: WorkItemMaterialTestCreateNestedManyWithoutTestInput
    workItemTest?: WorkItemTestCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutProjectWorkItemTestInput = {
    id?: string
    name: string
    createdAt?: Date | string
    projectMaterialTest?: ProjectMaterialTestUncheckedCreateNestedManyWithoutTestInput
    workItemMaterialTest?: WorkItemMaterialTestUncheckedCreateNestedManyWithoutTestInput
    workItemTest?: WorkItemTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutProjectWorkItemTestInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutProjectWorkItemTestInput, TestUncheckedCreateWithoutProjectWorkItemTestInput>
  }

  export type ProjectWorkItemUpsertWithoutProjectWorkItemTestInput = {
    update: XOR<ProjectWorkItemUpdateWithoutProjectWorkItemTestInput, ProjectWorkItemUncheckedUpdateWithoutProjectWorkItemTestInput>
    create: XOR<ProjectWorkItemCreateWithoutProjectWorkItemTestInput, ProjectWorkItemUncheckedCreateWithoutProjectWorkItemTestInput>
    where?: ProjectWorkItemWhereInput
  }

  export type ProjectWorkItemUpdateToOneWithWhereWithoutProjectWorkItemTestInput = {
    where?: ProjectWorkItemWhereInput
    data: XOR<ProjectWorkItemUpdateWithoutProjectWorkItemTestInput, ProjectWorkItemUncheckedUpdateWithoutProjectWorkItemTestInput>
  }

  export type ProjectWorkItemUpdateWithoutProjectWorkItemTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterial?: ProjectMaterialUpdateManyWithoutProjectWorkItemNestedInput
    project?: ProjectUpdateOneRequiredWithoutProjectWorkItemNestedInput
    workItem?: WorkItemUpdateOneRequiredWithoutProjectWorkItemNestedInput
  }

  export type ProjectWorkItemUncheckedUpdateWithoutProjectWorkItemTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterial?: ProjectMaterialUncheckedUpdateManyWithoutProjectWorkItemNestedInput
  }

  export type TestUpsertWithoutProjectWorkItemTestInput = {
    update: XOR<TestUpdateWithoutProjectWorkItemTestInput, TestUncheckedUpdateWithoutProjectWorkItemTestInput>
    create: XOR<TestCreateWithoutProjectWorkItemTestInput, TestUncheckedCreateWithoutProjectWorkItemTestInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutProjectWorkItemTestInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutProjectWorkItemTestInput, TestUncheckedUpdateWithoutProjectWorkItemTestInput>
  }

  export type TestUpdateWithoutProjectWorkItemTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterialTest?: ProjectMaterialTestUpdateManyWithoutTestNestedInput
    workItemMaterialTest?: WorkItemMaterialTestUpdateManyWithoutTestNestedInput
    workItemTest?: WorkItemTestUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutProjectWorkItemTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterialTest?: ProjectMaterialTestUncheckedUpdateManyWithoutTestNestedInput
    workItemMaterialTest?: WorkItemMaterialTestUncheckedUpdateManyWithoutTestNestedInput
    workItemTest?: WorkItemTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type ProjectMaterialTestCreateWithoutTestInput = {
    id?: string
    onFile?: number
    createdAt?: Date | string
    projectMaterial: ProjectMaterialCreateNestedOneWithoutProjectMaterialTestInput
  }

  export type ProjectMaterialTestUncheckedCreateWithoutTestInput = {
    id?: string
    projectMaterialId: string
    onFile?: number
    createdAt?: Date | string
  }

  export type ProjectMaterialTestCreateOrConnectWithoutTestInput = {
    where: ProjectMaterialTestWhereUniqueInput
    create: XOR<ProjectMaterialTestCreateWithoutTestInput, ProjectMaterialTestUncheckedCreateWithoutTestInput>
  }

  export type ProjectMaterialTestCreateManyTestInputEnvelope = {
    data: ProjectMaterialTestCreateManyTestInput | ProjectMaterialTestCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type ProjectWorkItemTestCreateWithoutTestInput = {
    id?: string
    onFile?: number
    createdAt?: Date | string
    projectWorkItem: ProjectWorkItemCreateNestedOneWithoutProjectWorkItemTestInput
  }

  export type ProjectWorkItemTestUncheckedCreateWithoutTestInput = {
    id?: string
    projectWorkItemId: string
    onFile?: number
    createdAt?: Date | string
  }

  export type ProjectWorkItemTestCreateOrConnectWithoutTestInput = {
    where: ProjectWorkItemTestWhereUniqueInput
    create: XOR<ProjectWorkItemTestCreateWithoutTestInput, ProjectWorkItemTestUncheckedCreateWithoutTestInput>
  }

  export type ProjectWorkItemTestCreateManyTestInputEnvelope = {
    data: ProjectWorkItemTestCreateManyTestInput | ProjectWorkItemTestCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type WorkItemMaterialTestCreateWithoutTestInput = {
    id?: string
    unitsPerTest: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    workItemMaterial: WorkItemMaterialCreateNestedOneWithoutWorkItemMaterialTestInput
  }

  export type WorkItemMaterialTestUncheckedCreateWithoutTestInput = {
    id?: string
    workItemMaterialId: string
    unitsPerTest: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemMaterialTestCreateOrConnectWithoutTestInput = {
    where: WorkItemMaterialTestWhereUniqueInput
    create: XOR<WorkItemMaterialTestCreateWithoutTestInput, WorkItemMaterialTestUncheckedCreateWithoutTestInput>
  }

  export type WorkItemMaterialTestCreateManyTestInputEnvelope = {
    data: WorkItemMaterialTestCreateManyTestInput | WorkItemMaterialTestCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type WorkItemTestCreateWithoutTestInput = {
    id?: string
    testQuantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    workItem: WorkItemCreateNestedOneWithoutWorkItemTestInput
  }

  export type WorkItemTestUncheckedCreateWithoutTestInput = {
    id?: string
    workItemId: string
    testQuantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemTestCreateOrConnectWithoutTestInput = {
    where: WorkItemTestWhereUniqueInput
    create: XOR<WorkItemTestCreateWithoutTestInput, WorkItemTestUncheckedCreateWithoutTestInput>
  }

  export type WorkItemTestCreateManyTestInputEnvelope = {
    data: WorkItemTestCreateManyTestInput | WorkItemTestCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMaterialTestUpsertWithWhereUniqueWithoutTestInput = {
    where: ProjectMaterialTestWhereUniqueInput
    update: XOR<ProjectMaterialTestUpdateWithoutTestInput, ProjectMaterialTestUncheckedUpdateWithoutTestInput>
    create: XOR<ProjectMaterialTestCreateWithoutTestInput, ProjectMaterialTestUncheckedCreateWithoutTestInput>
  }

  export type ProjectMaterialTestUpdateWithWhereUniqueWithoutTestInput = {
    where: ProjectMaterialTestWhereUniqueInput
    data: XOR<ProjectMaterialTestUpdateWithoutTestInput, ProjectMaterialTestUncheckedUpdateWithoutTestInput>
  }

  export type ProjectMaterialTestUpdateManyWithWhereWithoutTestInput = {
    where: ProjectMaterialTestScalarWhereInput
    data: XOR<ProjectMaterialTestUpdateManyMutationInput, ProjectMaterialTestUncheckedUpdateManyWithoutTestInput>
  }

  export type ProjectWorkItemTestUpsertWithWhereUniqueWithoutTestInput = {
    where: ProjectWorkItemTestWhereUniqueInput
    update: XOR<ProjectWorkItemTestUpdateWithoutTestInput, ProjectWorkItemTestUncheckedUpdateWithoutTestInput>
    create: XOR<ProjectWorkItemTestCreateWithoutTestInput, ProjectWorkItemTestUncheckedCreateWithoutTestInput>
  }

  export type ProjectWorkItemTestUpdateWithWhereUniqueWithoutTestInput = {
    where: ProjectWorkItemTestWhereUniqueInput
    data: XOR<ProjectWorkItemTestUpdateWithoutTestInput, ProjectWorkItemTestUncheckedUpdateWithoutTestInput>
  }

  export type ProjectWorkItemTestUpdateManyWithWhereWithoutTestInput = {
    where: ProjectWorkItemTestScalarWhereInput
    data: XOR<ProjectWorkItemTestUpdateManyMutationInput, ProjectWorkItemTestUncheckedUpdateManyWithoutTestInput>
  }

  export type WorkItemMaterialTestUpsertWithWhereUniqueWithoutTestInput = {
    where: WorkItemMaterialTestWhereUniqueInput
    update: XOR<WorkItemMaterialTestUpdateWithoutTestInput, WorkItemMaterialTestUncheckedUpdateWithoutTestInput>
    create: XOR<WorkItemMaterialTestCreateWithoutTestInput, WorkItemMaterialTestUncheckedCreateWithoutTestInput>
  }

  export type WorkItemMaterialTestUpdateWithWhereUniqueWithoutTestInput = {
    where: WorkItemMaterialTestWhereUniqueInput
    data: XOR<WorkItemMaterialTestUpdateWithoutTestInput, WorkItemMaterialTestUncheckedUpdateWithoutTestInput>
  }

  export type WorkItemMaterialTestUpdateManyWithWhereWithoutTestInput = {
    where: WorkItemMaterialTestScalarWhereInput
    data: XOR<WorkItemMaterialTestUpdateManyMutationInput, WorkItemMaterialTestUncheckedUpdateManyWithoutTestInput>
  }

  export type WorkItemMaterialTestScalarWhereInput = {
    AND?: WorkItemMaterialTestScalarWhereInput | WorkItemMaterialTestScalarWhereInput[]
    OR?: WorkItemMaterialTestScalarWhereInput[]
    NOT?: WorkItemMaterialTestScalarWhereInput | WorkItemMaterialTestScalarWhereInput[]
    id?: UuidFilter<"WorkItemMaterialTest"> | string
    workItemMaterialId?: UuidFilter<"WorkItemMaterialTest"> | string
    testId?: UuidFilter<"WorkItemMaterialTest"> | string
    unitsPerTest?: DecimalFilter<"WorkItemMaterialTest"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"WorkItemMaterialTest"> | Date | string
  }

  export type WorkItemTestUpsertWithWhereUniqueWithoutTestInput = {
    where: WorkItemTestWhereUniqueInput
    update: XOR<WorkItemTestUpdateWithoutTestInput, WorkItemTestUncheckedUpdateWithoutTestInput>
    create: XOR<WorkItemTestCreateWithoutTestInput, WorkItemTestUncheckedCreateWithoutTestInput>
  }

  export type WorkItemTestUpdateWithWhereUniqueWithoutTestInput = {
    where: WorkItemTestWhereUniqueInput
    data: XOR<WorkItemTestUpdateWithoutTestInput, WorkItemTestUncheckedUpdateWithoutTestInput>
  }

  export type WorkItemTestUpdateManyWithWhereWithoutTestInput = {
    where: WorkItemTestScalarWhereInput
    data: XOR<WorkItemTestUpdateManyMutationInput, WorkItemTestUncheckedUpdateManyWithoutTestInput>
  }

  export type WorkItemTestScalarWhereInput = {
    AND?: WorkItemTestScalarWhereInput | WorkItemTestScalarWhereInput[]
    OR?: WorkItemTestScalarWhereInput[]
    NOT?: WorkItemTestScalarWhereInput | WorkItemTestScalarWhereInput[]
    id?: UuidFilter<"WorkItemTest"> | string
    workItemId?: UuidFilter<"WorkItemTest"> | string
    testId?: UuidFilter<"WorkItemTest"> | string
    testQuantity?: DecimalFilter<"WorkItemTest"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"WorkItemTest"> | Date | string
  }

  export type MaterialCreateWithoutUnitInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    projectMaterial?: ProjectMaterialCreateNestedManyWithoutMaterialInput
    workItemMaterial?: WorkItemMaterialCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutUnitInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    projectMaterial?: ProjectMaterialUncheckedCreateNestedManyWithoutMaterialInput
    workItemMaterial?: WorkItemMaterialUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutUnitInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutUnitInput, MaterialUncheckedCreateWithoutUnitInput>
  }

  export type MaterialCreateManyUnitInputEnvelope = {
    data: MaterialCreateManyUnitInput | MaterialCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type WorkItemCreateWithoutUnitInput = {
    id?: string
    itemNo: string
    description?: string | null
    createdAt?: Date | string
    projectWorkItem?: ProjectWorkItemCreateNestedManyWithoutWorkItemInput
    workItemMaterial?: WorkItemMaterialCreateNestedManyWithoutWorkItemInput
    workItemTest?: WorkItemTestCreateNestedManyWithoutWorkItemInput
  }

  export type WorkItemUncheckedCreateWithoutUnitInput = {
    id?: string
    itemNo: string
    description?: string | null
    createdAt?: Date | string
    projectWorkItem?: ProjectWorkItemUncheckedCreateNestedManyWithoutWorkItemInput
    workItemMaterial?: WorkItemMaterialUncheckedCreateNestedManyWithoutWorkItemInput
    workItemTest?: WorkItemTestUncheckedCreateNestedManyWithoutWorkItemInput
  }

  export type WorkItemCreateOrConnectWithoutUnitInput = {
    where: WorkItemWhereUniqueInput
    create: XOR<WorkItemCreateWithoutUnitInput, WorkItemUncheckedCreateWithoutUnitInput>
  }

  export type WorkItemCreateManyUnitInputEnvelope = {
    data: WorkItemCreateManyUnitInput | WorkItemCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type MaterialUpsertWithWhereUniqueWithoutUnitInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutUnitInput, MaterialUncheckedUpdateWithoutUnitInput>
    create: XOR<MaterialCreateWithoutUnitInput, MaterialUncheckedCreateWithoutUnitInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutUnitInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutUnitInput, MaterialUncheckedUpdateWithoutUnitInput>
  }

  export type MaterialUpdateManyWithWhereWithoutUnitInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutUnitInput>
  }

  export type MaterialScalarWhereInput = {
    AND?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    OR?: MaterialScalarWhereInput[]
    NOT?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    id?: UuidFilter<"Material"> | string
    name?: StringFilter<"Material"> | string
    description?: StringNullableFilter<"Material"> | string | null
    unitId?: UuidFilter<"Material"> | string
    createdAt?: DateTimeFilter<"Material"> | Date | string
  }

  export type WorkItemUpsertWithWhereUniqueWithoutUnitInput = {
    where: WorkItemWhereUniqueInput
    update: XOR<WorkItemUpdateWithoutUnitInput, WorkItemUncheckedUpdateWithoutUnitInput>
    create: XOR<WorkItemCreateWithoutUnitInput, WorkItemUncheckedCreateWithoutUnitInput>
  }

  export type WorkItemUpdateWithWhereUniqueWithoutUnitInput = {
    where: WorkItemWhereUniqueInput
    data: XOR<WorkItemUpdateWithoutUnitInput, WorkItemUncheckedUpdateWithoutUnitInput>
  }

  export type WorkItemUpdateManyWithWhereWithoutUnitInput = {
    where: WorkItemScalarWhereInput
    data: XOR<WorkItemUpdateManyMutationInput, WorkItemUncheckedUpdateManyWithoutUnitInput>
  }

  export type WorkItemScalarWhereInput = {
    AND?: WorkItemScalarWhereInput | WorkItemScalarWhereInput[]
    OR?: WorkItemScalarWhereInput[]
    NOT?: WorkItemScalarWhereInput | WorkItemScalarWhereInput[]
    id?: UuidFilter<"WorkItem"> | string
    itemNo?: StringFilter<"WorkItem"> | string
    description?: StringNullableFilter<"WorkItem"> | string | null
    unitId?: UuidFilter<"WorkItem"> | string
    createdAt?: DateTimeFilter<"WorkItem"> | Date | string
  }

  export type ProjectWorkItemCreateWithoutWorkItemInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    projectMaterial?: ProjectMaterialCreateNestedManyWithoutProjectWorkItemInput
    project: ProjectCreateNestedOneWithoutProjectWorkItemInput
    projectWorkItemTest?: ProjectWorkItemTestCreateNestedManyWithoutProjectWorkItemInput
  }

  export type ProjectWorkItemUncheckedCreateWithoutWorkItemInput = {
    id?: string
    projectId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    projectMaterial?: ProjectMaterialUncheckedCreateNestedManyWithoutProjectWorkItemInput
    projectWorkItemTest?: ProjectWorkItemTestUncheckedCreateNestedManyWithoutProjectWorkItemInput
  }

  export type ProjectWorkItemCreateOrConnectWithoutWorkItemInput = {
    where: ProjectWorkItemWhereUniqueInput
    create: XOR<ProjectWorkItemCreateWithoutWorkItemInput, ProjectWorkItemUncheckedCreateWithoutWorkItemInput>
  }

  export type ProjectWorkItemCreateManyWorkItemInputEnvelope = {
    data: ProjectWorkItemCreateManyWorkItemInput | ProjectWorkItemCreateManyWorkItemInput[]
    skipDuplicates?: boolean
  }

  export type UnitCreateWithoutWorkItemInput = {
    id?: string
    name: string
    abbreviation: string
    createdAt?: Date | string
    material?: MaterialCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutWorkItemInput = {
    id?: string
    name: string
    abbreviation: string
    createdAt?: Date | string
    material?: MaterialUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutWorkItemInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutWorkItemInput, UnitUncheckedCreateWithoutWorkItemInput>
  }

  export type WorkItemMaterialCreateWithoutWorkItemInput = {
    id?: string
    quantityPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    material: MaterialCreateNestedOneWithoutWorkItemMaterialInput
    workItemMaterialTest?: WorkItemMaterialTestCreateNestedManyWithoutWorkItemMaterialInput
  }

  export type WorkItemMaterialUncheckedCreateWithoutWorkItemInput = {
    id?: string
    materialId: string
    quantityPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    workItemMaterialTest?: WorkItemMaterialTestUncheckedCreateNestedManyWithoutWorkItemMaterialInput
  }

  export type WorkItemMaterialCreateOrConnectWithoutWorkItemInput = {
    where: WorkItemMaterialWhereUniqueInput
    create: XOR<WorkItemMaterialCreateWithoutWorkItemInput, WorkItemMaterialUncheckedCreateWithoutWorkItemInput>
  }

  export type WorkItemMaterialCreateManyWorkItemInputEnvelope = {
    data: WorkItemMaterialCreateManyWorkItemInput | WorkItemMaterialCreateManyWorkItemInput[]
    skipDuplicates?: boolean
  }

  export type WorkItemTestCreateWithoutWorkItemInput = {
    id?: string
    testQuantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    test: TestCreateNestedOneWithoutWorkItemTestInput
  }

  export type WorkItemTestUncheckedCreateWithoutWorkItemInput = {
    id?: string
    testId: string
    testQuantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemTestCreateOrConnectWithoutWorkItemInput = {
    where: WorkItemTestWhereUniqueInput
    create: XOR<WorkItemTestCreateWithoutWorkItemInput, WorkItemTestUncheckedCreateWithoutWorkItemInput>
  }

  export type WorkItemTestCreateManyWorkItemInputEnvelope = {
    data: WorkItemTestCreateManyWorkItemInput | WorkItemTestCreateManyWorkItemInput[]
    skipDuplicates?: boolean
  }

  export type ProjectWorkItemUpsertWithWhereUniqueWithoutWorkItemInput = {
    where: ProjectWorkItemWhereUniqueInput
    update: XOR<ProjectWorkItemUpdateWithoutWorkItemInput, ProjectWorkItemUncheckedUpdateWithoutWorkItemInput>
    create: XOR<ProjectWorkItemCreateWithoutWorkItemInput, ProjectWorkItemUncheckedCreateWithoutWorkItemInput>
  }

  export type ProjectWorkItemUpdateWithWhereUniqueWithoutWorkItemInput = {
    where: ProjectWorkItemWhereUniqueInput
    data: XOR<ProjectWorkItemUpdateWithoutWorkItemInput, ProjectWorkItemUncheckedUpdateWithoutWorkItemInput>
  }

  export type ProjectWorkItemUpdateManyWithWhereWithoutWorkItemInput = {
    where: ProjectWorkItemScalarWhereInput
    data: XOR<ProjectWorkItemUpdateManyMutationInput, ProjectWorkItemUncheckedUpdateManyWithoutWorkItemInput>
  }

  export type UnitUpsertWithoutWorkItemInput = {
    update: XOR<UnitUpdateWithoutWorkItemInput, UnitUncheckedUpdateWithoutWorkItemInput>
    create: XOR<UnitCreateWithoutWorkItemInput, UnitUncheckedCreateWithoutWorkItemInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutWorkItemInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutWorkItemInput, UnitUncheckedUpdateWithoutWorkItemInput>
  }

  export type UnitUpdateWithoutWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type WorkItemMaterialUpsertWithWhereUniqueWithoutWorkItemInput = {
    where: WorkItemMaterialWhereUniqueInput
    update: XOR<WorkItemMaterialUpdateWithoutWorkItemInput, WorkItemMaterialUncheckedUpdateWithoutWorkItemInput>
    create: XOR<WorkItemMaterialCreateWithoutWorkItemInput, WorkItemMaterialUncheckedCreateWithoutWorkItemInput>
  }

  export type WorkItemMaterialUpdateWithWhereUniqueWithoutWorkItemInput = {
    where: WorkItemMaterialWhereUniqueInput
    data: XOR<WorkItemMaterialUpdateWithoutWorkItemInput, WorkItemMaterialUncheckedUpdateWithoutWorkItemInput>
  }

  export type WorkItemMaterialUpdateManyWithWhereWithoutWorkItemInput = {
    where: WorkItemMaterialScalarWhereInput
    data: XOR<WorkItemMaterialUpdateManyMutationInput, WorkItemMaterialUncheckedUpdateManyWithoutWorkItemInput>
  }

  export type WorkItemTestUpsertWithWhereUniqueWithoutWorkItemInput = {
    where: WorkItemTestWhereUniqueInput
    update: XOR<WorkItemTestUpdateWithoutWorkItemInput, WorkItemTestUncheckedUpdateWithoutWorkItemInput>
    create: XOR<WorkItemTestCreateWithoutWorkItemInput, WorkItemTestUncheckedCreateWithoutWorkItemInput>
  }

  export type WorkItemTestUpdateWithWhereUniqueWithoutWorkItemInput = {
    where: WorkItemTestWhereUniqueInput
    data: XOR<WorkItemTestUpdateWithoutWorkItemInput, WorkItemTestUncheckedUpdateWithoutWorkItemInput>
  }

  export type WorkItemTestUpdateManyWithWhereWithoutWorkItemInput = {
    where: WorkItemTestScalarWhereInput
    data: XOR<WorkItemTestUpdateManyMutationInput, WorkItemTestUncheckedUpdateManyWithoutWorkItemInput>
  }

  export type MaterialCreateWithoutWorkItemMaterialInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    unit: UnitCreateNestedOneWithoutMaterialInput
    projectMaterial?: ProjectMaterialCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutWorkItemMaterialInput = {
    id?: string
    name: string
    description?: string | null
    unitId: string
    createdAt?: Date | string
    projectMaterial?: ProjectMaterialUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutWorkItemMaterialInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutWorkItemMaterialInput, MaterialUncheckedCreateWithoutWorkItemMaterialInput>
  }

  export type WorkItemCreateWithoutWorkItemMaterialInput = {
    id?: string
    itemNo: string
    description?: string | null
    createdAt?: Date | string
    projectWorkItem?: ProjectWorkItemCreateNestedManyWithoutWorkItemInput
    unit: UnitCreateNestedOneWithoutWorkItemInput
    workItemTest?: WorkItemTestCreateNestedManyWithoutWorkItemInput
  }

  export type WorkItemUncheckedCreateWithoutWorkItemMaterialInput = {
    id?: string
    itemNo: string
    description?: string | null
    unitId: string
    createdAt?: Date | string
    projectWorkItem?: ProjectWorkItemUncheckedCreateNestedManyWithoutWorkItemInput
    workItemTest?: WorkItemTestUncheckedCreateNestedManyWithoutWorkItemInput
  }

  export type WorkItemCreateOrConnectWithoutWorkItemMaterialInput = {
    where: WorkItemWhereUniqueInput
    create: XOR<WorkItemCreateWithoutWorkItemMaterialInput, WorkItemUncheckedCreateWithoutWorkItemMaterialInput>
  }

  export type WorkItemMaterialTestCreateWithoutWorkItemMaterialInput = {
    id?: string
    unitsPerTest: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    test: TestCreateNestedOneWithoutWorkItemMaterialTestInput
  }

  export type WorkItemMaterialTestUncheckedCreateWithoutWorkItemMaterialInput = {
    id?: string
    testId: string
    unitsPerTest: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemMaterialTestCreateOrConnectWithoutWorkItemMaterialInput = {
    where: WorkItemMaterialTestWhereUniqueInput
    create: XOR<WorkItemMaterialTestCreateWithoutWorkItemMaterialInput, WorkItemMaterialTestUncheckedCreateWithoutWorkItemMaterialInput>
  }

  export type WorkItemMaterialTestCreateManyWorkItemMaterialInputEnvelope = {
    data: WorkItemMaterialTestCreateManyWorkItemMaterialInput | WorkItemMaterialTestCreateManyWorkItemMaterialInput[]
    skipDuplicates?: boolean
  }

  export type MaterialUpsertWithoutWorkItemMaterialInput = {
    update: XOR<MaterialUpdateWithoutWorkItemMaterialInput, MaterialUncheckedUpdateWithoutWorkItemMaterialInput>
    create: XOR<MaterialCreateWithoutWorkItemMaterialInput, MaterialUncheckedCreateWithoutWorkItemMaterialInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutWorkItemMaterialInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutWorkItemMaterialInput, MaterialUncheckedUpdateWithoutWorkItemMaterialInput>
  }

  export type MaterialUpdateWithoutWorkItemMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutMaterialNestedInput
    projectMaterial?: ProjectMaterialUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutWorkItemMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterial?: ProjectMaterialUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type WorkItemUpsertWithoutWorkItemMaterialInput = {
    update: XOR<WorkItemUpdateWithoutWorkItemMaterialInput, WorkItemUncheckedUpdateWithoutWorkItemMaterialInput>
    create: XOR<WorkItemCreateWithoutWorkItemMaterialInput, WorkItemUncheckedCreateWithoutWorkItemMaterialInput>
    where?: WorkItemWhereInput
  }

  export type WorkItemUpdateToOneWithWhereWithoutWorkItemMaterialInput = {
    where?: WorkItemWhereInput
    data: XOR<WorkItemUpdateWithoutWorkItemMaterialInput, WorkItemUncheckedUpdateWithoutWorkItemMaterialInput>
  }

  export type WorkItemUpdateWithoutWorkItemMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemNo?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWorkItem?: ProjectWorkItemUpdateManyWithoutWorkItemNestedInput
    unit?: UnitUpdateOneRequiredWithoutWorkItemNestedInput
    workItemTest?: WorkItemTestUpdateManyWithoutWorkItemNestedInput
  }

  export type WorkItemUncheckedUpdateWithoutWorkItemMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemNo?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWorkItem?: ProjectWorkItemUncheckedUpdateManyWithoutWorkItemNestedInput
    workItemTest?: WorkItemTestUncheckedUpdateManyWithoutWorkItemNestedInput
  }

  export type WorkItemMaterialTestUpsertWithWhereUniqueWithoutWorkItemMaterialInput = {
    where: WorkItemMaterialTestWhereUniqueInput
    update: XOR<WorkItemMaterialTestUpdateWithoutWorkItemMaterialInput, WorkItemMaterialTestUncheckedUpdateWithoutWorkItemMaterialInput>
    create: XOR<WorkItemMaterialTestCreateWithoutWorkItemMaterialInput, WorkItemMaterialTestUncheckedCreateWithoutWorkItemMaterialInput>
  }

  export type WorkItemMaterialTestUpdateWithWhereUniqueWithoutWorkItemMaterialInput = {
    where: WorkItemMaterialTestWhereUniqueInput
    data: XOR<WorkItemMaterialTestUpdateWithoutWorkItemMaterialInput, WorkItemMaterialTestUncheckedUpdateWithoutWorkItemMaterialInput>
  }

  export type WorkItemMaterialTestUpdateManyWithWhereWithoutWorkItemMaterialInput = {
    where: WorkItemMaterialTestScalarWhereInput
    data: XOR<WorkItemMaterialTestUpdateManyMutationInput, WorkItemMaterialTestUncheckedUpdateManyWithoutWorkItemMaterialInput>
  }

  export type TestCreateWithoutWorkItemMaterialTestInput = {
    id?: string
    name: string
    createdAt?: Date | string
    projectMaterialTest?: ProjectMaterialTestCreateNestedManyWithoutTestInput
    projectWorkItemTest?: ProjectWorkItemTestCreateNestedManyWithoutTestInput
    workItemTest?: WorkItemTestCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutWorkItemMaterialTestInput = {
    id?: string
    name: string
    createdAt?: Date | string
    projectMaterialTest?: ProjectMaterialTestUncheckedCreateNestedManyWithoutTestInput
    projectWorkItemTest?: ProjectWorkItemTestUncheckedCreateNestedManyWithoutTestInput
    workItemTest?: WorkItemTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutWorkItemMaterialTestInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutWorkItemMaterialTestInput, TestUncheckedCreateWithoutWorkItemMaterialTestInput>
  }

  export type WorkItemMaterialCreateWithoutWorkItemMaterialTestInput = {
    id?: string
    quantityPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    material: MaterialCreateNestedOneWithoutWorkItemMaterialInput
    workItem: WorkItemCreateNestedOneWithoutWorkItemMaterialInput
  }

  export type WorkItemMaterialUncheckedCreateWithoutWorkItemMaterialTestInput = {
    id?: string
    workItemId: string
    materialId: string
    quantityPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemMaterialCreateOrConnectWithoutWorkItemMaterialTestInput = {
    where: WorkItemMaterialWhereUniqueInput
    create: XOR<WorkItemMaterialCreateWithoutWorkItemMaterialTestInput, WorkItemMaterialUncheckedCreateWithoutWorkItemMaterialTestInput>
  }

  export type TestUpsertWithoutWorkItemMaterialTestInput = {
    update: XOR<TestUpdateWithoutWorkItemMaterialTestInput, TestUncheckedUpdateWithoutWorkItemMaterialTestInput>
    create: XOR<TestCreateWithoutWorkItemMaterialTestInput, TestUncheckedCreateWithoutWorkItemMaterialTestInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutWorkItemMaterialTestInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutWorkItemMaterialTestInput, TestUncheckedUpdateWithoutWorkItemMaterialTestInput>
  }

  export type TestUpdateWithoutWorkItemMaterialTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterialTest?: ProjectMaterialTestUpdateManyWithoutTestNestedInput
    projectWorkItemTest?: ProjectWorkItemTestUpdateManyWithoutTestNestedInput
    workItemTest?: WorkItemTestUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutWorkItemMaterialTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterialTest?: ProjectMaterialTestUncheckedUpdateManyWithoutTestNestedInput
    projectWorkItemTest?: ProjectWorkItemTestUncheckedUpdateManyWithoutTestNestedInput
    workItemTest?: WorkItemTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type WorkItemMaterialUpsertWithoutWorkItemMaterialTestInput = {
    update: XOR<WorkItemMaterialUpdateWithoutWorkItemMaterialTestInput, WorkItemMaterialUncheckedUpdateWithoutWorkItemMaterialTestInput>
    create: XOR<WorkItemMaterialCreateWithoutWorkItemMaterialTestInput, WorkItemMaterialUncheckedCreateWithoutWorkItemMaterialTestInput>
    where?: WorkItemMaterialWhereInput
  }

  export type WorkItemMaterialUpdateToOneWithWhereWithoutWorkItemMaterialTestInput = {
    where?: WorkItemMaterialWhereInput
    data: XOR<WorkItemMaterialUpdateWithoutWorkItemMaterialTestInput, WorkItemMaterialUncheckedUpdateWithoutWorkItemMaterialTestInput>
  }

  export type WorkItemMaterialUpdateWithoutWorkItemMaterialTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneRequiredWithoutWorkItemMaterialNestedInput
    workItem?: WorkItemUpdateOneRequiredWithoutWorkItemMaterialNestedInput
  }

  export type WorkItemMaterialUncheckedUpdateWithoutWorkItemMaterialTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantityPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCreateWithoutWorkItemTestInput = {
    id?: string
    name: string
    createdAt?: Date | string
    projectMaterialTest?: ProjectMaterialTestCreateNestedManyWithoutTestInput
    projectWorkItemTest?: ProjectWorkItemTestCreateNestedManyWithoutTestInput
    workItemMaterialTest?: WorkItemMaterialTestCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutWorkItemTestInput = {
    id?: string
    name: string
    createdAt?: Date | string
    projectMaterialTest?: ProjectMaterialTestUncheckedCreateNestedManyWithoutTestInput
    projectWorkItemTest?: ProjectWorkItemTestUncheckedCreateNestedManyWithoutTestInput
    workItemMaterialTest?: WorkItemMaterialTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutWorkItemTestInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutWorkItemTestInput, TestUncheckedCreateWithoutWorkItemTestInput>
  }

  export type WorkItemCreateWithoutWorkItemTestInput = {
    id?: string
    itemNo: string
    description?: string | null
    createdAt?: Date | string
    projectWorkItem?: ProjectWorkItemCreateNestedManyWithoutWorkItemInput
    unit: UnitCreateNestedOneWithoutWorkItemInput
    workItemMaterial?: WorkItemMaterialCreateNestedManyWithoutWorkItemInput
  }

  export type WorkItemUncheckedCreateWithoutWorkItemTestInput = {
    id?: string
    itemNo: string
    description?: string | null
    unitId: string
    createdAt?: Date | string
    projectWorkItem?: ProjectWorkItemUncheckedCreateNestedManyWithoutWorkItemInput
    workItemMaterial?: WorkItemMaterialUncheckedCreateNestedManyWithoutWorkItemInput
  }

  export type WorkItemCreateOrConnectWithoutWorkItemTestInput = {
    where: WorkItemWhereUniqueInput
    create: XOR<WorkItemCreateWithoutWorkItemTestInput, WorkItemUncheckedCreateWithoutWorkItemTestInput>
  }

  export type TestUpsertWithoutWorkItemTestInput = {
    update: XOR<TestUpdateWithoutWorkItemTestInput, TestUncheckedUpdateWithoutWorkItemTestInput>
    create: XOR<TestCreateWithoutWorkItemTestInput, TestUncheckedCreateWithoutWorkItemTestInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutWorkItemTestInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutWorkItemTestInput, TestUncheckedUpdateWithoutWorkItemTestInput>
  }

  export type TestUpdateWithoutWorkItemTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterialTest?: ProjectMaterialTestUpdateManyWithoutTestNestedInput
    projectWorkItemTest?: ProjectWorkItemTestUpdateManyWithoutTestNestedInput
    workItemMaterialTest?: WorkItemMaterialTestUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutWorkItemTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterialTest?: ProjectMaterialTestUncheckedUpdateManyWithoutTestNestedInput
    projectWorkItemTest?: ProjectWorkItemTestUncheckedUpdateManyWithoutTestNestedInput
    workItemMaterialTest?: WorkItemMaterialTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type WorkItemUpsertWithoutWorkItemTestInput = {
    update: XOR<WorkItemUpdateWithoutWorkItemTestInput, WorkItemUncheckedUpdateWithoutWorkItemTestInput>
    create: XOR<WorkItemCreateWithoutWorkItemTestInput, WorkItemUncheckedCreateWithoutWorkItemTestInput>
    where?: WorkItemWhereInput
  }

  export type WorkItemUpdateToOneWithWhereWithoutWorkItemTestInput = {
    where?: WorkItemWhereInput
    data: XOR<WorkItemUpdateWithoutWorkItemTestInput, WorkItemUncheckedUpdateWithoutWorkItemTestInput>
  }

  export type WorkItemUpdateWithoutWorkItemTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemNo?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWorkItem?: ProjectWorkItemUpdateManyWithoutWorkItemNestedInput
    unit?: UnitUpdateOneRequiredWithoutWorkItemNestedInput
    workItemMaterial?: WorkItemMaterialUpdateManyWithoutWorkItemNestedInput
  }

  export type WorkItemUncheckedUpdateWithoutWorkItemTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemNo?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWorkItem?: ProjectWorkItemUncheckedUpdateManyWithoutWorkItemNestedInput
    workItemMaterial?: WorkItemMaterialUncheckedUpdateManyWithoutWorkItemNestedInput
  }

  export type ProjectMaterialCreateManyMaterialInput = {
    id?: string
    projectWorkItemId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemMaterialCreateManyMaterialInput = {
    id?: string
    workItemId: string
    quantityPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProjectMaterialUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWorkItem?: ProjectWorkItemUpdateOneRequiredWithoutProjectMaterialNestedInput
    projectMaterialTest?: ProjectMaterialTestUpdateManyWithoutProjectMaterialNestedInput
  }

  export type ProjectMaterialUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectWorkItemId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterialTest?: ProjectMaterialTestUncheckedUpdateManyWithoutProjectMaterialNestedInput
  }

  export type ProjectMaterialUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectWorkItemId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemMaterialUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workItem?: WorkItemUpdateOneRequiredWithoutWorkItemMaterialNestedInput
    workItemMaterialTest?: WorkItemMaterialTestUpdateManyWithoutWorkItemMaterialNestedInput
  }

  export type WorkItemMaterialUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    quantityPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workItemMaterialTest?: WorkItemMaterialTestUncheckedUpdateManyWithoutWorkItemMaterialNestedInput
  }

  export type WorkItemMaterialUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    quantityPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectWorkItemCreateManyProjectInput = {
    id?: string
    workItemId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProjectWorkItemUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterial?: ProjectMaterialUpdateManyWithoutProjectWorkItemNestedInput
    workItem?: WorkItemUpdateOneRequiredWithoutProjectWorkItemNestedInput
    projectWorkItemTest?: ProjectWorkItemTestUpdateManyWithoutProjectWorkItemNestedInput
  }

  export type ProjectWorkItemUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterial?: ProjectMaterialUncheckedUpdateManyWithoutProjectWorkItemNestedInput
    projectWorkItemTest?: ProjectWorkItemTestUncheckedUpdateManyWithoutProjectWorkItemNestedInput
  }

  export type ProjectWorkItemUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMaterialTestCreateManyProjectMaterialInput = {
    id?: string
    testId: string
    onFile?: number
    createdAt?: Date | string
  }

  export type ProjectMaterialTestUpdateWithoutProjectMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutProjectMaterialTestNestedInput
  }

  export type ProjectMaterialTestUncheckedUpdateWithoutProjectMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMaterialTestUncheckedUpdateManyWithoutProjectMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMaterialCreateManyProjectWorkItemInput = {
    id?: string
    materialId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProjectWorkItemTestCreateManyProjectWorkItemInput = {
    id?: string
    testId: string
    onFile?: number
    createdAt?: Date | string
  }

  export type ProjectMaterialUpdateWithoutProjectWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneRequiredWithoutProjectMaterialNestedInput
    projectMaterialTest?: ProjectMaterialTestUpdateManyWithoutProjectMaterialNestedInput
  }

  export type ProjectMaterialUncheckedUpdateWithoutProjectWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterialTest?: ProjectMaterialTestUncheckedUpdateManyWithoutProjectMaterialNestedInput
  }

  export type ProjectMaterialUncheckedUpdateManyWithoutProjectWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectWorkItemTestUpdateWithoutProjectWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutProjectWorkItemTestNestedInput
  }

  export type ProjectWorkItemTestUncheckedUpdateWithoutProjectWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectWorkItemTestUncheckedUpdateManyWithoutProjectWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMaterialTestCreateManyTestInput = {
    id?: string
    projectMaterialId: string
    onFile?: number
    createdAt?: Date | string
  }

  export type ProjectWorkItemTestCreateManyTestInput = {
    id?: string
    projectWorkItemId: string
    onFile?: number
    createdAt?: Date | string
  }

  export type WorkItemMaterialTestCreateManyTestInput = {
    id?: string
    workItemMaterialId: string
    unitsPerTest: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemTestCreateManyTestInput = {
    id?: string
    workItemId: string
    testQuantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProjectMaterialTestUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterial?: ProjectMaterialUpdateOneRequiredWithoutProjectMaterialTestNestedInput
  }

  export type ProjectMaterialTestUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectMaterialId?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMaterialTestUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectMaterialId?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectWorkItemTestUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWorkItem?: ProjectWorkItemUpdateOneRequiredWithoutProjectWorkItemTestNestedInput
  }

  export type ProjectWorkItemTestUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectWorkItemId?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectWorkItemTestUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectWorkItemId?: StringFieldUpdateOperationsInput | string
    onFile?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemMaterialTestUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitsPerTest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workItemMaterial?: WorkItemMaterialUpdateOneRequiredWithoutWorkItemMaterialTestNestedInput
  }

  export type WorkItemMaterialTestUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemMaterialId?: StringFieldUpdateOperationsInput | string
    unitsPerTest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemMaterialTestUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemMaterialId?: StringFieldUpdateOperationsInput | string
    unitsPerTest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemTestUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    testQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workItem?: WorkItemUpdateOneRequiredWithoutWorkItemTestNestedInput
  }

  export type WorkItemTestUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    testQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemTestUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    workItemId?: StringFieldUpdateOperationsInput | string
    testQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateManyUnitInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type WorkItemCreateManyUnitInput = {
    id?: string
    itemNo: string
    description?: string | null
    createdAt?: Date | string
  }

  export type MaterialUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterial?: ProjectMaterialUpdateManyWithoutMaterialNestedInput
    workItemMaterial?: WorkItemMaterialUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterial?: ProjectMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    workItemMaterial?: WorkItemMaterialUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemNo?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWorkItem?: ProjectWorkItemUpdateManyWithoutWorkItemNestedInput
    workItemMaterial?: WorkItemMaterialUpdateManyWithoutWorkItemNestedInput
    workItemTest?: WorkItemTestUpdateManyWithoutWorkItemNestedInput
  }

  export type WorkItemUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemNo?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWorkItem?: ProjectWorkItemUncheckedUpdateManyWithoutWorkItemNestedInput
    workItemMaterial?: WorkItemMaterialUncheckedUpdateManyWithoutWorkItemNestedInput
    workItemTest?: WorkItemTestUncheckedUpdateManyWithoutWorkItemNestedInput
  }

  export type WorkItemUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemNo?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectWorkItemCreateManyWorkItemInput = {
    id?: string
    projectId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemMaterialCreateManyWorkItemInput = {
    id?: string
    materialId: string
    quantityPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemTestCreateManyWorkItemInput = {
    id?: string
    testId: string
    testQuantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProjectWorkItemUpdateWithoutWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterial?: ProjectMaterialUpdateManyWithoutProjectWorkItemNestedInput
    project?: ProjectUpdateOneRequiredWithoutProjectWorkItemNestedInput
    projectWorkItemTest?: ProjectWorkItemTestUpdateManyWithoutProjectWorkItemNestedInput
  }

  export type ProjectWorkItemUncheckedUpdateWithoutWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMaterial?: ProjectMaterialUncheckedUpdateManyWithoutProjectWorkItemNestedInput
    projectWorkItemTest?: ProjectWorkItemTestUncheckedUpdateManyWithoutProjectWorkItemNestedInput
  }

  export type ProjectWorkItemUncheckedUpdateManyWithoutWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemMaterialUpdateWithoutWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneRequiredWithoutWorkItemMaterialNestedInput
    workItemMaterialTest?: WorkItemMaterialTestUpdateManyWithoutWorkItemMaterialNestedInput
  }

  export type WorkItemMaterialUncheckedUpdateWithoutWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantityPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workItemMaterialTest?: WorkItemMaterialTestUncheckedUpdateManyWithoutWorkItemMaterialNestedInput
  }

  export type WorkItemMaterialUncheckedUpdateManyWithoutWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantityPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemTestUpdateWithoutWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    testQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutWorkItemTestNestedInput
  }

  export type WorkItemTestUncheckedUpdateWithoutWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    testQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemTestUncheckedUpdateManyWithoutWorkItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    testQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemMaterialTestCreateManyWorkItemMaterialInput = {
    id?: string
    testId: string
    unitsPerTest: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type WorkItemMaterialTestUpdateWithoutWorkItemMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitsPerTest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutWorkItemMaterialTestNestedInput
  }

  export type WorkItemMaterialTestUncheckedUpdateWithoutWorkItemMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    unitsPerTest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemMaterialTestUncheckedUpdateManyWithoutWorkItemMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    unitsPerTest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}