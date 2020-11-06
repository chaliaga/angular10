/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateDishInput = {
  id?: string | null;
  name: string;
  category?: string | null;
  price: string;
  imageURL?: string | null;
  rating?: number | null;
  description?: string | null;
};

export type ModelDishConditionInput = {
  name?: ModelStringInput | null;
  category?: ModelStringInput | null;
  price?: ModelStringInput | null;
  imageURL?: ModelStringInput | null;
  rating?: ModelIntInput | null;
  description?: ModelStringInput | null;
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
  category?: string | null;
  price?: string | null;
  imageURL?: string | null;
  rating?: number | null;
  description?: string | null;
};

export type DeleteDishInput = {
  id?: string | null;
};

export type ModelDishFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  category?: ModelStringInput | null;
  price?: ModelStringInput | null;
  imageURL?: ModelStringInput | null;
  rating?: ModelIntInput | null;
  description?: ModelStringInput | null;
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

export type CreateDishMutation = {
  __typename: "Dish";
  id: string;
  name: string;
  category: string | null;
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDishMutation = {
  __typename: "Dish";
  id: string;
  name: string;
  category: string | null;
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDishMutation = {
  __typename: "Dish";
  id: string;
  name: string;
  category: string | null;
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetDishQuery = {
  __typename: "Dish";
  id: string;
  name: string;
  category: string | null;
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListDishsQuery = {
  __typename: "ModelDishConnection";
  items: Array<{
    __typename: "Dish";
    id: string;
    name: string;
    category: string | null;
    price: string;
    imageURL: string | null;
    rating: number | null;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateDishSubscription = {
  __typename: "Dish";
  id: string;
  name: string;
  category: string | null;
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDishSubscription = {
  __typename: "Dish";
  id: string;
  name: string;
  category: string | null;
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDishSubscription = {
  __typename: "Dish";
  id: string;
  name: string;
  category: string | null;
  price: string;
  imageURL: string | null;
  rating: number | null;
  description: string | null;
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
          category
          price
          imageURL
          rating
          description
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
          category
          price
          imageURL
          rating
          description
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
          category
          price
          imageURL
          rating
          description
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
  async GetDish(id: string): Promise<GetDishQuery> {
    const statement = `query GetDish($id: ID!) {
        getDish(id: $id) {
          __typename
          id
          name
          category
          price
          imageURL
          rating
          description
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
            category
            price
            imageURL
            rating
            description
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
  OnCreateDishListener: Observable<OnCreateDishSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateDish {
        onCreateDish {
          __typename
          id
          name
          category
          price
          imageURL
          rating
          description
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
          category
          price
          imageURL
          rating
          description
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
          category
          price
          imageURL
          rating
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteDishSubscription>;
}
