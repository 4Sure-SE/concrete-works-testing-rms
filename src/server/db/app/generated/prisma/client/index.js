
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.MaterialScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  unitId: 'unitId',
  createdAt: 'createdAt'
};

exports.Prisma.ProjectScalarFieldEnum = {
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

exports.Prisma.ProjectMaterialScalarFieldEnum = {
  id: 'id',
  projectWorkItemId: 'projectWorkItemId',
  materialId: 'materialId',
  quantity: 'quantity',
  createdAt: 'createdAt'
};

exports.Prisma.ProjectMaterialTestScalarFieldEnum = {
  id: 'id',
  testId: 'testId',
  projectMaterialId: 'projectMaterialId',
  onFile: 'onFile',
  createdAt: 'createdAt'
};

exports.Prisma.ProjectWorkItemScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  workItemId: 'workItemId',
  quantity: 'quantity',
  createdAt: 'createdAt'
};

exports.Prisma.ProjectWorkItemTestScalarFieldEnum = {
  id: 'id',
  testId: 'testId',
  projectWorkItemId: 'projectWorkItemId',
  onFile: 'onFile',
  createdAt: 'createdAt'
};

exports.Prisma.TestScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt'
};

exports.Prisma.UnitScalarFieldEnum = {
  id: 'id',
  name: 'name',
  abbreviation: 'abbreviation',
  createdAt: 'createdAt'
};

exports.Prisma.WorkItemScalarFieldEnum = {
  id: 'id',
  itemNo: 'itemNo',
  description: 'description',
  unitId: 'unitId',
  createdAt: 'createdAt'
};

exports.Prisma.WorkItemMaterialScalarFieldEnum = {
  id: 'id',
  workItemId: 'workItemId',
  materialId: 'materialId',
  quantityPerUnit: 'quantityPerUnit',
  createdAt: 'createdAt'
};

exports.Prisma.WorkItemMaterialTestScalarFieldEnum = {
  id: 'id',
  workItemMaterialId: 'workItemMaterialId',
  testId: 'testId',
  unitsPerTest: 'unitsPerTest',
  createdAt: 'createdAt'
};

exports.Prisma.WorkItemTestScalarFieldEnum = {
  id: 'id',
  workItemId: 'workItemId',
  testId: 'testId',
  testQuantity: 'testQuantity',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\sheena surilla\\Desktop\\Final\\concrete-works-testing-rms\\src\\server\\db\\app\\generated\\prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\sheena surilla\\Desktop\\Final\\concrete-works-testing-rms\\src\\server\\db\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../../../../.env"
  },
  "relativePath": "../../../..",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"app/generated/prisma/client\"\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"DATABASE_URL\")\n  directUrl = env(\"DIRECT_URL\")\n}\n\nmodel Material {\n  id               String             @id(map: \"materials_pkey\") @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  name             String\n  description      String?\n  unitId           String             @map(\"unit_id\") @db.Uuid\n  createdAt        DateTime           @default(now()) @map(\"created_at\") @db.Timestamptz(6)\n  unit             Unit               @relation(fields: [unitId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"materials_unit_id_fkey\")\n  projectMaterial  ProjectMaterial[]\n  workItemMaterial WorkItemMaterial[]\n\n  @@map(\"material\")\n}\n\nmodel Project {\n  id                String            @id(map: \"projects_pkey\") @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  contractId        String            @unique @map(\"contract_id\")\n  contractName      String            @map(\"contract_name\")\n  contractor        String\n  limits            String?\n  location          String?\n  dateStarted       DateTime          @map(\"date_started\") @db.Date\n  createdAt         DateTime          @default(now()) @map(\"created_at\") @db.Timestamptz(6)\n  materialsEngineer String            @map(\"materials_engineer\")\n  contractCost      Decimal           @map(\"contract_cost\")\n  projectWorkItem   ProjectWorkItem[]\n\n  @@map(\"project\")\n}\n\nmodel ProjectMaterial {\n  id                  String                @id(map: \"project_materials_pkey\") @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  projectWorkItemId   String                @map(\"project_work_item_id\") @db.Uuid\n  materialId          String                @map(\"material_id\") @db.Uuid\n  quantity            Decimal               @db.Decimal(10, 2)\n  createdAt           DateTime              @default(now()) @map(\"created_at\") @db.Timestamptz(6)\n  material            Material              @relation(fields: [materialId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"project_materials_material_id_fkey\")\n  projectWorkItem     ProjectWorkItem       @relation(fields: [projectWorkItemId], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"project_materials_project_work_item_id_fkey\")\n  projectMaterialTest ProjectMaterialTest[]\n\n  @@map(\"project_material\")\n}\n\nmodel ProjectMaterialTest {\n  id                String          @id(map: \"project_material_tests_pkey\") @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  testId            String          @map(\"test_id\") @db.Uuid\n  projectMaterialId String          @map(\"project_material_id\") @db.Uuid\n  onFile            Int             @default(0) @map(\"on_file\")\n  createdAt         DateTime        @default(now()) @map(\"created_at\") @db.Timestamptz(6)\n  projectMaterial   ProjectMaterial @relation(fields: [projectMaterialId], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"project_material_tests_project_material_id_fkey\")\n  test              Test            @relation(fields: [testId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"project_material_tests_test_id_fkey\")\n\n  @@map(\"project_material_test\")\n}\n\nmodel ProjectWorkItem {\n  id                  String                @id(map: \"project_work_items_pkey\") @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  projectId           String                @map(\"project_id\") @db.Uuid\n  workItemId          String                @map(\"work_item_id\") @db.Uuid\n  quantity            Decimal               @db.Decimal(10, 2)\n  createdAt           DateTime              @default(now()) @map(\"created_at\") @db.Timestamptz(6)\n  projectMaterial     ProjectMaterial[]\n  project             Project               @relation(fields: [projectId], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"project_work_items_project_id_fkey\")\n  workItem            WorkItem              @relation(fields: [workItemId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"project_work_items_work_item_id_fkey\")\n  projectWorkItemTest ProjectWorkItemTest[]\n\n  @@map(\"project_work_item\")\n}\n\nmodel ProjectWorkItemTest {\n  id                String          @id(map: \"project_work_item_tests_pkey\") @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  testId            String          @map(\"test_id\") @db.Uuid\n  projectWorkItemId String          @map(\"project_work_item_id\") @db.Uuid\n  onFile            Int             @default(0) @map(\"on_file\")\n  createdAt         DateTime        @default(now()) @map(\"created_at\") @db.Timestamptz(6)\n  projectWorkItem   ProjectWorkItem @relation(fields: [projectWorkItemId], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"project_work_item_tests_project_work_item_id_fkey\")\n  test              Test            @relation(fields: [testId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"project_work_item_tests_test_id_fkey\")\n\n  @@map(\"project_work_item_test\")\n}\n\nmodel Test {\n  id                   String                 @id(map: \"tests_pkey\") @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  name                 String                 @unique(map: \"tests_name_key\")\n  createdAt            DateTime               @default(now()) @map(\"created_at\") @db.Timestamptz(6)\n  projectMaterialTest  ProjectMaterialTest[]\n  projectWorkItemTest  ProjectWorkItemTest[]\n  workItemMaterialTest WorkItemMaterialTest[]\n  workItemTest         WorkItemTest[]\n\n  @@map(\"test\")\n}\n\nmodel Unit {\n  id           String     @id(map: \"units_pkey\") @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  name         String     @unique(map: \"units_name_key\")\n  abbreviation String     @unique(map: \"units_abbreviation_key\")\n  createdAt    DateTime   @default(now()) @map(\"created_at\") @db.Timestamptz(6)\n  material     Material[]\n  workItem     WorkItem[]\n\n  @@map(\"unit\")\n}\n\nmodel WorkItem {\n  id               String             @id(map: \"work_items_pkey\") @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  itemNo           String             @unique(map: \"work_items_item_no_key\") @map(\"item_no\")\n  description      String?\n  unitId           String             @map(\"unit_id\") @db.Uuid\n  createdAt        DateTime           @default(now()) @map(\"created_at\") @db.Timestamptz(6)\n  projectWorkItem  ProjectWorkItem[]\n  unit             Unit               @relation(fields: [unitId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"work_items_unit_id_fkey\")\n  workItemMaterial WorkItemMaterial[]\n  workItemTest     WorkItemTest[]\n\n  @@map(\"work_item\")\n}\n\nmodel WorkItemMaterial {\n  id                   String                 @id(map: \"work_item_materials_pkey\") @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  workItemId           String                 @map(\"work_item_id\") @db.Uuid\n  materialId           String                 @map(\"material_id\") @db.Uuid\n  quantityPerUnit      Decimal                @map(\"quantity_per_unit\") @db.Decimal(10, 6)\n  createdAt            DateTime               @default(now()) @map(\"created_at\") @db.Timestamptz(6)\n  material             Material               @relation(fields: [materialId], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"work_item_materials_material_id_fkey\")\n  workItem             WorkItem               @relation(fields: [workItemId], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"work_item_materials_work_item_id_fkey\")\n  workItemMaterialTest WorkItemMaterialTest[]\n\n  @@unique([workItemId, materialId], map: \"work_item_materials_work_item_id_material_id_key\")\n  @@map(\"work_item_material\")\n}\n\nmodel WorkItemMaterialTest {\n  id                 String           @id @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  workItemMaterialId String           @map(\"work_item_material_id\") @db.Uuid\n  testId             String           @map(\"test_id\") @db.Uuid\n  unitsPerTest       Decimal          @map(\"units_per_test\") @db.Decimal(16, 6)\n  createdAt          DateTime         @default(now()) @map(\"created_at\") @db.Timestamptz(6)\n  test               Test             @relation(fields: [testId], references: [id], onDelete: Cascade, onUpdate: NoAction)\n  workItemMaterial   WorkItemMaterial @relation(fields: [workItemMaterialId], references: [id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@unique([workItemMaterialId, testId])\n  @@map(\"work_item_material_test\")\n}\n\nmodel WorkItemTest {\n  id           String   @id(map: \"work_item_tests_pkey\") @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  workItemId   String   @map(\"work_item_id\") @db.Uuid\n  testId       String   @map(\"test_id\") @db.Uuid\n  testQuantity Decimal  @map(\"test_quantity\") @db.Decimal\n  createdAt    DateTime @default(now()) @map(\"created_at\") @db.Timestamptz(6)\n  test         Test     @relation(fields: [testId], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"work_item_tests_test_id_fkey\")\n  workItem     WorkItem @relation(fields: [workItemId], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"work_item_tests_work_item_id_fkey\")\n\n  @@unique([workItemId, testId], map: \"work_item_tests_work_item_id_test_id_key\")\n  @@map(\"work_item_test\")\n}\n",
  "inlineSchemaHash": "8c60173f08d20c485871aa5e8c790b1468d4033bad86300d0bbf00567a6b1d0c",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/server/db/app/generated/prisma/client",
    "server/db/app/generated/prisma/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Material\":{\"dbName\":\"material\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unitId\",\"dbName\":\"unit_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Unit\",\"nativeType\":null,\"relationName\":\"MaterialToUnit\",\"relationFromFields\":[\"unitId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectMaterial\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProjectMaterial\",\"nativeType\":null,\"relationName\":\"MaterialToProjectMaterial\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItemMaterial\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkItemMaterial\",\"nativeType\":null,\"relationName\":\"MaterialToWorkItemMaterial\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Project\":{\"dbName\":\"project\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contractId\",\"dbName\":\"contract_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contractName\",\"dbName\":\"contract_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contractor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limits\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateStarted\",\"dbName\":\"date_started\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"materialsEngineer\",\"dbName\":\"materials_engineer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contractCost\",\"dbName\":\"contract_cost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectWorkItem\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProjectWorkItem\",\"nativeType\":null,\"relationName\":\"ProjectToProjectWorkItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProjectMaterial\":{\"dbName\":\"project_material\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectWorkItemId\",\"dbName\":\"project_work_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"materialId\",\"dbName\":\"material_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"material\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Material\",\"nativeType\":null,\"relationName\":\"MaterialToProjectMaterial\",\"relationFromFields\":[\"materialId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectWorkItem\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProjectWorkItem\",\"nativeType\":null,\"relationName\":\"ProjectMaterialToProjectWorkItem\",\"relationFromFields\":[\"projectWorkItemId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectMaterialTest\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProjectMaterialTest\",\"nativeType\":null,\"relationName\":\"ProjectMaterialToProjectMaterialTest\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProjectMaterialTest\":{\"dbName\":\"project_material_test\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testId\",\"dbName\":\"test_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectMaterialId\",\"dbName\":\"project_material_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"onFile\",\"dbName\":\"on_file\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectMaterial\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProjectMaterial\",\"nativeType\":null,\"relationName\":\"ProjectMaterialToProjectMaterialTest\",\"relationFromFields\":[\"projectMaterialId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"test\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Test\",\"nativeType\":null,\"relationName\":\"ProjectMaterialTestToTest\",\"relationFromFields\":[\"testId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProjectWorkItem\":{\"dbName\":\"project_work_item\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectId\",\"dbName\":\"project_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItemId\",\"dbName\":\"work_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectMaterial\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProjectMaterial\",\"nativeType\":null,\"relationName\":\"ProjectMaterialToProjectWorkItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"project\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Project\",\"nativeType\":null,\"relationName\":\"ProjectToProjectWorkItem\",\"relationFromFields\":[\"projectId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItem\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkItem\",\"nativeType\":null,\"relationName\":\"ProjectWorkItemToWorkItem\",\"relationFromFields\":[\"workItemId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectWorkItemTest\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProjectWorkItemTest\",\"nativeType\":null,\"relationName\":\"ProjectWorkItemToProjectWorkItemTest\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProjectWorkItemTest\":{\"dbName\":\"project_work_item_test\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testId\",\"dbName\":\"test_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectWorkItemId\",\"dbName\":\"project_work_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"onFile\",\"dbName\":\"on_file\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectWorkItem\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProjectWorkItem\",\"nativeType\":null,\"relationName\":\"ProjectWorkItemToProjectWorkItemTest\",\"relationFromFields\":[\"projectWorkItemId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"test\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Test\",\"nativeType\":null,\"relationName\":\"ProjectWorkItemTestToTest\",\"relationFromFields\":[\"testId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Test\":{\"dbName\":\"test\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectMaterialTest\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProjectMaterialTest\",\"nativeType\":null,\"relationName\":\"ProjectMaterialTestToTest\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectWorkItemTest\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProjectWorkItemTest\",\"nativeType\":null,\"relationName\":\"ProjectWorkItemTestToTest\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItemMaterialTest\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkItemMaterialTest\",\"nativeType\":null,\"relationName\":\"TestToWorkItemMaterialTest\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItemTest\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkItemTest\",\"nativeType\":null,\"relationName\":\"TestToWorkItemTest\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Unit\":{\"dbName\":\"unit\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"abbreviation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"material\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Material\",\"nativeType\":null,\"relationName\":\"MaterialToUnit\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItem\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkItem\",\"nativeType\":null,\"relationName\":\"UnitToWorkItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorkItem\":{\"dbName\":\"work_item\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemNo\",\"dbName\":\"item_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unitId\",\"dbName\":\"unit_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectWorkItem\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProjectWorkItem\",\"nativeType\":null,\"relationName\":\"ProjectWorkItemToWorkItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Unit\",\"nativeType\":null,\"relationName\":\"UnitToWorkItem\",\"relationFromFields\":[\"unitId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItemMaterial\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkItemMaterial\",\"nativeType\":null,\"relationName\":\"WorkItemToWorkItemMaterial\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItemTest\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkItemTest\",\"nativeType\":null,\"relationName\":\"WorkItemToWorkItemTest\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorkItemMaterial\":{\"dbName\":\"work_item_material\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItemId\",\"dbName\":\"work_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"materialId\",\"dbName\":\"material_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantityPerUnit\",\"dbName\":\"quantity_per_unit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"material\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Material\",\"nativeType\":null,\"relationName\":\"MaterialToWorkItemMaterial\",\"relationFromFields\":[\"materialId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItem\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkItem\",\"nativeType\":null,\"relationName\":\"WorkItemToWorkItemMaterial\",\"relationFromFields\":[\"workItemId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItemMaterialTest\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkItemMaterialTest\",\"nativeType\":null,\"relationName\":\"WorkItemMaterialToWorkItemMaterialTest\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"workItemId\",\"materialId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"workItemId\",\"materialId\"]}],\"isGenerated\":false},\"WorkItemMaterialTest\":{\"dbName\":\"work_item_material_test\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItemMaterialId\",\"dbName\":\"work_item_material_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testId\",\"dbName\":\"test_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unitsPerTest\",\"dbName\":\"units_per_test\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"16\",\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"test\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Test\",\"nativeType\":null,\"relationName\":\"TestToWorkItemMaterialTest\",\"relationFromFields\":[\"testId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItemMaterial\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkItemMaterial\",\"nativeType\":null,\"relationName\":\"WorkItemMaterialToWorkItemMaterialTest\",\"relationFromFields\":[\"workItemMaterialId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"workItemMaterialId\",\"testId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"workItemMaterialId\",\"testId\"]}],\"isGenerated\":false},\"WorkItemTest\":{\"dbName\":\"work_item_test\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItemId\",\"dbName\":\"work_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testId\",\"dbName\":\"test_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testQuantity\",\"dbName\":\"test_quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"test\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Test\",\"nativeType\":null,\"relationName\":\"TestToWorkItemTest\",\"relationFromFields\":[\"testId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workItem\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkItem\",\"nativeType\":null,\"relationName\":\"WorkItemToWorkItemTest\",\"relationFromFields\":[\"workItemId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"workItemId\",\"testId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"workItemId\",\"testId\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/server/db/app/generated/prisma/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/server/db/app/generated/prisma/client/schema.prisma")
