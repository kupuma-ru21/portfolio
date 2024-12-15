/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "fragment Company on Company {\n  id\n  title\n  detail\n  imageURL\n}": types.CompanyFragmentDoc,
    "query Companies {\n  companies {\n    ...Company\n    link\n    linkType\n  }\n}": types.CompaniesDocument,
    "query AdminCompanies {\n  companies {\n    ...Company\n  }\n}\n\nmutation DeleteCompany($id: ID!) {\n  deleteCompany(id: $id)\n}": types.AdminCompaniesDocument,
    "mutation CreateCompany($title: String!, $detail: String!, $link: String!, $linkType: CompanyLinkType!, $imageURL: String!) {\n  createCompany(\n    input: {title: $title, detail: $detail, link: $link, linkType: $linkType, imageURL: $imageURL}\n  )\n}": types.CreateCompanyDocument,
    "query Company($id: ID!) {\n  company(id: $id) {\n    ...Company\n    link\n    linkType\n  }\n}\n\nmutation UpdateCompany($id: ID!, $title: String!, $detail: String!, $link: String!, $linkType: CompanyLinkType!, $imageUrl: String!) {\n  updateCompany(\n    id: $id\n    input: {title: $title, detail: $detail, link: $link, linkType: $linkType, imageURL: $imageUrl}\n  )\n}": types.CompanyDocument,
    "mutation Login($input: CreateUserInput!) {\n  login(input: $input)\n}": types.LoginDocument,
    "mutation Signup($input: CreateUserInput!) {\n  createUser(input: $input)\n}": types.SignupDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Company on Company {\n  id\n  title\n  detail\n  imageURL\n}"): (typeof documents)["fragment Company on Company {\n  id\n  title\n  detail\n  imageURL\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Companies {\n  companies {\n    ...Company\n    link\n    linkType\n  }\n}"): (typeof documents)["query Companies {\n  companies {\n    ...Company\n    link\n    linkType\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AdminCompanies {\n  companies {\n    ...Company\n  }\n}\n\nmutation DeleteCompany($id: ID!) {\n  deleteCompany(id: $id)\n}"): (typeof documents)["query AdminCompanies {\n  companies {\n    ...Company\n  }\n}\n\nmutation DeleteCompany($id: ID!) {\n  deleteCompany(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateCompany($title: String!, $detail: String!, $link: String!, $linkType: CompanyLinkType!, $imageURL: String!) {\n  createCompany(\n    input: {title: $title, detail: $detail, link: $link, linkType: $linkType, imageURL: $imageURL}\n  )\n}"): (typeof documents)["mutation CreateCompany($title: String!, $detail: String!, $link: String!, $linkType: CompanyLinkType!, $imageURL: String!) {\n  createCompany(\n    input: {title: $title, detail: $detail, link: $link, linkType: $linkType, imageURL: $imageURL}\n  )\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Company($id: ID!) {\n  company(id: $id) {\n    ...Company\n    link\n    linkType\n  }\n}\n\nmutation UpdateCompany($id: ID!, $title: String!, $detail: String!, $link: String!, $linkType: CompanyLinkType!, $imageUrl: String!) {\n  updateCompany(\n    id: $id\n    input: {title: $title, detail: $detail, link: $link, linkType: $linkType, imageURL: $imageUrl}\n  )\n}"): (typeof documents)["query Company($id: ID!) {\n  company(id: $id) {\n    ...Company\n    link\n    linkType\n  }\n}\n\nmutation UpdateCompany($id: ID!, $title: String!, $detail: String!, $link: String!, $linkType: CompanyLinkType!, $imageUrl: String!) {\n  updateCompany(\n    id: $id\n    input: {title: $title, detail: $detail, link: $link, linkType: $linkType, imageURL: $imageUrl}\n  )\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($input: CreateUserInput!) {\n  login(input: $input)\n}"): (typeof documents)["mutation Login($input: CreateUserInput!) {\n  login(input: $input)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Signup($input: CreateUserInput!) {\n  createUser(input: $input)\n}"): (typeof documents)["mutation Signup($input: CreateUserInput!) {\n  createUser(input: $input)\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;