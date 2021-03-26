import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Items" */
export type Items = {
  __typename?: 'Items';
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image_url?: Maybe<Scalars['String']>;
  is_public?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
};

/** aggregated selection of "Items" */
export type Items_Aggregate = {
  __typename?: 'Items_aggregate';
  aggregate?: Maybe<Items_Aggregate_Fields>;
  nodes: Array<Items>;
};

/** aggregate fields of "Items" */
export type Items_Aggregate_Fields = {
  __typename?: 'Items_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Items_Max_Fields>;
  min?: Maybe<Items_Min_Fields>;
};


/** aggregate fields of "Items" */
export type Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Items_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Items" */
export type Items_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Items_Max_Order_By>;
  min?: Maybe<Items_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Items" */
export type Items_Arr_Rel_Insert_Input = {
  data: Array<Items_Insert_Input>;
  on_conflict?: Maybe<Items_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Items". All fields are combined with a logical 'AND'. */
export type Items_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Items_Bool_Exp>>>;
  _not?: Maybe<Items_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Items_Bool_Exp>>>;
  created_by?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  is_public?: Maybe<Boolean_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Items" */
export enum Items_Constraint {
  /** unique or primary key constraint */
  ItemsPkey = 'Items_pkey'
}

/** input type for inserting data into table "Items" */
export type Items_Insert_Input = {
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  is_public?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Items_Max_Fields = {
  __typename?: 'Items_max_fields';
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Items" */
export type Items_Max_Order_By = {
  created_by?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Items_Min_Fields = {
  __typename?: 'Items_min_fields';
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Items" */
export type Items_Min_Order_By = {
  created_by?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "Items" */
export type Items_Mutation_Response = {
  __typename?: 'Items_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Items>;
};

/** input type for inserting object relation for remote table "Items" */
export type Items_Obj_Rel_Insert_Input = {
  data: Items_Insert_Input;
  on_conflict?: Maybe<Items_On_Conflict>;
};

/** on conflict condition type for table "Items" */
export type Items_On_Conflict = {
  constraint: Items_Constraint;
  update_columns: Array<Items_Update_Column>;
  where?: Maybe<Items_Bool_Exp>;
};

/** ordering options when selecting data from "Items" */
export type Items_Order_By = {
  created_by?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  is_public?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "Items" */
export type Items_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Items" */
export enum Items_Select_Column {
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "Items" */
export type Items_Set_Input = {
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  is_public?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** update columns of table "Items" */
export enum Items_Update_Column {
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Title = 'title'
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Items" */
  delete_Items?: Maybe<Items_Mutation_Response>;
  /** delete single row from the table: "Items" */
  delete_Items_by_pk?: Maybe<Items>;
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "Items" */
  insert_Items?: Maybe<Items_Mutation_Response>;
  /** insert a single row into the table: "Items" */
  insert_Items_one?: Maybe<Items>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "Items" */
  update_Items?: Maybe<Items_Mutation_Response>;
  /** update single row of the table: "Items" */
  update_Items_by_pk?: Maybe<Items>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_ItemsArgs = {
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Items_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_ItemsArgs = {
  objects: Array<Items_Insert_Input>;
  on_conflict?: Maybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Items_OneArgs = {
  object: Items_Insert_Input;
  on_conflict?: Maybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ItemsArgs = {
  _set?: Maybe<Items_Set_Input>;
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Items_By_PkArgs = {
  _set?: Maybe<Items_Set_Input>;
  pk_columns: Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _inc?: Maybe<Todos_Inc_Input>;
  _set?: Maybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _inc?: Maybe<Todos_Inc_Input>;
  _set?: Maybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Items" */
  Items: Array<Items>;
  /** fetch aggregated fields from the table: "Items" */
  Items_aggregate: Items_Aggregate;
  /** fetch data from the table: "Items" using primary key columns */
  Items_by_pk?: Maybe<Items>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** query root */
export type Query_RootItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** query root */
export type Query_RootItems_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** query root */
export type Query_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** query root */
export type Query_RootTodos_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Items" */
  Items: Array<Items>;
  /** fetch aggregated fields from the table: "Items" */
  Items_aggregate: Items_Aggregate;
  /** fetch data from the table: "Items" using primary key columns */
  Items_by_pk?: Maybe<Items>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootItems_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'todos';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  is_completed?: Maybe<Scalars['Boolean']>;
  is_public: Scalars['Boolean'];
  title: Scalars['String'];
};

/** aggregated selection of "todos" */
export type Todos_Aggregate = {
  __typename?: 'todos_aggregate';
  aggregate?: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_Fields = {
  __typename?: 'todos_aggregate_fields';
  avg?: Maybe<Todos_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Todos_Max_Fields>;
  min?: Maybe<Todos_Min_Fields>;
  stddev?: Maybe<Todos_Stddev_Fields>;
  stddev_pop?: Maybe<Todos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todos_Stddev_Samp_Fields>;
  sum?: Maybe<Todos_Sum_Fields>;
  var_pop?: Maybe<Todos_Var_Pop_Fields>;
  var_samp?: Maybe<Todos_Var_Samp_Fields>;
  variance?: Maybe<Todos_Variance_Fields>;
};


/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todos_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todos" */
export type Todos_Aggregate_Order_By = {
  avg?: Maybe<Todos_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Todos_Max_Order_By>;
  min?: Maybe<Todos_Min_Order_By>;
  stddev?: Maybe<Todos_Stddev_Order_By>;
  stddev_pop?: Maybe<Todos_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Todos_Stddev_Samp_Order_By>;
  sum?: Maybe<Todos_Sum_Order_By>;
  var_pop?: Maybe<Todos_Var_Pop_Order_By>;
  var_samp?: Maybe<Todos_Var_Samp_Order_By>;
  variance?: Maybe<Todos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "todos" */
export type Todos_Arr_Rel_Insert_Input = {
  data: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** aggregate avg on columns */
export type Todos_Avg_Fields = {
  __typename?: 'todos_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "todos" */
export type Todos_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  _not?: Maybe<Todos_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_completed?: Maybe<Boolean_Comparison_Exp>;
  is_public?: Maybe<Boolean_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for incrementing integer column in table "todos" */
export type Todos_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  is_completed?: Maybe<Scalars['Boolean']>;
  is_public?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename?: 'todos_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "todos" */
export type Todos_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename?: 'todos_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "todos" */
export type Todos_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: 'todos_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todos>;
};

/** input type for inserting object relation for remote table "todos" */
export type Todos_Obj_Rel_Insert_Input = {
  data: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** on conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns: Array<Todos_Update_Column>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** ordering options when selecting data from "todos" */
export type Todos_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_completed?: Maybe<Order_By>;
  is_public?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "todos" */
export type Todos_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  is_completed?: Maybe<Scalars['Boolean']>;
  is_public?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Todos_Stddev_Fields = {
  __typename?: 'todos_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "todos" */
export type Todos_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Todos_Stddev_Pop_Fields = {
  __typename?: 'todos_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "todos" */
export type Todos_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Todos_Stddev_Samp_Fields = {
  __typename?: 'todos_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "todos" */
export type Todos_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Todos_Sum_Fields = {
  __typename?: 'todos_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "todos" */
export type Todos_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Todos_Var_Pop_Fields = {
  __typename?: 'todos_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "todos" */
export type Todos_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Todos_Var_Samp_Fields = {
  __typename?: 'todos_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "todos" */
export type Todos_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Todos_Variance_Fields = {
  __typename?: 'todos_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "todos" */
export type Todos_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['String'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  id?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

export type AdditemMutationVariables = Exact<{
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  is_public?: Maybe<Scalars['Boolean']>;
}>;


export type AdditemMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Items?: Maybe<(
    { __typename?: 'Items_mutation_response' }
    & { returning: Array<(
      { __typename?: 'Items' }
      & Pick<Items, 'id' | 'title' | 'image_url' | 'created_by'>
    )> }
  )> }
);

export type GetItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemsQuery = (
  { __typename?: 'query_root' }
  & { Items: Array<(
    { __typename?: 'Items' }
    & Pick<Items, 'id' | 'title' | 'description' | 'image_url' | 'created_by' | 'is_public'>
  )> }
);


export const AdditemDocument = gql`
    mutation ADDITEM($id: String, $title: String, $description: String, $image_url: String, $user_id: String, $is_public: Boolean) {
  insert_Items(
    objects: {id: $id, title: $title, image_url: $image_url, created_by: $user_id}
  ) {
    returning {
      id
      title
      image_url
      created_by
    }
  }
}
    `;
export type AdditemMutationFn = Apollo.MutationFunction<AdditemMutation, AdditemMutationVariables>;

/**
 * __useAdditemMutation__
 *
 * To run a mutation, you first call `useAdditemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdditemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [additemMutation, { data, loading, error }] = useAdditemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      image_url: // value for 'image_url'
 *      user_id: // value for 'user_id'
 *      is_public: // value for 'is_public'
 *   },
 * });
 */
export function useAdditemMutation(baseOptions?: Apollo.MutationHookOptions<AdditemMutation, AdditemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdditemMutation, AdditemMutationVariables>(AdditemDocument, options);
      }
export type AdditemMutationHookResult = ReturnType<typeof useAdditemMutation>;
export type AdditemMutationResult = Apollo.MutationResult<AdditemMutation>;
export type AdditemMutationOptions = Apollo.BaseMutationOptions<AdditemMutation, AdditemMutationVariables>;
export const GetItemsDocument = gql`
    query GetItems {
  Items {
    id
    title
    description
    image_url
    created_by
    is_public
  }
}
    `;

/**
 * __useGetItemsQuery__
 *
 * To run a query within a React component, call `useGetItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, options);
      }
export function useGetItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, options);
        }
export type GetItemsQueryHookResult = ReturnType<typeof useGetItemsQuery>;
export type GetItemsLazyQueryHookResult = ReturnType<typeof useGetItemsLazyQuery>;
export type GetItemsQueryResult = Apollo.QueryResult<GetItemsQuery, GetItemsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    