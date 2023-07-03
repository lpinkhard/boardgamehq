/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlayerProfileInput = {
  id?: string | null,
  owner?: string | null,
  playerProfileUserId: string,
};

export type ModelPlayerProfileConditionInput = {
  owner?: ModelStringInput | null,
  and?: Array< ModelPlayerProfileConditionInput | null > | null,
  or?: Array< ModelPlayerProfileConditionInput | null > | null,
  not?: ModelPlayerProfileConditionInput | null,
  playerProfileUserId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type PlayerProfile = {
  __typename: "PlayerProfile",
  id: string,
  user: User,
  gamesPlayed?: ModelGameResultConnection | null,
  hostedGames?: ModelGameConnection | null,
  receivedHostRatings?: ModelRatingConnection | null,
  givenHostRatings?: ModelRatingConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  playerProfileUserId: string,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  playerProfile?: PlayerProfile | null,
  hostProfile?: HostProfile | null,
  venues?: ModelVenueConnection | null,
  bookings?: ModelBookingConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  userPlayerProfileId?: string | null,
  userHostProfileId?: string | null,
};

export type HostProfile = {
  __typename: "HostProfile",
  id: string,
  user: User,
  venues?: ModelVenueConnection | null,
  hostedGames?: ModelGameConnection | null,
  receivedPlayerRatings?: ModelRatingConnection | null,
  givenPlayerRatings?: ModelRatingConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  hostProfileUserId: string,
};

export type ModelVenueConnection = {
  __typename: "ModelVenueConnection",
  items:  Array<Venue | null >,
  nextToken?: string | null,
};

export type Venue = {
  __typename: "Venue",
  id: string,
  name: string,
  latitude: number,
  longitude: number,
  tables?: ModelTableConnection | null,
  timeslots?: ModelTimeslotConnection | null,
  hostingUser: User,
  bookings?: ModelBookingConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  hostProfileVenuesId?: string | null,
  userVenuesId?: string | null,
};

export type ModelTableConnection = {
  __typename: "ModelTableConnection",
  items:  Array<Table | null >,
  nextToken?: string | null,
};

export type Table = {
  __typename: "Table",
  id: string,
  number: number,
  capacity: number,
  games?: Game | null,
  venue?: Venue | null,
  bookings?: ModelBookingConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  venueTablesId?: string | null,
  tableGamesId?: string | null,
};

export type Game = {
  __typename: "Game",
  id: string,
  name: string,
  description: string,
  boardGame: BoardGame,
  players: number,
  table?: Table | null,
  isPrivate: boolean,
  cost?: number | null,
  currency: string,
  results?: ModelGameResultConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  playerProfileHostedGamesId?: string | null,
  hostProfileHostedGamesId?: string | null,
  gameBoardGameId: string,
  gameTableId?: string | null,
};

export type BoardGame = {
  __typename: "BoardGame",
  id: string,
  bgaId: string,
  name: string,
  description?: string | null,
  minPlayers: number,
  maxPlayers: number,
  category?: string | null,
  imageUrl?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelGameResultConnection = {
  __typename: "ModelGameResultConnection",
  items:  Array<GameResult | null >,
  nextToken?: string | null,
};

export type GameResult = {
  __typename: "GameResult",
  id: string,
  playerProfile?: PlayerProfile | null,
  game: Game,
  score: number,
  outcome: string,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  playerProfileGamesPlayedId?: string | null,
  gameResultsId?: string | null,
};

export type ModelBookingConnection = {
  __typename: "ModelBookingConnection",
  items:  Array<Booking | null >,
  nextToken?: string | null,
};

export type Booking = {
  __typename: "Booking",
  id: string,
  user: User,
  venue: Venue,
  table: Table,
  timeslot: Timeslot,
  paymentStatus?: string | null,
  paymentReceipt?: string | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  userBookingsId?: string | null,
  venueBookingsId?: string | null,
  timeslotBookingsId?: string | null,
  tableBookingsId?: string | null,
};

export type Timeslot = {
  __typename: "Timeslot",
  id: string,
  startTime: string,
  endTime: string,
  venue: Venue,
  bookings?: ModelBookingConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  venueTimeslotsId?: string | null,
};

export type ModelTimeslotConnection = {
  __typename: "ModelTimeslotConnection",
  items:  Array<Timeslot | null >,
  nextToken?: string | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items:  Array<Game | null >,
  nextToken?: string | null,
};

export type ModelRatingConnection = {
  __typename: "ModelRatingConnection",
  items:  Array<Rating | null >,
  nextToken?: string | null,
};

export type Rating = {
  __typename: "Rating",
  id: string,
  playerProfile?: PlayerProfile | null,
  hostProfile?: HostProfile | null,
  rating: number,
  comment?: string | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  playerProfileReceivedHostRatingsId?: string | null,
  playerProfileGivenHostRatingsId?: string | null,
  hostProfileReceivedPlayerRatingsId?: string | null,
  hostProfileGivenPlayerRatingsId?: string | null,
};

export type UpdatePlayerProfileInput = {
  id: string,
  owner?: string | null,
  playerProfileUserId?: string | null,
};

export type DeletePlayerProfileInput = {
  id: string,
};

export type CreateHostProfileInput = {
  id?: string | null,
  owner?: string | null,
  hostProfileUserId: string,
};

export type ModelHostProfileConditionInput = {
  owner?: ModelStringInput | null,
  and?: Array< ModelHostProfileConditionInput | null > | null,
  or?: Array< ModelHostProfileConditionInput | null > | null,
  not?: ModelHostProfileConditionInput | null,
  hostProfileUserId?: ModelIDInput | null,
};

export type UpdateHostProfileInput = {
  id: string,
  owner?: string | null,
  hostProfileUserId?: string | null,
};

export type DeleteHostProfileInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  owner?: string | null,
  userPlayerProfileId?: string | null,
  userHostProfileId?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userPlayerProfileId?: ModelIDInput | null,
  userHostProfileId?: ModelIDInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
  userPlayerProfileId?: string | null,
  userHostProfileId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateVenueInput = {
  id?: string | null,
  name: string,
  latitude: number,
  longitude: number,
  owner?: string | null,
  hostProfileVenuesId?: string | null,
  userVenuesId?: string | null,
};

export type ModelVenueConditionInput = {
  name?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelVenueConditionInput | null > | null,
  or?: Array< ModelVenueConditionInput | null > | null,
  not?: ModelVenueConditionInput | null,
  hostProfileVenuesId?: ModelIDInput | null,
  userVenuesId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateVenueInput = {
  id: string,
  name?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  owner?: string | null,
  hostProfileVenuesId?: string | null,
  userVenuesId?: string | null,
};

export type DeleteVenueInput = {
  id: string,
};

export type CreateTimeslotInput = {
  id?: string | null,
  startTime: string,
  endTime: string,
  owner?: string | null,
  venueTimeslotsId?: string | null,
};

export type ModelTimeslotConditionInput = {
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTimeslotConditionInput | null > | null,
  or?: Array< ModelTimeslotConditionInput | null > | null,
  not?: ModelTimeslotConditionInput | null,
  venueTimeslotsId?: ModelIDInput | null,
};

export type UpdateTimeslotInput = {
  id: string,
  startTime?: string | null,
  endTime?: string | null,
  owner?: string | null,
  venueTimeslotsId?: string | null,
};

export type DeleteTimeslotInput = {
  id: string,
};

export type CreateTableInput = {
  id?: string | null,
  number: number,
  capacity: number,
  owner?: string | null,
  venueTablesId?: string | null,
  tableGamesId?: string | null,
};

export type ModelTableConditionInput = {
  number?: ModelIntInput | null,
  capacity?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTableConditionInput | null > | null,
  or?: Array< ModelTableConditionInput | null > | null,
  not?: ModelTableConditionInput | null,
  venueTablesId?: ModelIDInput | null,
  tableGamesId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTableInput = {
  id: string,
  number?: number | null,
  capacity?: number | null,
  owner?: string | null,
  venueTablesId?: string | null,
  tableGamesId?: string | null,
};

export type DeleteTableInput = {
  id: string,
};

export type CreateBoardGameInput = {
  id?: string | null,
  bgaId: string,
  name: string,
  description?: string | null,
  minPlayers: number,
  maxPlayers: number,
  category?: string | null,
  imageUrl?: string | null,
};

export type ModelBoardGameConditionInput = {
  bgaId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  minPlayers?: ModelIntInput | null,
  maxPlayers?: ModelIntInput | null,
  category?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelBoardGameConditionInput | null > | null,
  or?: Array< ModelBoardGameConditionInput | null > | null,
  not?: ModelBoardGameConditionInput | null,
};

export type UpdateBoardGameInput = {
  id: string,
  bgaId?: string | null,
  name?: string | null,
  description?: string | null,
  minPlayers?: number | null,
  maxPlayers?: number | null,
  category?: string | null,
  imageUrl?: string | null,
};

export type DeleteBoardGameInput = {
  id: string,
};

export type CreateGameInput = {
  id?: string | null,
  name: string,
  description: string,
  players: number,
  isPrivate: boolean,
  cost?: number | null,
  currency: string,
  owner?: string | null,
  playerProfileHostedGamesId?: string | null,
  hostProfileHostedGamesId?: string | null,
  gameBoardGameId: string,
  gameTableId?: string | null,
};

export type ModelGameConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  players?: ModelIntInput | null,
  isPrivate?: ModelBooleanInput | null,
  cost?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
  playerProfileHostedGamesId?: ModelIDInput | null,
  hostProfileHostedGamesId?: ModelIDInput | null,
  gameBoardGameId?: ModelIDInput | null,
  gameTableId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateGameInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  players?: number | null,
  isPrivate?: boolean | null,
  cost?: number | null,
  currency?: string | null,
  owner?: string | null,
  playerProfileHostedGamesId?: string | null,
  hostProfileHostedGamesId?: string | null,
  gameBoardGameId?: string | null,
  gameTableId?: string | null,
};

export type DeleteGameInput = {
  id: string,
};

export type CreateGameResultInput = {
  id?: string | null,
  score: number,
  outcome: string,
  owner?: string | null,
  playerProfileGamesPlayedId?: string | null,
  gameResultsId?: string | null,
};

export type ModelGameResultConditionInput = {
  score?: ModelIntInput | null,
  outcome?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGameResultConditionInput | null > | null,
  or?: Array< ModelGameResultConditionInput | null > | null,
  not?: ModelGameResultConditionInput | null,
  playerProfileGamesPlayedId?: ModelIDInput | null,
  gameResultsId?: ModelIDInput | null,
};

export type UpdateGameResultInput = {
  id: string,
  score?: number | null,
  outcome?: string | null,
  owner?: string | null,
  playerProfileGamesPlayedId?: string | null,
  gameResultsId?: string | null,
};

export type DeleteGameResultInput = {
  id: string,
};

export type CreateRatingInput = {
  id?: string | null,
  rating: number,
  comment?: string | null,
  owner?: string | null,
  playerProfileReceivedHostRatingsId?: string | null,
  playerProfileGivenHostRatingsId?: string | null,
  hostProfileReceivedPlayerRatingsId?: string | null,
  hostProfileGivenPlayerRatingsId?: string | null,
};

export type ModelRatingConditionInput = {
  rating?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelRatingConditionInput | null > | null,
  or?: Array< ModelRatingConditionInput | null > | null,
  not?: ModelRatingConditionInput | null,
  playerProfileReceivedHostRatingsId?: ModelIDInput | null,
  playerProfileGivenHostRatingsId?: ModelIDInput | null,
  hostProfileReceivedPlayerRatingsId?: ModelIDInput | null,
  hostProfileGivenPlayerRatingsId?: ModelIDInput | null,
};

export type UpdateRatingInput = {
  id: string,
  rating?: number | null,
  comment?: string | null,
  owner?: string | null,
  playerProfileReceivedHostRatingsId?: string | null,
  playerProfileGivenHostRatingsId?: string | null,
  hostProfileReceivedPlayerRatingsId?: string | null,
  hostProfileGivenPlayerRatingsId?: string | null,
};

export type DeleteRatingInput = {
  id: string,
};

export type CreateBookingInput = {
  id?: string | null,
  paymentStatus?: string | null,
  paymentReceipt?: string | null,
  owner?: string | null,
  userBookingsId?: string | null,
  venueBookingsId?: string | null,
  timeslotBookingsId?: string | null,
  tableBookingsId?: string | null,
};

export type ModelBookingConditionInput = {
  paymentStatus?: ModelStringInput | null,
  paymentReceipt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBookingConditionInput | null > | null,
  or?: Array< ModelBookingConditionInput | null > | null,
  not?: ModelBookingConditionInput | null,
  userBookingsId?: ModelIDInput | null,
  venueBookingsId?: ModelIDInput | null,
  timeslotBookingsId?: ModelIDInput | null,
  tableBookingsId?: ModelIDInput | null,
};

export type UpdateBookingInput = {
  id: string,
  paymentStatus?: string | null,
  paymentReceipt?: string | null,
  owner?: string | null,
  userBookingsId?: string | null,
  venueBookingsId?: string | null,
  timeslotBookingsId?: string | null,
  tableBookingsId?: string | null,
};

export type DeleteBookingInput = {
  id: string,
};

export type ModelPlayerProfileFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelPlayerProfileFilterInput | null > | null,
  or?: Array< ModelPlayerProfileFilterInput | null > | null,
  not?: ModelPlayerProfileFilterInput | null,
  playerProfileUserId?: ModelIDInput | null,
};

export type ModelPlayerProfileConnection = {
  __typename: "ModelPlayerProfileConnection",
  items:  Array<PlayerProfile | null >,
  nextToken?: string | null,
};

export type ModelHostProfileFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelHostProfileFilterInput | null > | null,
  or?: Array< ModelHostProfileFilterInput | null > | null,
  not?: ModelHostProfileFilterInput | null,
  hostProfileUserId?: ModelIDInput | null,
};

export type ModelHostProfileConnection = {
  __typename: "ModelHostProfileConnection",
  items:  Array<HostProfile | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userPlayerProfileId?: ModelIDInput | null,
  userHostProfileId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type SearchableUserFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  userPlayerProfileId?: SearchableIDFilterInput | null,
  userHostProfileId?: SearchableIDFilterInput | null,
  and?: Array< SearchableUserFilterInput | null > | null,
  or?: Array< SearchableUserFilterInput | null > | null,
  not?: SearchableUserFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableUserSortInput = {
  field?: SearchableUserSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUserSortableFields {
  id = "id",
  name = "name",
  owner = "owner",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userPlayerProfileId = "userPlayerProfileId",
  userHostProfileId = "userHostProfileId",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableUserAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableUserAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableUserAggregateField {
  id = "id",
  name = "name",
  owner = "owner",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userPlayerProfileId = "userPlayerProfileId",
  userHostProfileId = "userHostProfileId",
}


export type SearchableUserConnection = {
  __typename: "SearchableUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelVenueFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelVenueFilterInput | null > | null,
  or?: Array< ModelVenueFilterInput | null > | null,
  not?: ModelVenueFilterInput | null,
  hostProfileVenuesId?: ModelIDInput | null,
  userVenuesId?: ModelIDInput | null,
};

export type SearchableVenueFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  latitude?: SearchableFloatFilterInput | null,
  longitude?: SearchableFloatFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  hostProfileVenuesId?: SearchableIDFilterInput | null,
  userVenuesId?: SearchableIDFilterInput | null,
  and?: Array< SearchableVenueFilterInput | null > | null,
  or?: Array< SearchableVenueFilterInput | null > | null,
  not?: SearchableVenueFilterInput | null,
};

export type SearchableFloatFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableVenueSortInput = {
  field?: SearchableVenueSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableVenueSortableFields {
  id = "id",
  name = "name",
  latitude = "latitude",
  longitude = "longitude",
  owner = "owner",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  hostProfileVenuesId = "hostProfileVenuesId",
  userVenuesId = "userVenuesId",
}


export type SearchableVenueAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableVenueAggregateField,
};

export enum SearchableVenueAggregateField {
  id = "id",
  name = "name",
  latitude = "latitude",
  longitude = "longitude",
  owner = "owner",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  hostProfileVenuesId = "hostProfileVenuesId",
  userVenuesId = "userVenuesId",
}


export type SearchableVenueConnection = {
  __typename: "SearchableVenueConnection",
  items:  Array<Venue | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelTimeslotFilterInput = {
  id?: ModelIDInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTimeslotFilterInput | null > | null,
  or?: Array< ModelTimeslotFilterInput | null > | null,
  not?: ModelTimeslotFilterInput | null,
  venueTimeslotsId?: ModelIDInput | null,
};

export type SearchableTimeslotFilterInput = {
  id?: SearchableIDFilterInput | null,
  startTime?: SearchableStringFilterInput | null,
  endTime?: SearchableStringFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  venueTimeslotsId?: SearchableIDFilterInput | null,
  and?: Array< SearchableTimeslotFilterInput | null > | null,
  or?: Array< SearchableTimeslotFilterInput | null > | null,
  not?: SearchableTimeslotFilterInput | null,
};

export type SearchableTimeslotSortInput = {
  field?: SearchableTimeslotSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableTimeslotSortableFields {
  id = "id",
  startTime = "startTime",
  endTime = "endTime",
  owner = "owner",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  venueTimeslotsId = "venueTimeslotsId",
}


export type SearchableTimeslotAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableTimeslotAggregateField,
};

export enum SearchableTimeslotAggregateField {
  id = "id",
  startTime = "startTime",
  endTime = "endTime",
  owner = "owner",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  venueTimeslotsId = "venueTimeslotsId",
}


export type SearchableTimeslotConnection = {
  __typename: "SearchableTimeslotConnection",
  items:  Array<Timeslot | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelTableFilterInput = {
  id?: ModelIDInput | null,
  number?: ModelIntInput | null,
  capacity?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTableFilterInput | null > | null,
  or?: Array< ModelTableFilterInput | null > | null,
  not?: ModelTableFilterInput | null,
  venueTablesId?: ModelIDInput | null,
  tableGamesId?: ModelIDInput | null,
};

export type ModelBoardGameFilterInput = {
  id?: ModelIDInput | null,
  bgaId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  minPlayers?: ModelIntInput | null,
  maxPlayers?: ModelIntInput | null,
  category?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelBoardGameFilterInput | null > | null,
  or?: Array< ModelBoardGameFilterInput | null > | null,
  not?: ModelBoardGameFilterInput | null,
};

export type ModelBoardGameConnection = {
  __typename: "ModelBoardGameConnection",
  items:  Array<BoardGame | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type SearchableBoardGameFilterInput = {
  id?: SearchableIDFilterInput | null,
  bgaId?: SearchableStringFilterInput | null,
  name?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  minPlayers?: SearchableIntFilterInput | null,
  maxPlayers?: SearchableIntFilterInput | null,
  category?: SearchableStringFilterInput | null,
  imageUrl?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableBoardGameFilterInput | null > | null,
  or?: Array< SearchableBoardGameFilterInput | null > | null,
  not?: SearchableBoardGameFilterInput | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableBoardGameSortInput = {
  field?: SearchableBoardGameSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableBoardGameSortableFields {
  id = "id",
  bgaId = "bgaId",
  name = "name",
  description = "description",
  minPlayers = "minPlayers",
  maxPlayers = "maxPlayers",
  category = "category",
  imageUrl = "imageUrl",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableBoardGameAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableBoardGameAggregateField,
};

export enum SearchableBoardGameAggregateField {
  id = "id",
  bgaId = "bgaId",
  name = "name",
  description = "description",
  minPlayers = "minPlayers",
  maxPlayers = "maxPlayers",
  category = "category",
  imageUrl = "imageUrl",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableBoardGameConnection = {
  __typename: "SearchableBoardGameConnection",
  items:  Array<BoardGame | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  players?: ModelIntInput | null,
  isPrivate?: ModelBooleanInput | null,
  cost?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
  playerProfileHostedGamesId?: ModelIDInput | null,
  hostProfileHostedGamesId?: ModelIDInput | null,
  gameBoardGameId?: ModelIDInput | null,
  gameTableId?: ModelIDInput | null,
};

export type ModelGameResultFilterInput = {
  id?: ModelIDInput | null,
  score?: ModelIntInput | null,
  outcome?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGameResultFilterInput | null > | null,
  or?: Array< ModelGameResultFilterInput | null > | null,
  not?: ModelGameResultFilterInput | null,
  playerProfileGamesPlayedId?: ModelIDInput | null,
  gameResultsId?: ModelIDInput | null,
};

export type ModelRatingFilterInput = {
  id?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelRatingFilterInput | null > | null,
  or?: Array< ModelRatingFilterInput | null > | null,
  not?: ModelRatingFilterInput | null,
  playerProfileReceivedHostRatingsId?: ModelIDInput | null,
  playerProfileGivenHostRatingsId?: ModelIDInput | null,
  hostProfileReceivedPlayerRatingsId?: ModelIDInput | null,
  hostProfileGivenPlayerRatingsId?: ModelIDInput | null,
};

export type ModelBookingFilterInput = {
  id?: ModelIDInput | null,
  paymentStatus?: ModelStringInput | null,
  paymentReceipt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBookingFilterInput | null > | null,
  or?: Array< ModelBookingFilterInput | null > | null,
  not?: ModelBookingFilterInput | null,
  userBookingsId?: ModelIDInput | null,
  venueBookingsId?: ModelIDInput | null,
  timeslotBookingsId?: ModelIDInput | null,
  tableBookingsId?: ModelIDInput | null,
};

export type ModelSubscriptionPlayerProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPlayerProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayerProfileFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionHostProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionHostProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionHostProfileFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionVenueFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionVenueFilterInput | null > | null,
  or?: Array< ModelSubscriptionVenueFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTimeslotFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  endTime?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTimeslotFilterInput | null > | null,
  or?: Array< ModelSubscriptionTimeslotFilterInput | null > | null,
};

export type ModelSubscriptionTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  number?: ModelSubscriptionIntInput | null,
  capacity?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionTableFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBoardGameFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  bgaId?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  minPlayers?: ModelSubscriptionIntInput | null,
  maxPlayers?: ModelSubscriptionIntInput | null,
  category?: ModelSubscriptionStringInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBoardGameFilterInput | null > | null,
  or?: Array< ModelSubscriptionBoardGameFilterInput | null > | null,
};

export type ModelSubscriptionGameFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  players?: ModelSubscriptionIntInput | null,
  isPrivate?: ModelSubscriptionBooleanInput | null,
  cost?: ModelSubscriptionFloatInput | null,
  currency?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGameFilterInput | null > | null,
  or?: Array< ModelSubscriptionGameFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionGameResultFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  score?: ModelSubscriptionIntInput | null,
  outcome?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGameResultFilterInput | null > | null,
  or?: Array< ModelSubscriptionGameResultFilterInput | null > | null,
};

export type ModelSubscriptionRatingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  rating?: ModelSubscriptionIntInput | null,
  comment?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRatingFilterInput | null > | null,
  or?: Array< ModelSubscriptionRatingFilterInput | null > | null,
};

export type ModelSubscriptionBookingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  paymentStatus?: ModelSubscriptionStringInput | null,
  paymentReceipt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBookingFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookingFilterInput | null > | null,
};

export type CreatePlayerProfileMutationVariables = {
  input: CreatePlayerProfileInput,
  condition?: ModelPlayerProfileConditionInput | null,
};

export type CreatePlayerProfileMutation = {
  createPlayerProfile?:  {
    __typename: "PlayerProfile",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    gamesPlayed?:  {
      __typename: "ModelGameResultConnection",
      items:  Array< {
        __typename: "GameResult",
        id: string,
        score: number,
        outcome: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileGamesPlayedId?: string | null,
        gameResultsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostedGames?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    receivedHostRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    givenHostRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileUserId: string,
  } | null,
};

export type UpdatePlayerProfileMutationVariables = {
  input: UpdatePlayerProfileInput,
  condition?: ModelPlayerProfileConditionInput | null,
};

export type UpdatePlayerProfileMutation = {
  updatePlayerProfile?:  {
    __typename: "PlayerProfile",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    gamesPlayed?:  {
      __typename: "ModelGameResultConnection",
      items:  Array< {
        __typename: "GameResult",
        id: string,
        score: number,
        outcome: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileGamesPlayedId?: string | null,
        gameResultsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostedGames?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    receivedHostRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    givenHostRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileUserId: string,
  } | null,
};

export type DeletePlayerProfileMutationVariables = {
  input: DeletePlayerProfileInput,
  condition?: ModelPlayerProfileConditionInput | null,
};

export type DeletePlayerProfileMutation = {
  deletePlayerProfile?:  {
    __typename: "PlayerProfile",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    gamesPlayed?:  {
      __typename: "ModelGameResultConnection",
      items:  Array< {
        __typename: "GameResult",
        id: string,
        score: number,
        outcome: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileGamesPlayedId?: string | null,
        gameResultsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostedGames?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    receivedHostRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    givenHostRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileUserId: string,
  } | null,
};

export type CreateHostProfileMutationVariables = {
  input: CreateHostProfileInput,
  condition?: ModelHostProfileConditionInput | null,
};

export type CreateHostProfileMutation = {
  createHostProfile?:  {
    __typename: "HostProfile",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    venues?:  {
      __typename: "ModelVenueConnection",
      items:  Array< {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostedGames?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    receivedPlayerRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    givenPlayerRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    hostProfileUserId: string,
  } | null,
};

export type UpdateHostProfileMutationVariables = {
  input: UpdateHostProfileInput,
  condition?: ModelHostProfileConditionInput | null,
};

export type UpdateHostProfileMutation = {
  updateHostProfile?:  {
    __typename: "HostProfile",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    venues?:  {
      __typename: "ModelVenueConnection",
      items:  Array< {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostedGames?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    receivedPlayerRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    givenPlayerRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    hostProfileUserId: string,
  } | null,
};

export type DeleteHostProfileMutationVariables = {
  input: DeleteHostProfileInput,
  condition?: ModelHostProfileConditionInput | null,
};

export type DeleteHostProfileMutation = {
  deleteHostProfile?:  {
    __typename: "HostProfile",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    venues?:  {
      __typename: "ModelVenueConnection",
      items:  Array< {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostedGames?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    receivedPlayerRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    givenPlayerRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    hostProfileUserId: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    hostProfile?:  {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null,
    venues?:  {
      __typename: "ModelVenueConnection",
      items:  Array< {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userPlayerProfileId?: string | null,
    userHostProfileId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    hostProfile?:  {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null,
    venues?:  {
      __typename: "ModelVenueConnection",
      items:  Array< {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userPlayerProfileId?: string | null,
    userHostProfileId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    hostProfile?:  {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null,
    venues?:  {
      __typename: "ModelVenueConnection",
      items:  Array< {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userPlayerProfileId?: string | null,
    userHostProfileId?: string | null,
  } | null,
};

export type CreateVenueMutationVariables = {
  input: CreateVenueInput,
  condition?: ModelVenueConditionInput | null,
};

export type CreateVenueMutation = {
  createVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    tables?:  {
      __typename: "ModelTableConnection",
      items:  Array< {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    timeslots?:  {
      __typename: "ModelTimeslotConnection",
      items:  Array< {
        __typename: "Timeslot",
        id: string,
        startTime: string,
        endTime: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTimeslotsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostingUser:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    hostProfileVenuesId?: string | null,
    userVenuesId?: string | null,
  } | null,
};

export type UpdateVenueMutationVariables = {
  input: UpdateVenueInput,
  condition?: ModelVenueConditionInput | null,
};

export type UpdateVenueMutation = {
  updateVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    tables?:  {
      __typename: "ModelTableConnection",
      items:  Array< {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    timeslots?:  {
      __typename: "ModelTimeslotConnection",
      items:  Array< {
        __typename: "Timeslot",
        id: string,
        startTime: string,
        endTime: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTimeslotsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostingUser:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    hostProfileVenuesId?: string | null,
    userVenuesId?: string | null,
  } | null,
};

export type DeleteVenueMutationVariables = {
  input: DeleteVenueInput,
  condition?: ModelVenueConditionInput | null,
};

export type DeleteVenueMutation = {
  deleteVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    tables?:  {
      __typename: "ModelTableConnection",
      items:  Array< {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    timeslots?:  {
      __typename: "ModelTimeslotConnection",
      items:  Array< {
        __typename: "Timeslot",
        id: string,
        startTime: string,
        endTime: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTimeslotsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostingUser:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    hostProfileVenuesId?: string | null,
    userVenuesId?: string | null,
  } | null,
};

export type CreateTimeslotMutationVariables = {
  input: CreateTimeslotInput,
  condition?: ModelTimeslotConditionInput | null,
};

export type CreateTimeslotMutation = {
  createTimeslot?:  {
    __typename: "Timeslot",
    id: string,
    startTime: string,
    endTime: string,
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    venueTimeslotsId?: string | null,
  } | null,
};

export type UpdateTimeslotMutationVariables = {
  input: UpdateTimeslotInput,
  condition?: ModelTimeslotConditionInput | null,
};

export type UpdateTimeslotMutation = {
  updateTimeslot?:  {
    __typename: "Timeslot",
    id: string,
    startTime: string,
    endTime: string,
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    venueTimeslotsId?: string | null,
  } | null,
};

export type DeleteTimeslotMutationVariables = {
  input: DeleteTimeslotInput,
  condition?: ModelTimeslotConditionInput | null,
};

export type DeleteTimeslotMutation = {
  deleteTimeslot?:  {
    __typename: "Timeslot",
    id: string,
    startTime: string,
    endTime: string,
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    venueTimeslotsId?: string | null,
  } | null,
};

export type CreateTableMutationVariables = {
  input: CreateTableInput,
  condition?: ModelTableConditionInput | null,
};

export type CreateTableMutation = {
  createTable?:  {
    __typename: "Table",
    id: string,
    number: number,
    capacity: number,
    games?:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    } | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    venueTablesId?: string | null,
    tableGamesId?: string | null,
  } | null,
};

export type UpdateTableMutationVariables = {
  input: UpdateTableInput,
  condition?: ModelTableConditionInput | null,
};

export type UpdateTableMutation = {
  updateTable?:  {
    __typename: "Table",
    id: string,
    number: number,
    capacity: number,
    games?:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    } | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    venueTablesId?: string | null,
    tableGamesId?: string | null,
  } | null,
};

export type DeleteTableMutationVariables = {
  input: DeleteTableInput,
  condition?: ModelTableConditionInput | null,
};

export type DeleteTableMutation = {
  deleteTable?:  {
    __typename: "Table",
    id: string,
    number: number,
    capacity: number,
    games?:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    } | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    venueTablesId?: string | null,
    tableGamesId?: string | null,
  } | null,
};

export type CreateBoardGameMutationVariables = {
  input: CreateBoardGameInput,
  condition?: ModelBoardGameConditionInput | null,
};

export type CreateBoardGameMutation = {
  createBoardGame?:  {
    __typename: "BoardGame",
    id: string,
    bgaId: string,
    name: string,
    description?: string | null,
    minPlayers: number,
    maxPlayers: number,
    category?: string | null,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBoardGameMutationVariables = {
  input: UpdateBoardGameInput,
  condition?: ModelBoardGameConditionInput | null,
};

export type UpdateBoardGameMutation = {
  updateBoardGame?:  {
    __typename: "BoardGame",
    id: string,
    bgaId: string,
    name: string,
    description?: string | null,
    minPlayers: number,
    maxPlayers: number,
    category?: string | null,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBoardGameMutationVariables = {
  input: DeleteBoardGameInput,
  condition?: ModelBoardGameConditionInput | null,
};

export type DeleteBoardGameMutation = {
  deleteBoardGame?:  {
    __typename: "BoardGame",
    id: string,
    bgaId: string,
    name: string,
    description?: string | null,
    minPlayers: number,
    maxPlayers: number,
    category?: string | null,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    description: string,
    boardGame:  {
      __typename: "BoardGame",
      id: string,
      bgaId: string,
      name: string,
      description?: string | null,
      minPlayers: number,
      maxPlayers: number,
      category?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    players: number,
    table?:  {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    } | null,
    isPrivate: boolean,
    cost?: number | null,
    currency: string,
    results?:  {
      __typename: "ModelGameResultConnection",
      items:  Array< {
        __typename: "GameResult",
        id: string,
        score: number,
        outcome: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileGamesPlayedId?: string | null,
        gameResultsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileHostedGamesId?: string | null,
    hostProfileHostedGamesId?: string | null,
    gameBoardGameId: string,
    gameTableId?: string | null,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    description: string,
    boardGame:  {
      __typename: "BoardGame",
      id: string,
      bgaId: string,
      name: string,
      description?: string | null,
      minPlayers: number,
      maxPlayers: number,
      category?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    players: number,
    table?:  {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    } | null,
    isPrivate: boolean,
    cost?: number | null,
    currency: string,
    results?:  {
      __typename: "ModelGameResultConnection",
      items:  Array< {
        __typename: "GameResult",
        id: string,
        score: number,
        outcome: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileGamesPlayedId?: string | null,
        gameResultsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileHostedGamesId?: string | null,
    hostProfileHostedGamesId?: string | null,
    gameBoardGameId: string,
    gameTableId?: string | null,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    description: string,
    boardGame:  {
      __typename: "BoardGame",
      id: string,
      bgaId: string,
      name: string,
      description?: string | null,
      minPlayers: number,
      maxPlayers: number,
      category?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    players: number,
    table?:  {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    } | null,
    isPrivate: boolean,
    cost?: number | null,
    currency: string,
    results?:  {
      __typename: "ModelGameResultConnection",
      items:  Array< {
        __typename: "GameResult",
        id: string,
        score: number,
        outcome: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileGamesPlayedId?: string | null,
        gameResultsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileHostedGamesId?: string | null,
    hostProfileHostedGamesId?: string | null,
    gameBoardGameId: string,
    gameTableId?: string | null,
  } | null,
};

export type CreateGameResultMutationVariables = {
  input: CreateGameResultInput,
  condition?: ModelGameResultConditionInput | null,
};

export type CreateGameResultMutation = {
  createGameResult?:  {
    __typename: "GameResult",
    id: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    },
    score: number,
    outcome: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileGamesPlayedId?: string | null,
    gameResultsId?: string | null,
  } | null,
};

export type UpdateGameResultMutationVariables = {
  input: UpdateGameResultInput,
  condition?: ModelGameResultConditionInput | null,
};

export type UpdateGameResultMutation = {
  updateGameResult?:  {
    __typename: "GameResult",
    id: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    },
    score: number,
    outcome: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileGamesPlayedId?: string | null,
    gameResultsId?: string | null,
  } | null,
};

export type DeleteGameResultMutationVariables = {
  input: DeleteGameResultInput,
  condition?: ModelGameResultConditionInput | null,
};

export type DeleteGameResultMutation = {
  deleteGameResult?:  {
    __typename: "GameResult",
    id: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    },
    score: number,
    outcome: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileGamesPlayedId?: string | null,
    gameResultsId?: string | null,
  } | null,
};

export type CreateRatingMutationVariables = {
  input: CreateRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type CreateRatingMutation = {
  createRating?:  {
    __typename: "Rating",
    id: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    hostProfile?:  {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null,
    rating: number,
    comment?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileReceivedHostRatingsId?: string | null,
    playerProfileGivenHostRatingsId?: string | null,
    hostProfileReceivedPlayerRatingsId?: string | null,
    hostProfileGivenPlayerRatingsId?: string | null,
  } | null,
};

export type UpdateRatingMutationVariables = {
  input: UpdateRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type UpdateRatingMutation = {
  updateRating?:  {
    __typename: "Rating",
    id: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    hostProfile?:  {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null,
    rating: number,
    comment?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileReceivedHostRatingsId?: string | null,
    playerProfileGivenHostRatingsId?: string | null,
    hostProfileReceivedPlayerRatingsId?: string | null,
    hostProfileGivenPlayerRatingsId?: string | null,
  } | null,
};

export type DeleteRatingMutationVariables = {
  input: DeleteRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type DeleteRatingMutation = {
  deleteRating?:  {
    __typename: "Rating",
    id: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    hostProfile?:  {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null,
    rating: number,
    comment?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileReceivedHostRatingsId?: string | null,
    playerProfileGivenHostRatingsId?: string | null,
    hostProfileReceivedPlayerRatingsId?: string | null,
    hostProfileGivenPlayerRatingsId?: string | null,
  } | null,
};

export type CreateBookingMutationVariables = {
  input: CreateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type CreateBookingMutation = {
  createBooking?:  {
    __typename: "Booking",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    },
    table:  {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    },
    timeslot:  {
      __typename: "Timeslot",
      id: string,
      startTime: string,
      endTime: string,
      venue:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTimeslotsId?: string | null,
    },
    paymentStatus?: string | null,
    paymentReceipt?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userBookingsId?: string | null,
    venueBookingsId?: string | null,
    timeslotBookingsId?: string | null,
    tableBookingsId?: string | null,
  } | null,
};

export type UpdateBookingMutationVariables = {
  input: UpdateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type UpdateBookingMutation = {
  updateBooking?:  {
    __typename: "Booking",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    },
    table:  {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    },
    timeslot:  {
      __typename: "Timeslot",
      id: string,
      startTime: string,
      endTime: string,
      venue:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTimeslotsId?: string | null,
    },
    paymentStatus?: string | null,
    paymentReceipt?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userBookingsId?: string | null,
    venueBookingsId?: string | null,
    timeslotBookingsId?: string | null,
    tableBookingsId?: string | null,
  } | null,
};

export type DeleteBookingMutationVariables = {
  input: DeleteBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type DeleteBookingMutation = {
  deleteBooking?:  {
    __typename: "Booking",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    },
    table:  {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    },
    timeslot:  {
      __typename: "Timeslot",
      id: string,
      startTime: string,
      endTime: string,
      venue:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTimeslotsId?: string | null,
    },
    paymentStatus?: string | null,
    paymentReceipt?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userBookingsId?: string | null,
    venueBookingsId?: string | null,
    timeslotBookingsId?: string | null,
    tableBookingsId?: string | null,
  } | null,
};

export type GetPlayerProfileQueryVariables = {
  id: string,
};

export type GetPlayerProfileQuery = {
  getPlayerProfile?:  {
    __typename: "PlayerProfile",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    gamesPlayed?:  {
      __typename: "ModelGameResultConnection",
      items:  Array< {
        __typename: "GameResult",
        id: string,
        score: number,
        outcome: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileGamesPlayedId?: string | null,
        gameResultsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostedGames?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    receivedHostRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    givenHostRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileUserId: string,
  } | null,
};

export type ListPlayerProfilesQueryVariables = {
  filter?: ModelPlayerProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerProfilesQuery = {
  listPlayerProfiles?:  {
    __typename: "ModelPlayerProfileConnection",
    items:  Array< {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHostProfileQueryVariables = {
  id: string,
};

export type GetHostProfileQuery = {
  getHostProfile?:  {
    __typename: "HostProfile",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    venues?:  {
      __typename: "ModelVenueConnection",
      items:  Array< {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostedGames?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    receivedPlayerRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    givenPlayerRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    hostProfileUserId: string,
  } | null,
};

export type ListHostProfilesQueryVariables = {
  filter?: ModelHostProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHostProfilesQuery = {
  listHostProfiles?:  {
    __typename: "ModelHostProfileConnection",
    items:  Array< {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    hostProfile?:  {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null,
    venues?:  {
      __typename: "ModelVenueConnection",
      items:  Array< {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userPlayerProfileId?: string | null,
    userHostProfileId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchUsersQueryVariables = {
  filter?: SearchableUserFilterInput | null,
  sort?: Array< SearchableUserSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableUserAggregationInput | null > | null,
};

export type SearchUsersQuery = {
  searchUsers?:  {
    __typename: "SearchableUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetVenueQueryVariables = {
  id: string,
};

export type GetVenueQuery = {
  getVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    tables?:  {
      __typename: "ModelTableConnection",
      items:  Array< {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    timeslots?:  {
      __typename: "ModelTimeslotConnection",
      items:  Array< {
        __typename: "Timeslot",
        id: string,
        startTime: string,
        endTime: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTimeslotsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostingUser:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    hostProfileVenuesId?: string | null,
    userVenuesId?: string | null,
  } | null,
};

export type ListVenuesQueryVariables = {
  filter?: ModelVenueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVenuesQuery = {
  listVenues?:  {
    __typename: "ModelVenueConnection",
    items:  Array< {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchVenuesQueryVariables = {
  filter?: SearchableVenueFilterInput | null,
  sort?: Array< SearchableVenueSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableVenueAggregationInput | null > | null,
};

export type SearchVenuesQuery = {
  searchVenues?:  {
    __typename: "SearchableVenueConnection",
    items:  Array< {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetTimeslotQueryVariables = {
  id: string,
};

export type GetTimeslotQuery = {
  getTimeslot?:  {
    __typename: "Timeslot",
    id: string,
    startTime: string,
    endTime: string,
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    venueTimeslotsId?: string | null,
  } | null,
};

export type ListTimeslotsQueryVariables = {
  filter?: ModelTimeslotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTimeslotsQuery = {
  listTimeslots?:  {
    __typename: "ModelTimeslotConnection",
    items:  Array< {
      __typename: "Timeslot",
      id: string,
      startTime: string,
      endTime: string,
      venue:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTimeslotsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchTimeslotsQueryVariables = {
  filter?: SearchableTimeslotFilterInput | null,
  sort?: Array< SearchableTimeslotSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableTimeslotAggregationInput | null > | null,
};

export type SearchTimeslotsQuery = {
  searchTimeslots?:  {
    __typename: "SearchableTimeslotConnection",
    items:  Array< {
      __typename: "Timeslot",
      id: string,
      startTime: string,
      endTime: string,
      venue:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTimeslotsId?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetTableQueryVariables = {
  id: string,
};

export type GetTableQuery = {
  getTable?:  {
    __typename: "Table",
    id: string,
    number: number,
    capacity: number,
    games?:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    } | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    venueTablesId?: string | null,
    tableGamesId?: string | null,
  } | null,
};

export type ListTablesQueryVariables = {
  filter?: ModelTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTablesQuery = {
  listTables?:  {
    __typename: "ModelTableConnection",
    items:  Array< {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBoardGameQueryVariables = {
  id: string,
};

export type GetBoardGameQuery = {
  getBoardGame?:  {
    __typename: "BoardGame",
    id: string,
    bgaId: string,
    name: string,
    description?: string | null,
    minPlayers: number,
    maxPlayers: number,
    category?: string | null,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBoardGamesQueryVariables = {
  filter?: ModelBoardGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardGamesQuery = {
  listBoardGames?:  {
    __typename: "ModelBoardGameConnection",
    items:  Array< {
      __typename: "BoardGame",
      id: string,
      bgaId: string,
      name: string,
      description?: string | null,
      minPlayers: number,
      maxPlayers: number,
      category?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BoardGamesByBgaIdQueryVariables = {
  bgaId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBoardGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BoardGamesByBgaIdQuery = {
  boardGamesByBgaId?:  {
    __typename: "ModelBoardGameConnection",
    items:  Array< {
      __typename: "BoardGame",
      id: string,
      bgaId: string,
      name: string,
      description?: string | null,
      minPlayers: number,
      maxPlayers: number,
      category?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchBoardGamesQueryVariables = {
  filter?: SearchableBoardGameFilterInput | null,
  sort?: Array< SearchableBoardGameSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableBoardGameAggregationInput | null > | null,
};

export type SearchBoardGamesQuery = {
  searchBoardGames?:  {
    __typename: "SearchableBoardGameConnection",
    items:  Array< {
      __typename: "BoardGame",
      id: string,
      bgaId: string,
      name: string,
      description?: string | null,
      minPlayers: number,
      maxPlayers: number,
      category?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    description: string,
    boardGame:  {
      __typename: "BoardGame",
      id: string,
      bgaId: string,
      name: string,
      description?: string | null,
      minPlayers: number,
      maxPlayers: number,
      category?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    players: number,
    table?:  {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    } | null,
    isPrivate: boolean,
    cost?: number | null,
    currency: string,
    results?:  {
      __typename: "ModelGameResultConnection",
      items:  Array< {
        __typename: "GameResult",
        id: string,
        score: number,
        outcome: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileGamesPlayedId?: string | null,
        gameResultsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileHostedGamesId?: string | null,
    hostProfileHostedGamesId?: string | null,
    gameBoardGameId: string,
    gameTableId?: string | null,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGameResultQueryVariables = {
  id: string,
};

export type GetGameResultQuery = {
  getGameResult?:  {
    __typename: "GameResult",
    id: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    },
    score: number,
    outcome: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileGamesPlayedId?: string | null,
    gameResultsId?: string | null,
  } | null,
};

export type ListGameResultsQueryVariables = {
  filter?: ModelGameResultFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGameResultsQuery = {
  listGameResults?:  {
    __typename: "ModelGameResultConnection",
    items:  Array< {
      __typename: "GameResult",
      id: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      game:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      },
      score: number,
      outcome: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileGamesPlayedId?: string | null,
      gameResultsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRatingQueryVariables = {
  id: string,
};

export type GetRatingQuery = {
  getRating?:  {
    __typename: "Rating",
    id: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    hostProfile?:  {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null,
    rating: number,
    comment?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileReceivedHostRatingsId?: string | null,
    playerProfileGivenHostRatingsId?: string | null,
    hostProfileReceivedPlayerRatingsId?: string | null,
    hostProfileGivenPlayerRatingsId?: string | null,
  } | null,
};

export type ListRatingsQueryVariables = {
  filter?: ModelRatingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRatingsQuery = {
  listRatings?:  {
    __typename: "ModelRatingConnection",
    items:  Array< {
      __typename: "Rating",
      id: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      rating: number,
      comment?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileReceivedHostRatingsId?: string | null,
      playerProfileGivenHostRatingsId?: string | null,
      hostProfileReceivedPlayerRatingsId?: string | null,
      hostProfileGivenPlayerRatingsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBookingQueryVariables = {
  id: string,
};

export type GetBookingQuery = {
  getBooking?:  {
    __typename: "Booking",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    },
    table:  {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    },
    timeslot:  {
      __typename: "Timeslot",
      id: string,
      startTime: string,
      endTime: string,
      venue:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTimeslotsId?: string | null,
    },
    paymentStatus?: string | null,
    paymentReceipt?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userBookingsId?: string | null,
    venueBookingsId?: string | null,
    timeslotBookingsId?: string | null,
    tableBookingsId?: string | null,
  } | null,
};

export type ListBookingsQueryVariables = {
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookingsQuery = {
  listBookings?:  {
    __typename: "ModelBookingConnection",
    items:  Array< {
      __typename: "Booking",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venue:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      },
      table:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      },
      timeslot:  {
        __typename: "Timeslot",
        id: string,
        startTime: string,
        endTime: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTimeslotsId?: string | null,
      },
      paymentStatus?: string | null,
      paymentReceipt?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userBookingsId?: string | null,
      venueBookingsId?: string | null,
      timeslotBookingsId?: string | null,
      tableBookingsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePlayerProfileSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreatePlayerProfileSubscription = {
  onCreatePlayerProfile?:  {
    __typename: "PlayerProfile",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    gamesPlayed?:  {
      __typename: "ModelGameResultConnection",
      items:  Array< {
        __typename: "GameResult",
        id: string,
        score: number,
        outcome: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileGamesPlayedId?: string | null,
        gameResultsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostedGames?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    receivedHostRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    givenHostRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileUserId: string,
  } | null,
};

export type OnUpdatePlayerProfileSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePlayerProfileSubscription = {
  onUpdatePlayerProfile?:  {
    __typename: "PlayerProfile",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    gamesPlayed?:  {
      __typename: "ModelGameResultConnection",
      items:  Array< {
        __typename: "GameResult",
        id: string,
        score: number,
        outcome: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileGamesPlayedId?: string | null,
        gameResultsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostedGames?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    receivedHostRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    givenHostRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileUserId: string,
  } | null,
};

export type OnDeletePlayerProfileSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeletePlayerProfileSubscription = {
  onDeletePlayerProfile?:  {
    __typename: "PlayerProfile",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    gamesPlayed?:  {
      __typename: "ModelGameResultConnection",
      items:  Array< {
        __typename: "GameResult",
        id: string,
        score: number,
        outcome: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileGamesPlayedId?: string | null,
        gameResultsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostedGames?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    receivedHostRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    givenHostRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileUserId: string,
  } | null,
};

export type OnCreateHostProfileSubscriptionVariables = {
  filter?: ModelSubscriptionHostProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateHostProfileSubscription = {
  onCreateHostProfile?:  {
    __typename: "HostProfile",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    venues?:  {
      __typename: "ModelVenueConnection",
      items:  Array< {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostedGames?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    receivedPlayerRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    givenPlayerRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    hostProfileUserId: string,
  } | null,
};

export type OnUpdateHostProfileSubscriptionVariables = {
  filter?: ModelSubscriptionHostProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateHostProfileSubscription = {
  onUpdateHostProfile?:  {
    __typename: "HostProfile",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    venues?:  {
      __typename: "ModelVenueConnection",
      items:  Array< {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostedGames?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    receivedPlayerRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    givenPlayerRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    hostProfileUserId: string,
  } | null,
};

export type OnDeleteHostProfileSubscriptionVariables = {
  filter?: ModelSubscriptionHostProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteHostProfileSubscription = {
  onDeleteHostProfile?:  {
    __typename: "HostProfile",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    venues?:  {
      __typename: "ModelVenueConnection",
      items:  Array< {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostedGames?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    receivedPlayerRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    givenPlayerRatings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating: number,
        comment?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileReceivedHostRatingsId?: string | null,
        playerProfileGivenHostRatingsId?: string | null,
        hostProfileReceivedPlayerRatingsId?: string | null,
        hostProfileGivenPlayerRatingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    hostProfileUserId: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    hostProfile?:  {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null,
    venues?:  {
      __typename: "ModelVenueConnection",
      items:  Array< {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userPlayerProfileId?: string | null,
    userHostProfileId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    hostProfile?:  {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null,
    venues?:  {
      __typename: "ModelVenueConnection",
      items:  Array< {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userPlayerProfileId?: string | null,
    userHostProfileId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    hostProfile?:  {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null,
    venues?:  {
      __typename: "ModelVenueConnection",
      items:  Array< {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userPlayerProfileId?: string | null,
    userHostProfileId?: string | null,
  } | null,
};

export type OnCreateVenueSubscriptionVariables = {
  filter?: ModelSubscriptionVenueFilterInput | null,
  owner?: string | null,
};

export type OnCreateVenueSubscription = {
  onCreateVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    tables?:  {
      __typename: "ModelTableConnection",
      items:  Array< {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    timeslots?:  {
      __typename: "ModelTimeslotConnection",
      items:  Array< {
        __typename: "Timeslot",
        id: string,
        startTime: string,
        endTime: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTimeslotsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostingUser:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    hostProfileVenuesId?: string | null,
    userVenuesId?: string | null,
  } | null,
};

export type OnUpdateVenueSubscriptionVariables = {
  filter?: ModelSubscriptionVenueFilterInput | null,
  owner?: string | null,
};

export type OnUpdateVenueSubscription = {
  onUpdateVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    tables?:  {
      __typename: "ModelTableConnection",
      items:  Array< {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    timeslots?:  {
      __typename: "ModelTimeslotConnection",
      items:  Array< {
        __typename: "Timeslot",
        id: string,
        startTime: string,
        endTime: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTimeslotsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostingUser:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    hostProfileVenuesId?: string | null,
    userVenuesId?: string | null,
  } | null,
};

export type OnDeleteVenueSubscriptionVariables = {
  filter?: ModelSubscriptionVenueFilterInput | null,
  owner?: string | null,
};

export type OnDeleteVenueSubscription = {
  onDeleteVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    tables?:  {
      __typename: "ModelTableConnection",
      items:  Array< {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    timeslots?:  {
      __typename: "ModelTimeslotConnection",
      items:  Array< {
        __typename: "Timeslot",
        id: string,
        startTime: string,
        endTime: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTimeslotsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostingUser:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    hostProfileVenuesId?: string | null,
    userVenuesId?: string | null,
  } | null,
};

export type OnCreateTimeslotSubscriptionVariables = {
  filter?: ModelSubscriptionTimeslotFilterInput | null,
  owner?: string | null,
};

export type OnCreateTimeslotSubscription = {
  onCreateTimeslot?:  {
    __typename: "Timeslot",
    id: string,
    startTime: string,
    endTime: string,
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    venueTimeslotsId?: string | null,
  } | null,
};

export type OnUpdateTimeslotSubscriptionVariables = {
  filter?: ModelSubscriptionTimeslotFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTimeslotSubscription = {
  onUpdateTimeslot?:  {
    __typename: "Timeslot",
    id: string,
    startTime: string,
    endTime: string,
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    venueTimeslotsId?: string | null,
  } | null,
};

export type OnDeleteTimeslotSubscriptionVariables = {
  filter?: ModelSubscriptionTimeslotFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTimeslotSubscription = {
  onDeleteTimeslot?:  {
    __typename: "Timeslot",
    id: string,
    startTime: string,
    endTime: string,
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    venueTimeslotsId?: string | null,
  } | null,
};

export type OnCreateTableSubscriptionVariables = {
  filter?: ModelSubscriptionTableFilterInput | null,
  owner?: string | null,
};

export type OnCreateTableSubscription = {
  onCreateTable?:  {
    __typename: "Table",
    id: string,
    number: number,
    capacity: number,
    games?:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    } | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    venueTablesId?: string | null,
    tableGamesId?: string | null,
  } | null,
};

export type OnUpdateTableSubscriptionVariables = {
  filter?: ModelSubscriptionTableFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTableSubscription = {
  onUpdateTable?:  {
    __typename: "Table",
    id: string,
    number: number,
    capacity: number,
    games?:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    } | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    venueTablesId?: string | null,
    tableGamesId?: string | null,
  } | null,
};

export type OnDeleteTableSubscriptionVariables = {
  filter?: ModelSubscriptionTableFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTableSubscription = {
  onDeleteTable?:  {
    __typename: "Table",
    id: string,
    number: number,
    capacity: number,
    games?:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    } | null,
    venue?:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        paymentStatus?: string | null,
        paymentReceipt?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userBookingsId?: string | null,
        venueBookingsId?: string | null,
        timeslotBookingsId?: string | null,
        tableBookingsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    venueTablesId?: string | null,
    tableGamesId?: string | null,
  } | null,
};

export type OnCreateBoardGameSubscriptionVariables = {
  filter?: ModelSubscriptionBoardGameFilterInput | null,
};

export type OnCreateBoardGameSubscription = {
  onCreateBoardGame?:  {
    __typename: "BoardGame",
    id: string,
    bgaId: string,
    name: string,
    description?: string | null,
    minPlayers: number,
    maxPlayers: number,
    category?: string | null,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBoardGameSubscriptionVariables = {
  filter?: ModelSubscriptionBoardGameFilterInput | null,
};

export type OnUpdateBoardGameSubscription = {
  onUpdateBoardGame?:  {
    __typename: "BoardGame",
    id: string,
    bgaId: string,
    name: string,
    description?: string | null,
    minPlayers: number,
    maxPlayers: number,
    category?: string | null,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBoardGameSubscriptionVariables = {
  filter?: ModelSubscriptionBoardGameFilterInput | null,
};

export type OnDeleteBoardGameSubscription = {
  onDeleteBoardGame?:  {
    __typename: "BoardGame",
    id: string,
    bgaId: string,
    name: string,
    description?: string | null,
    minPlayers: number,
    maxPlayers: number,
    category?: string | null,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
  owner?: string | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    description: string,
    boardGame:  {
      __typename: "BoardGame",
      id: string,
      bgaId: string,
      name: string,
      description?: string | null,
      minPlayers: number,
      maxPlayers: number,
      category?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    players: number,
    table?:  {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    } | null,
    isPrivate: boolean,
    cost?: number | null,
    currency: string,
    results?:  {
      __typename: "ModelGameResultConnection",
      items:  Array< {
        __typename: "GameResult",
        id: string,
        score: number,
        outcome: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileGamesPlayedId?: string | null,
        gameResultsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileHostedGamesId?: string | null,
    hostProfileHostedGamesId?: string | null,
    gameBoardGameId: string,
    gameTableId?: string | null,
  } | null,
};

export type OnUpdateGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    description: string,
    boardGame:  {
      __typename: "BoardGame",
      id: string,
      bgaId: string,
      name: string,
      description?: string | null,
      minPlayers: number,
      maxPlayers: number,
      category?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    players: number,
    table?:  {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    } | null,
    isPrivate: boolean,
    cost?: number | null,
    currency: string,
    results?:  {
      __typename: "ModelGameResultConnection",
      items:  Array< {
        __typename: "GameResult",
        id: string,
        score: number,
        outcome: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileGamesPlayedId?: string | null,
        gameResultsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileHostedGamesId?: string | null,
    hostProfileHostedGamesId?: string | null,
    gameBoardGameId: string,
    gameTableId?: string | null,
  } | null,
};

export type OnDeleteGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    description: string,
    boardGame:  {
      __typename: "BoardGame",
      id: string,
      bgaId: string,
      name: string,
      description?: string | null,
      minPlayers: number,
      maxPlayers: number,
      category?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    players: number,
    table?:  {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    } | null,
    isPrivate: boolean,
    cost?: number | null,
    currency: string,
    results?:  {
      __typename: "ModelGameResultConnection",
      items:  Array< {
        __typename: "GameResult",
        id: string,
        score: number,
        outcome: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileGamesPlayedId?: string | null,
        gameResultsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileHostedGamesId?: string | null,
    hostProfileHostedGamesId?: string | null,
    gameBoardGameId: string,
    gameTableId?: string | null,
  } | null,
};

export type OnCreateGameResultSubscriptionVariables = {
  filter?: ModelSubscriptionGameResultFilterInput | null,
  owner?: string | null,
};

export type OnCreateGameResultSubscription = {
  onCreateGameResult?:  {
    __typename: "GameResult",
    id: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    },
    score: number,
    outcome: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileGamesPlayedId?: string | null,
    gameResultsId?: string | null,
  } | null,
};

export type OnUpdateGameResultSubscriptionVariables = {
  filter?: ModelSubscriptionGameResultFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGameResultSubscription = {
  onUpdateGameResult?:  {
    __typename: "GameResult",
    id: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    },
    score: number,
    outcome: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileGamesPlayedId?: string | null,
    gameResultsId?: string | null,
  } | null,
};

export type OnDeleteGameResultSubscriptionVariables = {
  filter?: ModelSubscriptionGameResultFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGameResultSubscription = {
  onDeleteGameResult?:  {
    __typename: "GameResult",
    id: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      boardGame:  {
        __typename: "BoardGame",
        id: string,
        bgaId: string,
        name: string,
        description?: string | null,
        minPlayers: number,
        maxPlayers: number,
        category?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      players: number,
      table?:  {
        __typename: "Table",
        id: string,
        number: number,
        capacity: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        venueTablesId?: string | null,
        tableGamesId?: string | null,
      } | null,
      isPrivate: boolean,
      cost?: number | null,
      currency: string,
      results?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileHostedGamesId?: string | null,
      hostProfileHostedGamesId?: string | null,
      gameBoardGameId: string,
      gameTableId?: string | null,
    },
    score: number,
    outcome: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileGamesPlayedId?: string | null,
    gameResultsId?: string | null,
  } | null,
};

export type OnCreateRatingSubscriptionVariables = {
  filter?: ModelSubscriptionRatingFilterInput | null,
  owner?: string | null,
};

export type OnCreateRatingSubscription = {
  onCreateRating?:  {
    __typename: "Rating",
    id: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    hostProfile?:  {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null,
    rating: number,
    comment?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileReceivedHostRatingsId?: string | null,
    playerProfileGivenHostRatingsId?: string | null,
    hostProfileReceivedPlayerRatingsId?: string | null,
    hostProfileGivenPlayerRatingsId?: string | null,
  } | null,
};

export type OnUpdateRatingSubscriptionVariables = {
  filter?: ModelSubscriptionRatingFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRatingSubscription = {
  onUpdateRating?:  {
    __typename: "Rating",
    id: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    hostProfile?:  {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null,
    rating: number,
    comment?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileReceivedHostRatingsId?: string | null,
    playerProfileGivenHostRatingsId?: string | null,
    hostProfileReceivedPlayerRatingsId?: string | null,
    hostProfileGivenPlayerRatingsId?: string | null,
  } | null,
};

export type OnDeleteRatingSubscriptionVariables = {
  filter?: ModelSubscriptionRatingFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRatingSubscription = {
  onDeleteRating?:  {
    __typename: "Rating",
    id: string,
    playerProfile?:  {
      __typename: "PlayerProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      gamesPlayed?:  {
        __typename: "ModelGameResultConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenHostRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      playerProfileUserId: string,
    } | null,
    hostProfile?:  {
      __typename: "HostProfile",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      hostedGames?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      receivedPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      givenPlayerRatings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileUserId: string,
    } | null,
    rating: number,
    comment?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    playerProfileReceivedHostRatingsId?: string | null,
    playerProfileGivenHostRatingsId?: string | null,
    hostProfileReceivedPlayerRatingsId?: string | null,
    hostProfileGivenPlayerRatingsId?: string | null,
  } | null,
};

export type OnCreateBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
  owner?: string | null,
};

export type OnCreateBookingSubscription = {
  onCreateBooking?:  {
    __typename: "Booking",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    },
    table:  {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    },
    timeslot:  {
      __typename: "Timeslot",
      id: string,
      startTime: string,
      endTime: string,
      venue:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTimeslotsId?: string | null,
    },
    paymentStatus?: string | null,
    paymentReceipt?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userBookingsId?: string | null,
    venueBookingsId?: string | null,
    timeslotBookingsId?: string | null,
    tableBookingsId?: string | null,
  } | null,
};

export type OnUpdateBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBookingSubscription = {
  onUpdateBooking?:  {
    __typename: "Booking",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    },
    table:  {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    },
    timeslot:  {
      __typename: "Timeslot",
      id: string,
      startTime: string,
      endTime: string,
      venue:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTimeslotsId?: string | null,
    },
    paymentStatus?: string | null,
    paymentReceipt?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userBookingsId?: string | null,
    venueBookingsId?: string | null,
    timeslotBookingsId?: string | null,
    tableBookingsId?: string | null,
  } | null,
};

export type OnDeleteBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBookingSubscription = {
  onDeleteBooking?:  {
    __typename: "Booking",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      playerProfile?:  {
        __typename: "PlayerProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileUserId: string,
      } | null,
      hostProfile?:  {
        __typename: "HostProfile",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileUserId: string,
      } | null,
      venues?:  {
        __typename: "ModelVenueConnection",
        nextToken?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userPlayerProfileId?: string | null,
      userHostProfileId?: string | null,
    },
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      tables?:  {
        __typename: "ModelTableConnection",
        nextToken?: string | null,
      } | null,
      timeslots?:  {
        __typename: "ModelTimeslotConnection",
        nextToken?: string | null,
      } | null,
      hostingUser:  {
        __typename: "User",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userPlayerProfileId?: string | null,
        userHostProfileId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      hostProfileVenuesId?: string | null,
      userVenuesId?: string | null,
    },
    table:  {
      __typename: "Table",
      id: string,
      number: number,
      capacity: number,
      games?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        players: number,
        isPrivate: boolean,
        cost?: number | null,
        currency: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        playerProfileHostedGamesId?: string | null,
        hostProfileHostedGamesId?: string | null,
        gameBoardGameId: string,
        gameTableId?: string | null,
      } | null,
      venue?:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      } | null,
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTablesId?: string | null,
      tableGamesId?: string | null,
    },
    timeslot:  {
      __typename: "Timeslot",
      id: string,
      startTime: string,
      endTime: string,
      venue:  {
        __typename: "Venue",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        hostProfileVenuesId?: string | null,
        userVenuesId?: string | null,
      },
      bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      venueTimeslotsId?: string | null,
    },
    paymentStatus?: string | null,
    paymentReceipt?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userBookingsId?: string | null,
    venueBookingsId?: string | null,
    timeslotBookingsId?: string | null,
    tableBookingsId?: string | null,
  } | null,
};
