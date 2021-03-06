/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateDishInput = {
  id?: string | null;
  name: string;
  categoryName: string;
  price: string;
  imageURL?: string | null;
  rating?: number | null;
  description?: string | null;
  portions?: number | null;
  readyMinutes?: number | null;
  categoryId: string;
};

export type ModelDishConditionInput = {
  name?: ModelStringInput | null;
  categoryName?: ModelStringInput | null;
  price?: ModelStringInput | null;
  imageURL?: ModelStringInput | null;
  rating?: ModelIntInput | null;
  description?: ModelStringInput | null;
  portions?: ModelIntInput | null;
  readyMinutes?: ModelIntInput | null;
  and?: Array<ModelDishConditionInput | null> | null;
  or?: Array<ModelDishConditionInput | null> | null;
  not?: ModelDishConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateDishInput = {
  id: string;
  name?: string | null;
  categoryName?: string | null;
  price?: string | null;
  imageURL?: string | null;
  rating?: number | null;
  description?: string | null;
  portions?: number | null;
  readyMinutes?: number | null;
  categoryId?: string | null;
};

export type DeleteDishInput = {
  id?: string | null;
};

export type CreateCategoryInput = {
  id?: string | null;
  name: string;
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type UpdateCategoryInput = {
  id: string;
  name?: string | null;
};

export type DeleteCategoryInput = {
  id?: string | null;
};

export type ModelDishFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  categoryName?: ModelStringInput | null;
  price?: ModelStringInput | null;
  imageURL?: ModelStringInput | null;
  rating?: ModelIntInput | null;
  description?: ModelStringInput | null;
  portions?: ModelIntInput | null;
  readyMinutes?: ModelIntInput | null;
  and?: Array<ModelDishFilterInput | null> | null;
  or?: Array<ModelDishFilterInput | null> | null;
  not?: ModelDishFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type SearchableDishFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  categoryName?: SearchableStringFilterInput | null;
  price?: SearchableStringFilterInput | null;
  imageURL?: SearchableStringFilterInput | null;
  rating?: SearchableIntFilterInput | null;
  description?: SearchableStringFilterInput | null;
  portions?: SearchableIntFilterInput | null;
  readyMinutes?: SearchableIntFilterInput | null;
  and?: Array<SearchableDishFilterInput | null> | null;
  or?: Array<SearchableDishFilterInput | null> | null;
  not?: SearchableDishFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
};

export type SearchableIntFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableDishSortInput = {
  field?: SearchableDishSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableDishSortableFields {
  id = "id",
  name = "name",
  categoryName = "categoryName",
  price = "price",
  imageURL = "imageURL",
  rating = "rating",
  description = "description",
  portions = "portions",
  readyMinutes = "readyMinutes"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type SearchableCategoryFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  and?: Array<SearchableCategoryFilterInput | null> | null;
  or?: Array<SearchableCategoryFilterInput | null> | null;
  not?: SearchableCategoryFilterInput | null;
};

export type SearchableCategorySortInput = {
  field?: SearchableCategorySortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableCategorySortableFields {
  id = "id",
  name = "name"
}

export type CreateDishMutation = {
  __typename: "Dish";
  id: string;
  name: string;
  categoryName: string;
  categoryObject: {
    __typename: "Category";
    id: string;
    name: string;
    dishes: {
      __typename: "ModelDishConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
  portions: number | null;
  readyMinutes: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDishMutation = {
  __typename: "Dish";
  id: string;
  name: string;
  categoryName: string;
  categoryObject: {
    __typename: "Category";
    id: string;
    name: string;
    dishes: {
      __typename: "ModelDishConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
  portions: number | null;
  readyMinutes: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDishMutation = {
  __typename: "Dish";
  id: string;
  name: string;
  categoryName: string;
  categoryObject: {
    __typename: "Category";
    id: string;
    name: string;
    dishes: {
      __typename: "ModelDishConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
  portions: number | null;
  readyMinutes: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  dishes: {
    __typename: "ModelDishConnection";
    items: Array<{
      __typename: "Dish";
      id: string;
      name: string;
      categoryName: string;
      price: string;
      imageURL: string | null;
      rating: number | null;
      description: string | null;
      portions: number | null;
      readyMinutes: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  dishes: {
    __typename: "ModelDishConnection";
    items: Array<{
      __typename: "Dish";
      id: string;
      name: string;
      categoryName: string;
      price: string;
      imageURL: string | null;
      rating: number | null;
      description: string | null;
      portions: number | null;
      readyMinutes: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  dishes: {
    __typename: "ModelDishConnection";
    items: Array<{
      __typename: "Dish";
      id: string;
      name: string;
      categoryName: string;
      price: string;
      imageURL: string | null;
      rating: number | null;
      description: string | null;
      portions: number | null;
      readyMinutes: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DishesByCategoryQuery = {
  __typename: "Dish";
  id: string;
  name: string;
  categoryName: string;
  categoryObject: {
    __typename: "Category";
    id: string;
    name: string;
    dishes: {
      __typename: "ModelDishConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
  portions: number | null;
  readyMinutes: number | null;
  createdAt: string;
  updatedAt: string;
};

export type GetDishQuery = {
  __typename: "Dish";
  id: string;
  name: string;
  categoryName: string;
  categoryObject: {
    __typename: "Category";
    id: string;
    name: string;
    dishes: {
      __typename: "ModelDishConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
  portions: number | null;
  readyMinutes: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListDishsQuery = {
  __typename: "ModelDishConnection";
  items: Array<{
    __typename: "Dish";
    id: string;
    name: string;
    categoryName: string;
    categoryObject: {
      __typename: "Category";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    price: string;
    imageURL: string | null;
    rating: number | null;
    description: string | null;
    portions: number | null;
    readyMinutes: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id: string;
  name: string;
  dishes: {
    __typename: "ModelDishConnection";
    items: Array<{
      __typename: "Dish";
      id: string;
      name: string;
      categoryName: string;
      price: string;
      imageURL: string | null;
      rating: number | null;
      description: string | null;
      portions: number | null;
      readyMinutes: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCategorysQuery = {
  __typename: "ModelCategoryConnection";
  items: Array<{
    __typename: "Category";
    id: string;
    name: string;
    dishes: {
      __typename: "ModelDishConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type SearchDishsQuery = {
  __typename: "SearchableDishConnection";
  items: Array<{
    __typename: "Dish";
    id: string;
    name: string;
    categoryName: string;
    categoryObject: {
      __typename: "Category";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    price: string;
    imageURL: string | null;
    rating: number | null;
    description: string | null;
    portions: number | null;
    readyMinutes: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  total: number | null;
};

export type SearchCategorysQuery = {
  __typename: "SearchableCategoryConnection";
  items: Array<{
    __typename: "Category";
    id: string;
    name: string;
    dishes: {
      __typename: "ModelDishConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  total: number | null;
};

export type OnCreateDishSubscription = {
  __typename: "Dish";
  id: string;
  name: string;
  categoryName: string;
  categoryObject: {
    __typename: "Category";
    id: string;
    name: string;
    dishes: {
      __typename: "ModelDishConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
  portions: number | null;
  readyMinutes: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDishSubscription = {
  __typename: "Dish";
  id: string;
  name: string;
  categoryName: string;
  categoryObject: {
    __typename: "Category";
    id: string;
    name: string;
    dishes: {
      __typename: "ModelDishConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
  portions: number | null;
  readyMinutes: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDishSubscription = {
  __typename: "Dish";
  id: string;
  name: string;
  categoryName: string;
  categoryObject: {
    __typename: "Category";
    id: string;
    name: string;
    dishes: {
      __typename: "ModelDishConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
  portions: number | null;
  readyMinutes: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  dishes: {
    __typename: "ModelDishConnection";
    items: Array<{
      __typename: "Dish";
      id: string;
      name: string;
      categoryName: string;
      price: string;
      imageURL: string | null;
      rating: number | null;
      description: string | null;
      portions: number | null;
      readyMinutes: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  dishes: {
    __typename: "ModelDishConnection";
    items: Array<{
      __typename: "Dish";
      id: string;
      name: string;
      categoryName: string;
      price: string;
      imageURL: string | null;
      rating: number | null;
      description: string | null;
      portions: number | null;
      readyMinutes: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  dishes: {
    __typename: "ModelDishConnection";
    items: Array<{
      __typename: "Dish";
      id: string;
      name: string;
      categoryName: string;
      price: string;
      imageURL: string | null;
      rating: number | null;
      description: string | null;
      portions: number | null;
      readyMinutes: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateDish(
    input: CreateDishInput,
    condition?: ModelDishConditionInput
  ): Promise<CreateDishMutation> {
    const statement = `mutation CreateDish($input: CreateDishInput!, $condition: ModelDishConditionInput) {
        createDish(input: $input, condition: $condition) {
          __typename
          id
          name
          categoryName
          categoryObject {
            __typename
            id
            name
            dishes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          price
          imageURL
          rating
          description
          portions
          readyMinutes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDishMutation>response.data.createDish;
  }
  async UpdateDish(
    input: UpdateDishInput,
    condition?: ModelDishConditionInput
  ): Promise<UpdateDishMutation> {
    const statement = `mutation UpdateDish($input: UpdateDishInput!, $condition: ModelDishConditionInput) {
        updateDish(input: $input, condition: $condition) {
          __typename
          id
          name
          categoryName
          categoryObject {
            __typename
            id
            name
            dishes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          price
          imageURL
          rating
          description
          portions
          readyMinutes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDishMutation>response.data.updateDish;
  }
  async DeleteDish(
    input: DeleteDishInput,
    condition?: ModelDishConditionInput
  ): Promise<DeleteDishMutation> {
    const statement = `mutation DeleteDish($input: DeleteDishInput!, $condition: ModelDishConditionInput) {
        deleteDish(input: $input, condition: $condition) {
          __typename
          id
          name
          categoryName
          categoryObject {
            __typename
            id
            name
            dishes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          price
          imageURL
          rating
          description
          portions
          readyMinutes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDishMutation>response.data.deleteDish;
  }
  async CreateCategory(
    input: CreateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<CreateCategoryMutation> {
    const statement = `mutation CreateCategory($input: CreateCategoryInput!, $condition: ModelCategoryConditionInput) {
        createCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          dishes {
            __typename
            items {
              __typename
              id
              name
              categoryName
              price
              imageURL
              rating
              description
              portions
              readyMinutes
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoryMutation>response.data.createCategory;
  }
  async UpdateCategory(
    input: UpdateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<UpdateCategoryMutation> {
    const statement = `mutation UpdateCategory($input: UpdateCategoryInput!, $condition: ModelCategoryConditionInput) {
        updateCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          dishes {
            __typename
            items {
              __typename
              id
              name
              categoryName
              price
              imageURL
              rating
              description
              portions
              readyMinutes
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoryMutation>response.data.updateCategory;
  }
  async DeleteCategory(
    input: DeleteCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<DeleteCategoryMutation> {
    const statement = `mutation DeleteCategory($input: DeleteCategoryInput!, $condition: ModelCategoryConditionInput) {
        deleteCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          dishes {
            __typename
            items {
              __typename
              id
              name
              categoryName
              price
              imageURL
              rating
              description
              portions
              readyMinutes
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoryMutation>response.data.deleteCategory;
  }
  async DishesByCategory(
    categoryId: string
  ): Promise<Array<DishesByCategoryQuery>> {
    const statement = `query DishesByCategory($categoryId: ID!) {
        dishesByCategory(categoryId: $categoryId) {
          __typename
          id
          name
          categoryName
          categoryObject {
            __typename
            id
            name
            dishes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          price
          imageURL
          rating
          description
          portions
          readyMinutes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      categoryId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<DishesByCategoryQuery>>response.data.dishesByCategory;
  }
  async GetDish(id: string): Promise<GetDishQuery> {
    const statement = `query GetDish($id: ID!) {
        getDish(id: $id) {
          __typename
          id
          name
          categoryName
          categoryObject {
            __typename
            id
            name
            dishes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          price
          imageURL
          rating
          description
          portions
          readyMinutes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDishQuery>response.data.getDish;
  }
  async ListDishs(
    filter?: ModelDishFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDishsQuery> {
    const statement = `query ListDishs($filter: ModelDishFilterInput, $limit: Int, $nextToken: String) {
        listDishs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            categoryName
            categoryObject {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            price
            imageURL
            rating
            description
            portions
            readyMinutes
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDishsQuery>response.data.listDishs;
  }
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          name
          dishes {
            __typename
            items {
              __typename
              id
              name
              categoryName
              price
              imageURL
              rating
              description
              portions
              readyMinutes
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoryQuery>response.data.getCategory;
  }
  async ListCategorys(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategorysQuery> {
    const statement = `query ListCategorys($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String) {
        listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            dishes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategorysQuery>response.data.listCategorys;
  }
  async SearchDishs(
    filter?: SearchableDishFilterInput,
    sort?: SearchableDishSortInput,
    limit?: number,
    nextToken?: string
  ): Promise<SearchDishsQuery> {
    const statement = `query SearchDishs($filter: SearchableDishFilterInput, $sort: SearchableDishSortInput, $limit: Int, $nextToken: String) {
        searchDishs(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            categoryName
            categoryObject {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            price
            imageURL
            rating
            description
            portions
            readyMinutes
            createdAt
            updatedAt
          }
          nextToken
          total
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchDishsQuery>response.data.searchDishs;
  }
  async SearchCategorys(
    filter?: SearchableCategoryFilterInput,
    sort?: SearchableCategorySortInput,
    limit?: number,
    nextToken?: string
  ): Promise<SearchCategorysQuery> {
    const statement = `query SearchCategorys($filter: SearchableCategoryFilterInput, $sort: SearchableCategorySortInput, $limit: Int, $nextToken: String) {
        searchCategorys(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            dishes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
          total
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchCategorysQuery>response.data.searchCategorys;
  }
  OnCreateDishListener: Observable<OnCreateDishSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateDish {
        onCreateDish {
          __typename
          id
          name
          categoryName
          categoryObject {
            __typename
            id
            name
            dishes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          price
          imageURL
          rating
          description
          portions
          readyMinutes
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateDishSubscription>;

  OnUpdateDishListener: Observable<OnUpdateDishSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDish {
        onUpdateDish {
          __typename
          id
          name
          categoryName
          categoryObject {
            __typename
            id
            name
            dishes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          price
          imageURL
          rating
          description
          portions
          readyMinutes
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateDishSubscription>;

  OnDeleteDishListener: Observable<OnDeleteDishSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDish {
        onDeleteDish {
          __typename
          id
          name
          categoryName
          categoryObject {
            __typename
            id
            name
            dishes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          price
          imageURL
          rating
          description
          portions
          readyMinutes
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteDishSubscription>;

  OnCreateCategoryListener: Observable<
    OnCreateCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCategory {
        onCreateCategory {
          __typename
          id
          name
          dishes {
            __typename
            items {
              __typename
              id
              name
              categoryName
              price
              imageURL
              rating
              description
              portions
              readyMinutes
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCategorySubscription>;

  OnUpdateCategoryListener: Observable<
    OnUpdateCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCategory {
        onUpdateCategory {
          __typename
          id
          name
          dishes {
            __typename
            items {
              __typename
              id
              name
              categoryName
              price
              imageURL
              rating
              description
              portions
              readyMinutes
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCategorySubscription>;

  OnDeleteCategoryListener: Observable<
    OnDeleteCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCategory {
        onDeleteCategory {
          __typename
          id
          name
          dishes {
            __typename
            items {
              __typename
              id
              name
              categoryName
              price
              imageURL
              rating
              description
              portions
              readyMinutes
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCategorySubscription>;
}
